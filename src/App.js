import React, { useEffect, useState } from "react";

import "./App.css";
import Axios from "axios";

function App() {
  const [user,setUsers]=useState([]);
  const [count,setCount]=useState(1);
  const [flag,setflag]=useState(false);
  const [users,totalUser]=useState();
  useEffect(() => {
    console.log();
    async function getdata(count) {
      Axios.get(`https://reqres.in/api/users?page=${count}`)
        .then((res) => {
          console.log(res.data.total);
          console.log(res);
          res.data.data.map((item)=>{
            if(item.email==="michael.lawson@reqres.in"){
              setflag(true);
              console.log("true");
            }
          });
        })
        .catch((e) => {
          console.log(e);
        });
    }
    getdata(count);
    getdata(count+1);
  },[]);

  useEffect(() => {
    console.log();
    async function getdata(count) {
      Axios.get(`https://reqres.in/api/users`)
        .then((res) => {
          console.log(res.data.total);
          totalUser(res.data.total);
          console.log(res);
          })
        .catch((e) => {
          console.log(e);
        });
    }
  },[]);
  return (
  
      <form>
    <div class="form-group">
      <label for="exampleInputEmail1">Email address</label>
      <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
      <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
    </div>
    <div class="form-group">
      <label for="exampleInputPassword1">Password</label>
      <input type="password" class="form-control" id="exampleInputPassword1"/>
    </div>
    
    <button type="submit" class="btn btn-primary">Submit</button>
  </form>
  
  );
}

export default App;