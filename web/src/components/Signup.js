import React, { useEffect, useState } from "react";
import Header from "./Header";

function Singup() {
  
  useEffect(() => {
    data()
  }, [])
  
  let [user,setuser]=useState('')
  let [email,setemail]=useState('')
  let [pass,setpass]=useState('')
  let fdata = []
  let set = {
    user : user,
    email : email,
    pass : pass,
  }
  let data = ()=>{
    fdata.push(set)
    JSON.parse(localStorage.getItem('data'))
    let data = localStorage.setItem('data',JSON.stringify(fdata))
  }
  return (
    <div>
      <Header />
      <div className="container">
        <div className="signup-box">
          <div className="box">
            <h2>Sign up</h2>
            <input type="text" placeholder=" user name"  onChange={(e)=>setuser(e.target.value)} value={user}/>
            <input type="email" placeholder="Email" onChange={(e)=>setemail(e.target.value)}/>
            <input type="password" placeholder="password" onChange={(e)=>setpass(e.target.value)}/>
            <button onClick={()=>data()}>sign up</button>
           
          </div>
        </div>
      </div>
    </div>
  );
}

export default Singup;