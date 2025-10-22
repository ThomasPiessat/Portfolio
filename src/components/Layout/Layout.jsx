import NavBar from "./Navbar";
import Footer from "./Footer";

export default function Layout({ children }) {
  return (
    <div className="app-shell">
      <NavBar />
      <main className="app-main" id="main">{children}</main>
      <Footer />
    </div>
  );
}
