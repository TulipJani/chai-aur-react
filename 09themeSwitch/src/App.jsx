import { useEffect, useState } from "react";
import "./App.css";
import { ThemeProvider } from "./contexts/theme";
import ThemeBtn from "./components/ThemeBtn";
import Card from "./components/Card";

function App() {
  const [themeMode, setThemeMode] = useState("light");

  const lightTheme = () => {
    setThemeMode("light");
  };

  const darkTheme = () => {
    setThemeMode("dark");
  };

  // actual change in theme
  useEffect(() => {
    document.querySelector("html").classList.remove("light", "dark");
    document.querySelector("html").classList.add(themeMode);
  }, [themeMode]);

  return (
    <ThemeProvider value={{ themeMode, lightTheme, darkTheme }}>
      <div
        className={`flex flex-col min-h-screen ${
          themeMode === "dark"
            ? "bg-gray-900 text-white"
            : "bg-white text-black"
        }`}
      >
        <div className="flex justify-end p-4">
          <ThemeBtn />
        </div>
        <div className="flex items-center justify-center flex-grow">
          <Card />
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
