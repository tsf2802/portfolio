import Navbar from "./Navbar";
import Notes from "./pages/Notes";
import Projects from "./pages/Projects";
import Home from "./pages/Home";

function App() {
  let component 
  switch(window.location.pathname){
    case "/":
      component = <Home/>
      break
    case "/projects":
      component = <Projects/>
      break
    case "/notes":
      component = <Notes/>
      break

  }
  return (
    <>
    <Navbar /> 
    <div className="container">
    {component}
    </div>
    
    </>
  )
}
export default App 