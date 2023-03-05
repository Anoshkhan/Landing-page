import { BrowserRouter as Router,Routes, Route  } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Contact from "./components/Contact";

import "./styles/App.scss";
import "./styles/header.scss";
import "./styles/home.scss";
import "./styles/footer.scss";
import "./styles/contact.scss";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/contact" element={<Contact />}/>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
