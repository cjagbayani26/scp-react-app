import logo from './logo.svg';
import './App.css';
import SCP from './SCP';

function App() {
  return (
    <>
    {
      DataTransfer.map(
        scp => (
          <SCP scp={scp} />
        )
      )
    }
    </>
  );
}

export default App;
