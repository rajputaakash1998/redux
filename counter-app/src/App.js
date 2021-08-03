import './App.css';
import {useSelector,useDispatch} from 'react-redux';
import {increment,decrement} from './actions'

function App() {

  const counter=useSelector(state=>state.counter)
  const isLogged=useSelector(state=>state.loggged)
  const dispatch=useDispatch();

  return (
    <div style={{marginTop:"50px",textAlign:"center"}}>
      <h1>{counter}</h1>

      {isLogged? <h3>Valueable Information I shouldn't see</h3>:""}
      <button onClick={()=>dispatch(increment({incrementBy:10}))}>+</button>
      <button onClick={()=>dispatch(decrement())}>-</button>
    </div>
  );
}

export default App;
