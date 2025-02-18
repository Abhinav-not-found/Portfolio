
import { Route, Routes } from "react-router-dom";
import ProjectDetail from './components/custom/ProjectDetail.jsx'
import Home from "./Home.jsx";
import NPM from "./components/custom/NPM.jsx";
function App() {

  // Add a text like looking for a job (to give more info)
  // may be add a bento grid in the project view section
  // may be make the mouse cursor color change based on project card background color

  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/projectDetail" element={<ProjectDetail/>} />
        <Route path="/projectDetail/npm" element={<NPM/>} />
      </Routes>
    </>
  )
}

export default App
