import Sidebar from "@/src/components/sidebar";

export default function AdminLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return(
        <section className=" md:min-h-screen">
            <Sidebar />
            <section className="px-4 py-4 sm:px-20 sm:ml-72">
                {children}
            </section>
        </section>
    )
}