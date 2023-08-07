import data from "../data/data.json"
import { useState } from "react"

const studentsToRender= data.map(

  // const [itsTrue,setItsTrue]= useState("✔️");
  // const [itsFalse,setItsFalse]= useState("❌");
  

    
    (eachStudentObj)=>{
      return(
      
        <section className= "student-card">
        <section> <img className = "student-img" src={eachStudentObj.profilePhoto} alt="Image of Student"/></section>
   
    <section id="card-font">   
      <h4>{eachStudentObj.names.preferredName} {eachStudentObj.names.middleName.charAt(0)}. {eachStudentObj.names.surname}</h4>
      <h4>{eachStudentObj.username}</h4>
      <h4>Birthday: {eachStudentObj.dob}</h4>
     
     <button className= "show-more">Show More...</button>
      
      <table id="student-table">
  <tr>
    <th>Codewars:</th>
    <th>Scores</th>
    <th>Certifications</th>
  </tr>
  <tr>
    <td>Current Total: {eachStudentObj.codewars.current.total}</td>
    <td>Last Week: {eachStudentObj.codewars.current.lastWeek}</td>
    <td>Goal:{eachStudentObj.codewars.goal.total}</td>
    <td>Percentage of Goal Achieved:%</td>
  </tr>
  <tr>
    <td>Assignments:{eachStudentObj.cohort.scores.assignments}%</td>
    <td>Projects:{eachStudentObj.cohort.scores.projects}%</td>
    <td>Assessments:{eachStudentObj.cohort.scores.assessments}%</td>
  </tr>
  <tr>
    <td>Resume:{eachStudentObj.certifications.resume}</td>
    <td>LinkedIn:{eachStudentObj.certifications.linkedin}</td>
    <td>Mock Interview:{eachStudentObj.certifications.mockInterview}</td>
    <td>Git Hub:{eachStudentObj.certifications.github}</td>
  </tr>
</table>
      </section>
      </section>
      
      )
    }
    )

    export default studentsToRender