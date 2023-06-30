import {createSlice} from '@reduxjs/toolkit'

const ShowList3=createSlice({
    name:'counter',
    initialState:{
        value:0,
    },
    reducers:{
        increment:(state)=>{
            state.value +=1
        },
        decrement:(state)=>{
            state.value -=1
        },
    }
});
export const {increment,decrement}=ShowList3.actions;
export const selectState =(state)=>state.counter.value; 
export default ShowList3.reducer;