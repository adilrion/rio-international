
import { ReactNode } from "react";
import { Footer } from "../../src/components/footer/Footer";
import { TopNavBar } from "../../src/components/navbar/TopNavbar";

export const Layout = ({ children }:{children: ReactNode}) => {
    return (
        <>
            <TopNavBar />

            <div className="min-h-[50vh] max-w-screen-xl mx-auto md:px-5 px-2">
                {children}
            </div>

            <Footer />
        </>
    );
};
