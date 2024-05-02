import { useState, useEffect } from 'react';

const useLocalStorage = <T>(
  initialValues: Record<string, T[]>,
): [Record<string, T[]>, (key: string, newValue: T[]) => void] => {
  const [values, setValues] = useState<Record<string, T[]>>(() => {
    const storedValues = Object.fromEntries(
      Object.entries(initialValues).map(([key, defaultValue]) => [
        key,
        (localStorage.getItem(key)
          ? JSON.parse(localStorage.getItem(key) as string)
          : defaultValue) as T[],
      ]),
    );
    return storedValues;
  });

  const setStoredValuesForKey = (key: string, newValue: T[]) => {
    setValues((prevValues) => {
      const newValues = { ...prevValues, [key]: newValue };
      localStorage.setItem(key, JSON.stringify(newValue));
      return newValues;
    });
  };

  useEffect(() => {
    const storedValues = Object.fromEntries(
      Object.entries(initialValues).map(([key, defaultValue]) => [
        key,
        (localStorage.getItem(key)
          ? JSON.parse(localStorage.getItem(key) as string)
          : defaultValue) as T[],
      ]),
    );
    setValues(storedValues);
  }, []);

  return [values, setStoredValuesForKey];
};

export default useLocalStorage;
