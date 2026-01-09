import { Link, usePage } from "@inertiajs/react";
import AppHeaderLink from "./app-header-link";
import AppHeaderLogo from "./app-header-logo";
import { Button } from "./ui/button";
import { create, index } from "@/actions/App/Http/Controllers/PostController";
import { create as loginPage } from "@/actions/App/Http/Controllers/Auth/LoginController";
import home from "@/routes/home";
import about from "@/routes/about";
import { PageProps } from "@/types";
import UserDropdown from "./user-dropdown";

const AppHeader = () => {
    const { user } = usePage<PageProps>().props;

    return (
        <header>
            <div className="max-w-4xl mx-auto px-4 py-4">
                <nav className="flex items-center justify-between">
                    <AppHeaderLogo />
                    <div className="flex space-x-6 items-center">
                        <Button>
                            <Link href={create()}>Add Post</Link>
                        </Button>
                        <AppHeaderLink
                            href={home.index().url}
                            children="Home"
                        />
                        <AppHeaderLink
                            href={about.index().url}
                            children="About"
                        />
                        <AppHeaderLink href={index().url} children="Posts" />

                        {user ? (
                            <UserDropdown />
                        ) : (
                            <Button asChild>
                                <Link href={loginPage().url}>Login</Link>
                            </Button>
                        )}
                    </div>
                </nav>
            </div>
        </header>
    );
};

export default AppHeader;
