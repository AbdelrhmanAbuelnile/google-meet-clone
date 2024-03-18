'use client'
import { createContext, useState, useContext, useEffect } from 'react';

const SnackbarContext = createContext<any>(null);

export const useSnackbar = () => {
  return useContext(SnackbarContext);
};

interface SnackbarProviderProps {
  children: React.ReactNode;
}

export const SnackbarProvider = ({ children }:SnackbarProviderProps) => {
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');

  const openSnackbar = (message:string) => {
    setSnackbarMessage(message);
    setSnackbarOpen(true);
    setTimeout(() => {
      closeSnackbar();
    }, 3000);
  };

  const closeSnackbar = () => {
    setSnackbarOpen(false);
    setSnackbarMessage('');
  };

  return (
    <SnackbarContext.Provider value={{ openSnackbar, closeSnackbar }}>
      {children}
      {snackbarOpen && (
        <div className="fixed z-50 bottom-4 left-2/4 -translate-x-2/4 w-fit mx-auto rounded-lg bg-gray-700 text-white p-4">
          <p>{snackbarMessage}</p>
        </div>
      )}
    </SnackbarContext.Provider>
  );
};