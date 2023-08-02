import logo from './question.svg';
import './App.css';
import Question from './components/Question';

function App() {

  
  return (
    
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Bora se ver quinta ?
        </p>
      
        <Question></Question>
      </header>
    </div>
  );
}

export default App;
