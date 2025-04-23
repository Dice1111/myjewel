import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

type LinkItem = {
  name: string;
  href: string;
};

interface DropDownButtonProps {
  name: string;
  links: LinkItem[];
}

const DropDownButton = ({ name, links }: DropDownButtonProps) => {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>{name}</NavigationMenuTrigger>
          <NavigationMenuContent>
            {links.map((link) => (
              <NavigationMenuLink href={link.href} key={link.name}>
                {link.name}
              </NavigationMenuLink>
            ))}
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default DropDownButton;
