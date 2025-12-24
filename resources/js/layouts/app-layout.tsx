import { ReactNode } from "react";

interface AppLayoutProps {
    children: ReactNode;
}

const AppLayout = ({ children }: AppLayoutProps) => {
    return (
        <div>
            <h1>Common Part</h1>
            <div>{children}</div>
        </div>
    );
};

export default AppLayout;
