import React from 'react';
import styled, { keyframes } from 'styled-components';
import { useScroll } from '../context/ScrollContext';
import { Sparkles, Users, TrendingUp, Award } from 'lucide-react';

const float = keyframes`
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-20px); }
`;

const WelcomeSection = styled.section`
  position: relative;
  width: 100%;
  min-height: 100vh;
  background: linear-gradient(135deg, #FFF5F5 0%, #F7F9FC 50%, #E8F5F2 100%);
  overflow: hidden;
  display: flex;
  align-items: center;
  padding: 6rem 0 4rem;

  @media (max-width: 968px) {
    padding: 5rem 0 3rem;
    min-height: auto;
  }
`;

const FloatingCircle = styled.div<{ top: string; left: string; size: string; delay: string }>`
  position: absolute;
  top: ${(props) => props.top};
  left: ${(props) => props.left};
  width: ${(props) => props.size};
  height: ${(props) => props.size};
  border-radius: 50%;
  background: linear-gradient(135deg, rgba(255, 107, 107, 0.1), rgba(78, 205, 196, 0.1));
  animation: ${float} 6s ease-in-out infinite;
  animation-delay: ${(props) => props.delay};
  pointer-events: none;
  z-index: 1;
`;

const Container = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 2rem;
  width: 100%;
  position: relative;
  z-index: 2;

  @media (max-width: 768px) {
    padding: 0 1.25rem;
  }
`;

const WelcomeContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;

  @media (max-width: 968px) {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
`;

const TextBlock = styled.div`
  @media (max-width: 968px) {
    text-align: center;
  }
`;

const Badge = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: white;
  padding: 0.5rem 1rem;
  border-radius: 50px;
  box-shadow: var(--shadow-sm);
  margin-bottom: 2rem;
  font-size: 0.875rem;
  font-weight: 500;
  color: var(--color-primary);

  svg {
    width: 16px;
    height: 16px;
  }

  @media (max-width: 968px) {
    margin-left: auto;
    margin-right: auto;
  }
`;

const WelcomeTitle = styled.h1`
  font-family: 'Outfit', sans-serif;
  font-size: clamp(2.25rem, 5vw, 3.5rem);
  font-weight: 800;
  line-height: 1.15;
  color: var(--text-primary);
  margin-bottom: 1.5rem;
  letter-spacing: -0.03em;

  span {
    background: var(--gradient-primary);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
`;

const WelcomeSubtitle = styled.p`
  font-size: clamp(1.1rem, 2vw, 1.25rem);
  font-weight: 400;
  line-height: 1.7;
  color: var(--text-secondary);
  margin-bottom: 2.5rem;
  max-width: 540px;

  @media (max-width: 968px) {
    margin-left: auto;
    margin-right: auto;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;

  @media (max-width: 968px) {
    justify-content: center;
  }

  @media (max-width: 480px) {
    flex-direction: column;
  }
`;

const PrimaryButton = styled.button`
  background: var(--gradient-primary);
  color: white;
  padding: 1rem 2rem;
  border: none;
  border-radius: var(--radius-md);
  font-size: 1.05rem;
  font-weight: 600;
  cursor: pointer;
  box-shadow: 0 4px 16px rgba(255, 107, 107, 0.3);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 8px 24px rgba(255, 107, 107, 0.4);
  }

  &:active {
    transform: translateY(-1px);
  }

  @media (max-width: 480px) {
    width: 100%;
  }
`;

const SecondaryButton = styled.button`
  background: white;
  color: var(--text-primary);
  padding: 1rem 2rem;
  border: 2px solid var(--bg-secondary);
  border-radius: var(--radius-md);
  font-size: 1.05rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    border-color: var(--color-primary);
    color: var(--color-primary);
    background: var(--bg-tertiary);
  }

  @media (max-width: 480px) {
    width: 100%;
  }
`;

const ImageBlock = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 968px) {
    order: -1;
  }
`;

