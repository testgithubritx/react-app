import {createSlice} from '@reduxjs/toolkit'

const ShowList2=createSlice({
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
        reset:(state)=>{
            state.value +=1
        }
    },
})
export const {increment,decrement,reset}= ShowList2.actions;
export const selectState=(state)=>state.counter.value;