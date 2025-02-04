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
        <form>
            {isEditing ? (
                <>
                    <div>
                        <label htmlFor="name">Name:</label>
                        <input 
                            type="text" 
                            id="name" 
                            name="name"
                            value={ formData.name }
                            onChange={ handleChange }    
                        />
                    </div>
                    <div>
                        <label htmlFor="email">Email:</label>
                        <input 
                            type="email" 
                            id="email" 
                            name="email"
                            value={ formData.email }
                            onChange={ handleChange } 
                        />
                    </div>
                    <div>
                        <label htmlFor="phone">Phone:</label>
                        <input 
                            type="tel" 
                            id="phone" 
                            name="phone"
                            value={ formData.phone }
                            onChange={ handleChange } 
                        />
                    </div>
                </>
            ) : (
                <div>
                    <p>Name: {formData.name as string}</p>
                    <p>Email: {formData.email as string}</p>
                    <p>Phone: {formData.phone as string}</p>
                </div>
            )}

        </form>
    );
}

export default GeneralInfo;