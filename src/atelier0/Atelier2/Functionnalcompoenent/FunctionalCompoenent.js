import {useState,useEffect} from "react"
export default function FuntionalComponent(props){

    const [like,setLikes]=useState(0)
   const sayHello=()=>{
        console.log("hello From")
        console.log(like)
    }
 useEffect(() => {
 console.log("im rendering");
 console.log("im updatng ")
 return()=>{
    console.log("im unmounting")

 }
 
}, [like]) // lezemni njarreb na7i l like w njarreb nfarregh tableau ww njarreb na7i tableau jemla 
return (
    
    <>
    
    <p>{props.title}</p>
    <p>{like}</p>
    <button onClick={sayHello} >say Hello</button>
    <button onClick={ ()=>setLikes(like+1) } >Like</button>

    <button onClick={sayHello} >say Hello</button>
    </>
)

}
