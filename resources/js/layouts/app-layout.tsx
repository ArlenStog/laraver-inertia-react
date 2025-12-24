import { ReactNode } from "react";

interface AppLayoutProps {
    children: ReactNode;
}

const AppLayout = ({ children }: AppLayoutProps) => {
    return (
        <div className="bg-gray-300 min-h-screen">
            <h1>Common Part</h1>
            <main className="max-w-4xl mx-auto px-4 py-8">
                <div className="bg-white rounded-lg shadow-sm p-6">
                    {children}
                </div>
            </main>
        </div>
    );
};

export default AppLayout;
