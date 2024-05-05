function About() {
    return (
      <div className="flex justify-center items-center h-screen font-serif">
        <div className="text-center">
          <h1 className="text-6xl mb-8">
            <a
              href="/instagrm"
              className="text-blue-500 hover:text-blue-700 transition-colors duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              BY Muhammad Yusuf
            </a>
          </h1>
          <p className="text-sm text-gray-500">Find me on Instagram for more!</p>
        </div>
      </div>
    );
  }
  
  export default About;
  