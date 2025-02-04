import { useState } from "react";

function GeneralInfo() {
    const [isEditing, setIsEditing] = useState(true);
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

    const toggleEditing = () => {
        setIsEditing(!isEditing);
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
            <button type="button" onClick={toggleEditing}>
                Toggle editing
            </button>
        </form>
    );
}

export default GeneralInfo;