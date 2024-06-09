import { useState , useEffect } from 'react';
import './App.css';

const App = () => {
  const [Count , setCounter] = useState(0) ;
  useEffect(() => {
    alert("you changed the counter to " + Count)

  }, [Count]) 
  const my_name = null ;
  const Person = (props) => {
    return (
      <div>
        <h1>Name : {props.name}</h1>
        <h2>Last Name : {props.last}</h2>
        <h3>age : {props.age}</h3>

      </div>

    );

  


  }
  return (
    <div className="App">

      <button onClick = { () => setCounter( (prevcount) => prevcount+1 )}>+</button>
      <h1>{Count}</h1>
      <button onClick = { () => setCounter( (prevcount) => prevcount-1 )}>-</button>
     {/*<Person name = {"Malek"} last = {"Belkahla"} age = {21}/>
     <Person name = "Adam" last = "Gassem" age = {22}/>
  */}
    </div>
  );
}

export default App;
