import "./App.css";
import Footer from "./component/Footer";
import Header from "./component/Header/Header";
import Router from "./Routes/Router";

function App() {
  return (
    <div className="App">
      <>
        <Header />
        <Router></Router>
        <Footer />
      </>
    </div>
  );
}

export default App;
