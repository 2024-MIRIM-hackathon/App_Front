import React, { createContext, useContext, useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

type LearnProgress = {
  learnWord: number;
  setLearnWord: (v: number) => void;
  reading: boolean;
  setReading: (v: boolean) => void;
};

const LearnContext = createContext<LearnProgress | null>(null);

export const LearnProvider = ({ children }: { children: React.ReactNode }) => {
  const [learnWord, setLearnWordState] = useState(0);
  const [reading, setReadingState] = useState(false);

  useEffect(() => {
    const load = async () => {
      const learnWord = await AsyncStorage.getItem('learnWord');
      if (Number(learnWord) !== 0) setLearnWordState(Number(learnWord));
      const reading = await AsyncStorage.getItem('reading');
      if (reading === 'true') setReadingState(true);
    };
    load();
  }, []);

  const setLearnWord = async (val: number) => {
    setLearnWordState(val);
    await AsyncStorage.setItem('learnWord', val.toString());
  };
  
  const setReading = async (val: boolean) => {
    setReadingState(val);
    await AsyncStorage.setItem('reading', val.toString());
  };

  return (
    <LearnContext.Provider value={{ learnWord, setLearnWord, reading, setReading }}>
      {children}
    </LearnContext.Provider>
  );
};

export const useLearnProgress = () => {
  const ctx = useContext(LearnContext);
  if (!ctx) throw new Error('LearnProgress must be used inside LearnProvider');
  return ctx;
};
