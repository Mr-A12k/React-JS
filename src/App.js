import './App.css';
import Greet from './components/Greetings';
import Welcome  from './components/Welcome';
import Hello from './components/Hello';

function App() {
  return (
    <div className="App">
      <Greet name='Arun'> 
        <p>Hello the message from Child props</p>
      </Greet>
      <Greet name='AK'> </Greet>
      <Greet name='Kabil'> </Greet>

      {/* <Welcome/>
      <Hello/> */}
    </div>
  );
}

export default App;
