import uuid from 'uuid';
import {createStore,combineReducers} from 'redux'

//Action generators
const addExpense=({description='',note='',amount=0,createdAt=0}={})=>({
    type:'ADD_EXPENSE',
    expense:{
        id:uuid(),
        description,
        note,
        amount,
        createdAt
    }
})
//Remove Expense
const removeExpense=({id}={})=>({
    type:'REMOVE_EXPENSE',
    id,

})

//Edit expense
const editExpense=(id,updates)=>({
    type:'EDIT_EXPENSE',
    id,
    updates

})

//Expenses Reducer
const expensesReducerDefaultState=[];

const expensesReducer=(state=expensesReducerDefaultState,action)=>{
    switch(action.type){
        case 'ADD_EXPENSE':
            return [...state,action.expense]
        case 'REMOVE_EXPENSE':
            return state.filter(({id})=>{
              return id!==action.id;
            })
        case 'EDIT_EXPENSE':
            return state.map((expense)=>{
              if(expense.id===action.id){
                return {
                    ...expense,...action.updates
                }
              }else{
                  return expense
              }
            })
            
        default:
            return state;
    }
}


//Filter Reducer
const filtersReducerDefaultState={
    text:'',
    sortBy:'date',
    startDate:undefined,
    endDate:undefined
}

const filtersReducer=(state=filtersReducerDefaultState,action)=>{
    switch(action.type){
        default:
            return state
    }
}

// Store Creation with multiple reducers
const store=createStore(
    combineReducers({
        expenses:expensesReducer,
        filters:filtersReducer
        
    })
);

store.subscribe(()=>console.log(store.getState()))
store.dispatch(addExpense({description:'rent',amount:100}))

const demoState={
    expenses:[
        {
            id:'usyyi',
            description:'January Rent',
            note:'This is the final payment for that address',
            amount:5400,
            createdAt:0
        }],
        filters:{
            text:'rent',
            sortBy:'amount',
            startDate:undefined,
            endDate:undefined
        }
}
  