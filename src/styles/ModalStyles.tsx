import styled, { css, keyframes } from 'styled-components';

export const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

export const scaleIn = keyframes`
  from { transform: translateY(8px) scale(0.95); }
  to { transform: translateY(0) scale(1); }
`;

export const ModalOverlay = styled.div<{ isVisible: boolean }>`
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.65);
  z-index: 50;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  transition: opacity 300ms ease;

  ${({ isVisible }) => css`
    opacity: ${isVisible ? 1 : 0};
  `}
`;

export const ModalContent = styled.div<{ isVisible: boolean }>`
  background-color: white;
  box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
  width: 100%;
  max-width: 64rem;
  max-height: 90vh;
  overflow-y: auto;
  position: relative;
  border-radius: 12px;
  transition: transform 300ms ease, opacity 300ms ease;

  ${({ isVisible }) => css`
    transform: ${isVisible ? 'translateY(0) scale(1)' : 'translateY(8px) scale(0.95)'};
  `}

  animation: ${fadeIn} 0.3s ease-out, ${scaleIn} 0.3s ease-out;

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-track {
    background: #f1f1f1;
    border-radius: 10px;
  }

  &::-webkit-scrollbar-thumb {
    background: #cbd5e0;
    border-radius: 10px;

    &:hover {
      background: #a0aec0;
    }
  }
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 1.25rem;
  right: 1.25rem;
  background-color: rgba(255, 255, 255, 0.98);
  color: #4A5568;
  padding: 0.625rem;
  border-radius: 50%;
  transition: all 200ms ease;
  backdrop-filter: blur(12px);
  z-index: 10;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  border: 1px solid rgba(226, 232, 240, 0.6);

  &:hover {
    background-color: white;
    transform: scale(1.08);
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.12);
    color: #2D3748;
    border-color: rgba(226, 232, 240, 1);
  }

  &:active {
    transform: scale(0.96);
  }

  &:focus-visible {
    outline: 2px solid #FF6B6B;
    outline-offset: 2px;
  }
`;

export const Header = styled.div`
  background: linear-gradient(135deg, #2D3748 0%, #1A202C 100%);
  padding: 2.5rem 2rem;
  color: white;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    width: 300px;
    height: 300px;
    background: radial-gradient(circle, rgba(255, 107, 107, 0.15) 0%, transparent 70%);
    border-radius: 50%;
    transform: translate(40%, -40%);
  }
`;

export const HeaderTitle = styled.h1`
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
  font-family: 'Outfit', sans-serif;
  letter-spacing: -0.02em;
  position: relative;

  @media (max-width: 768px) {
    font-size: 1.625rem;
  }
`;

export const HeaderSubtitle = styled.p`
  font-size: 1.0625rem;
  opacity: 0.88;
  line-height: 1.6;
  max-width: 600px;
  position: relative;
`;

export const Content = styled.div`
  padding: 2.5rem 2rem;
  background: #FAFBFC;

  @media (max-width: 768px) {
    padding: 2rem 1.25rem;
  }
`;

export const CuratorSection = styled.section`
  background: white;
  border-radius: var(--radius-md);
  padding: 2rem;
  margin-bottom: 2rem;
  border: 2px solid #E8EAED;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.04);
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 4px;
    height: 100%;
    background: var(--gradient-primary);
    border-radius: var(--radius-md) 0 0 var(--radius-md);
  }
`;

export const CuratorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 1.25rem;

  @media (min-width: 768px) {
    flex-direction: row;
    align-items: center;
    text-align: left;
  }
`;

export const PhotoPlaceholder = styled.div`
  width: 88px;
  height: 88px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  border: 3px solid #FFE8E8;
  background: linear-gradient(135deg, #FFF5F5 0%, #FFE8E8 100%);
  box-shadow: 0 4px 12px rgba(255, 107, 107, 0.12);

  svg {
    color: var(--color-primary);
    opacity: 0.4;
  }
`;

export const CuratorPhoto = styled.img`
    width: 88px;
    height: 88px;
    border-radius: 50%;
    object-fit: cover;
    flex-shrink: 0;
    border: 3px solid #FFE8E8;
    box-shadow: 0 4px 12px rgba(255, 107, 107, 0.12);
`;

export const HeadPhoto = styled.img`
  width: 64px;
  height: 64px;
  border-radius: 50%;
  object-fit: cover;
  flex-shrink: 0;
  border: 2px solid #E8EAED;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
`;

export const CuratorInfo = styled.div`
  flex: 1;
`;

export const CuratorName = styled.h3`
  font-size: 1.375rem;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: 0.375rem;
  font-family: 'Outfit', sans-serif;
  letter-spacing: -0.01em;
`;

export const CuratorPosition = styled.p`
    display: inline-block;
    color: var(--color-primary);
    font-weight: 600;
    font-size: 0.875rem;
    margin-bottom: 0.75rem;
    padding: 0.25rem 0.75rem;
    background: rgba(255, 107, 107, 0.08);
    border-radius: 6px;
`;

export const Divider = styled.div`
  height: 1px;
  background: linear-gradient(to right, transparent 0%, #E2E8F0 20%, #E2E8F0 80%, transparent 100%);
  margin: 2.5rem 0;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 8px;
    height: 8px;
    background: var(--color-secondary);
    border-radius: 50%;
    box-shadow: 0 0 0 4px #FAFBFC;
  }
`;

export const DepartmentSection = styled.section`
  margin-bottom: 1.5rem;
  padding: 2rem;
  background: white;
  border-radius: var(--radius-md);
  border: 2px solid #E8EAED;
  transition: all 0.3s ease;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.04);

  &:hover {
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
    border-color: #D1D5DB;
    transform: translateY(-2px);
  }

  &:last-of-type {
    margin-bottom: 2rem;
  }
