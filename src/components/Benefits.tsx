import styled from 'styled-components';
import { useTheme } from '../context/ThemeContext';
import { Award, Calendar, TrendingUp, Baby, Users, FileCheck, DollarSign, Palmtree, MapPin, Heart } from 'lucide-react';

const benefits = [
  { icon: Award, text: 'Ежемесячные премии' },
  { icon: Calendar, text: 'Ресурсный день 1 раз в квартал' },
  { icon: TrendingUp, text: 'Индивидуальный подход к карьерной траектории' },
  { icon: Baby, text: 'Помощь в устройстве детей в образовательные учреждения' },
  { icon: Users, text: 'Насыщенная корпоративная жизнь' },
  { icon: FileCheck, text: 'Оформление в соответствии с 79-ФЗ' },
  { icon: DollarSign, text: 'Стабильный доход' },
  { icon: Palmtree, text: 'Ежегодный отпуск 30 дней + 3 дня' },
  { icon: MapPin, text: 'Удобное расположение офиса' },
  { icon: Heart, text: 'Социальный пакет' }
];

export function Benefits() {
  const { isDark } = useTheme();

  return (
    <Section isDark={isDark} id="Преимущества">
      <Container>
        <Title isDark={isDark}>Гарантии и <span>преимущества</span></Title>
        <Grid>
          {benefits.map((benefit, index) => (
            <BenefitCard key={index} isDark={isDark}>
              <IconWrapper isDark={isDark}>
                <benefit.icon size={20} />
              </IconWrapper>
              <Text isDark={isDark}>{benefit.text}</Text>
            </BenefitCard>
          ))}
        </Grid>
      </Container>
    </Section>
  );
}

const Section = styled.section<{ isDark: boolean }>`
  padding: 5rem 2rem;
  background: ${props => props.isDark
    ? 'linear-gradient(180deg, #1e293b 0%, #0f172a 100%)'
    : 'linear-gradient(135deg, #FFF5F5 0%, #F7F9FC 50%, #E8F5F2 100%)'};
  transition: background 0.3s ease;

  @media (max-width: 768px) {
    padding: 4rem 2rem;
  }
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const Title = styled.h2<{ isDark: boolean }>`
  font-family: 'Outfit', sans-serif;
  font-size: 2.5rem;
  font-weight: 700;
  text-align: center;
  margin-bottom: 3rem;
  color: ${props => props.isDark ? '#fff' : 'var(--text-primary)'};

  span {
    background: var(--gradient-primary);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  @media (max-width: 768px) {
    font-size: 2rem;
    margin-bottom: 2rem;
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 1rem;

  @media (max-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
    gap: 1.2rem;
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

const BenefitCard = styled.div<{ isDark: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 0.75rem;
  padding: 1.25rem 1rem;
  background: ${props => props.isDark
    ? 'linear-gradient(135deg, rgba(15, 23, 42, 0.95) 0%, rgba(30, 41, 59, 0.95) 100%)'
    : 'white'};
  border-radius: var(--radius-sm);
  border: 1px solid ${props => props.isDark
    ? 'rgba(255, 255, 255, 0.1)'
    : 'rgba(0, 0, 0, 0.06)'};
  transition: all 0.3s ease;
  box-shadow: ${props => props.isDark
    ? '0 4px 12px rgba(0, 0, 0, 0.3)'
    : '0 2px 8px rgba(0, 0, 0, 0.08)'};

  &:hover {
    transform: translateY(-4px);
    box-shadow: ${props => props.isDark
      ? '0 8px 24px rgba(0, 0, 0, 0.4)'
      : '0 4px 16px rgba(0, 0, 0, 0.12)'};
    border-color: ${props => props.isDark
      ? 'rgba(255, 107, 107, 0.3)'
      : 'rgba(255, 107, 107, 0.2)'};
  }

  @media (max-width: 768px) {
    padding: 1rem 0.875rem;
  }
`;

const IconWrapper = styled.div<{ isDark: boolean }>`
  flex-shrink: 0;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background: ${props => props.isDark
    ? 'rgba(255, 107, 107, 0.2)'
    : 'rgba(255, 107, 107, 0.1)'};
  color: ${props => props.isDark ? '#FFB88C' : '#FF6B6B'};
  transition: all 0.3s ease;
  box-shadow: 0 2px 8px rgba(255, 107, 107, 0.2);

  ${BenefitCard}:hover & {
    background: ${props => props.isDark
      ? 'rgba(255, 107, 107, 0.3)'
      : 'rgba(255, 107, 107, 0.15)'};
    box-shadow: 0 4px 12px rgba(255, 107, 107, 0.3);
  }
`;

const Text = styled.p<{ isDark: boolean }>`
  font-size: 0.875rem;
  font-weight: 500;
  color: ${props => props.isDark ? 'rgba(255, 255, 255, 0.85)' : 'var(--text-secondary)'};
  margin: 0;
  line-height: 1.5;
`;
