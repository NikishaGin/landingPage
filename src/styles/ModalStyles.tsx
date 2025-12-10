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
  top: 1rem;
  right: 1rem;
  background-color: rgba(255, 255, 255, 0.95);
  color: #2d3748;
  padding: 0.5rem;
  border-radius: 9999px;
  transition: all 200ms ease;
  backdrop-filter: blur(8px);
  z-index: 10;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);

  &:hover {
    background-color: white;
    transform: scale(1.05);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.12);
  }

  &:active {
    transform: scale(0.98);
  }

  &:focus-visible {
    outline: 2px solid #4ECDC4;
    outline-offset: 2px;
  }
`;

export const Header = styled.div`
  background: linear-gradient(135deg, #FF6B6B 0%, #FFB88C 100%);
  padding: 2rem 1.5rem;
  color: white;
`;

export const HeaderTitle = styled.h1`
  font-size: 1.875rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
  font-family: 'Outfit', sans-serif;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

export const HeaderSubtitle = styled.p`
  font-size: 1rem;
  opacity: 0.95;
  line-height: 1.5;
`;

export const Content = styled.div`
  padding: 2rem 1.5rem;

  @media (max-width: 768px) {
    padding: 1.5rem 1rem;
  }
`;

export const CuratorSection = styled.section`
  background: linear-gradient(135deg, #F7F9FC 0%, #E8F5F2 100%);
  border-radius: 12px;
  padding: 1.5rem;
  margin-bottom: 2rem;
  border: 1px solid #E2E8F0;
`;

export const CuratorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 1rem;

  @media (min-width: 768px) {
    flex-direction: row;
    align-items: flex-start;
    text-align: left;
  }
`;

export const PhotoPlaceholder = styled.div`
  width: 96px;
  height: 96px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  border: 3px solid #FF6B6B;

  svg {
    color: #FF6B6B;
    opacity: 0.6;
  }
`;

export const CuratorPhoto = styled.img`
    width: 96px;
    height: 96px;
    border-radius: 50%;
    object-fit: cover;
    flex-shrink: 0;
    border: 3px solid #FF6B6B;
`;

export const HeadPhoto = styled.img`
  width: 72px;
  height: 72px;
  border-radius: 50%;
  object-fit: cover;
  flex-shrink: 0;
  border: 3px solid #FF6B6B;
  box-shadow: 0 4px 12px rgba(255, 107, 107, 0.2);
`;

export const CuratorInfo = styled.div`
  flex: 1;
`;

export const CuratorName = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 0.25rem;
  font-family: 'Outfit', sans-serif;
`;

export const CuratorPosition = styled.p`
    color: #FF6B6B;
    font-weight: 500;
    margin-bottom: 0.5rem;
`;

export const Divider = styled.div`
  height: 1px;
  background: linear-gradient(to right, transparent, #e2e8f0, transparent);
  margin: 2rem 0;
`;

export const DepartmentSection = styled.section`
  margin-bottom: 2rem;
  padding: 1.5rem;
  background: #ffffff;
  border-radius: 12px;
  border: 1px solid #e2e8f0;
  transition: all 0.2s ease;

  &:hover {
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.06);
    border-color: #cbd5e0;
  }

  &:last-of-type {
    margin-bottom: 2.5rem;
  }
`;

export const DepartmentHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 1rem;
`;

export const DepartmentIcon = styled.div`
    background: linear-gradient(135deg, #FF6B6B 0%, #FFB88C 100%);
    padding: 0.5rem;
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;

    svg {
        color: white;
    }
`;

export const DepartmentTitle = styled.h2`
  font-size: 1.25rem;
  font-weight: 700;
  color: #2d3748;
  flex: 1;
  font-family: 'Outfit', sans-serif;

  @media (max-width: 768px) {
    font-size: 1.125rem;
  }
`;

export const DepartmentDescription = styled.p`
  color: #4a5568;
  line-height: 1.6;
  margin-bottom: 1.25rem;
`;

export const HeadContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    padding: 1rem;
    background: linear-gradient(135deg, #F7F9FC 0%, #E8F5F2 100%);
    border-radius: 8px;
    margin-bottom: 1.5rem;
    border: 1px solid #E2E8F0;

    @media (min-width: 768px) {
        flex-direction: row;
        align-items: center;
    }
`;

export const HeadPhotoPlaceholder = styled.div`
  width: 72px;
  height: 72px;
  border-radius: 50%;
  background: linear-gradient(135deg, #FFE8E8 0%, #FFD1D1 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  border: 3px solid #FF6B6B;
  box-shadow: 0 4px 12px rgba(255, 107, 107, 0.2);

  svg {
    color: #FF6B6B;
    opacity: 0.6;
  }
`;

export const HeadInfo = styled.div`
  text-align: center;

  @media (min-width: 768px) {
    text-align: left;
  }
`;

export const HeadName = styled.h4`
  font-size: 1.0625rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 0.25rem;
  font-family: 'Outfit', sans-serif;
`;

export const HeadPosition = styled.p`
  color: #FF6B6B;
  font-weight: 500;
  font-size: 0.875rem;
`;

export const SubSection = styled.div`
  margin-bottom: 1.25rem;

  &:last-child {
    margin-bottom: 0;
  }
`;

export const SubSectionTitle = styled.h4`
    font-size: 1rem;
    font-weight: 600;
    color: #2d3748;
    margin-bottom: 0.75rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-family: 'Outfit', sans-serif;

    svg {
        color: #FF6B6B;
        flex-shrink: 0;
    }
`;

export const BulletList = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const BulletItem = styled.li`
  display: flex;
  align-items: flex-start;
  gap: 0.5rem;
  color: #4a5568;
  line-height: 1.6;

  svg {
    color: #FF6B6B;
    flex-shrink: 0;
    margin-top: 0.175rem;
  }
`;

export const CTAButton = styled.button`
    background: linear-gradient(135deg, #FF6B6B 0%, #FFB88C 100%);
    color: white;
    font-weight: 500;
    padding: 0.75rem 2rem;
    border-radius: 9999px;
    width: 100%;
    max-width: 280px;
    margin: 2rem auto 0;
    display: block;
    transition: all 0.2s ease;
    box-shadow: 0 10px 15px -3px rgba(255, 107, 107, 0.5), 0 4px 6px -2px rgba(255, 107, 107, 0.25);

    font-size: 0.9375rem;

    &:hover {
        box-shadow: 0 20px 25px -5px rgba(255, 107, 107, 0.4), 0 10px 10px -5px rgba(255, 107, 107, 0.2);
        transform: scale(1.05);
    }

    &:active {
        transform: translateY(0);
    }

    &:focus-visible {
        outline: 2px solid #FF6B6B;
        outline-offset: 2px;
    }
`;


