import React, { useEffect, useState } from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";

const Todo = () => {
  const [data, setData] = useState("");
  const [todoList, setTodoList] = useState([]);
  const [isAddButton, setIsAddButton] = useState(true);
  const [editId, setEditId] = useState(null);
  const [errorMsg,setErrorMsg] = useState("");
  console.log('errorMsg :>> ', errorMsg);

  //console.log("editId:", editId);
  // console.log("todoList:", todoList);
  //console.log("data",data)

  const submitted = (event) => {
    event.preventDefault();

    if (data.length === 0) {
      setErrorMsg("please enter the todo!!!")
      
    }else{
      

    if (isAddButton) {
      const newdata = [...todoList, data];
      setData("");
      setTodoList(newdata);
    } else {
      let oldData = [...todoList];

      oldData[editId] = data;

      //console.log("oldData:", oldData);
      setTodoList(oldData);
      setIsAddButton(true);
      setData("");
    }
  }
  };

  const deleted = (item) => {
    let finaldata = todoList.filter((value) => value !== item);
    // console.log("finaldata :>> ", finaldata);
    setTodoList(finaldata);
  };

  const edited = (value, index) => {
    setIsAddButton(false);
    setData(value);
    setEditId(index);
  };

 useEffect(()=> {
    if(data.length >0){
      setErrorMsg("")
}
 } ,[data])

  return (
    <div className="container my-5">
      <div className="my-4">
        <h1 className="text-center">TODO LIST</h1>
        <Card className="bg-secondary bg-gradient ">
          <CardContent>
            <form onSubmit={submitted}>
              <div className="input-group mb-3 ">
                <input
                  onChange={(e) => setData(e.target.value)}
                  value={data}
                  type="text"
                  className="form-control  "
                  placeholder="Enter your TODO"
                  
                />
               
                <button
                  className="btn bg-warning"
                  type="submit"
                  id="button-addon2"
                >
                  {isAddButton ? "ADD" : "Updata"}
                </button>
              
              </div>
            </form>
            <div className="d-flex justify-content-center text-white fw-bold">
                  <p>{errorMsg}</p>
                </div>  
          </CardContent>
        </Card>
      </div>
      <div
        className="d-flex flex-wrap"
        style={{
          gap: "20px",
        }}
      >
        {Array.isArray(todoList) &&
          todoList.map((value, index) => (
            <div
              className="card justify-content-center align-items-center"
              key={index}
              style={{ height: 150, width: 250 }}
            >
              <div className="card-body">{value}</div>
              <div className="submitbtn">
                <button
                  className="btn text-white bg-primary "
                  id="changebutton"
                  onClick={() => deleted(value)}
                >
                  Delete
                </button>
                <button
                  className="btn text-white bg-primary "
                  id="changebutton"
                  onClick={() => edited(value, index)}
                >
                  Edit
                </button>
              </div>
            </div>
          ))}
        <div></div>
      </div>
    </div>
  );
};

export default Todo;