const HeroImageWrapper = styled.div`
  position: relative;
  width: 100%;
  max-width: 500px;
  aspect-ratio: 1;
  border-radius: var(--radius-xl);
  background: linear-gradient(135deg, rgba(255, 107, 107, 0.1), rgba(78, 205, 196, 0.1));
  padding: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 968px) {
    max-width: 400px;
  }

  @media (max-width: 480px) {
    max-width: 300px;
    padding: 1.5rem;
  }
`;

const IconGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
  width: 100%;
`;

const IconCard = styled.div<{ delay: string }>`
  background: white;
  padding: 2rem;
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-md);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  transition: all 0.3s ease;
  animation: ${float} 4s ease-in-out infinite;
  animation-delay: ${(props) => props.delay};

  &:hover {
    transform: translateY(-8px);
    box-shadow: var(--shadow-lg);
  }

  svg {
    width: 48px;
    height: 48px;
    color: var(--color-primary);
  }

  span {
    font-weight: 600;
    color: var(--text-primary);
    font-size: 0.95rem;
    text-align: center;
  }

  @media (max-width: 480px) {
    padding: 1.5rem;

    svg {
      width: 36px;
      height: 36px;
    }

    span {
      font-size: 0.875rem;
    }
  }
`;

const StatsBar = styled.div`
  display: flex;
  gap: 2rem;
  margin-top: 3rem;
  padding-top: 2rem;
  border-top: 2px solid var(--bg-secondary);

  @media (max-width: 968px) {
    justify-content: center;
  }

  @media (max-width: 480px) {
    flex-direction: column;
    gap: 1.5rem;
    text-align: center;
  }
`;

const StatItem = styled.div`
  h3 {
    font-size: 2rem;
    font-weight: 700;
    color: var(--color-primary);
    margin-bottom: 0.25rem;
  }

  p {
    font-size: 0.95rem;
    color: var(--text-muted);
  }
`;

export const Welcome = () => {
  const { scrollToSection } = useScroll();

  return (
    <WelcomeSection>
      <FloatingCircle top="10%" left="5%" size="300px" delay="0s" />
      <FloatingCircle top="60%" left="80%" size="200px" delay="1s" />
      <FloatingCircle top="80%" left="10%" size="150px" delay="2s" />

      <Container>
        <WelcomeContent>
          <TextBlock>
            <Badge>
              <Sparkles />
              Присоединяйтесь к команде
            </Badge>
            <WelcomeTitle>
              Создаём будущее{' '}
              <span>налоговой службы</span> вместе
            </WelcomeTitle>
            <WelcomeSubtitle>
              Наш успех строится на талантах тех, кто разделяет наши ценности.
              Станьте частью инновационной команды профессионалов.
            </WelcomeSubtitle>
            <ButtonGroup>
              <PrimaryButton onClick={() => scrollToSection('Контакты')}>
                Отправить резюме
              </PrimaryButton>
              <SecondaryButton onClick={() => scrollToSection('Направления')}>
                Узнать больше
              </SecondaryButton>
            </ButtonGroup>

            <StatsBar>
              <StatItem>
                <h3>200+</h3>
                <p>Специалистов</p>
              </StatItem>
              <StatItem>
                <h3>26</h3>
                <p>Отделов</p>
              </StatItem>
              <StatItem>
                <h3>6 лет</h3>
                <p>Успешной работы</p>
              </StatItem>
            </StatsBar>
          </TextBlock>

          <ImageBlock>
            <HeroImageWrapper>
              <IconGrid>
                <IconCard delay="0s">
                  <Users />
                  <span>Команда профессионалов</span>
                </IconCard>
                <IconCard delay="0.5s">
                  <TrendingUp />
                  <span>Карьерный рост</span>
                </IconCard>
                <IconCard delay="1s">
                  <Sparkles />
                  <span>Инновации</span>
                </IconCard>
                <IconCard delay="1.5s">
                  <Award />
                  <span>Развитие</span>
                </IconCard>
              </IconGrid>
            </HeroImageWrapper>
          </ImageBlock>
        </WelcomeContent>
      </Container>
    </WelcomeSection>
  );
};
