import AppHeader from "@/components/app-header";
import { ReactNode } from "react";
import { Toaster } from "sonner";

interface AppLayoutProps {
    children: ReactNode;
}

const AppLayout = ({ children }: AppLayoutProps) => {
    return (
        <div className="bg-gray-50 min-h-screen">
            <AppHeader />
            <main className="max-w-4xl mx-auto px-4 py-8">
                <div className="bg-white rounded-lg shadow-sm p-6">
                    {children}
                </div>
                <Toaster />
            </main>
        </div>
    );
};

export default AppLayout;
