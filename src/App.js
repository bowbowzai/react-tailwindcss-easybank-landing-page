import Articles from "./components/articles/Articles";
import Content from "./components/content/Content";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Nav from "./components/navbar/Nav";

function App() {
  return (
    <div className="App h-screen w-screen overflow-x-hidden">
      <Nav />
      <Header />
      <Content />
      <Articles />
      <Footer />
    </div>
  );
}

export default App;
