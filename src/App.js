import "./App.css";
import Header from "./components/Header";
import Routes from "./components/Routes";
import Footer from "./components/Footer";
import Nav from "./components/Nav";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
      </header>
      <Nav />
      <main>
        <Routes />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
