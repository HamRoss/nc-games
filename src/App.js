import "./App.css";
import Header from "./components/Header";
import AppRoutes from "./components/Routes";
import Footer from "./components/Footer";
import Nav from "./components/Nav";

function App() {
  const user = {
    username: "happyamy2016",
    name: "Amy Happy",
    avatar_url:
      "https://vignette1.wikia.nocookie.net/mrmen/images/7/7f/Mr_Happy.jpg/revision/latest?cb=20140102171729",
  };

  return (
    <div className="App">
      <header className="App-header">
        <Header />
      </header>
      <Nav />
      <main>
        <AppRoutes user={user} />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
