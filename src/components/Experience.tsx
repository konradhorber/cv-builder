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
    <form>
      {isEditing ? (
        <>
          {experiences.map((experience, index) => (
            <div key={index}>
              <label htmlFor={`companyName-${index}`}>Company name:</label>
              <input
                type="text"
                id={`companyName-${index}`}
                name="companyName"
                value={experience.companyName}
                onChange={(e) => updateItem(index, e)}
              />

              <label htmlFor={`positionTitle-${index}`}>Position title:</label>
              <input
                type="text"
                id={`positionTitle-${index}`}
                name="positionTitle"
                value={experience.positionTitle}
                onChange={(e) => updateItem(index, e)}
              />

              <label htmlFor={`jobResponsibilities-${index}`}>Job responsibilities:</label>
              <textarea
                id={`jobResponsibilities-${index}`}
                name="jobResponsibilities"
                value={experience.jobResponsibilities}
                onChange={(e) => updateItem(index, e)}
              ></textarea>

              <label htmlFor={`dateFrom-${index}`}>Date from:</label>
              <input
                type="date"
                id={`dateFrom-${index}`}
                name="dateFrom"
                value={experience.dateFrom}
                onChange={(e) => updateItem(index, e)}
              />

              <label htmlFor={`dateTo-${index}`}>Date to:</label>
              <input
                type="date"
                id={`dateTo-${index}`}
                name="dateTo"
                value={experience.dateTo}
                onChange={(e) => updateItem(index, e)}
              />

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
        </>
      ) : (
        <>
          {experiences.map((experience, index) => (
            <div key={index}>
              <p>Company name: {experience.companyName}</p>
              <p>Position title: {experience.positionTitle}</p>
              <p>Job responsibilities: {experience.jobResponsibilities}</p>
              <p>Date from: {experience.dateFrom}</p>
              <p>Date to: {experience.dateTo}</p>
            </div>
          ))}
        </>
      )}
    </form>
  );
}

export default Experience;  