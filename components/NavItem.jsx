import Link from "next/link";
import { NavigationMenuItem, NavigationMenuLink } from "./ui/navigation-menu";

const NavItem = ({href, name}) => {
    return (
        <NavigationMenuItem>
            <Link href={href} legacyBehavior passHref>
                <NavigationMenuLink className="font-bold">
                    {name}
                </NavigationMenuLink>
            </Link>
        </NavigationMenuItem>
    );
}

export default NavItem;