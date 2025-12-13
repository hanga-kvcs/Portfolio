import "../styles/globals.css";
import Header from "./Header.js";
import Footer from "./Footer.js";


export const metadata = {
  title: "Hanga Kovács – Portfolio",
  description: "UI/UX Designer Portfolio",
  icons: {
    icon: "/images/simple_icon.png",
  },
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body><Header /> 
      {children}
      <Footer/></body>
    </html>
  );
}