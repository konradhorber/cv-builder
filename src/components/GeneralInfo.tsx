import { useItemList } from "../hooks/useItemList";

interface EditingStatus {
    isEditing: boolean;
}

interface GeneralInfo {
    name: string;
    email: string;
    phone: string;
}

function GeneralInfo({ isEditing }: EditingStatus) {
    const defaultInfo: GeneralInfo = {
        name: "",
        email: "",
        phone: "",
    };

    const { items: generalInfoData, updateItem } = useItemList<GeneralInfo>([defaultInfo]);

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
                            value={ generalInfoData[0].name }
                            onChange={ (e) => updateItem(0,e) }    
                        />
                    </div>
                    <div className="mb-4 flex flex-col md:flex-row md:items-center">
                        <label className="mb-2 md:mb-0 md:w-1/4" htmlFor="email">Email:</label>
                        <input 
                            className="w-full md:w-3/4 border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            type="email" 
                            id="email" 
                            name="email"
                            value={ generalInfoData[0].email }
                            onChange={ (e) => updateItem(0,e) } 
                        />
                    </div>
                    <div className="mb-4 flex flex-col md:flex-row md:items-center">
                        <label className="mb-2 md:mb-0 md:w-1/4" htmlFor="phone">Phone:</label>
                        <input 
                            className="w-full md:w-3/4 border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            type="tel" 
                            id="phone" 
                            name="phone"
                            value={ generalInfoData[0].phone }
                            onChange={ (e) => updateItem(0,e) } 
                        />
                    </div>
                </div>
            ) : (
                <div className="w-full flex flex-row justify-center items-center">
                    <p className="mx-1 md:mx-4">{generalInfoData[0].name as string}</p>
                    <p className="mx-1 md:mx-4">{generalInfoData[0].email as string}</p>
                    <p className="mx-1 md:mx-4">{generalInfoData[0].phone as string}</p>
                </div>
            )}

        </form>
    );
}

export default GeneralInfo;