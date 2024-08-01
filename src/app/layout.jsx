
import Navbar from "@/components/navbar";
import { Header } from "@/components/header";
import "./globals.css";



export const metadata = {
  title: "Exo Code",
  description: "Mi portafolio web de desarrollo fullstack",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">     
      <body>
      <Navbar></Navbar>
      <Header />
        {children}
        </body>
    </html>
  );
}
