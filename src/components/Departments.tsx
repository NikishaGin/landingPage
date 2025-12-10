import React, { useState } from 'react';
import styled from 'styled-components';
import {
    Brain,
    BarChart2,
    Code2,
    Cable,
    Activity,
    ArrowRight
} from 'lucide-react';
import { useTheme } from "../context/ThemeContext";
import { ModalRestructuring } from "./ModalRestructuring";
import { ModalBankruptcy } from "./ModalBankruptcy";
import { ModalEns } from "./ModalEns";
import { ModalDataAnalytics } from "./ModalDataAnalytics";
import { Section, Container, SectionTitle } from '../styles/SharedComponents';
import ModalProject from "./ModalProject.tsx";

const departments = [
    {
        icon: Brain,
        title: "Проектная деятельность",
        description: "Проектная деятельность Федерального масштаба в отраслях цифровой трансформации.",
        gradient: 'var(--gradient-primary)',
        shadowColor: 'rgba(255, 107, 107, 0.3)',
    },
    {
        icon: BarChart2,
        title: "Реструктуризация долга",
        description: "Выстраивание диалога с кредиторами, заинтересованными реструктуризацией задолженности.",
        gradient: 'var(--gradient-secondary)',
        shadowColor: 'rgba(78, 205, 196, 0.3)',
    },
    {
        icon: Activity,
        title: "Банкротство",
        description: "Основной фокус направлен на выявление проблемных зон в сфере обеспечения процедур банкротства, разработку механизмов преодоления.",
        gradient: 'var(--gradient-warm)',
        shadowColor: 'rgba(255, 217, 61, 0.3)',
    },
    {
        icon: Cable,
        title: "ЕНС",
        description: "Реализация системы автоматического сбора и анализа данных о качестве администрирования долга в условиях Е и обеспечения высокого качества поддержки клиента.",
        gradient: 'var(--gradient-cool)',
        shadowColor: 'rgba(107, 207, 127, 0.3)',
    },
    {
        icon: Code2,
        title: "ИТ",
        description: "Разработка программных продуктов, которые анализируют данные о налогоплательщиках передовыми математическими методами с применением ИИ.",
        gradient: 'linear-gradient(135deg, #FFB88C 0%, #FF6B6B 100%)',
        shadowColor: 'rgba(255, 184, 140, 0.3)',
    }
];

export const Departments = () => {
    const { isDark } = useTheme();
    const [selectedDept, setSelectedDept] = useState(null);

    const handleOpenModal = (dept) => setSelectedDept(dept);

    return (
        <StyledSection isDark={isDark} id="Направления">
            <Container>
                <SectionTitle>
                    Основные <span>направления</span>
                </SectionTitle>

                <CardsGrid>
                    {departments.map((dept, index) => (
                        <DepartmentCard
                            key={index}
                            dept={dept}
                            isDark={isDark}
                            onClick={() => handleOpenModal(dept)}
                        />
                    ))}
                </CardsGrid>
            </Container>

            {selectedDept?.title === "ИТ" && (
                <ModalDataAnalytics setSelectedDept={setSelectedDept} />
            )}

            {selectedDept?.title === "Реструктуризация долга" && (
                <ModalRestructuring setSelectedDept={setSelectedDept} />
            )}

            {selectedDept?.title === "Банкротство" && (
                <ModalBankruptcy setSelectedDept={setSelectedDept} />
            )}

            {selectedDept?.title === "ЕНС" && (
                <ModalEns setSelectedDept={setSelectedDept} />
            )}

            {selectedDept?.title === "Проектная деятельность" && (
                <ModalProject setSelectedDept={setSelectedDept} />
            )}
        </StyledSection>
    );
};

const DepartmentCard = ({ dept, isDark, onClick }) => {
    const Icon = dept.icon;

    return (
        <Card isDark={isDark} gradient={dept.gradient} onClick={onClick}>
          
            <TopBar gradient={dept.gradient} />

            <CardContent>
                <IconCircle gradient={dept.gradient} shadowColor={dept.shadowColor}>
                    <Icon size={24} />
                </IconCircle>

                <Title>{dept.title}</Title>
                <Description isDark={isDark}>{dept.description}</Description>

                <ActionButton>
                    <span>Открыть</span>
                    <ArrowRight size={18} className="arrow" />
                </ActionButton>
            </CardContent>
        </Card>
    );
};

