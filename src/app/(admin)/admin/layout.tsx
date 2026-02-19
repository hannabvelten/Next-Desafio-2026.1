import Sidebar from "@/src/components/sidebar";

export default function AdminLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return(
        <section className=" md:min-h-screen md:flex">
            <Sidebar />
            <section className="px-4 py-4">
                {children}
            </section>
        </section>
    )
}