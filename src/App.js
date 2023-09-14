import data from './data.json'
import SCP from './SCP'

import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Nav from './Nav';
import './app.css';

function App() {
  return (
    <Router>
      <Nav data={data} />

      <Routes>
        <Route path={"HOME"} index element={<Default />} />
        {
          data.map(
            scp => (
              <Route key={scp.item} 
                     path={`${scp.item}`}
                     element={<SCP scp={scp} />} />
            )
          )
        }
      </Routes>
    </Router>
  );
}

export default App;


function Default()
{
  return(
    <div class="home">
      <h1>Welcome to the SCP Foundation</h1>
      <h2>Secure. Contain. Protect.</h2>

      <footer class="copyright"><p>&#169; SCP Foundation All Right Reserved | CJ AGBAYANI - 2023</p></footer>
    </div>
  )
}