const StyledSection = styled(Section)<{ isDark: boolean }>`
  background: ${({ isDark }) =>
    isDark
      ? 'linear-gradient(180deg, #1e293b 0%, #0f172a 100%)'
      : 'linear-gradient(135deg, #FFF5F5 0%, #F7F9FC 50%, #E8F5F2 100%)'};
  transition: background 0.3s ease;
  padding: 6rem 0;

  @media (max-width: 768px) {
    padding: 4rem 0;
  }
`;

const CardsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 1.5rem;
  max-width: 1600px;
  margin: 0 auto;

  @media (max-width: 1400px) {
    grid-template-columns: repeat(3, 1fr);
    gap: 1.5rem;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`;

const Card = styled.article<{ isDark: boolean; gradient: string }>`
  position: relative;
  display: flex;
  flex-direction: column;
  background: ${({ isDark }) =>
    isDark
      ? 'linear-gradient(135deg, rgba(15, 23, 42, 0.95) 0%, rgba(30, 41, 59, 0.95) 100%)'
      : 'white'};
  border-radius: 16px;
  overflow: hidden;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: ${({ isDark }) =>
    isDark
      ? '0 4px 12px rgba(0, 0, 0, 0.3)'
      : '0 2px 8px rgba(0, 0, 0, 0.08)'};
  border: 1px solid ${({ isDark }) => (isDark ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.06)')};

  &:hover {
    transform: translateY(-4px);
    box-shadow: ${({ isDark }) =>
      isDark
        ? '0 8px 24px rgba(0, 0, 0, 0.4)'
        : '0 4px 16px rgba(0, 0, 0, 0.12)'};
  }

  &:active {
    transform: translateY(-2px);
  }

  &:focus-visible {
    outline: 2px solid ${({ gradient }) => gradient};
    outline-offset: 2px;
  }

  @media (max-width: 768px) {
    border-radius: 12px;

    &:hover {
      transform: translateY(-2px);
    }
  }
`;

const TopBar = styled.div<{ gradient: string }>`
  height: 4px;
  background: ${({ gradient }) => gradient};
  width: 100%;
  flex-shrink: 0;
  transition: opacity 0.3s ease;
  opacity: 0.8;

  ${Card}:hover & {
    opacity: 1;
  }
`;

const CardContent = styled.div`
  padding: 2rem 1.75rem 1.75rem;
  display: flex;
  flex-direction: column;
  gap: 0.875rem;
  flex-grow: 1;

  @media (max-width: 768px) {
    padding: 1.75rem 1.5rem 1.5rem;
  }
`;

const IconCircle = styled.div<{ gradient: string; shadowColor: string }>`
  width: 56px;
  height: 56px;
  border-radius: 50%;
  background: ${({ gradient }) => gradient};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  box-shadow: 0 4px 12px ${({ shadowColor }) => shadowColor};
  transition: all 0.3s ease;

  svg {
    color: white;
    width: 26px;
    height: 26px;
  }

  ${Card}:hover & {
    box-shadow: 0 6px 18px ${({ shadowColor }) => shadowColor};
  }

  @media (max-width: 768px) {
    width: 48px;
    height: 48px;

    svg {
      width: 22px;
      height: 22px;
    }
  }
`;

const Title = styled.h3`
  font-family: 'Outfit', sans-serif;
  font-size: 1.2rem;
  font-weight: 700;
  color: var(--text-primary);
  line-height: 1.3;
  margin: 0;
  flex-shrink: 0;

  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
`;

const Description = styled.p<{ isDark: boolean }>`
  color: ${({ isDark }) => (isDark ? 'rgba(255, 255, 255, 0.7)' : 'var(--text-secondary)')};
  font-size: 0.9rem;
  line-height: 1.6;
  margin: 0;
  flex-grow: 1;
`;

const ActionButton = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  align-self: flex-start;
  flex-shrink: 0;
  padding: 0.7rem 1.4rem;
  background: linear-gradient(135deg, #f59e0b 0%, #f97316 100%);
  color: white;
  border-radius: 8px;
  font-weight: 600;
  font-size: 0.9rem;
  box-shadow: 0 2px 8px rgba(245, 158, 11, 0.25);
  transition: all 0.3s ease;

  .arrow {
    transition: transform 0.3s ease;
  }

  ${Card}:hover & {
    box-shadow: 0 4px 12px rgba(245, 158, 11, 0.35);

    .arrow {
      transform: translateX(3px);
    }
  }

  @media (max-width: 768px) {
    padding: 0.6rem 1.2rem;
    font-size: 0.85rem;
  }
`;

export default Departments;
