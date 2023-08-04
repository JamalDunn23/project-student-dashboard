import data from "../data/data.json"

const classToRender= data.map(
    
    (eachCohortObj)=>{
      return(
        <section className= "cohort">
        
      
      <p>{eachCohortObj.names.preferredName} {eachStudentObj.names.middleName.charAt(0)}. {eachStudentObj.names.surname}</p>
      <p>{eachCohortObj.username}</p>
      <p>Birthday: {eachCohortObj.dob}</p>
      </section>
      )
    }
    )

    export default classToRender