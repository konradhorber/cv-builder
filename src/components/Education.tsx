import { useState } from "react";

interface GeneralInfoProps {
    isEditing: boolean;
}

function Education({ isEditing }: GeneralInfoProps) {
    const [experiences, setExperiences] = useState([
        { 
        schoolName: "",
        titleOfStudy: "",
        graduationDate: ""
        }
    ]);

    const handleExperienceChange = (index: number, e: React.ChangeEvent<HTMLInputElement>) => {
        const updatedExperiences = experiences.map((experience, i) => 
            i === index 
                ? {...experience, [e.target.name]: e.target.value }
                : experience
        );
        
        setExperiences(updatedExperiences);
    };

    const addExperience = () => {
        setExperiences([
            ...experiences,
            { 
                schoolName: "",
                titleOfStudy: "",
                graduationDate: ""
            }
        ]);
    }

    return (
        <form>
            {isEditing ? (
                <>
                    {experiences.map((experience, index) => (
                        <div key={index}>
                            <label htmlFor="schoolName">School name:</label>
                            <input 
                                type="text" 
                                id="schoolName" 
                                name="schoolName"
                                value={experience.schoolName}
                                onChange={(e) => handleExperienceChange(index, e)}
                            />
                            <label htmlFor="titleOfStudy">Title of study:</label>
                            <input 
                                type="text"
                                id="titleOfStudy" 
                                name="titleOfStudy"
                                value={experience.titleOfStudy}
                                onChange={(e) => handleExperienceChange(index, e)}
                            />
                            <label htmlFor="graduationDate">Graduation date:</label>
                            <input 
                                type="date" 
                                id="graduationDate" 
                                name="graduationDate"
                                value={experience.graduationDate}
                                onChange={(e) => handleExperienceChange(index, e)}
                            />
                        </div>
                    ))}
                    <button type="button" onClick={addExperience}>
                        Add experience
                    </button>
                </>
            ) : (
                experiences.map((experience, index) => (
                    <div key={index}>
                        <p>School name: {experience.schoolName as string}</p>
                        <p>Title of study: {experience.titleOfStudy as string}</p>
                        <p>Graduation date: {experience.graduationDate as string}</p>
                    </div>
                ))
            )}
        </form>
    );
}

export default Education;