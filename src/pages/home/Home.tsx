
import Banner from "../../components/banner/Banner";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "../../components/ui/sheet";
import { Layout } from "../../layout/Layout";



const Home = () => {
    return (
        <Layout>
            <div>home</div>

            <div>
                <Sheet>
                    <SheetTrigger>Open</SheetTrigger>
                    <SheetContent>
                        <SheetHeader>
                            <SheetTitle>
                                Are you sure absolutely sure?
                            </SheetTitle>
                            <SheetDescription>
                                This action cannot be undone. This will
                                permanently delete your account and remove your
                                data from our servers.
                            </SheetDescription>
                        </SheetHeader>
                    </SheetContent>
                </Sheet>
            </div>

            <Banner />
        </Layout>
    );
};

export default Home
