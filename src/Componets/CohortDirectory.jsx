import React from 'react'
import { useState }from 'react'


const CohortDirectory = () => {
  
  const [cohort,setCohort] = useState([
     {title: "All Students", id: 1},
     {title: "Winter 2026", id:2},
     {title: "Fall 2016", id: 3},
     {title: "Summer 2026", id: 4},
     {title: "Spring 2026", id: 5},
     {title: "Winter 2025", id: 6},
     {title: "Fall 2025", id: 7},
     {title: "Summer 2025", id: 8},
     {title: "Spring 2025", id: 9},
   ]);
  
  
  return (
   
   <div className='cohort'>
    {cohort.map((cohortMapped)=> (
      <div className='cohort-preview' key ={cohortMapped.id}>
        <h2>{cohortMapped.title}</h2>
      </div>
    ))}
    
    </div>
  )
}



export default CohortDirectory