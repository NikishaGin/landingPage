import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import {ThemeProvider} from "./context/ThemeContext";
import {ScrollProvider} from "./context/ScrollContext";
import {ModalProvider} from "./context/ModalContext";

createRoot(document.getElementById('root')!).render(
    <ScrollProvider>
        <ThemeProvider>
            <ModalProvider>
                <StrictMode>
                    <App/>
                </StrictMode>
            </ModalProvider>
        </ThemeProvider>
    </ScrollProvider>
);
