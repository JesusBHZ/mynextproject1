import Navbar from "../components/Navbar";
import { Roboto } from "next/font/google";

export const metadata = {
  title: "Tienda con Next JS",
  description: "Tienda con Next JS",
  keywords: "Tienda, Next JS",
};

const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  styles: ["latin"],
  subsets: ["latin-ext"],
});
 
export default function RootLayout({ children }) {
  return (
    <html>
    <body className={roboto.className}>
      <Navbar />
      {children}
    </body>
  </html>
  );
}
