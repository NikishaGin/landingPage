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
  DepartmentDescription,
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
  CTAButton,
} from '../styles/ModalStyles';
import babinov2Image from '../images/babinov2.jpg';
import egorovaImage from '../images/egorova.jpg';
import akulovaImage from '../images/akulova.jpg';

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

export const ModalEns: React.FC<ModalEnsProps> = ({ setSelectedDept }) => {
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
          <HeaderTitle>ЕНС</HeaderTitle>
        </Header>

        <Content>
          <CuratorSection>
            <CuratorContainer>
              <PersonPhoto photo={babinov2Image} name="Бабинов Семен Сергеевич" size={48} isCurator />
              <CuratorInfo>
                <CuratorName>Бабинов Семен Сергеевич</CuratorName>
                <CuratorPosition>Заместитель начальника инспекции</CuratorPosition>
                  <DepartmentDescription>
                      Реализация системы автоматического сбора и анализа данных о качестве администрирования долга
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
              <DepartmentTitle>Отдел сопровождения ЕНС (Расчеты с бюджетом)</DepartmentTitle>
            </DepartmentHeader>

            <HeadContainer>
              <PersonPhoto photo={akulovaImage} name="Акулова Анна Александровна" size={36} />
              <HeadInfo>
                <HeadName>Акулова Анна Александровна</HeadName>
                <HeadPosition>Начальник отдела</HeadPosition>
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
                  <span>Взаимодействие с финансовыми органами субъектов РФ</span>
                </BulletItem>
                <BulletItem>
                  <CheckCircle2 size={18} />
                  <span>Ведение бюджетного учета в УФНС</span>
                </BulletItem>
                <BulletItem>
                  <CheckCircle2 size={18} />
                  <span>Работа с Федеральным казначейством</span>
                </BulletItem>
                <BulletItem>
                  <CheckCircle2 size={18} />
                  <span>Уточнение платежных документов</span>
                </BulletItem>
                <BulletItem>
                  <CheckCircle2 size={18} />
                  <span>Контроль ведения карточек налоговых обязанностей</span>
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
                  <span>Оптимизм и активная жизненная позиция</span>
                </BulletItem>
                <BulletItem>
                  <CheckCircle2 size={18} />
                  <span>Экстравертность (коммуникабельность, открытость)</span>
                </BulletItem>
                <BulletItem>
                  <CheckCircle2 size={18} />
                  <span>Усидчивость и концентрация на задачах</span>
                </BulletItem>
                <BulletItem>
                  <CheckCircle2 size={18} />
                  <span>Аналитическое мышление</span>
                </BulletItem>
                <BulletItem>
                  <CheckCircle2 size={18} />
                  <span>Гибкость (адаптивность к изменениям)</span>
                </BulletItem>
              </BulletList>
            </SubSection>
          </DepartmentSection>

          <DepartmentSection>
            <DepartmentHeader>
              <DepartmentIcon>
                <Users size={20} />
              </DepartmentIcon>
              <DepartmentTitle>Аналитический отдел</DepartmentTitle>
            </DepartmentHeader>
            <HeadContainer>
              <PersonPhoto photo={egorovaImage} name="Егорова Вера Викторовна" size={36} />
              <HeadInfo>
                <HeadName>Егорова Вера Викторовна</HeadName>
                <HeadPosition>Начальник отдела</HeadPosition>
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
                  <span>Развитие аналитики и Excel на реальных задачах</span>
                </BulletItem>
                <BulletItem>
                  <CheckCircle2 size={18} />
                  <span>Работа с big data и всероссийскими проектами</span>
                </BulletItem>
                <BulletItem>
                  <CheckCircle2 size={18} />
                  <span>Подготовка статистики для топ-уровня</span>
                </BulletItem>
                <BulletItem>
                  <CheckCircle2 size={18} />
                  <span>Освоение налоговой отчётности в дружелюбном коллективе</span>
                </BulletItem>
                <BulletItem>
                  <CheckCircle2 size={18} />
                  <span>Реализация творческого потенциала</span>
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
                  <span>Аналитическое мышление</span>
                </BulletItem>
                <BulletItem>
                  <CheckCircle2 size={18} />
                  <span>Навыки работы с MS Office (Excel, Word, PowerPoint)</span>
                </BulletItem>
                <BulletItem>
                  <CheckCircle2 size={18} />
                  <span>Готовность обучаться и развиваться</span>
                </BulletItem>
                <BulletItem>
                  <CheckCircle2 size={18} />
                  <span>Коммуникабельность и умение работать в команде</span>
                </BulletItem>
                <BulletItem>
                  <CheckCircle2 size={18} />
                  <span>Внимательность к деталям и результативность</span>
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

export default ModalEns;
