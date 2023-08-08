import data from "./data/data.json"
import StudentCard from "./Componets/StudentCard";
import Winter2026Card from "./Componets/Winter2026";
import Fall2016Card from "./Componets/Fall2016";
import Summer2026Card from "./Componets/Summer2026"; 
import Spring2026Card from "./Componets/Spring2026";
import Winter2025Card from "./Componets/Winter2025";
import Fall2025Card from "./Componets/Fall2025";
import Summer2025Card from "./Componets/Summer2025";
import Spring2025Card from "./Componets/Spring2025";
import react, {useState} from "react";


function App() {
  const[showAllStudents,setShowAllStudents]=useState(true)
  const[showWinter2026,setShowWinter2026]=useState(false)
  const[showFall2016,setShowFall2016]=useState(false)
  const[showSummer2026,setShowSummer2026]=useState(false)
  const[showSpring2026,setShowSpring2026]=useState(false)
  const[showWinter2025,setShowWinter2025]=useState(false)
  const[showFall2025,setShowFall2025]=useState(false)
  const[showSummer2025,setShowSummer2025]=useState(false)
  const[showSpring2025,setShowSpring2025]=useState(false)

 function myfunction(e){

  if(e.target.innerText === "All Students"){
    setShowAllStudents(true);
    setShowWinter2026(false);
    setShowFall2016(false);
    setShowSummer2026(false);
    setShowSpring2026(false);
    setShowWinter2025(false);
    setShowFall2025(false);
    setShowSummer2025(false);
    setShowSpring2025(false);
  } 
    else if(e.target.innerText === "Winter 2026"){
    setShowAllStudents(false);
    setShowWinter2026(true);
    setShowFall2016(false);
    setShowSummer2026(false);
    setShowSpring2026(false);
    setShowWinter2025(false);
    setShowFall2025(false);
    setShowSummer2025(false);
    setShowSpring2025(false);
    }
      if(e.target.innerText === "Fall 2016"){
        setShowFall2016(false)
        setShowAllStudents(false);
        setShowWinter2026(false);
        setShowFall2016(true);
        setShowSummer2026(false);
        setShowSpring2026(false);
        setShowWinter2025(false);
        setShowFall2025(false);
        setShowSummer2025(false);
        setShowSpring2025(false);
      }
        if(e.target.innerText === "Summer 2026"){
          setShowSummer2026(false)
          setShowAllStudents(false);
          setShowWinter2026(false);
          setShowFall2016(false);
          setShowSummer2026(true);
          setShowSpring2026(false);
          setShowWinter2025(false);
          setShowFall2025(false);
          setShowSummer2025(false);
          setShowSpring2025(false);
        }
          if(e.target.innerText === "Spring 2026"){
            setShowSpring2026(false)
            setShowAllStudents(false);
            setShowWinter2026(false);
            setShowFall2016(false);
            setShowSummer2026(false);
            setShowSpring2026(true);
            setShowWinter2025(false);
            setShowFall2025(false);
            setShowSummer2025(false);
            setShowSpring2025(false);
          }
            if(e.target.innerText === "Winter 2025"){
              setShowWinter2025(false)
              setShowAllStudents(false);
              setShowWinter2026(false);
              setShowFall2016(false);
              setShowSummer2026(false);
              setShowSpring2026(false);
              setShowWinter2025(true);
              setShowFall2025(false);
              setShowSummer2025(false);
              setShowSpring2025(false);
            }
              if(e.target.innerText === "Fall 2025"){
                setShowFall2025(false)
                setShowAllStudents(false);
                setShowWinter2026(false);
                setShowFall2016(false);
                setShowSummer2026(false);
                setShowSpring2026(false);
                setShowWinter2025(false);
                setShowFall2025(true);
                setShowSummer2025(false);
                setShowSpring2025(false);
              }
                if(e.target.innerText === "Summer 2025"){
                  setShowSummer2025(false)
                  setShowAllStudents(false);
                  setShowWinter2026(false);
                  setShowFall2016(false);
                  setShowSummer2026(false);
                  setShowSpring2026(false);
                  setShowWinter2025(false);
                  setShowFall2025(false);
                  setShowSummer2025(true);
                  setShowSpring2025(false);
                }
                  if(e.target.innerText === "Spring 2025"){
                    setShowSpring2025(false)
                    setShowAllStudents(false);
                    setShowWinter2026(false);
                    setShowFall2016(false);
                    setShowSummer2026(false);
                    setShowSpring2026(false);
                    setShowWinter2025(false);
                    setShowFall2025(false);
                    setShowSummer2025(false);
                    setShowSpring2025(true);
                  }
 }

    
    return (
      <>
      <div>
      <section id="page">
      <header>
      Student Dashboard
      
      </header>
      
      <nav >
      <p className="navHeader">Choose a Class By Start Date</p>
      <ul className="navCohorts">
      <li onClick={myfunction}className="navCohorts1">All Students</li>
      <li onClick={myfunction}className="navCohorts2">Winter 2026</li>
      <li onClick={myfunction}className="navCohorts3">Fall 2016</li>
      <li onClick={myfunction}className="navCohorts4">Summer 2026</li>
      <li onClick={myfunction}className="navCohorts5">Spring 2026</li>
      <li onClick={myfunction}className="navCohorts6">Winter 2025</li>
      <li onClick={myfunction}className="navCohorts7">Fall 2025</li>
      <li onClick={myfunction}className="navCohorts8">Summer 2025</li>
      <li onClick={myfunction}className="navCohorts9">Spring 2025</li>
      </ul>
      
        
        
  
        </nav>
      
      
      <main class="centered">
      {showAllStudents?<StudentCard/> : <></>}
      {showWinter2026?<Winter2026Card/>:<></>}
      {showFall2016?<Fall2016Card/>:<></>}
      {showSpring2026?<Summer2026Card/>:<></>}
      {showSummer2026?<Spring2026Card/>:<></>}
      {showWinter2025?<Winter2025Card/>:<></>}
      {showFall2025?<Fall2025Card/>:<></>}
      {showSummer2025?<Summer2025Card/>:<></>}
      {showSpring2025? <Spring2025Card/>:<></>}
      
      </main>
      
      <footer>
      </footer>
        
      
      </section>
      
      </div> 
    
      </>
      
      )
    }
  
    
export default App;