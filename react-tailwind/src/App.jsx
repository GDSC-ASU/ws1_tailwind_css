import Navbar from "./components/Navbar"
import Blog from "./components/Blog"

function App() {
  return <div>
    <Navbar />
    <div className="px-4 mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      <Blog imgLink="https://149841302.v2.pressablecdn.com/wp-content/uploads/2022/02/tailwindcss-templates.png"
        blogDesc="Tailwind CSS is an open source CSS framework. The main feature of this library is that,
      unlike other CSS frameworks, it does not provide a series of predefined classes for elements."/>
      <Blog imgLink="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwYRPiy-a70SBKEJaFAAFPORNd174AJMvVzA&usqp=CAU"
        blogDesc="Visual Studio Code, also commonly referred to as VS Code,
      is a source-code editor made by Microsoft with the Electron Framework, for Windows, Linux and macOS."/>
      <Blog imgLink="https://www.nixsolutions.com/uploads/2020/07/Golang-700x395.png"
        blogDesc="Go is a statically typed, compiled high-level programming language designed at Google by Robert
      Griesemer,
      Rob Pike, and Ken Thompson"/>
    </div>
  </div>
}

export default App
