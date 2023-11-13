
import { ReactNode } from "react";
import { Footer } from "../../src/components/footer/Footer";
import { TopNavBar } from "../../src/components/navbar/TopNavbar";

export const Layout = ({ children }:{children: ReactNode}) => {
    return (
        <>
            <TopNavBar />

            <div className="min-h-screen max-w-screen-xl mx-auto">
                {children}
            </div>

            <Footer />
        </>
    );
};
