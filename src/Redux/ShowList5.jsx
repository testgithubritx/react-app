import {createSlice} from '@reduxjs/toolkit'

const ShowList5=createSlice({
    name:'counter',
    initialState:{
        value:0,
    },
    reducer:{
        
        increment:(state)=>{
            state.value +=1
        },
        decrement:(state)=>{
            state.value -=1
        },
        reset:(state)=>{
            state.value=0
        }
    },
});
export const {increment,decrement,reset}=ShowList5.actions;
export const selectState=(state)=>state.counter.value;
export default ShowList5.reducer;