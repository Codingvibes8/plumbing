import { redirect } from "next/navigation"
import { cookies } from "next/headers"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { logoutAction } from "@/app/actions/auth"

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const cookieStore = await cookies()
  const session = cookieStore.get("admin_session")

  // If we are NOT on the login page and NOT logged in, redirect
  // Note: Since this is a root layout for /admin, we need to handle the login page exception or structure folders differently.
  // Ideally, /admin/login should be outside this layout if this layout enforces auth.
  // However, Next.js nested layouts work hierarchically. 
  // For simplicity: We will rely on page-level checks or middleware for strict enforcement, 
  // but here we can add a header for the dashboard.
  
  // Actually, let's make this layout ONLY for the dashboard part to be cleaner.
  // But since the user might visit /admin/dashboard directly, we should check auth here or in page.
  // Let's assume this layout wraps everything in /admin.
  
  return (
    <div className="min-h-screen bg-muted/20 flex flex-col">
       {session && (
        <header className="bg-background border-b h-16 px-6 flex items-center justify-between sticky top-0 z-10">
          <div className="font-bold text-xl tracking-tight">Plumbing Pros Admin</div>
          <div className="flex items-center gap-4">
            <Button variant="ghost" asChild>
              <Link href="/">View Site</Link>
            </Button>
             <form action={logoutAction}>
                <Button variant="outline" type="submit">Logout</Button>
             </form>
          </div>
        </header>
      )}
      <main className="flex-1">
        {children}
      </main>
    </div>
  )
}
