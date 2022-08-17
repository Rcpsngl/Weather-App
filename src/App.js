import './App.css';
import Container from './components/Container';
import { WeatherProveider } from './context/WeatherContext';


function App() {
  return (
    <WeatherProveider>
      <Container/>
    </WeatherProveider>
    
  );
}

export default App;
