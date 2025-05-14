import { useState } from "react";
import NavBar from "./components/NavBar";
import Main from "./components/Main";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);

  return (
    <div
      className={`min-h-screen w-full`}
      style={{
        backgroundColor: isDarkMode
          ? "hsl(225, 23%, 24%)"
          : "hsl(217, 61%, 90%)",
      }}
    >
      <div className="w-[90%] relative h-fit max-w-[1200px] mx-auto pt-8">
        <NavBar isDarkMode={isDarkMode} setDarkMode={setIsDarkMode} />
        <Main isDarkMode={isDarkMode} />
      </div>
    </div>
  );
}

export default App;
