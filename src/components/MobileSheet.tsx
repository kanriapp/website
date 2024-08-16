import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { buttonVariants } from "@/components/ui/button"
import { Menu, Star, Download } from "lucide-react"

export default function MobileSheet ()  {
    return (
        <Sheet>
            <SheetTrigger className="md:hidden">
                <Menu />
            </SheetTrigger>
            <SheetContent>
                <div className="flex flex-col gap-4">
                    <a href="/getting-started/what-is-kanri" className="hover:text-primary transition-colors duration-300">
                        Docs
                    </a>
                    <a href="/about" className="hover:text-primary transition-colors duration-300">
                        About
                    </a>
                    <a href="https://github.com/trobonox/kanri" className={buttonVariants({ variant: "secondary", size: "sm" })}>
                        <Star className="mr-2 h-4 w-4" />
                        Star on GitHub
                    </a>
                    <a href="/download" className={buttonVariants({ variant: "default", size: "sm" })}>
                        <Download className="mr-2 h-4 w-4" />
                        Download
                    </a>
                </div>
            </SheetContent>
        </Sheet>
    )
}