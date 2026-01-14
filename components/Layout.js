import "../app/globals.css";
import Header from "./Header.js";
import Footer from "./Footer.js";


export const metadata = {
  title: "Hanga Kovács – Portfolio",
  description: "UI/UX Designer Portfolio",
  icons: {
    icon: "../app/icon.png",
  },
};

export default function Layout({ children }) {
  return (
    <div className="site-wrapper">
      <Header />
      <main>{children}</main> {/* page content goes here */}
      <Footer />
    </div>
  );
}