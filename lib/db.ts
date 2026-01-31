import { supabase } from './supabase';

export interface Booking {
  id: string;
  name: string;
  email: string;
  phone: string;
  address: string;
  service_type: string;
  date: string;
  time_slot: string;
  description?: string;
  status: 'pending' | 'confirmed' | 'completed' | 'cancelled';
  created_at: string;
}

export async function getBookings(): Promise<Booking[]> {
  const { data, error } = await supabase
    .from('bookings')
    .select('*')
    .order('created_at', { ascending: false });

  if (error) {
    console.error('Error fetching bookings:', error);
    return [];
  }

  return data || [];
}

export async function addBooking(booking: Omit<Booking, 'id' | 'status' | 'created_at'>): Promise<Booking | null> {
  const { data, error } = await supabase
    .from('bookings')
    .insert([{ ...booking, status: 'pending' }])
    .select()
    .single();

  if (error) {
    console.error('Error adding booking:', error);
    return null;
  }

  return data;
}

export async function updateBookingStatus(id: string, status: Booking['status']): Promise<void> {
  const { error } = await supabase
    .from('bookings')
    .update({ status })
    .eq('id', id);

  if (error) {
    console.error('Error updating booking status:', error);
  }
}

