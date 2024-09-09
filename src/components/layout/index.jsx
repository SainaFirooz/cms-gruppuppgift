import Header from "../nestable/Header";
import Footer from "../nestable/Footer";

export default function Layout({ config, children }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header blok={config} />
      <main className="flex-grow">{children}</main>
      <Footer blok={config} />
    </div>
  );
}