`;

export const DepartmentHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.25rem;
  padding-bottom: 1rem;
  border-bottom: 2px solid #F3F4F6;
`;

export const DepartmentIcon = styled.div`
    background: linear-gradient(135deg, #F3F4F6 0%, #E5E7EB 100%);
    padding: 0.625rem;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid #E8EAED;

    svg {
        color: var(--text-secondary);
    }
`;

export const DepartmentTitle = styled.h2`
  font-size: 1.3125rem;
  font-weight: 700;
  color: var(--text-primary);
  flex: 1;
  font-family: 'Outfit', sans-serif;
  letter-spacing: -0.01em;
  line-height: 1.3;

  @media (max-width: 768px) {
    font-size: 1.125rem;
  }
`;

export const DepartmentDescription = styled.p`
  color: var(--text-secondary);
  line-height: 1.7;
  margin-bottom: 1.5rem;
  font-size: 0.9375rem;
`;

export const HeadContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    padding: 1.25rem;
    background: #FAFBFC;
    border-radius: 10px;
    margin-bottom: 1.5rem;
    border: 1px solid #E8EAED;

    @media (min-width: 768px) {
        flex-direction: row;
        align-items: center;
    }
`;

export const HeadPhotoPlaceholder = styled.div`
  width: 64px;
  height: 64px;
  border-radius: 50%;
  background: linear-gradient(135deg, #F3F4F6 0%, #E5E7EB 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  border: 2px solid #E8EAED;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);

  svg {
    color: var(--text-muted);
    opacity: 0.5;
  }
`;

export const HeadInfo = styled.div`
  text-align: center;
  flex: 1;

  @media (min-width: 768px) {
    text-align: left;
  }
`;

export const HeadName = styled.h4`
  font-size: 1.0625rem;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: 0.375rem;
  font-family: 'Outfit', sans-serif;
  line-height: 1.3;
`;

export const HeadPosition = styled.p`
  display: inline-block;
  color: var(--color-secondary);
  font-weight: 600;
  font-size: 0.8125rem;
  padding: 0.25rem 0.625rem;
  background: rgba(78, 205, 196, 0.1);
  border-radius: 5px;
`;

export const SubSection = styled.div`
  margin-bottom: 1.75rem;

  &:last-child {
    margin-bottom: 0;
  }
`;

export const SubSectionTitle = styled.h4`
    font-size: 1.0625rem;
    font-weight: 600;
    color: var(--text-primary);
    margin-bottom: 1rem;
    display: flex;
    align-items: center;
    gap: 0.625rem;
    font-family: 'Outfit', sans-serif;

    svg {
        color: var(--color-primary);
        flex-shrink: 0;
        width: 20px;
        height: 20px;
    }
`;

export const BulletList = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

export const BulletItem = styled.li`
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
  color: var(--text-secondary);
  line-height: 1.65;
  font-size: 0.9375rem;
  padding: 0.5rem;
  border-radius: 6px;
  transition: background 0.2s ease;

  &:hover {
    background: #F9FAFB;
  }

  svg {
    color: var(--color-success);
    flex-shrink: 0;
    margin-top: 0.125rem;
    width: 18px;
    height: 18px;
  }
`;

export const CTAButton = styled.button`
    background: var(--gradient-primary);
    color: white;
    font-weight: 600;
    padding: 1rem 2.5rem;
    border-radius: var(--radius-md);
    width: 100%;
    max-width: 320px;
    margin: 2.5rem auto 0;
    display: block;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    box-shadow: 0 4px 12px rgba(255, 107, 107, 0.25);
    font-size: 1rem;
    letter-spacing: -0.01em;
    position: relative;
    overflow: hidden;

    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: linear-gradient(135deg, rgba(255, 255, 255, 0.2) 0%, transparent 100%);
      opacity: 0;
      transition: opacity 0.3s ease;
    }

    &:hover {
        box-shadow: 0 8px 20px rgba(255, 107, 107, 0.3);
        transform: translateY(-2px);

        &::before {
          opacity: 1;
        }
    }

    &:active {
        transform: translateY(0);
    }

    &:focus-visible {
        outline: 2px solid var(--color-primary);
        outline-offset: 3px;
    }
`;
