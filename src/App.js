import data from './data.json'
import SCP from './SCP'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from './Nav';

function App() {
  return (
    <Router>
      <Nav data={data} />

      <Routes>
        {
          data.map(
            scp => (
              <Route key={scp.item}
                     path={`${scp.item}`}
                     element={<SCP scp={scp} />}
                     />

              
            )
          )
        }
      </Routes>

    </Router>
  );
}

export default App;
