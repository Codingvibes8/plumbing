import { redirect } from "next/navigation"
import { cookies } from "next/headers"
import { getBookings } from "@/lib/db"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, MapPin, User, Mail, Phone } from "lucide-react"

export default async function DashboardPage() {
  const cookieStore = await cookies()
  const session = cookieStore.get("admin_session")

  if (!session) {
    redirect("/admin/login")
  }

  const bookings = await getBookings()

  const stats = {
    total: bookings.length,
    pending: bookings.filter(b => b.status === "pending").length,
    completed: bookings.filter(b => b.status === "completed").length,
  }

  return (
    <div className="container py-8 max-w-7xl animate-in fade-in duration-500">
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
        <p className="text-muted-foreground">Manage your booking requests and view activity.</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Total Bookings</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">{stats.total}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Pending Requests</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-orange-600">{stats.pending}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Completed Jobs</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-green-600">{stats.completed}</div>
          </CardContent>
        </Card>
      </div>

      {/* Bookings List */}
      <div className="grid gap-6">
        <h2 className="text-xl font-semibold">Recent Bookings</h2>
        
        {bookings.length === 0 ? (
          <Card className="p-12 text-center text-muted-foreground bg-muted/50 border-dashed">
            No bookings found yet.
          </Card>
        ) : (
          <div className="grid gap-4">
            {bookings.map((booking) => (
              <Card key={booking.id} className="overflow-hidden transition-all hover:border-primary/50">
                <div className="p-6 grid gap-6 md:grid-cols-[2fr_1fr_auto] items-start">
                  
                  {/* Customer Info */}
                  <div className="space-y-4">
                    <div className="flex items-start justify-between">
                      <div>
                        <h4 className="font-semibold text-lg flex items-center gap-2">
                          {booking.name}
                          <Badge variant={booking.status === 'pending' ? 'secondary' : 'default'} className="ml-2 uppercase text-[10px]">
                            {booking.status}
                          </Badge>
                        </h4>
                        <p className="text-sm text-muted-foreground">{booking.serviceType}</p>
                      </div>
                    </div>
                    
                    <div className="grid sm:grid-cols-2 gap-4 text-sm">
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Mail className="h-4 w-4 shrink-0" />
                        <span className="truncate">{booking.email}</span>
                      </div>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Phone className="h-4 w-4 shrink-0" />
                        <span>{booking.phone}</span>
                      </div>
                      <div className="flex items-center gap-2 text-muted-foreground col-span-2">
                        <MapPin className="h-4 w-4 shrink-0" />
                        <span>{booking.address}</span>
                      </div>
                    </div>

                    {booking.description && (
                       <div className="bg-muted/30 p-3 rounded-md text-sm mt-2">
                         <span className="font-medium text-xs uppercase text-muted-foreground block mb-1">Note</span>
                         {booking.description}
                       </div>
                    )}
                  </div>

                  {/* Date & Time */}
                  <div className="space-y-3 text-sm border-l pl-6 min-h-full">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4 text-primary" />
                      <span className="font-medium">{new Date(booking.date).toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-primary" />
                      <span className="font-medium">{booking.timeSlot}</span>
                    </div>
                  </div>

                   {/* Actions (Placeholder) */}
                   <div className="flex flex-col gap-2">
                      {/* Could add server actions here to Mark Complete / Delete */}
                   </div>

                </div>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
