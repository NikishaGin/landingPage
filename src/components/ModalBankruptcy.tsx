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
import tichinskaiImage from '../images/tichinskai.jpg';
import kalinin2Image from '../images/kalinin2.jpg';
import arvinImage from '../images/arvin.jpg';
import savhenkoImage from '../images/savhenko.jpg';
import usoImage from '../images/uso.jpg';
import gulakovImage from '../images/gulakov.jpg';


interface ModalBankruptcyProps {
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

export const ModalBankruptcy: React.FC<ModalBankruptcyProps> = ({ setSelectedDept }) => {
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
          <HeaderTitle>Банкротство</HeaderTitle>
        </Header>

        <Content>
          <CuratorSection>
            <CuratorContainer>
              <PersonPhoto photo={tichinskaiImage} name="Тычинская Екатерина Алексеевна" size={48} isCurator />
              <CuratorInfo>
                <CuratorName>Тычинская Екатерина Алексеевна</CuratorName>
                <CuratorPosition>Заместитель начальника инспекции</CuratorPosition>
                  <DepartmentDescription>
                      Работа в соответствии с ФЗ №127 «О банкротстве», сопровождение процедур и защита интересов
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
              <DepartmentTitle>Отдел дистанционного мониторинга процедур банкротства</DepartmentTitle>
            </DepartmentHeader>

            <HeadContainer>
              <PersonPhoto photo={kalinin2Image} name="Калинин Михаил Алексеевич" size={36} />
              <HeadInfo>
                <HeadName>Калинин Михаил Алексеевич</HeadName>
                <HeadPosition>Начальник отдела</HeadPosition>
                  <DepartmentDescription>
                      Работа в соответствии с ФЗ №127 «О банкротстве», нормативными актами и указаниями ФНС. Анализ данных в Excel. Дистанционный мониторинг процедур.
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
                  <span>Изучение ФЗ-127 "О банкротстве" и сопутствующих нормативных актов</span>
                </BulletItem>
                <BulletItem>
                  <CheckCircle2 size={18} />
                  <span>Развитие навыков дистанционного мониторинга процедур банкротства</span>
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
                  <span>Любознательный</span>
                </BulletItem>
                <BulletItem>
                  <CheckCircle2 size={18} />
                  <span>Вежливый</span>
                </BulletItem>
                <BulletItem>
                  <CheckCircle2 size={18} />
                  <span>Трудолюбивый и ответственный</span>
                </BulletItem>
                <BulletItem>
                  <CheckCircle2 size={18} />
                  <span>Стремящийся к саморазвитию</span>
                </BulletItem>
                <BulletItem>
                  <CheckCircle2 size={18} />
                  <span>Внимательный к деталям</span>
                </BulletItem>
              </BulletList>
            </SubSection>
          </DepartmentSection>

          <DepartmentSection>
            <DepartmentHeader>
              <DepartmentIcon>
                <Users size={20} />
              </DepartmentIcon>
              <DepartmentTitle>Отдел сопровождения процедур банкротства</DepartmentTitle>
            </DepartmentHeader>
            <HeadContainer>
              <PersonPhoto photo={arvinImage} name="Ахвердиев Эрвин Алибекович" size={36} />
              <HeadInfo>
                <HeadName>Ахвердиев Эрвин Алибекович</HeadName>
                <HeadPosition>Начальник отдела</HeadPosition>
                  <DepartmentDescription>
                      Защита интересов госорганов в делах о банкротстве. Ведение споров по банкротству по заданиям ФНС. Участие в проекте "Биржа концепций". Работа по спецпроектам ФНС.
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
                  <span>Приобретение и совершенствование навыков правовой работы в сфере сопровождения процедур банкротства, аналитического мышления и корректного написания документов</span>
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
                  <span>Ответственность и внимание к деталям</span>
                </BulletItem>
                <BulletItem>
                  <CheckCircle2 size={18} />
                  <span>Умение работать в команде</span>
                </BulletItem>
                <BulletItem>
                  <CheckCircle2 size={18} />
                  <span>Аналитическое мышление</span>
                </BulletItem>
              </BulletList>
            </SubSection>
          </DepartmentSection>

          <DepartmentSection>
            <DepartmentHeader>
              <DepartmentIcon>
                <Users size={20} />
              </DepartmentIcon>
              <DepartmentTitle>Отдел применения обеспечительных мер</DepartmentTitle>
            </DepartmentHeader>

            <HeadContainer>
              <PersonPhoto photo={savhenkoImage} name="Савченко Александр Юрьевич" size={36} />
              <HeadInfo>
                <HeadName>Савченко Александр Юрьевич</HeadName>
                <HeadPosition>Начальник отдела</HeadPosition>
                  <DepartmentDescription>
                      Произведение решений по обеспечительным мерам (п.10 ст.101 НК РФ); согласование постановлений об аресте имущества (ст.77 НК РФ).
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
                  <span>Интересная многоплановая и творческая работа</span>
                </BulletItem>
                <BulletItem>
                  <CheckCircle2 size={18} />
                  <span>Постоянное развитие</span>
                </BulletItem>
                <BulletItem>
                  <CheckCircle2 size={18} />
                  <span>Дружный и отзывчивый коллектив, готовый оказывать помощь</span>
                </BulletItem>
                <BulletItem>
                  <CheckCircle2 size={18} />
                  <span>Теоретическая и практическая помощь</span>
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
                  <span>Усидчивость и внимательность</span>
                </BulletItem>
                <BulletItem>
                  <CheckCircle2 size={18} />
                  <span>Желание получать новые знания и развиваться</span>
                </BulletItem>
                <BulletItem>
                  <CheckCircle2 size={18} />
                  <span>Оптимизм и активность</span>
                </BulletItem>
                <BulletItem>
                  <CheckCircle2 size={18} />
                  <span>Нацеленность на результат</span>
                </BulletItem>
                <BulletItem>
                  <CheckCircle2 size={18} />
                  <span>Коммуникабельность</span>
                </BulletItem>
              </BulletList>
            </SubSection>
          </DepartmentSection>

          <DepartmentSection>
            <DepartmentHeader>
              <DepartmentIcon>
                <Users size={20} />
              </DepartmentIcon>
              <DepartmentTitle>Отдел работы с производным долгом</DepartmentTitle>
            </DepartmentHeader>

            <HeadContainer>
              <PersonPhoto photo={usoImage} name="Усубян Усо Самандович" size={36} />
              <HeadInfo>
                <HeadName>Усубян Усо Самандович</HeadName>
                <HeadPosition>Начальник отдела</HeadPosition>
                  <DepartmentDescription>
                      Методология и контроль механизмов взыскания производного долга (привлечение к субсидиарной ответственности; взыскание по пп. 1 п. 3 ст. 45 НК РФ; взыскание ущерба, причиненного преступлением).
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
                  <span>Поиск косвенных активов</span>
                </BulletItem>
                <BulletItem>
                  <CheckCircle2 size={18} />
                  <span>Установление конечного владельца бизнеса и зависимых лиц</span>
                </BulletItem>
                <BulletItem>
                  <CheckCircle2 size={18} />
                  <span>Методология отработки пользовательских заданий</span>
                </BulletItem>
                <BulletItem>
                  <CheckCircle2 size={18} />
                  <span>Выявление проблемных зон в работе ТНО</span>
                </BulletItem>
                <BulletItem>
                  <CheckCircle2 size={18} />
                  <span>Правовая работа и применение судебной практики</span>
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
                  <span>Умение работать в команде</span>
                </BulletItem>
                <BulletItem>
                  <CheckCircle2 size={18} />
                  <span>Уверенное владение офисными программами</span>
                </BulletItem>
                <BulletItem>
                  <CheckCircle2 size={18} />
                  <span>Коммуникабельность и стрессоустойчивость</span>
                </BulletItem>
                <BulletItem>
                  <CheckCircle2 size={18} />
                  <span>Наличие аналитического и системного мышления</span>
                </BulletItem>
                <BulletItem>
                  <CheckCircle2 size={18} />
                  <span>Самоорганизация</span>
                </BulletItem>
              </BulletList>
            </SubSection>
          </DepartmentSection>

          <DepartmentSection>
            <DepartmentHeader>
              <DepartmentIcon>
                <Users size={20} />
              </DepartmentIcon>
              <DepartmentTitle>Отдел экспертного сопровождения мероприятий налогового контроля</DepartmentTitle>
            </DepartmentHeader>
            <HeadContainer>
              <PersonPhoto photo={gulakovImage} name="Шулаков Никита Александрович" size={36} />
              <HeadInfo>
                <HeadName>Шулаков Никита Александрович</HeadName>
                <HeadPosition>Начальник отдела</HeadPosition>
                  <DepartmentDescription>
                      Поиск активов и бенефициаров. Централизованное арестование имущества. Контроль НО по проверочным мероприятиям.
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
                  <span>Возможность постоянного развития и принятия решений, влияющих на результат деятельности ФНС России</span>
                </BulletItem>
                <BulletItem>
                  <CheckCircle2 size={18} />
                  <span>Участие в значимых для Российской Федерации проектах</span>
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
                  <span>Ответственность и внимание к деталям</span>
                </BulletItem>
                <BulletItem>
                  <CheckCircle2 size={18} />
                  <span>Умение работать в команде</span>
                </BulletItem>
                <BulletItem>
                  <CheckCircle2 size={18} />
                  <span>Аналитическое мышление и способность к принятию нестандартных решений</span>
                </BulletItem>
              </BulletList>
            </SubSection>
          </DepartmentSection>

          <DepartmentSection>
            <DepartmentHeader>
              <DepartmentIcon>
                <Users size={20} />
              </DepartmentIcon>
              <DepartmentTitle>Отдел мониторинга деятельности АУ</DepartmentTitle>
            </DepartmentHeader>

            <HeadContainer>
              <PersonPhoto name="Гаврилина Виктория Владимировна" size={36} />
              <HeadInfo>
                <HeadName>Гаврилина Виктория Владимировна</HeadName>
                <HeadPosition>Начальник отдела</HeadPosition>
                  <DepartmentDescription>
                      Взаимодействие с арбитражными управляющими (АУ) и саморегулируемыми организациями арбитражных управляющих (СРО АУ).
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
                  <span>Получение уникального опыта оценки АУ и СРО АУ</span>
                </BulletItem>
                <BulletItem>
                  <CheckCircle2 size={18} />
                  <span>Опыт взаимодействия с участниками рынка банкротства</span>
                </BulletItem>
                <BulletItem>
                  <CheckCircle2 size={18} />
                  <span>Участие в «цифровизации» сферы банкротства — от внедрения новых методов взаимодействия между ТНО, АУ и СРО АУ до повышения качества статистических данных в сфере банкротства</span>
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
                  <span>Аналитический склад ума</span>
                </BulletItem>
                <BulletItem>
                  <CheckCircle2 size={18} />
                  <span>Неконфликтность</span>
                </BulletItem>
                <BulletItem>
                  <CheckCircle2 size={18} />
                  <span>Самостоятельность</span>
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

export default ModalBankruptcy;
