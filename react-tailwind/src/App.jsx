import Navbar from "./components/Navbar";
import Blog from "./components/Blog";

function App() {
  return (
    <div>
      <Navbar />
      <div className="px-4 mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        <Blog
          imgLink="/assets/tailwindcss-logo.png"
          blogTitle="Tailwind"
          blogDesc="Tailwind CSS is an open source CSS framework. The main feature of this library is that,
      unlike other CSS frameworks, it does not provide a series of predefined classes for elements."
        />
        <Blog
          imgLink="/assets/vim-logo.png"
          blogTitle="Vim"
          blogDesc={`Vim or ViImproved - the ubiquitous text editor
            Vim is a highly configurable text editor built to make creating and changing any kind of text very efficient. It is included as vi with most UNIX systems and with Apple OS X.`}
        />
        <Blog
          imgLink="./assets/go-logo.png"
          blogTitle="Go Programming Language"
          blogDesc="Go is a statically typed, compiled high-level programming language designed at Google by Robert Griesemer, Rob Pike, and Ken Thompson"
        />
      </div>
    </div>
  );
}

export default App;
