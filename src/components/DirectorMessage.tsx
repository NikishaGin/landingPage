import styled from 'styled-components';
import { useTheme } from '../context/ThemeContext';
import plaksinPhoto from '../images/plaksin.jpg';

const DirectorMessage = () => {
  const { isDark } = useTheme();

  return (
    <Section isDark={isDark}>
      <Container>
        <Card isDark={isDark}>
          <ContentWrapper>
            <DirectorImage src={plaksinPhoto} alt="Плаксин Дмитрий Алексеевич" isDark={isDark} />

            <TextContent>
              <Badge isDark={isDark}>МИУДОЛ</Badge>
              <Title isDark={isDark}>
                Начальник Межрегиональной инспекции ФНС России по управлению долгом
              </Title>
              <Name isDark={isDark}>Плаксин Дмитрий Алексеевич</Name>

              <Message isDark={isDark}>
                <p>
                  В МИУДОЛ мы сочетаем инновационный подход с новейшими технологиями.
                  Но главное в нашей работе — внимание к людям и гибкость в решении любых вопросов.
                  Мы ценим не только профессионализм, но и умение работать в команде, поддерживать
                  коллег и находить нестандартные решения.
                </p>
                <p>
                  Рассчитываем на ваши знания и энергию — вместе мы достигнем новых высот!
                </p>
              </Message>
            </TextContent>
          </ContentWrapper>
        </Card>
      </Container>
    </Section>
  );
};

export default DirectorMessage;

const Section = styled.section<{ isDark: boolean }>`
  padding: 6rem 1.5rem;
  background: ${({ isDark }) =>
    isDark
      ? 'linear-gradient(180deg, #0f172a 0%, #1e293b 100%)'
      : 'linear-gradient(135deg, #FFF5F5 0%, #F7F9FC 50%, #E8F5F2 100%)'};
  transition: background 0.3s ease;

  @media (max-width: 768px) {
    padding: 4rem 1rem;
  }
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const Card = styled.div<{ isDark: boolean }>`
  background: ${({ isDark }) =>
    isDark
      ? 'linear-gradient(135deg, rgba(30, 41, 59, 0.8) 0%, rgba(15, 23, 42, 0.9) 100%)'
      : 'linear-gradient(135deg, rgba(255, 255, 255, 0.9) 0%, rgba(248, 250, 252, 0.95) 100%)'};
  backdrop-filter: blur(10px);
  border-radius: 24px;
  padding: 3rem;
  box-shadow: ${({ isDark }) =>
    isDark
      ? '0 20px 60px rgba(0, 0, 0, 0.4), 0 0 0 1px rgba(255, 255, 255, 0.05)'
      : '0 20px 60px rgba(0, 0, 0, 0.08), 0 0 0 1px rgba(0, 0, 0, 0.05)'};
  transition: all 0.3s ease;

  @media (max-width: 968px) {
    padding: 2rem;
    border-radius: 20px;
  }

  @media (max-width: 640px) {
    padding: 1.5rem;
    border-radius: 16px;
  }
`;

const ContentWrapper = styled.div`
  display: flex;
  gap: 3rem;
  align-items: flex-start;

  @media (max-width: 968px) {
    flex-direction: column;
    align-items: center;
    gap: 2rem;
  }
`;

const DirectorImage = styled.img<{ isDark: boolean }>`
  flex-shrink: 0;
  width: 240px;
  height: 340px;
  object-fit: cover;
  border-radius: 16px;
  transition: all 0.3s ease;
  box-shadow: ${({ isDark }) =>
    isDark
      ? '0 8px 24px rgba(0, 0, 0, 0.4), 0 0 0 2px rgba(78, 205, 196, 0.2)'
      : '0 8px 24px rgba(0, 0, 0, 0.12), 0 0 0 2px rgba(78, 205, 196, 0.3)'};

  &:hover {
    transform: translateY(-4px);
    box-shadow: ${({ isDark }) =>
      isDark
        ? '0 12px 32px rgba(0, 0, 0, 0.5), 0 0 0 2px rgba(78, 205, 196, 0.4)'
        : '0 12px 32px rgba(0, 0, 0, 0.15), 0 0 0 2px rgba(78, 205, 196, 0.5)'};
  }

  @media (max-width: 968px) {
    width: 200px;
    height: 280px;
  }

  @media (max-width: 640px) {
    width: 160px;
    height: 220px;
  }
`;

const TextContent = styled.div`
  flex: 1;
  min-width: 0;
`;

const Badge = styled.div<{ isDark: boolean }>`
  display: inline-block;
  padding: 0.5rem 1rem;
  background: var(--gradient-primary);
  color: white;
  font-size: 0.875rem;
  font-weight: 600;
  letter-spacing: 0.5px;
  border-radius: 12px;
  margin-bottom: 1rem;
  box-shadow: 0 4px 12px rgba(255, 107, 107, 0.3);
  transition: transform 0.2s ease;

  &:hover {
    transform: scale(1.05);
  }

  @media (max-width: 640px) {
    font-size: 0.8rem;
    padding: 0.4rem 0.8rem;
  }
`;

const Title = styled.h3<{ isDark: boolean }>`
  font-size: 1.125rem;
  font-weight: 500;
  color: ${({ isDark }) => (isDark ? '#94a3b8' : '#64748b')};
  margin-bottom: 0.5rem;
  line-height: 1.6;

  @media (max-width: 968px) {
    font-size: 1rem;
    text-align: center;
  }

  @media (max-width: 640px) {
    font-size: 0.9rem;
  }
`;

const Name = styled.h2<{ isDark: boolean }>`
  font-size: 2rem;
  font-weight: 700;
  color: ${({ isDark }) => (isDark ? '#f1f5f9' : '#1e293b')};
  margin-bottom: 1.5rem;
  background: ${({ isDark }) =>
    isDark
      ? 'linear-gradient(135deg, #f1f5f9 0%, #cbd5e1 100%)'
      : 'linear-gradient(135deg, #1e293b 0%, #334155 100%)'};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;

  @media (max-width: 968px) {
    font-size: 1.75rem;
    text-align: center;
  }

  @media (max-width: 640px) {
    font-size: 1.5rem;
  }
`;

const Message = styled.div<{ isDark: boolean }>`
  font-size: 1.125rem;
  line-height: 1.8;
  color: ${({ isDark }) => (isDark ? '#cbd5e1' : '#475569')};

  p {
    margin-bottom: 1.25rem;

    &:last-child {
      margin-bottom: 0;
      font-weight: 500;
      color: ${({ isDark }) => (isDark ? '#e2e8f0' : '#334155')};
    }
  }

  @media (max-width: 968px) {
    font-size: 1rem;
    text-align: center;
  }

  @media (max-width: 640px) {
    font-size: 0.95rem;
    line-height: 1.7;
  }
`;
