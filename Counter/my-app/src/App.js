import './App.css';
import { useState } from 'react';

function App() {
  const [count,setcount] =useState(1);
  return (
    <div className="App">
      <h1>Count :{count}</h1>
      <button disabled={count==10} onClick={()=>setcount(count +1)}>+</button>
      <button onClick={()=>setcount (count ==0)}>Reset</button>
      <button disabled={count==0}onClick={()=>setcount(count-1)}>-</button>
    </div>
  );
}

export default App;


