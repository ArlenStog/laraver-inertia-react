import { Link } from "@inertiajs/react";
import AppHeaderLink from "./app-header-link";
import AppHeaderLogo from "./app-header-logo";
import { Button } from "./ui/button";

const AppHeader = () => {
    return (
        <header>
            <div className="max-w-4xl mx-auto px-4 py-4">
                <nav className="flex items-center justify-between">
                    <AppHeaderLogo />
                    <div className="flex space-x-6 items-center">
                        <Button>
                            <Link href="/posts/create">Add Post</Link>
                        </Button>
                        <AppHeaderLink href="/" children="Home" />
                        <AppHeaderLink href="/about" children="About" />
                        <AppHeaderLink href="/posts" children="Posts" />
                    </div>
                </nav>
            </div>
        </header>
    );
};

export default AppHeader;
