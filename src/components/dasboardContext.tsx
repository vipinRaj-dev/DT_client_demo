import React, { createContext, useContext, useState, ReactNode } from 'react';

interface DashboardContextType {
  data: any;
  setData: React.Dispatch<React.SetStateAction<any>>;
  scanResult: any;
  setScanResult: React.Dispatch<React.SetStateAction<any>>;
}

interface DashboardProviderProps {
  children: ReactNode;
}

const DashboardContext = createContext<DashboardContextType | undefined>(undefined);

const DashboardProvider: React.FC<DashboardProviderProps> = ({ children }) => {
  const [data, setData] = useState(null);
  const [scanResult, setScanResult] = useState(null);

  return (
    <DashboardContext.Provider value={{ data, setData ,scanResult, setScanResult}}>
      {children}
    </DashboardContext.Provider>
  );
};

const useDashboard = () => {
  const context = useContext(DashboardContext);
  if (context === undefined) {
    throw new Error('useDashboard must be used within a DashboardProvider');
  }
  return context;
};

export { DashboardProvider, useDashboard };
