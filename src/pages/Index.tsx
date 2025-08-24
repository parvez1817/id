
import React, { useState } from 'react';
import Login from '../components/Login';
import Dashboard from '../components/Dashboard';

interface HistoryRequest {
  _id: string;
  registerNumber: string;
  name: string;
  reason: string;
  createdAt: string;
}

interface RejectedCardData {
  registerNumber: string;
  name: string;
  rejectionReason: string;
  createdAt: string;
}

const Index = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState<string | null>(null);
  const [historyData, setHistoryData] = useState<HistoryRequest[]>([]);
  const [rejectedCardData, setRejectedCardData] = useState<RejectedCardData | null>(null);

  const handleLogin = (registerNumber: string, historyData?: HistoryRequest[], rejectedData?: RejectedCardData) => {
    setCurrentUser(registerNumber);
    setIsLoggedIn(true);
    if (historyData) {
      setHistoryData(historyData);
    }
    if (rejectedData) {
      setRejectedCardData(rejectedData);
    }
  };

  const handleLogout = () => {
    setCurrentUser(null);
    setIsLoggedIn(false);
    setHistoryData([]);
    setRejectedCardData(null);
  };

  const handleRejectedCardDismiss = () => {
    setRejectedCardData(null);
  };

  if (isLoggedIn) {
    return (
      <Dashboard 
        onLogout={handleLogout} 
        registerNumber={currentUser} 
        onLogin={handleLogin} 
        historyData={historyData}
        rejectedCardData={rejectedCardData}
        onRejectedCardDismiss={handleRejectedCardDismiss}
      />
    );
  }

  return <Login onLogin={handleLogin} />;
};

export default Index;
