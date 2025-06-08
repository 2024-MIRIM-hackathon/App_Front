import React, { createContext, useContext, useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

type QuizProgress = {
  todayDone: boolean;
  randomDone: boolean;
  setTodayDone: (v: boolean) => void;
  setRandomDone: (v: boolean) => void;
};

const QuizContext = createContext<QuizProgress | null>(null);

export const QuizProvider = ({ children }: { children: React.ReactNode }) => {
  const [todayDone, setTodayDoneState] = useState(false);
  const [randomDone, setRandomDoneState] = useState(false);

  useEffect(() => {
    const load = async () => {
      const today = await AsyncStorage.getItem('todayDone');
      const random = await AsyncStorage.getItem('randomDone');
      if (today === 'true') setTodayDoneState(true);
      if (random === 'true') setRandomDoneState(true);
    };
    load();
  }, []);

  const setTodayDone = async (val: boolean) => {
    setTodayDoneState(val);
    await AsyncStorage.setItem('todayDone', val.toString());
  };

  const setRandomDone = async (val: boolean) => {
    setRandomDoneState(val);
    await AsyncStorage.setItem('randomDone', val.toString());
  };

  return (
    <QuizContext.Provider value={{ todayDone, randomDone, setTodayDone, setRandomDone }}>
      {children}
    </QuizContext.Provider>
  );
};

export const useQuizProgress = () => {
  const ctx = useContext(QuizContext);
  if (!ctx) throw new Error('QuizProgress must be used inside QuizProvider');
  return ctx;
};
