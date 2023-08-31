import React, { useState,useEffect } from "react";
import AdminNavBar from "./AdminNavBar";
import QuestionForm from "./QuestionForm";
import QuestionList from "./QuestionList";

function App() {
  const [page, setPage] = useState("List");
  const [questions,setQuestions] = useState([])

   const url= "http://localhost:4000/questions"

   useEffect(() =>{
      fetch(url)
      .then(resp => resp.json())  
      .then(data =>{
         console.log(data)
        return setQuestions(data)

    })

  },[])

  return (
    <main>
      <AdminNavBar onChangePage={setPage} />
      {page === "Form" ? <QuestionForm /> : <QuestionList />}
    </main>
  );
}

export default App;
