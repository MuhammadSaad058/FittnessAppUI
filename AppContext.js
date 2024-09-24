import React, { createContext, useState } from 'react';

// Create a Context
export const AppContext = createContext();

// Create a Provider Component
export const AppProvider = ({ children }) => {
    const [cnic, setCnic] = useState('');
    const [name, setName] = useState('');
    const [regno, setRegno] = useState('');
    const [className, setClassName] = useState('');
    const [selectedNationality, setSelectedNationality] = useState('');
    const [selectedTraining, setSelectedTraining] = useState(null);

    return (
        <AppContext.Provider value={{ 
            cnic, setCnic,
            name, setName, 
            regno, setRegno, 
            className, setClassName, 
            selectedNationality, setSelectedNationality ,
            selectedTraining, setSelectedTraining
        }}>
            {children}
        </AppContext.Provider>
    );
};
