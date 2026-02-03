import type { Config } from "tailwindcss"

const config: Config = {
    content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
    extend: {
        colors: {
        azulEscurao: "#0f1c53",
        azulEscuro: "#6366F1",
        azulAnil: "#8184AC",
        golden: "#C9A24D",
        goldenClaro: "#E4CD83",
        creme: "#F3EACF",
        brancoGelo: "#F5F5F5"
        },
    },
    },
    plugins: [],
}

export default config