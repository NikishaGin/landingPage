import React, { useEffect, useState } from 'react';
import { Zap, Menu, X } from 'lucide-react';
import styled from 'styled-components';
import { useScroll } from '../context/ScrollContext';
import { useModal } from '../context/ModalContext';

const HeaderWrapper = styled.header<{ isScrolled: boolean; isHidden: boolean }>`
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 1000;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  background: ${({ isScrolled }) =>
    isScrolled ? 'rgba(255, 255, 255, 0.95)' : 'rgba(255, 255, 255, 0.8)'};
  backdrop-filter: blur(12px);
  box-shadow: ${({ isScrolled }) =>
    isScrolled ? '0 4px 20px rgba(0, 0, 0, 0.08)' : '0 2px 10px rgba(0, 0, 0, 0.04)'};
  transform: translateY(${({ isHidden }) => (isHidden ? '-100%' : '0')});
  opacity: ${({ isHidden }) => (isHidden ? '0' : '1')};
  pointer-events: ${({ isHidden }) => (isHidden ? 'none' : 'all')};
`;

const HeaderContainer = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 768px) {
    padding: 1rem 1.25rem;
  }
`;

const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  cursor: pointer;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }
`;

const LogoIcon = styled.div`
  width: 42px;
  height: 42px;
  background: var(--gradient-primary);
  border-radius: var(--radius-sm);
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 12px rgba(255, 107, 107, 0.3);
  transition: all 0.3s ease;

  &:hover {
    transform: rotate(5deg);
    box-shadow: 0 6px 16px rgba(255, 107, 107, 0.4);
  }

  svg {
    color: white;
  }

  @media (max-width: 768px) {
    width: 36px;
    height: 36px;

    svg {
      width: 20px;
      height: 20px;
    }
  }
`;

const Logo = styled.span`
  font-family: 'Outfit', sans-serif;
  color: var(--text-primary);
  font-weight: 700;
  font-size: 1.5rem;
  letter-spacing: -0.02em;

  @media (max-width: 768px) {
    font-size: 1.25rem;
  }
`;

const DesktopNav = styled.nav`
  display: flex;
  gap: 0.5rem;
  align-items: center;

  @media (max-width: 968px) {
    display: none;
  }
`;

const NavItem = styled.button`
  font-size: 0.95rem;
  font-weight: 500;
  background: none;
  border: none;
  cursor: pointer;
  color: var(--text-secondary);
  padding: 0.625rem 1rem;
  border-radius: var(--radius-sm);
  transition: all 0.3s ease;

  &:hover {
    color: var(--color-primary);
    background: var(--bg-secondary);
  }
`;

const CTAButton = styled.button`
  background: var(--gradient-primary);
  color: white;
  font-weight: 600;
  padding: 0.75rem 1.5rem;
  border-radius: var(--radius-sm);
  font-size: 0.95rem;
  transition: all 0.3s ease;
  box-shadow: 0 4px 12px rgba(255, 107, 107, 0.3);
  margin-left: 0.5rem;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(255, 107, 107, 0.4);
  }

  @media (max-width: 968px) {
    display: none;
  }
`;

const MobileMenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.5rem;
  color: var(--text-primary);
  z-index: 1002;

  @media (max-width: 968px) {
    display: block;
  }

  svg {
    width: 24px;
    height: 24px;
  }
`;

const MobileNav = styled.nav<{ isOpen: boolean }>`
  display: none;

  @media (max-width: 968px) {
    display: block;
    position: fixed;
    top: 0;
    right: 0;
    height: 100vh;
    width: 300px;
    background: white;
    box-shadow: -4px 0 24px rgba(0, 0, 0, 0.15);
    transform: translateX(${({ isOpen }) => (isOpen ? '0' : '100%')});
    transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    padding: 5rem 2rem 2rem;
    z-index: 1001;
  }
`;

const MobileNavList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const MobileNavItem = styled.button`
  font-size: 1rem;
  font-weight: 500;
  background: none;
  border: none;
  cursor: pointer;
  color: var(--text-secondary);
  padding: 0.875rem 1rem;
  border-radius: var(--radius-sm);
  text-align: left;
  width: 100%;
  transition: all 0.3s ease;

  &:hover {
    color: var(--color-primary);
    background: var(--bg-secondary);
  }
`;

const MobileCTAButton = styled.button`
  background: var(--gradient-primary);
  color: white;
  font-weight: 600;
  padding: 1rem 1.5rem;
  border-radius: var(--radius-sm);
  font-size: 1rem;
  transition: all 0.3s ease;
  box-shadow: 0 4px 12px rgba(255, 107, 107, 0.3);
  width: 100%;
  margin-top: 1rem;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(255, 107, 107, 0.4);
  }
`;

const MobileOverlay = styled.div<{ isOpen: boolean }>`
  display: none;

  @media (max-width: 968px) {
    display: block;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5);
    opacity: ${({ isOpen }) => (isOpen ? 1 : 0)};
    pointer-events: ${({ isOpen }) => (isOpen ? 'all' : 'none')};
    transition: opacity 0.3s ease;
    z-index: 1000;
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;
  background: var(--bg-secondary);
  border: none;
  cursor: pointer;
  padding: 0.5rem;
  border-radius: var(--radius-sm);
  color: var(--text-primary);
  transition: all 0.3s ease;

  &:hover {
    background: var(--bg-tertiary);
  }

  svg {
    width: 20px;
    height: 20px;
  }
`;

export const Header = () => {
  const sections = ['Направления', 'Преимущества', 'Контакты'];
  const { scrollToSection } = useScroll();
  const { isModalOpen } = useModal();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMobileMenuOpen]);

  const handleNavClick = (section: string) => {
    scrollToSection(section);
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <HeaderWrapper isScrolled={isScrolled} isHidden={isModalOpen}>
        <HeaderContainer>
          <LogoWrapper onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <LogoIcon>
              <Zap size={24} />
            </LogoIcon>
            <Logo>МИУДОЛ</Logo>
          </LogoWrapper>

          <DesktopNav>
            {sections.map((section) => (
              <NavItem key={section} onClick={() => handleNavClick(section)}>
                {section}
              </NavItem>
            ))}
            <CTAButton onClick={() => handleNavClick('Контакты')}>
              Отправить резюме
            </CTAButton>
          </DesktopNav>

          <MobileMenuButton onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            <Menu />
          </MobileMenuButton>
        </HeaderContainer>
      </HeaderWrapper>

      <MobileOverlay isOpen={isMobileMenuOpen} onClick={() => setIsMobileMenuOpen(false)} />

      <MobileNav isOpen={isMobileMenuOpen}>
        <CloseButton onClick={() => setIsMobileMenuOpen(false)}>
          <X />
        </CloseButton>
        <MobileNavList>
          {sections.map((section) => (
            <li key={section}>
              <MobileNavItem onClick={() => handleNavClick(section)}>
                {section}
              </MobileNavItem>
            </li>
          ))}
          <li>
            <MobileCTAButton onClick={() => handleNavClick('Контакты')}>
              Отправить резюме
            </MobileCTAButton>
          </li>
        </MobileNavList>
      </MobileNav>
    </>
  );
};
