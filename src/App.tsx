import { useState } from "react";
import GeneralInfo from "./components/GeneralInfo";
import Education from "./components/Education";
import Experience from "./components/Experience";

function App() {
  const [isEditing, setIsEditing] = useState(true);

  const toggleEditing = () => {
    setIsEditing(!isEditing);
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* header */}
      <header className="flex flex-row justify-between items-center w-full p-4 sticky top-0 bg-gray-800 text-white">
        <h1 className="text-2xl font-bold text-left">THE CV</h1>
        <button type="button" onClick={toggleEditing} className="px-4 py-2">
          Toggle editing
        </button>
      </header>

      {/* general info */}
      <main className="w-full flex flex-col justify-start items-start p-4">
        <div className="w-full flex flex-col items-start">
          <h2 className="">General info</h2>
          <hr className="w-full border-t border-gray-300 my-2" />
          <GeneralInfo isEditing={isEditing} />
        </div>
        <div className="flex flex-col items-start pt-4">
          <h2>Education</h2>
          <hr className="w-full border-t border-gray-300 my-2" />
          <Education isEditing={isEditing} />
        </div>
        <div className="flex flex-col items-start pt-4">
          <h2>Experience</h2>
          <hr className="w-full border-t border-gray-300 my-2" />
          <Experience isEditing={isEditing} />
        </div>
      </main>
    </div>
  );
}

export default App;