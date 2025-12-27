import { Link } from "@inertiajs/react";
import AppHeaderLink from "./app-header-link";
import AppHeaderLogo from "./app-header-logo";
import { Button } from "./ui/button";
import { create, index } from "@/actions/App/Http/Controllers/PostController";
import home from "@/routes/home";
import about from "@/routes/about";

const AppHeader = () => {
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
                    </div>
                </nav>
            </div>
        </header>
    );
};

export default AppHeader;
