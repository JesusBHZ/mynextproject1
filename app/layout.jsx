import Navbar from "../components/Navbar";

export const metadata = {
  title: "Tienda con Next JS",
  description: "Tienda con Next JS",
  keywords: "Tienda, Next JS",
};

export default function RootLayout({ children }) {
  return (
    <html>
    <body>
      <Navbar />
      {children}
    </body>
  </html>
  );
}
