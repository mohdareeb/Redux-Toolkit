import { useDispatch } from "react-redux"
import  {addPayment} from "../Store/Slices/UserSlice"     
import Display from "./Display";

const Body = ()=>{
    const dispatch = useDispatch();

    const additems=()=>{
        console.log("addItems");
        dispatch(addPayment(1000 * Math.floor(Math.random()*10)));
    }
    return (
        <div className="bg-slate-300 my-5 w-6/12 m-auto shadow-lg">
            <h1 className="font-medium p-2 mx-auto">Welcome to State Bank - Check Your Transaction  </h1>
            <div className="flex justify-between p-4">
                <h2>List of User Details </h2>
                <button className="bg-gray-700 text-white rounded-md px-4" onClick={()=>additems()}>Add</button>
            </div>
            <hr/>
            <div className=" p-4">
                {/* <h2></h2> */}
                {/* <button className="bg-gray-700 text-white rounded-md px-4 align-baseline">Clear</button> */}
                <Display/>
            </div>

        </div>
    )
}
export default Body; 