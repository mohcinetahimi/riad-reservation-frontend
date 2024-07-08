// OpenContext.js
import React, { createContext, useState } from 'react';

export const OpenContext = createContext();

export const OpenProvider = ({ children }) => {
    const [open, setOpen] = useState(true);

    return (
        <OpenContext.Provider value={{ open, setOpen }}>
            {children}
        </OpenContext.Provider>
    );
};
