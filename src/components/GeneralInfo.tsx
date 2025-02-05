import { useState } from "react";

interface GeneralInfoProps {
    isEditing: boolean;
}

function GeneralInfo({ isEditing }: GeneralInfoProps) {
    const [formData, setFormData] = useState({ 
        name: "",
        email: "",
        phone: ""
     });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    return (
        <form className="w-full">
            {isEditing ? (
                <div className="max-w-lg">
                    <div className="mb-4 flex flex-col md:flex-row md:items-center">
                        <label className="mb-2 md:mb-0 md:w-1/4" htmlFor="name">Name:</label>
                        <input 
                            className="w-full md:w-3/4 border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            type="text" 
                            id="name" 
                            name="name"
                            value={ formData.name }
                            onChange={ handleChange }    
                        />
                    </div>
                    <div className="mb-4 flex flex-col md:flex-row md:items-center">
                        <label className="mb-2 md:mb-0 md:w-1/4" htmlFor="email">Email:</label>
                        <input 
                            className="w-full md:w-3/4 border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            type="email" 
                            id="email" 
                            name="email"
                            value={ formData.email }
                            onChange={ handleChange } 
                        />
                    </div>
                    <div className="mb-4 flex flex-col md:flex-row md:items-center">
                        <label className="mb-2 md:mb-0 md:w-1/4" htmlFor="phone">Phone:</label>
                        <input 
                            className="w-full md:w-3/4 border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            type="tel" 
                            id="phone" 
                            name="phone"
                            value={ formData.phone }
                            onChange={ handleChange } 
                        />
                    </div>
                </div>
            ) : (
                <div className="w-full flex flex-row justify-center items-center">
                    <p className="mx-1 md:mx-4">{formData.name as string}</p>
                    <p className="mx-1 md:mx-4">{formData.email as string}</p>
                    <p className="mx-1 md:mx-4">{formData.phone as string}</p>
                </div>
            )}

        </form>
    );
}

export default GeneralInfo;