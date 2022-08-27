import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Crew } from "./components/Crew";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { BrowserRouter, Route, Routes } from 'react-router-dom';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<>
              <Banner />
              <Crew />
              <Projects />
              <Contact />
            </>} />
          <Route path="/Game" element={        <iframe src='https://itch.io/embed-upload/6359148?color=742e82' allowfullscreen='' width='640' height='380'frameborder='0' title="Level 1"><a href='https://ianirwin18.itch.io/testgame'>Play testgame on itch.io</a></iframe>
} />
        </Routes>      
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;



