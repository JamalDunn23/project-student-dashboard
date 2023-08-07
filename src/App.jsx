import data from "./data/data.json"
import studentsToRender from "./Componets/StudentCard.jsx"
import CohortDirectory from "./Componets/CohortDirectory.jsx";

function App() {
 

   return (
    <div>
    <section id="page">
      <header>
      Student Dashboard
      </header>

      <nav >
      <CohortDirectory/>
      </nav>
      
      <main class="centered">
      {studentsToRender}
      </main>

      <footer>
      </footer>

    </section>
 
      </div> 
  
  );
}

export default App;
