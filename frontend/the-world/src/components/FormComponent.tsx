import React, { useState } from 'react';

function FormComponent() {
    const [inputValue, setInputValue] = useState('');
    const [photoID, setPhotoID] = useState<number>(-1);
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value);
    };
    const handleSave = () => {
        try {
            // Convert value to a number before setting it as the state value for photoID
            setPhotoID(Number(inputValue));
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div>
            <input
                type="text"
                value={inputValue}
                onChange={handleChange}
                placeholder="Enter Photo ID"
            />
            <button onClick={handleSave}>Save</button>
            <p>Saved content: {photoID}</p>
        </div>
    );
}

export default FormComponent;
/*
function setInputValue(value: string, setPhotoID: (value: number) => void) {
    // Implement the logic to set the input value
    // For example, you can use the useState hook to update the state
    // store the value in the state as PhotoID
    try {
        // Convert value to a number before setting it as the state value for photoID
        setPhotoID(Number(value));
    } catch (error) {
        console.error(error);
    }
}
*/
