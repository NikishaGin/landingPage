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
import vehovaImage from '../images/vehova.jpg';
import lonchakovImage from '../images/lonchakov.jpg';
import gurievImage from '../images/guriev.jpg';
import korhunovaImage from '../images/korhunova.jpg';

interface ModalRestructuringProps {
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

export const ModalRestructuring: React.FC<ModalRestructuringProps> = ({ setSelectedDept }) => {
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
          <HeaderTitle>Реструктуризация долга</HeaderTitle>
        </Header>

        <Content>
          <CuratorSection>
            <CuratorContainer>
              <PersonPhoto photo={vehovaImage} name="Вехова Анна Михайловна" size={48} isCurator />
              <CuratorInfo>
                <CuratorName>Вехова Анна Михайловна</CuratorName>
                <CuratorPosition>Заместитель начальника инспекции</CuratorPosition>
                  <DepartmentDescription>
                      Выстраивание диалога с кредиторами, заинтересованными реструктуризацией задолженности
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
              <DepartmentTitle>Отдел согласительных процедур</DepartmentTitle>
            </DepartmentHeader>
            <HeadContainer>
              <PersonPhoto photo={lonchakovImage} name="Лончаков Алексей Владимирович" size={36} />
              <HeadInfo>
                <HeadName>Лончаков Алексей Владимирович</HeadName>
                <HeadPosition>Начальник отдела</HeadPosition>
                  <DepartmentDescription>
                      Предоставление мер поддержки бизнесу в виде отсрочки/рассрочки, заключения мирового соглашения,
                      отложения мер взыскания.
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
                  <span>Возможность приносить действительную пользу для бизнеса и экономики страны в целом</span>
                </BulletItem>
                <BulletItem>
                  <CheckCircle2 size={18} />
                  <span>Получение уникальных навыков и профессиональных знаний в области реструктуризации долга</span>
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
                  <span>Клиентоориентированность</span>
                </BulletItem>
                <BulletItem>
                  <CheckCircle2 size={18} />
                  <span>Инициативность</span>
                </BulletItem>
                <BulletItem>
                  <CheckCircle2 size={18} />
                  <span>Умение работать на результат</span>
                </BulletItem>
              </BulletList>
            </SubSection>
          </DepartmentSection>

          <DepartmentSection>
            <DepartmentHeader>
              <DepartmentIcon>
                <Users size={20} />
              </DepartmentIcon>
              <DepartmentTitle>Отдел сопровождения процедур изменения сроков уплаты</DepartmentTitle>
            </DepartmentHeader>


            <HeadContainer>
              <PersonPhoto photo={korhunovaImage} name="Коршунова Ангелина Викторовна" size={36} />
              <HeadInfo>
                <HeadName>Коршунова Ангелина Викторовна</HeadName>
                <HeadPosition>Начальник отдела</HeadPosition>
                  <DepartmentDescription>
                      Поддержка по гл. 9 НК РФ; согласование решений об отсрочке/рассрочке от региональных УФНС.
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
                  <span>Возможность влияния на поддержку бизнеса и налоговую стабильность</span>
                </BulletItem>
                <BulletItem>
                  <CheckCircle2 size={18} />
                  <span>Освоение экспертных методик анализа компаний</span>
                </BulletItem>
                <BulletItem>
                  <CheckCircle2 size={18} />
                  <span>Формирование реальных решений для бюджета и бизнеса</span>
                </BulletItem>
                <BulletItem>
                  <CheckCircle2 size={18} />
                  <span>Получение уникального опыта в аналитике и отчётности</span>
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
                  <span>Аналитик — системное мышление + детализация</span>
                </BulletItem>
                <BulletItem>
                  <CheckCircle2 size={18} />
                  <span>Надёжность — ответственность + стрессоустойчивость</span>
                </BulletItem>
                <BulletItem>
                  <CheckCircle2 size={18} />
                  <span>Чёткость — грамотная письменная и устная речь</span>
                </BulletItem>
                <BulletItem>
                  <CheckCircle2 size={18} />
                  <span>Самоорганизация — дисциплина + инициативность</span>
                </BulletItem>
                <BulletItem>
                  <CheckCircle2 size={18} />
                  <span>Командный игрок — коммуникабельность + гибкость</span>
                </BulletItem>
              </BulletList>
            </SubSection>
          </DepartmentSection>

          <DepartmentSection>
            <DepartmentHeader>
              <DepartmentIcon>
                <Users size={20} />
              </DepartmentIcon>
              <DepartmentTitle>Отдел мониторинга имущественного обеспечения</DepartmentTitle>
            </DepartmentHeader>
            <HeadContainer>
              <PersonPhoto photo={gurievImage} name="Гурьев Роман Игоревич" size={36} />
              <HeadInfo>
                <HeadName>Гурьев Роман Игоревич</HeadName>
                <HeadPosition>Начальник отдела</HeadPosition>
                  <DepartmentDescription>
                      Имущественное сопровождение обязательств НП при предоставлении отсрочки/рассрочки (гл. 9 НК РФ).
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
                  <span>Возможность участия в приоритетном проекте МИУДОЛ</span>
                </BulletItem>
                <BulletItem>
                  <CheckCircle2 size={18} />
                  <span>Интересный, понятный функционал</span>
                </BulletItem>
                <BulletItem>
                  <CheckCircle2 size={18} />
                  <span>Видимые результаты, как скорые, так и долгосрочные</span>
                </BulletItem>
                <BulletItem>
                  <CheckCircle2 size={18} />
                  <span>Позитивные коллеги</span>
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
                  <span>Нацеленность на результат</span>
                </BulletItem>
                <BulletItem>
                  <CheckCircle2 size={18} />
                  <span>Умение работать в многозадачном режиме</span>
                </BulletItem>
                <BulletItem>
                  <CheckCircle2 size={18} />
                  <span>Усидчивость в аналитике и монотонных задачах</span>
                </BulletItem>
                <BulletItem>
                  <CheckCircle2 size={18} />
                  <span>Эффективность как в командной, так и в самостоятельной работе</span>
                </BulletItem>
                <BulletItem>
                  <CheckCircle2 size={18} />
                  <span>Спокойствие и оптимизм</span>
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

export default ModalRestructuring;
