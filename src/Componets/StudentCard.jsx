import data from "../data/data.json"

const studentsToRender= data.map(
    
    (eachStudentObj)=>{
      return(
      
        <section className= "student-card">
        <section> <img className = "student-img" src={eachStudentObj.profilePhoto} alt="Image of Student"/></section>
   
    <section>   
      <h4>{eachStudentObj.names.preferredName} {eachStudentObj.names.middleName.charAt(0)}. {eachStudentObj.names.surname}</h4>
      <h4>{eachStudentObj.username}</h4>
      <h4>Birthday: {eachStudentObj.dob}</h4>
      </section>
      
  
      </section>
      
      )
    }
    )

    export default studentsToRender