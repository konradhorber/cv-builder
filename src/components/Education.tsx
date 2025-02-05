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

    const removeExperience = (index: number) => {
        setExperiences(experiences.filter((_, i) => i !== index));
    }

    return (
        <form className="w-full">
            {isEditing ? (
                <div className="max-w-lg">
                    {experiences.map((experience, index) => (
                        <div key={index} className="mb-6">
                            <div className="mb-4 flex flex-col md:flex-row md:items-center">
                                <label htmlFor="schoolName" className="mb-2 md:mb-0 md:w-1/4">School name:</label>
                                <input 
                                    type="text" 
                                    id="schoolName" 
                                    name="schoolName"
                                    value={experience.schoolName}
                                    onChange={(e) => handleExperienceChange(index, e)}
                                    className="w-full md:w-3/4 border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>
                            <div className="mb-4 flex flex-col md:flex-row md:items-center">
                                <label htmlFor="titleOfStudy" className="mb-2 md:mb-0 md:w-1/4">Title of study:</label>
                                <input 
                                    type="text"
                                    id="titleOfStudy" 
                                    name="titleOfStudy"
                                    value={experience.titleOfStudy}
                                    onChange={(e) => handleExperienceChange(index, e)}
                                    className="w-full md:w-3/4 border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>
                            <div className="mb-4 flex flex-col md:flex-row md:items-center">
                                <label htmlFor="graduationDate" className="mb-2 md:mb-0 md:w-1/4">Graduation date:</label>
                                <input 
                                    type="date" 
                                    id="graduationDate" 
                                    name="graduationDate"
                                    value={experience.graduationDate}
                                    onChange={(e) => handleExperienceChange(index, e)}
                                    className="w-full md:w-3/4 border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>
                            {index > 0 && (
                                <button 
                                    type="button" 
                                    onClick={() => removeExperience(index)}
                                    className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                                >
                                 Remove experience
                             </button>
                            )}                           
                        </div>
                    ))}
                    <button 
                        type="button" 
                        onClick={addExperience}
                        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                    >
                        Add experience
                    </button>
                </div>
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