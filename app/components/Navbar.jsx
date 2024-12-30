import NavItem from "@/components/NavItem";
import { Button } from "@/components/ui/button";
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger, navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
    return (
        <div className="bg-nextmedia-black h-24 text-white flex items-center justify-center gap-16">
                <div className="flex items-center justify-center gap-10">
                    <Image
                        width={96}
                        height={20}
                        alt="Nextmedia White"
                        src={"/white_nextmedia.png"}
                    />
                    <NavigationMenu className="w-59%">
                        <NavigationMenuList className="flex justify-center gap-4">
                            <NavItem href={'/products'} name={"Products"} />
                            <NavItem href={'/products'} name={"Products"} />
                            <NavItem href={'/products'} name={"Products"} />
                            <NavItem href={'/products'} name={"Products"} />
                        </NavigationMenuList>
                    </NavigationMenu>
                </div>
                <div className="flex justify-center items-cente gap-4">
                    <Link href={"mailto:nextmedia101@gmail.com"}  className="font-bold">
                        Contact Us
                    </Link>
                    <Link href="/login"  className="border-2 border-yellow-300 px-5 py-4 rounded-md">
                        Login
                    </Link>
                    <Link href="/getstarted" >
                        Get Started
                    </Link>
                </div>
        </div>
    );
}

export default Navbar;