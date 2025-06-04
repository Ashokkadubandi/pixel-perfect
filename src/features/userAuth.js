import {createSlice} from '@reduxjs/toolkit'


const Reg = {name:'',phone:'',email:'',password:'',companyName:'',agency:''}
const Log = {email:'',password:''}

const userAuthSlice = createSlice({
    name:'user-auth',
    initialState:{
        ActiveForm:Reg
    },
    changeInpVal:() => {}
})

export default userAuthSlice.reducer