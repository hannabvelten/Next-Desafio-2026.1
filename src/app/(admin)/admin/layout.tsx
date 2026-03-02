import Footer from "@/src/components/footer";
import Sidebar from "@/src/components/sidebar";

export default function AdminLayout({
    children,
    }: {
    children: React.ReactNode;
    }) {
    return (
        <div className="min-h-screen flex">
        <Sidebar />

        <div className="flex flex-col flex-1">
            <main className="flex-1">
            {children}
            </main>
            <Footer />
        </div>
        </div>
    );
}