import { useItemList } from "../hooks/useItemList";

interface EditingStatus {
    isEditing: boolean;
}

interface EducationExperience {
    schoolName: string;
    titleOfStudy: string;
    graduationDate: string;
}

function Education({ isEditing }: EditingStatus) {
    const defaultExperience: EducationExperience = {
        schoolName: "",
        titleOfStudy: "",
        graduationDate: "",
    };

    const { items: educationExperiences, addItem, removeItem, updateItem } = useItemList<EducationExperience>([defaultExperience]);

    return (
        <form className="w-full">
            {isEditing ? (
                <div className="max-w-lg">
                    {educationExperiences.map((experience, index) => (
                        <div key={index} className="mb-6">
                            <div className="mb-4 flex flex-col md:flex-row md:items-center">
                                <label htmlFor={`schoolName-${index}`} className="mb-2 md:mb-0 md:w-1/4">School name:</label>
                                <input 
                                    type="text" 
                                    id={`schoolName-${index}`} 
                                    name="schoolName"
                                    value={experience.schoolName}
                                    onChange={(e) => updateItem(index, e)}
                                    className="w-full md:w-3/4 border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>
                            <div className="mb-4 flex flex-col md:flex-row md:items-center">
                                <label htmlFor={`titleOfStudy-${index}`} className="mb-2 md:mb-0 md:w-1/4">Title of study:</label>
                                <input 
                                    type="text"
                                    id={`titleOfStudy-${index}`} 
                                    name="titleOfStudy"
                                    value={experience.titleOfStudy}
                                    onChange={(e) => updateItem(index, e)}
                                    className="w-full md:w-3/4 border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>
                            <div className="mb-4 flex flex-col md:flex-row md:items-center">
                                <label htmlFor={`graduationDate-${index}`} className="mb-2 md:mb-0 md:w-1/4">Graduation date:</label>
                                <input 
                                    type="date" 
                                    id={`graduationDate-${index}`} 
                                    name="graduationDate"
                                    value={experience.graduationDate}
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
                    <button 
                        type="button" 
                        onClick={() => addItem(defaultExperience)}
                        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                    >
                        Add experience
                    </button>
                </div>
            ) : (
                educationExperiences.map((experience, index) => (
                    <div key={index} className="flex flex-col">
                        <p className="font-bold">{experience.schoolName as string}</p>
                        <li>{experience.titleOfStudy as string}</li>
                        <li>Graduation date: {experience.graduationDate as string}</li>
                    </div>
                ))
            )}
        </form>
    );
}

export default Education;