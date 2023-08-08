import data from "../data/data.json"
import { useState } from "react"

function Summer2025Card(){

    
    const [toggle, setToggle] = useState(false)
    const studentsToRender= data.map(
        
        
        (eachStudentObj)=>{
            if(eachStudentObj.cohort.cohortCode === "Summer2025")
            return(
        
        <section className= "student-card">
        <section> <img className = "student-img" src={eachStudentObj.profilePhoto} alt="Image of Student"/></section>
   
    <section id="card-font">   
      <h4>{eachStudentObj.names.preferredName} {eachStudentObj.names.middleName.charAt(0)}. {eachStudentObj.names.surname}</h4>
      <h4>{eachStudentObj.username}</h4>
      <h4>Birthday: {eachStudentObj.dob}</h4>
      <h4>{eachStudentObj.cohort.cohortCode}</h4>
     
     <button onClick={()=>setToggle(!toggle)} className= "show-more">Show More...</button>
      {toggle && (
        <>
      <table id="student-table">
  <tr>
    <th>Codewars:</th>
    <th>Scores</th>
    <th>Certifications</th>
  </tr>
  <tr>
    <td>Current Total: {eachStudentObj.codewars.current.total}</td>
    <td>Assignments:{(eachStudentObj.cohort.scores.assignments * 100).toFixed(2)}%</td>
    <td>Resume:{eachStudentObj.certifications.resume ? '✅' : '❌'}</td>
  </tr>
  <tr>
    <td>Last Week: {eachStudentObj.codewars.current.lastWeek}</td>
    <td>Projects:{(eachStudentObj.cohort.scores.projects * 100).toFixed(2)}%</td>
    <td>LinkedIn:{eachStudentObj.certifications.linkedin ? '✅' : '❌'}</td>
  </tr>
  <tr>
    <td>Goal:{eachStudentObj.codewars.goal.total}</td>
    <td>Assessments:{(eachStudentObj.cohort.scores.assessments* 100).toFixed(2)}%</td>
    <td>Mock Interview:{eachStudentObj.certifications.mockInterview ? '✅' : '❌'}</td>
  </tr>
  <tr>
    <td>Percentage of Goal Achieved:{(eachStudentObj.codewars.current.total/ eachStudentObj.codewars.goal.total * 100).toFixed(0)}%</td>
    <br/>
   
    <td>Git Hub:{eachStudentObj.certifications.github ? '✅' : '❌'}</td>
  </tr>
</table>
</>
      )}
      </section>
      </section>
      
      )
    }
    )
    return <>
    {studentsToRender}
    </>

  } 
    
    export default Summer2025Card