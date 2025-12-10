// context/ScrollContext.tsx
import React, {createContext, useCallback, useContext} from 'react';

type ScrollContextType = {
    scrollToSection: (id: string) => void;
};

const ScrollContext = createContext<ScrollContextType | undefined>(undefined);

export const ScrollProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <ScrollContext.Provider value={{ scrollToSection }}>
            {children}
        </ScrollContext.Provider>
    );
};

// export const useScroll = () => {
//     const context = useContext(ScrollContext);
//     if (!context) {
//         throw new Error('useScroll must be used within a ScrollProvider');
//     }
//     return context;
// };

export const useScroll = (onBeforeScroll?: () => void) => {
    const scrollToSection = useCallback((id: string) => {
        if (onBeforeScroll) onBeforeScroll();

        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    }, [onBeforeScroll]);

    return { scrollToSection };
};