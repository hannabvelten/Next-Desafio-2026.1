import Sidebar from "@/src/components/sidebar";

export default function AdminLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return(
        <section className=" md:min-h-screen md:flex">
            <Sidebar />
            {children}
        </section>
    )
}