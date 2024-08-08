import { createSlice } from "@reduxjs/toolkit";

const UserSlice = createSlice({
    name:"user",
    initialState:[],
    reducers:{
        addPayment(state,action){
            state.push(action.payload);                                
        },
        removePaymet(state,action){
            state.splice(action.payload,1);
        },
        clearPayment(state,action){
            while(state.length!==0){
                state.pop();
            }
        }                           
    }
})         
console.log(UserSlice.actions)
export const {addPayment,clearPayment,removePaymet} = UserSlice.actions          ;
export {UserSlice};      
