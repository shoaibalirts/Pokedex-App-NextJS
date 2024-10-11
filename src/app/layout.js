import Footer from "./footer";
import "./globals.css";
import Header from "./header";

export const metadata = {
  title: "Pokedex App",
  description: "Gotta catch 'em all!'",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {/* <h1 className="text-[4rem]">HEADER</h1> */}
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
