import { Footer, Navbar } from "@/components";
import "./globals.css";



export const metadata = {
  title: "DriveSphere",
  description: "Explore the ultimate tech-driven car sales platform",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body className='relative'>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
