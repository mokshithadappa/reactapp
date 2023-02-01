import logo from './logo.svg';
import './App.css';
import './ExternalStyle.css'
import Classes from './Classes.jsx'
import Arrow from './Arrow.jsx'
import Test from './Test.jsx'
import Variable from './Variable.jsx'
import Array from './Array.jsx'
import Destructuring from './Destructuring';
import Spreadoperator from './Spreadoperator';
import Ternary from './Ternary';
import Import from './Import';
import Props from './Props';
import Event from './Event';
import Conditional from './Conditional';
import List from './List';
import Forms from './Forms';
import Router  from './Router';

function App() {
  const InternalStyle={
    backgroundColor:"black",
    color:"white"
  }
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}

      {/* <h1 style={{backgroundColor:"red"}}>MOKSHITH R ADAPPA</h1>
      <h2 style={{backgroundColor:"blue",color:"white"}}>MOKSHITH R ADAPPA</h2>
      <h3 style={{backgroundColor:"green"}}>MOKSHITH R ADAPPA</h3>
      <h4 style={{backgroundColor:"pink"}}>MOKSHITH R ADAPPA</h4>
      <h5 style={{backgroundColor:"orange"}}>MOKSHITH R ADAPPA</h5>
      <h6 style={{backgroundColor:"purple"}}>MOKSHITH R ADAPPA</h6> */}

      {/* <p style={InternalStyle}>
        THIS IS HELLO WORLD
      </p>

      <h1 className="container">THIS IS EXTERNAL STYLING</h1> */}
      {/* <Classes id='CLASS START'/>
      <Arrow id='ARROW START'/>
      <Test id='TEST START'/>
      <Variable id='VARIABLE START'/>
      <Array id='ARRAY START'/>
      <Destructuring id='DESTRUCTURING START'/>
      <Spreadoperator id='SPREAD START'/>
      <Ternary id='TERNARY START'/>
      <Import id='IMPORT START'/>
      <Props id='PROPS START'/>
      <Event/>
      <Conditional/>
      <List/>
      <Forms/> */}
      <Router/>

    </div>
  );
}

export default App;
