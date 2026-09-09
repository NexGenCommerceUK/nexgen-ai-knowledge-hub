import type { Metadata } from "next"; import "./globals.css";
export const metadata: Metadata = { title: "NexGen Knowledge Hub", description: "AI knowledge assistant portfolio project" };
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body>{children}</body></html>}