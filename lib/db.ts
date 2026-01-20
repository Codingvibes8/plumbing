import fs from 'fs/promises';
import path from 'path';

export interface Booking {
  id: string;
  name: string;
  email: string;
  phone: string;
  address: string;
  serviceType: string;
  date: string;
  timeSlot: string;
  description?: string;
  status: 'pending' | 'confirmed' | 'completed' | 'cancelled';
  createdAt: string;
}

const DB_PATH = path.join(process.cwd(), 'data');
const DB_FILE = path.join(DB_PATH, 'bookings.json');

// Ensure data directory exists
async function ensureDb() {
  try {
    await fs.access(DB_PATH);
  } catch {
    await fs.mkdir(DB_PATH, { recursive: true });
  }

  try {
    await fs.access(DB_FILE);
  } catch {
    await fs.writeFile(DB_FILE, JSON.stringify([], null, 2));
  }
}

export async function getBookings(): Promise<Booking[]> {
  await ensureDb();
  const data = await fs.readFile(DB_FILE, 'utf-8');
  try {
    return JSON.parse(data);
  } catch (error) {
    return [];
  }
}

export async function addBooking(booking: Omit<Booking, 'id' | 'status' | 'createdAt'>): Promise<Booking> {
  const bookings = await getBookings();
  
  const newBooking: Booking = {
    ...booking,
    id: Math.random().toString(36).substring(2, 9),
    status: 'pending',
    createdAt: new Date().toISOString(),
  };

  bookings.unshift(newBooking); // Add to top
  
  await fs.writeFile(DB_FILE, JSON.stringify(bookings, null, 2));
  
  return newBooking;
}

export async function updateBookingStatus(id: string, status: Booking['status']): Promise<void> {
  const bookings = await getBookings();
  const index = bookings.findIndex(b => b.id === id);
  
  if (index !== -1) {
    bookings[index].status = status;
    await fs.writeFile(DB_FILE, JSON.stringify(bookings, null, 2));
  }
}
