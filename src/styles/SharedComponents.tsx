import styled from 'styled-components';

export const Section = styled.section<{ bgColor?: string }>`
  padding: 5rem 0;
  background: ${({ bgColor }) => bgColor || 'var(--bg-secondary)'};
  position: relative;
  overflow: hidden;

  @media (max-width: 768px) {
    padding: 3.5rem 0;
  }

  @media (max-width: 480px) {
    padding: 2.5rem 0;
  }
`;

export const Container = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 2rem;

  @media (max-width: 768px) {
    padding: 0 1.25rem;
  }
`;

export const SectionTitle = styled.h2`
  font-family: 'Outfit', sans-serif;
  font-size: clamp(2rem, 4vw, 2.75rem);
  font-weight: 700;
  text-align: center;
  margin-bottom: 3.5rem;
  color: var(--text-primary);
  letter-spacing: -0.02em;

  span {
    background: var(--gradient-primary);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  @media (max-width: 768px) {
    margin-bottom: 2.5rem;
  }
`;

export const SectionSubtitle = styled.p`
  text-align: center;
  font-size: clamp(1rem, 2vw, 1.125rem);
  color: var(--text-secondary);
  max-width: 700px;
  margin: 0 auto 3rem;
  line-height: 1.7;

  @media (max-width: 768px) {
    margin-bottom: 2rem;
  }
`;

export const Card = styled.div<{ variant?: 'default' | 'hover' }>`
  background: white;
  border-radius: var(--radius-lg);
  padding: 2rem;
  box-shadow: var(--shadow-md);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);

  ${({ variant }) =>
    variant === 'hover' &&
    `
    &:hover {
      transform: translateY(-8px);
      box-shadow: var(--shadow-lg);
    }
  `}

  @media (max-width: 768px) {
    padding: 1.5rem;
  }
`;

export const Grid2 = styled.div<{ gap?: string }>`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: ${({ gap }) => gap || '2rem'};

  @media (max-width: 968px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`;

export const Grid3 = styled.div<{ gap?: string }>`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: ${({ gap }) => gap || '2rem'};

  @media (max-width: 968px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;
  }

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`;

export const Grid4 = styled.div<{ gap?: string }>`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: ${({ gap }) => gap || '1.5rem'};

  @media (max-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

export const IconWrapper = styled.div<{ size?: string; bgColor?: string }>`
  width: ${({ size }) => size || '56px'};
  height: ${({ size }) => size || '56px'};
  border-radius: var(--radius-md);
  background: ${({ bgColor }) => bgColor || 'var(--gradient-primary)'};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.25rem;
  box-shadow: 0 4px 12px rgba(255, 107, 107, 0.2);
  transition: all 0.3s ease;

  svg {
    color: white;
    width: 28px;
    height: 28px;
  }

  ${Card}:hover & {
    transform: scale(1.1) rotate(5deg);
  }
`;

export const CardTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: 0.75rem;
  line-height: 1.3;
`;

export const CardText = styled.p`
  color: var(--text-secondary);
  line-height: 1.6;
  font-size: 0.95rem;
`;

export const Button = styled.button<{ variant?: 'primary' | 'secondary' | 'outline' }>`
  padding: 0.875rem 1.75rem;
  border-radius: var(--radius-md);
  font-weight: 600;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  border: none;

  ${({ variant }) => {
    if (variant === 'secondary') {
      return `
        background: var(--gradient-secondary);
        color: white;
        box-shadow: 0 4px 12px rgba(78, 205, 196, 0.3);

        &:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(78, 205, 196, 0.4);
        }
      `;
    }
    if (variant === 'outline') {
      return `
        background: white;
        color: var(--text-primary);
        border: 2px solid var(--bg-secondary);

        &:hover {
          border-color: var(--color-primary);
          color: var(--color-primary);
          background: var(--bg-tertiary);
        }
      `;
    }
    return `
      background: var(--gradient-primary);
      color: white;
      box-shadow: 0 4px 12px rgba(255, 107, 107, 0.3);

      &:hover {
        transform: translateY(-2px);
        box-shadow: 0 6px 20px rgba(255, 107, 107, 0.4);
      }
    `;
  }}

  &:active {
    transform: translateY(0);
  }

  @media (max-width: 480px) {
    width: 100%;
    padding: 1rem 1.5rem;
  }
`;

export const Badge = styled.span<{ color?: string }>`
  display: inline-flex;
  align-items: center;
  padding: 0.375rem 0.875rem;
  border-radius: 50px;
  font-size: 0.875rem;
  font-weight: 600;
  background: ${({ color }) => {
    if (color === 'secondary') return 'rgba(78, 205, 196, 0.1)';
    if (color === 'accent') return 'rgba(255, 217, 61, 0.2)';
    return 'rgba(255, 107, 107, 0.1)';
  }};
  color: ${({ color }) => {
    if (color === 'secondary') return 'var(--color-secondary)';
    if (color === 'accent') return '#D4A017';
    return 'var(--color-primary)';
  }};
`;

export const InputGroup = styled.div`
  margin-bottom: 1.5rem;
`;

export const Label = styled.label`
  display: block;
  font-size: 0.9rem;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: 0.5rem;
`;

export const Input = styled.input`
  width: 100%;
  padding: 0.875rem 1rem;
  background: var(--bg-secondary);
  border: 2px solid transparent;
  border-radius: var(--radius-sm);
  color: var(--text-primary);
  font-size: 1rem;
  transition: all 0.3s ease;
  font-family: 'Inter', sans-serif;

  &:focus {
    outline: none;
    border-color: var(--color-primary);
    background: white;
    box-shadow: 0 0 0 4px rgba(255, 107, 107, 0.1);
  }

  &::placeholder {
    color: var(--text-light);
  }
`;

export const Textarea = styled.textarea`
  width: 100%;
  padding: 0.875rem 1rem;
  background: var(--bg-secondary);
  border: 2px solid transparent;
  border-radius: var(--radius-sm);
  color: var(--text-primary);
  font-size: 1rem;
  min-height: 140px;
  resize: vertical;
  transition: all 0.3s ease;
  font-family: 'Inter', sans-serif;

  &:focus {
    outline: none;
    border-color: var(--color-primary);
    background: white;
    box-shadow: 0 0 0 4px rgba(255, 107, 107, 0.1);
  }

  &::placeholder {
    color: var(--text-light);
  }
`;
