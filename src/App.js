import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from "./LoginComponent/Login"
import Header from "./Header";
import Inicio from "./InicioComponent/Inicio";
import Footer from "./Footer";
import NotFound from './NotFound';
import ListCarro from './Manager/ListCarro';

export default function App() {
    return (
      <Router>
        <Header/>
        <Routes>
          <Route exact path="/" element={<Inicio/>} />
          <Route path="/Login" element={<Login/>} />
          <Route path="*" component={<NotFound/>} />
          <Route path="/ListCarro" component={<ListCarro/>} />
          {/* <Route path="/Create" element={<Create/>} />
          <Route path="/Edit" element={<Edit/>} />
          <Route path="/Details" element={<Details/>} />
          <Route path="/Delete" element={<Delete/>} /> */}
        </Routes>
        <Footer/>
      </Router>
    );
}