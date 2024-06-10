import './App.css'
import add, { mul, sub } from "./utils.js";
import Student from "./student.jsx";

const data =[
  {name:"Rossy", imageUrl:" https://irp.cdn-website.com/e64f567b/dms3rep/multi/Female-student-min-1024x683.jpg",
      id: 6543, age: 21},
  {name:"John", imageUrl:"https://cdn.pixabay.com/photo/2018/06/27/07/45/college-student-3500990_640.jpg", id: 9786, age: 21}
]

function App() {
  const mentorName = "sanjaysaravanan";
   return (
    <>
     <h1>Weekend Tamil Batch</h1>
     <h1>Mentor: {mentorName}</h1>
     <h1>Batches:{sub(1, 2)}</h1>
     <h1>Batches:{mul(1, 2)}</h1>
     <h1>Batches:{add(1, 2)}</h1>
     {/* <h1>name:{Student ("Vignesh")}</h1> */}
      {/* <Student
      name ={data[0].name}
      image={data[0].image}
      id = {data[0].id}
      age ={data[0].age} 
      />
     <Student
      name ={data[1].name}
      image={data[1].image}
      id = {data[1].id}
      age ={data[1].age}
      /> */}

      {/* {[ <Student
        name ={data[0].name}
        image={data[0].image}
        id = {data[0].id}
        age ={data[0].age}
        key ={data[0].key} 
        />,
       <Student
        name ={data[1].name}
        image={data[1].image}
        id = {data[1].id}
        age ={data[1].age}
        key ={data[1].key}
      />, ]} */}

      {/* {data.map((stu) =>{
        return(
          <Student 
          name = {stu.name}
          age = {stu.age}
          id = {stu.id}
          image = {stu.image}
          key = {stu.id}
          />
        );
      })}; */}

      {data.map((stu) =>{
        return(
          <Student
          {...stu}
          image = {stu.imageUrl} 
            key = {stu.id}
          />
        );
      })};
    </>
  );
}

export default App;
