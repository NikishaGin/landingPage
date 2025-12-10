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
import boim2Image from '../images/boim2.jpg';
import sedov2Image from '../images/sedov2.jpg';
import silak2Image from '../images/silak2.jpg';
import vanatov2Image from '../images/vanatov2.jpg';

interface ModalDataAnalyticsProps {
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

export const ModalDataAnalytics: React.FC<ModalDataAnalyticsProps> = ({ setSelectedDept }) => {
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
          <HeaderTitle>Информационные технологии</HeaderTitle>
        </Header>

        <Content>
          <CuratorSection>
            <CuratorContainer>
              <PersonPhoto photo={boim2Image} name="Боим Александр Юрьевич" size={48} isCurator />
              <CuratorInfo>
                <CuratorName>Боим Александр Юрьевич</CuratorName>
                <CuratorPosition>Заместитель начальника инспекции</CuratorPosition>
                  <DepartmentDescription>
                      Анализ больших данных и разработка цифровых решений
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
              <DepartmentTitle>Отдел анализа больших данных</DepartmentTitle>
            </DepartmentHeader>

            <HeadContainer>
              <PersonPhoto photo={vanatov2Image} name="Ванатов Кирилл Викторович" size={36} />
              <HeadInfo>
                <HeadName>Ванатов Кирилл Викторович</HeadName>
                <HeadPosition>Начальник отдела</HeadPosition>
                  <DepartmentDescription>
                      Разработка SQL-скриптов, выгрузка данных по заявкам других отделов ЦА и МИУДОЛ, обработка данных при помощи Python и Power Query.
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
                  <span>Оперативный и легкий вход в сферу IT</span>
                </BulletItem>
                <BulletItem>
                  <CheckCircle2 size={18} />
                  <span>Действительно интересные и нестандартные задачи</span>
                </BulletItem>
                <BulletItem>
                  <CheckCircle2 size={18} />
                  <span>Эффективное распределение нагрузки с подходом kanban</span>
                </BulletItem>
                <BulletItem>
                  <CheckCircle2 size={18} />
                  <span>Быстрое развитие hard и soft skills под руководством опытных наставников</span>
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
                  <span>Усидчивость</span>
                </BulletItem>
                <BulletItem>
                  <CheckCircle2 size={18} />
                  <span>Аналитическое мышление</span>
                </BulletItem>
                <BulletItem>
                  <CheckCircle2 size={18} />
                  <span>Многозадачность</span>
                </BulletItem>
                <BulletItem>
                  <CheckCircle2 size={18} />
                  <span>Умение коммуницировать с заказчиками</span>
                </BulletItem>
              </BulletList>
            </SubSection>
          </DepartmentSection>

          <DepartmentSection>
            <DepartmentHeader>
              <DepartmentIcon>
                <Users size={20} />
              </DepartmentIcon>
              <DepartmentTitle>Отдел информационных технологий и защиты информации</DepartmentTitle>
            </DepartmentHeader>

            <HeadContainer>
              <PersonPhoto photo={silak2Image} name="Силак Сергей Николаевич" size={36} />
              <HeadInfo>
                <HeadName>Силак Сергей Николаевич</HeadName>
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
                  <span>Получение новых знаний и опыта в области информационных технологий и защиты информации</span>
                </BulletItem>
                <BulletItem>
                  <CheckCircle2 size={18} />
                  <span>Работа над крупными IT-проектами федерального уровня</span>
                </BulletItem>
                <BulletItem>
                  <CheckCircle2 size={18} />
                  <span>Работа в молодом, сплоченном коллективе</span>
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
                  <span>Общительность</span>
                </BulletItem>
                <BulletItem>
                  <CheckCircle2 size={18} />
                  <span>Искреннее желание помогать</span>
                </BulletItem>
                <BulletItem>
                  <CheckCircle2 size={18} />
                  <span>Не бояться задавать вопросы более опытным коллегам</span>
                </BulletItem>
                <BulletItem>
                  <CheckCircle2 size={18} />
                  <span>Позитивный настрой</span>
                </BulletItem>
              </BulletList>
            </SubSection>
          </DepartmentSection>

          <DepartmentSection>
            <DepartmentHeader>
              <DepartmentIcon>
                <Users size={20} />
              </DepartmentIcon>
              <DepartmentTitle>Отдел разработки и развития сервисов</DepartmentTitle>
            </DepartmentHeader>

            <HeadContainer>
              <PersonPhoto photo={sedov2Image} name="Седов Никита Владимирович" size={36} />
              <HeadInfo>
                <HeadName>Седов Никита Владимирович</HeadName>
                <HeadPosition>Начальник отдела</HeadPosition>
                  <DepartmentDescription>
                      Проектирование, разработка, внедрение и поддержка цифровых решений, направленных на автоматизацию процессов, повышение эффективности и улучшение пользовательского опыта.
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
                  <span>Мы всегда на шаг впереди, внедряя передовые технологии</span>
                </BulletItem>
                <BulletItem>
                  <CheckCircle2 size={18} />
                  <span>Возможности для роста: здесь вы сможете осваивать новые инструменты и становиться уникальным специалистом</span>
                </BulletItem>
                <BulletItem>
                  <CheckCircle2 size={18} />
                  <span>Команда единомышленников: мы ценим каждый вклад и стремимся к совершенству</span>
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
                  <span>Системное мышление — умение видеть процесс целиком</span>
                </BulletItem>
                <BulletItem>
                  <CheckCircle2 size={18} />
                  <span>Командная работа + ответственность за результат</span>
                </BulletItem>
                <BulletItem>
                  <CheckCircle2 size={18} />
                  <span>Ориентация на пользу — создание удобных сервисов</span>
                </BulletItem>
                <BulletItem>
                  <CheckCircle2 size={18} />
                  <span>Гибкость — готовность к изменениям и обучению</span>
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

export default ModalDataAnalytics;
