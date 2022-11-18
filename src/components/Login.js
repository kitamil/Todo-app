import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
//import { BrowserRouter as Router,Routes, Route} from 'react-router-dom';


const Login = () => {
   
    
  return (
    <div className="container-fluid  d-flex justify-content-evenly" >
     <Card >
        <CardContent>
        <form className="p-3 mb-2 bg-secondary bg-gradient" >
      <div className="mb-3">
    <label for="exampleInputEmail1" className="form-label">User Name</label>
    <input className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter your username"/>
     </div>
  <div className="mb-3">
    <label for="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Enter your password"/>
  </div>
  <div className="mb-3 form-check">
    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
    <label className="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" className="btn btn-primary">Submit</button>
</form>
         </CardContent>
         </Card>
    </div>
  );
};

export default Login;
