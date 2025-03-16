import Image from "next/image"
import {Badge, CheckCircle} from "lucide-react";
import {Button} from "@/components/ui/button";
import Link from "next/link";

const ChooseUsPage = () => {
return (
    <section className="py-16 md:py-24">
        <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="relative h-[500px] rounded-lg overflow-hidden shadow-xl">
                    <Image
                        src="/placeholder.svg?height=1000&width=800"
                        alt="Professional plumbing team"
                        fill
                        className="object-cover"
                    />
                </div>
                <div className="space-y-6">
                    <Badge>Why Choose Us</Badge>
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
                        The Trusted Choice for Quality Plumbing Services
                    </h2>
                    <p className="text-lg text-muted-foreground">
                        With decades of experience and a commitment to excellence, we deliver reliable plumbing
                        solutions that
                        stand the test of time.
                    </p>

                    <div className="space-y-4 pt-4">
                        <div className="flex gap-4">
                            <div
                                className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                                <CheckCircle className="h-5 w-5 text-primary"/>
                            </div>
                            <div>
                                <h3 className="text-xl font-medium">Licensed & Insured Professionals</h3>
                                <p className="text-muted-foreground">
                                    Our team consists of fully licensed, insured, and background-checked plumbers.
                                </p>
                            </div>
                        </div>

                        <div className="flex gap-4">
                            <div
                                className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                                <CheckCircle className="h-5 w-5 text-primary"/>
                            </div>
                            <div>
                                <h3 className="text-xl font-medium">Transparent Pricing</h3>
                                <p className="text-muted-foreground">
                                    No hidden fees or surprise costs. We provide upfront pricing before any work begins.
                                </p>
                            </div>
                        </div>

                        <div className="flex gap-4">
                            <div
                                className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                                <CheckCircle className="h-5 w-5 text-primary"/>
                            </div>
                            <div>
                                <h3 className="text-xl font-medium">Satisfaction Guaranteed</h3>
                                <p className="text-muted-foreground">
                                    We stand behind our work with a 100% satisfaction guarantee on all services.
                                </p>
                            </div>
                        </div>

                        <div className="flex gap-4">
                            <div
                                className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                                <CheckCircle className="h-5 w-5 text-primary"/>
                            </div>
                            <div>
                                <h3 className="text-xl font-medium">24/7 Emergency Response</h3>
                                <p className="text-muted-foreground">
                                    Plumbing emergencies don't wait, and neither do we. Available 24/7 for urgent
                                    issues.
                                </p>
                            </div>
                        </div>
                    </div>

                    <Button size="lg" className="mt-6" asChild>
                        <Link href="/about">Learn More About Us</Link>
                    </Button>
                </div>
            </div>
        </div>
    </section>
)

}
export default ChooseUsPage