import data from './data.json'
import SCP from './SCP'

function App() {
  return (
    <>
    {
      data.map(
        scp=> (
          <SCP scp={scp} />
        )
      )
    }
    </>
  );
}

export default App;
