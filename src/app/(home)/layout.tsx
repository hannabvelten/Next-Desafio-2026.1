import Header from "@/src/components/header";
import Footer from "@/src/components/footer";

export default function HomeLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return(
        <div>
            <Header />
            {children}
            <Footer />
        </div>
    )
}