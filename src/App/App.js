import Mainpage from '../Pages/Mainpage';
import Oldpasspage from '../Pages/Passpage'
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
function App() {
  return (
   <Router>
    <Routes>
      <Route path='/' element={<Mainpage/>}></Route>
      <Route path='/oldpass' element={<Oldpasspage/>}></Route>
    </Routes>
   </Router>
  );
}

export default App;
