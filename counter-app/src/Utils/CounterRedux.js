import React from 'react';
import {createStore} from "redux";
import { useSelector ,Provider} from 'react-redux';

//Action Generators
const incrementCount=({incrementBy=1}= {})=>{
 return{
   type:"INCREMENT",
   incrementBy
 }
}

const decrementCount=({decrementBy=1}={})=>{
  return{
    type:'DECREMENT',
    decrementBy
  }
}

const reset=()=>{
  return{
    type:'RESET'
  }
}

const setCount=({count})=>{
  return{
    type:'SET',
    count
  }
}

//Reducers

 function counterReducer(state=0,action){
  switch(action.type){
    case 'INCREMENT':
      return state+action.incrementBy
    case 'DECREMENT':
      return state-action.decrementBy
    case 'RESET':
      return state=0;
    case 'SET':
      return state=action.count
    default:
      return state
  }
}

//Redux Store
let store=createStore(counterReducer);

store.subscribe(() => console.log(store.getState()))

function CounterRedux() {
 const counter=useSelector(state=>state.counterReducer)
    return (
      
    <div style={{textAlign:"center",marginTop:"40px"}}>
          <h1>Increment/Decrement counter using React and redux</h1>
          <button onClick={()=>store.dispatch(incrementCount({incrementBy:10}))}>Increment By 10</button>
          <button onClick={()=>store.dispatch(incrementCount())}>+</button>
          {counter}
          <button onClick={()=>store.dispatch(decrementCount())}>-</button>
          <button onClick={()=>store.dispatch(decrementCount({decrementBy:10}))}>Decrement By 10</button>
          <button onClick={()=>store.dispatch(reset())}>Reset</button>
          <button onClick={()=>store.dispatch(setCount({count:101}))}>Set</button>
        </div>
    
        
    )
}

export default CounterRedux
