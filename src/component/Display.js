import { useDispatch, useSelector } from "react-redux";
import { clearPayment,removePaymet } from "../Store/Slices/UserSlice";

const Display=()=>{
    const dispatch = useDispatch()
    const data = useSelector((state)=>{
        return state.users;
    })
    console.log(data);
    const DeleteEntry=(id)=>{
        console.log("Delete")
        dispatch(removePaymet(id));
    }
    const ClearAll=()=>{
        
        dispatch(clearPayment());
    }
    return (<>
        {
            data.map((item,id)=>{
                return (
                    <div key ={id} className="flex justify-between m-4">
                        <li>{item}</li>
                        <button  className="bg-gray-700 text-white rounded-md px-4 align-baseline" onClick={()=>DeleteEntry(id)}>Delete</button>
                    </div>
                )
            })
        }

        <button className="bg-gray-700 text-white rounded-md px-4 ml-72" onClick={()=>ClearAll()}>Clear All</button>
        </>
        
    )
}
export default Display;