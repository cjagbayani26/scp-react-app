import data from './data.json'
import SCP from './SCP'

import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Nav from './Nav';
import Home from './Home';

function App() {
  return (
    <Router>
      <Nav data={data} />

      <Routes>
        <Route path={"HOME"} index element={<Home />} />
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
