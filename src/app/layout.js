import "./globals.css";

export const metadata = {
  title: "Pokedex",
  description: "Gotta catch 'em all!'",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <h1 className="text-[4rem]">Pokedex</h1>
        <main>{children}</main>
      </body>
    </html>
  );
}
