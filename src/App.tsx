import React from 'react';
import styled from "styled-components";
import {Header} from "./components/Header";
import {Welcome} from "./components/Welcome";
import DirectorMessage from "./components/DirectorMessage";
import {Departments} from "./components/Departments";
import {Benefits} from "./components/Benefits";
import {Contact} from "./components/Contact";

const AppWrapper = styled.div`
  min-height: 100vh;
  color: white;
`;

function App() {
    return (
        <AppWrapper>
            <Header/>
            {/* Welcome Section */}
            <Welcome/>

            {/* Обращение начальника */}
            <DirectorMessage/>

            {/* Направления */}
            <Departments/>

            {/* Гарантии и преимущества */}
            <Benefits/>

            {/* Контакты */}
            <Contact/>
        </AppWrapper>
    );
}

export default App;


