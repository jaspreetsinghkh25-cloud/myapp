import { Add, Input } from "@mui/icons-material";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useState } from "react";

export default function File2(){
    const [Name, setName]= useState("");

    function fun1(){

    }

    return(
        <>
        <div className="col-lg-12 vh-100 row justify-content-center align-items-center bg-dark">
            <div className="col-lg-3 card list-group">
                <TextField type="text" label={"ENter"} value={Name} onChange={(e)=>setName(e.target.value)}/>
                <button className="btn btn-danger" onClick={()=>console.log
                    (Name)
                }><Add/></button>
            </div>
        </div>
        </>
    )
}