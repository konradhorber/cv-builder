import { useItemList } from "../hooks/useItemList"; 

interface EditingStatus {
    isEditing: boolean;
}

interface Experience {
    companyName: string;
    positionTitle: string;
    jobResponsibilities: string;
    dateFrom: string;
    dateTo: string;
}

function Experience({ isEditing }: EditingStatus) {
  const defaultExperience: Experience = {  
    companyName: "",
    positionTitle: "",
    jobResponsibilities: "",
    dateFrom: "",
    dateTo: ""
  }

  const { items: experiences, addItem, removeItem, updateItem } = useItemList<Experience>([defaultExperience]);


  return (
    <form className="w-full">
      {isEditing ? (
        <div className="max-w-lg">
          {experiences.map((experience, index) => (
            <div key={index} className="mb-6">
              <div className="mb-4 flex flex-col md:flex-row md:items-center">
                <label htmlFor={`companyName-${index}`} className="mb-2 md:mb-0 md:w-1/4">Company name:</label>
                <input
                  type="text"
                  id={`companyName-${index}`}
                  name="companyName"
                  value={experience.companyName}
                  onChange={(e) => updateItem(index, e)}
                  className="w-full md:w-3/4 border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div className="mb-4 flex flex-col md:flex-row md:items-center">
                <label htmlFor={`positionTitle-${index}`} className="mb-2 md:mb-0 md:w-1/4">Position title:</label>
                <input
                  type="text"
                  id={`positionTitle-${index}`}
                  name="positionTitle"
                  value={experience.positionTitle}
                  onChange={(e) => updateItem(index, e)}
                  className="w-full md:w-3/4 border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

                <div className="mb-4 flex flex-col md:flex-row md:items-center">
                <label htmlFor={`jobResponsibilities-${index}`} className="mb-2 md:mb-0 md:w-1/4">Job responsibilities:</label>
                <textarea
                  id={`jobResponsibilities-${index}`}
                  name="jobResponsibilities"
                  value={experience.jobResponsibilities}
                  onChange={(e) => updateItem(index, e)}
                  className="w-full md:w-3/4 h-32 border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                </textarea>
                </div>

              <div className="mb-4 flex flex-col md:flex-row md:items-center">
                <label htmlFor={`dateFrom-${index}`} className="mb-2 md:mb-0 md:w-1/4">Date from:</label>
                <input
                  type="date"
                  id={`dateFrom-${index}`}
                  name="dateFrom"
                  value={experience.dateFrom}
                  onChange={(e) => updateItem(index, e)}
                  className="w-full md:w-3/4 border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div className="mb-4 flex flex-col md:flex-row md:items-center">
                <label htmlFor={`dateTo-${index}`} className="mb-2 md:mb-0 md:w-1/4">Date to:</label>
                <input
                  type="date"
                  id={`dateTo-${index}`}
                  name="dateTo"
                  value={experience.dateTo}
                  onChange={(e) => updateItem(index, e)}
                  className="w-full md:w-3/4 border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {index > 0 && (
                  <button 
                      type="button" 
                      onClick={() => removeItem(index)}
                      className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                  >
                    Remove experience
                </button>
              )}                
            </div>
          ))}
          <button type="button" onClick={() => addItem(defaultExperience)}>
            Add Experience
          </button>
        </div>
      ) : (
        <>
          {experiences.map((experience, index) => (
            <div key={index}>
              <p className="font-bold">{experience.companyName}</p>
              <p>Title: {experience.positionTitle}</p>
              <li>{experience.jobResponsibilities}</li>
              <li>Duration: {experience.dateFrom} - {experience.dateTo}</li>
            </div>
          ))}
        </>
      )}
    </form>
  );
}

export default Experience;  