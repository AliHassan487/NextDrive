import "./globals.css";

// import { Footer, NavBar } from "@components";

export const metadata = {
  title: "DriveSphere",
  description: "Explore the ultimate tech-driven car sales platform",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body className='relative'>
        {/* <NavBar /> */}
        {children}
        {/* <Footer /> */}
      </body>
    </html>
  );
}
