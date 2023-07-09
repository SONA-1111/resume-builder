import './App.css';
import {Routes,Route} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Resume from './components/Resume';
import PdfComponent from './components/PdfComponent';

function App() {
  return (
    <Container fluid className="p-0" style={{backgroundColor:"#0f172a"}}>

      <Routes>
        <Route path="/" element={ <Resume/> } exact></Route>
        <Route path="/preview" element={<PdfComponent/>}></Route>
      </Routes>

    </Container>
  );
}

export default App;
