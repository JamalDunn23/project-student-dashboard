import data from "./data/data.json"
import studentsToRender from "./Componets/StudentCard.jsx"

function App() {

  
   return (
    <div>
    <section id="page">
      <header>
      Student Dashboard
      </header>

      <nav>
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
