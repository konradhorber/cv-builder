import { useState } from "react";

interface GeneralInfoProps {
    isEditing: boolean;
}

function Experience({ isEditing }: GeneralInfoProps) {
  // An array to hold multiple work experience objects.
  const [experiences, setExperiences] = useState([
    {
      companyName: "",
      positionTitle: "",
      jobResponsibilities: "",
      dateFrom: "",
      dateTo: ""
    }
  ]);

  // Generic change handler that works for both input and textarea elements.
  const handleExperienceChange = (
    index: number,
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const updatedExperiences = experiences.map((experience, i) =>
      i === index
        ? { ...experience, [e.target.name]: e.target.value }
        : experience
    );
    setExperiences(updatedExperiences);
  };

  // Adds a new blank experience entry.
  const addExperience = () => {
    setExperiences([
      ...experiences,
      {
        companyName: "",
        positionTitle: "",
        jobResponsibilities: "",
        dateFrom: "",
        dateTo: ""
      }
    ]);
  };

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
                onChange={(e) => handleExperienceChange(index, e)}
              />

              <label htmlFor={`positionTitle-${index}`}>Position title:</label>
              <input
                type="text"
                id={`positionTitle-${index}`}
                name="positionTitle"
                value={experience.positionTitle}
                onChange={(e) => handleExperienceChange(index, e)}
              />

              <label htmlFor={`jobResponsibilities-${index}`}>Job responsibilities:</label>
              <textarea
                id={`jobResponsibilities-${index}`}
                name="jobResponsibilities"
                value={experience.jobResponsibilities}
                onChange={(e) => handleExperienceChange(index, e)}
              ></textarea>

              <label htmlFor={`dateFrom-${index}`}>Date from:</label>
              <input
                type="date"
                id={`dateFrom-${index}`}
                name="dateFrom"
                value={experience.dateFrom}
                onChange={(e) => handleExperienceChange(index, e)}
              />

              <label htmlFor={`dateTo-${index}`}>Date to:</label>
              <input
                type="date"
                id={`dateTo-${index}`}
                name="dateTo"
                value={experience.dateTo}
                onChange={(e) => handleExperienceChange(index, e)}
              />
            </div>
          ))}
          <button type="button" onClick={addExperience}>
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