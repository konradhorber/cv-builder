import { useState, useEffect } from "react";
import GeneralInfo from "./components/GeneralInfo";
import Education from "./components/Education";
import Experience from "./components/Experience";
import { LiveUpdate } from "@capawesome/capacitor-live-update";

function App() {
  useEffect(() => {
    const sync = async () => {
      const result = await LiveUpdate.sync();
      if (result.nextBundleId) {
        await LiveUpdate.reload();
      }
    };

    sync();
  }, []);
  const [isEditing, setIsEditing] = useState(true);

  const toggleEditing = () => {
    setIsEditing(!isEditing);
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* header */}
      <header className="w-full p-4 sticky top-0 bg-[var(--bg-color)]">
        <div className="flex flex-row justify-between items-center w-full">
          <div className="w-[144.83px]"></div>
          <h1 className="text-l font-bold text-center">CV</h1>
          <button type="button" onClick={toggleEditing} className="px-4 py-2">
            Toggle editing
          </button>
        </div>
        <hr className="w-full border-t border-gray-300 my-2" />        
      </header>

      <main className="w-full flex flex-col justify-start items-start p-4">
        
        {/* general info */}
        <div className="w-full flex flex-col items-start">
          <GeneralInfo isEditing={isEditing} />
        </div>

        {/* education */}
        <div className="w-full flex flex-col justify-start items-start">
          <h2>Hello Potato</h2>
          <hr className="w-full border-t border-gray-300 my-2" />
          <Education isEditing={isEditing} />
        </div>

        {/* experience */}
        <div className="w-full flex flex-col justify-start items-start">
          <h2>Experience</h2>
          <hr className="w-full border-t border-gray-300 my-2" />
          <Experience isEditing={isEditing} />
        </div>
      </main>
    </div>
  );
}

export default App;