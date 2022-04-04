import './App.css';
import AppRouters from './components/AppRouters';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
			<Navbar />
      <AppRouters />
    </div>
  );
}

export default App;
