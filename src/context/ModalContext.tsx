'use client';

import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';

interface ModalContextType {
  isResumeOpen: boolean;
  isContactOpen: boolean;
  openResume: () => void;
  closeResume: () => void;
  openContact: () => void;
  closeContact: () => void;
}

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export function ModalProvider({ children }: { children: React.ReactNode }) {
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);

  const openResume = useCallback(() => {
    setIsContactOpen(false);
    setIsResumeOpen(true);
  }, []);

  const closeResume = useCallback(() => {
    setIsResumeOpen(false);
  }, []);

  const openContact = useCallback(() => {
    setIsResumeOpen(false);
    setIsContactOpen(true);
  }, []);

  const closeContact = useCallback(() => {
    setIsContactOpen(false);
  }, []);

  // Lock body scroll and handle Escape key when any modal is open
  useEffect(() => {
    const isAnyOpen = isResumeOpen || isContactOpen;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        if (isResumeOpen) closeResume();
        if (isContactOpen) closeContact();
      }
    };

    if (isAnyOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);

      return () => {
        document.body.style.overflow = '';
        window.removeEventListener('keydown', handleKeyDown);
      };
    }
  }, [isResumeOpen, isContactOpen, closeResume, closeContact]);

  return (
    <ModalContext.Provider
      value={{
        isResumeOpen,
        isContactOpen,
        openResume,
        closeResume,
        openContact,
        closeContact,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
}

export function useModal() {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error('useModal must be used within a ModalProvider');
  }
  return context;
}
