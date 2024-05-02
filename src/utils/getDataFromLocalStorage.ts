export const getDataFromLocalStorage = <T>(key: string): T | null => {
  const dataString = localStorage.getItem(key);
  if (dataString) {
    return JSON.parse(dataString) as T;
  } else {
    return null;
  }
};
