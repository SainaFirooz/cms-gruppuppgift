import Header from "../nestable/Header";
//Uses config set global components for the layout
export default function Layout({ config, children }) {
  //Create at least a header and footer component
  //Use console.log to determine blok object structure if unsure...
  return (
    <>
      <Header blok={config} />
      <main>{children}</main>
      <footer></footer>
    </>
  );
}
