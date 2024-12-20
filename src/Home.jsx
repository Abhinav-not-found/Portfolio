import Projects from "./components/custom/Projects.jsx";
import About from "./components/custom/About.jsx";
import Contact from "./components/custom/Contact.jsx";

const Home = () => {
  return (
    <div className="w-[60%] h-screen bg-red-10 m-auto py-10">
        <div className="flex justify-between">
          <div>
            <h1 className="text-4xl font- font-rammetto">Abhinav</h1>
            <h1 className="text-4xl font- font-rammetto">Kumar</h1>
            <div className="mt-5">
              <p className="text-lg">I'm a fullstack developer based in India, who makes </p>
              <p className="text-lg">Minimalistic, Modern and Memorable websites.</p>
            </div>
          </div>
        </div>

        <Contact/>
        <Projects/>
        <About/>
      </div>
  )
}

export default Home
