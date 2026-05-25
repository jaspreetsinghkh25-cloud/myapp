import { Add, Check, Circle, Delete } from "@mui/icons-material"
import axios from "axios";
import { useEffect,  useState } from "react"
export default function File(){
    const [list, setlist]= useState([]);
    const [name , setname]= useState("")

    function Fun1(){
        // axios.get("http://localhost:6002/Todo").then((row)=>{
        //     setlist(row.data)
        // })
    }
    function Fun2(){
        
        const ob = {name:name, status:false};
        // axios.post("http://localhost:6002/File3", ob).then((succ)=>{
        //     console.log("Added")
        //     // Fun1()
        // })
        setlist([...list, ob])
        
        setname("")
    }
    function Delete1(i){
    const newList = [...list];   
    newList.splice(i, 1);   
    setlist(newList);            
}
function Stats(i){
    const newlist = [...list];
    newlist[i].status=!newlist[i].status;
    setlist(newlist)
}
    useEffect(()=>{
        Fun1()
    }, [])

    return(
        <>
        <div className="col-lg-12 vh-100 bg-dark row justify-content-center align-items-center">
            <div className="card col-lg-3">
                <div className="card-header">
                    <h1>Todo list</h1>
                </div>
                <div className="card-body text-start">
                    <ul className="list-group">
                        {list.map((row, i)=>(
                            <li className="list-group-item m-1">{row.name}<button className="btn float-end" onClick={()=>Stats(i)}>{row.status ? <Check className="text-success"/>:<Circle className="text-warning"/>}</button><button className="btn text-danger float-end" onClick={()=>Delete1(i)}><Delete/></button></li>
                        ))}
                    </ul>
                </div>
                <div className="card-footer input-group">
                    <input type="text" value={name}  onChange={(e)=>setname(e.target.value)} className="form-control"/>
                    <button className="btn btn-secondary" onClick={()=>Fun2()}><Add className=""/></button>
                </div>
            </div>
        </div>
        </>
    )
}