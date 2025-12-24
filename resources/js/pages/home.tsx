import AppLayout from "@/layouts/app-layout";
import { Link } from "@inertiajs/react";

const Home = () => {
    return (
        <AppLayout>
            <h1>Home</h1>
            <div>Welcome to home page</div>
            <Link href="/about">About</Link>
        </AppLayout>
    );
};

export default Home;
