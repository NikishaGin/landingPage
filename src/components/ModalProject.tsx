import React, { useEffect, useState } from 'react';
import { X, User, CheckCircle2, Award, Users } from 'lucide-react';
import { useLockBodyScroll } from '../hooks/useLockBodyScroll';
import { useScroll } from '../context/ScrollContext';
import { useModal } from '../context/ModalContext';
import {
    ModalOverlay,
    ModalContent,
    CloseButton,
    Header,
    HeaderTitle,
    HeaderSubtitle,
    Content,
    CuratorSection,
    CuratorContainer,
    PhotoPlaceholder,
    CuratorPhoto,
    CuratorInfo,
    CuratorName,
    CuratorPosition,
    Divider,
    DepartmentSection,
    DepartmentHeader,
    DepartmentIcon,
    DepartmentTitle,
    HeadContainer,
    HeadPhotoPlaceholder,
    HeadPhoto,
    HeadInfo,
    HeadName,
    HeadPosition,
    SubSection,
    SubSectionTitle,
    BulletList,
    BulletItem,
    CTAButton, DepartmentDescription,
} from '../styles/ModalStyles';
import jemhugovaImage from '../images/jemhugova.jpg';
import suhaImage from '../images/suha.jpg';

interface ModalEnsProps {
    setSelectedDept: (dept: any) => void;
}

interface PersonPhotoProps {
    photo?: string;
    name: string;
    size: number;
    isCurator?: boolean;
}

const PersonPhoto: React.FC<PersonPhotoProps> = ({ photo, name, size, isCurator = false }) => {
    if (photo) {
        return isCurator ? (
            <CuratorPhoto src={photo} alt={name} />
        ) : (
            <HeadPhoto src={photo} alt={name} />
        );
    }

    const Placeholder = isCurator ? PhotoPlaceholder : HeadPhotoPlaceholder;
    return (
        <Placeholder>
            <User size={size} />
        </Placeholder>
    );
};

export const ModalProject: React.FC<ModalEnsProps> = ({ setSelectedDept }) => {
    useLockBodyScroll();

    const handleCloseModal = () => setSelectedDept(null);
    const { scrollToSection } = useScroll(handleCloseModal);
    const { setIsModalOpen } = useModal();

    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
        setIsModalOpen(true);

        return () => {
            setIsModalOpen(false);
        };
    }, [setIsModalOpen]);

    return (
        <ModalOverlay isVisible={isVisible} onClick={handleCloseModal}>
            <ModalContent isVisible={isVisible} onClick={(e) => e.stopPropagation()}>
                <CloseButton onClick={handleCloseModal}>
                    <X size={20} />
                </CloseButton>

                <Header>
                    <HeaderTitle>Проектная деятельность</HeaderTitle>
                </Header>

                <Content>
                    <CuratorSection>
                        <CuratorContainer>
                            <PersonPhoto photo={jemhugovaImage} name="Жемчугова Любовь Александровна" size={48} isCurator />
                            <CuratorInfo>
                                <CuratorName>Жемчугова Любовь Александровна</CuratorName>
                                <CuratorPosition>Заместитель начальника инспекции</CuratorPosition>
                                <DepartmentDescription>
                                    Проектная деятельность Федерального масштаба в отраслях цифровой трансформации.
                                </DepartmentDescription>
                            </CuratorInfo>
                        </CuratorContainer>
                    </CuratorSection>

                    <Divider />

                    <DepartmentSection>
                        <DepartmentHeader>
                            <DepartmentIcon>
                                <Users size={20} />
                            </DepartmentIcon>
                            <DepartmentTitle>Отдел управления проектами</DepartmentTitle>
                        </DepartmentHeader>

                        <HeadContainer>
                            <PersonPhoto photo={suhaImage} name="Суша Иван Сергеевич" size={36} />
                            <HeadInfo>
                                <HeadName>Суша Иван Сергеевич</HeadName>
                                <HeadPosition>Начальник отдела</HeadPosition>
                                <DepartmentDescription>
                                    Методологическая сопровождение
                                    сотрудников ФД, финансовая
                                    аналитика организаций.
                                    Автоматизация бизнес-процессов и
                                    аналитики
                                </DepartmentDescription>
                            </HeadInfo>
                        </HeadContainer>

                        <SubSection>
                            <SubSectionTitle>
                                <Award size={18} />
                                Преимущества работы в отделе
                            </SubSectionTitle>
                            <BulletList>
                                <BulletItem>
                                    <CheckCircle2 size={18} />
                                    <span>Быстрое освоение практических навыков в антикризисном управлении и корпоративных финансах</span>
                                </BulletItem>
                                <BulletItem>
                                    <CheckCircle2 size={18} />
                                    <span>Участие в разработке решений федерального уровня</span>
                                </BulletItem>
                                <BulletItem>
                                    <CheckCircle2 size={18} />
                                    <span>Опыт работы с масштабными и значимыми проектами</span>
                                </BulletItem>
                                <BulletItem>
                                    <CheckCircle2 size={18} />
                                    <span>Получение уникального профессионального опыта</span>
                                </BulletItem>
                            </BulletList>
                        </SubSection>

                        <SubSection>
                            <SubSectionTitle>
                                <Users size={18} />
                                Качества сотрудника
                            </SubSectionTitle>
                            <BulletList>
                                <BulletItem>
                                    <CheckCircle2 size={18} />
                                    <span>Аналитический склад ума</span>
                                </BulletItem>
                                <BulletItem>
                                    <CheckCircle2 size={18} />
                                    <span>Быстрая оценка рисков и обоснованные решения</span>
                                </BulletItem>
                                <BulletItem>
                                    <CheckCircle2 size={18} />
                                    <span>Работа с Big Data повышенная внимательность к деталям</span>
                                </BulletItem>
                                <BulletItem>
                                    <CheckCircle2 size={18} />
                                    <span>Стрессоустойчивость и скорость принятия решений в условиях дедлайнов</span>
                                </BulletItem>
                            </BulletList>
                        </SubSection>
                    </DepartmentSection>

                    <CTAButton onClick={() => scrollToSection('Контакты')}>
                        Хочу в команду
                    </CTAButton>
                </Content>
            </ModalContent>
        </ModalOverlay>
    );
};

export default ModalProject;
