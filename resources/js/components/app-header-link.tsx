import { Link } from "@inertiajs/react";
import { ReactNode } from "react";

interface AppHeaderLinkProps {
    href: string;
    children: ReactNode;
}

const AppHeaderLink = ({ href, children }: AppHeaderLinkProps) => {
    return (
        <Link className="text-gray-600 font-medium" href={href}>
            {children}
        </Link>
    );
};

export default AppHeaderLink;
