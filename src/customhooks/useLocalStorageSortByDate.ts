import { useEffect, useState } from 'react';
import { orderComments } from '../utils';

interface Item {
  id: string;
  rating: number;
  comment: string;
}

const useLocalStorageSortByDate = (localStorageKey: string) => {
  const [sortedItems, setSortedItems] = useState<Item[] | null>(null);

  useEffect(() => {
    const localStorageItems: string | null =
      localStorage.getItem(localStorageKey);

    if (localStorageItems) {
      const dataFromStorage: Item[] = JSON.parse(localStorageItems);

      const orderData: Item[] = dataFromStorage.sort(orderComments);

      setSortedItems(orderData);
    }
  }, [localStorageKey]);

  return sortedItems;
};

export default useLocalStorageSortByDate;
