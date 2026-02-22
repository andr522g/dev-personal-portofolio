import { Button } from "@/components/Button";

const navLinks = [
    {href: "#About", label: "About"},
    {href: "#Projects", label: "Projects"},
    {href: "#Experience", label: "Experience"},
    {href: "#Testimonials", label: "Testimonials"},
]

export const Navbar = () => {
    return (
    <header className="fixed top-0 left-0 right-0 bg-transparent py-5">
        <nav className="container mx-auto px-6 flex items-center justify-between">
            <a href="#" className="text-xl font-bold tracking-tight hover:text-primary">
                APR<span className="text-primary">.</span>
            </a>

            {/* Add links to the sections */} 
            <div className="flex items-center gap-1">
                <div className="glass rounded-full px-2 py-1 flex items-center gap-1">
                    {navLinks.map((link, index) => (
                        <a href={link.href} key={index} className="px-4 py-2 text-sm text-muted-foreground  hover:text-foreground rounded-full hover:bg-surface">
                            {link.label}
                        </a>
                ))}
                </div>
            </div>

            {/* CTA Button */}
            <div>
                <Button>Contact Me</Button>
            </div>
        </nav>

    </header>
    );
};