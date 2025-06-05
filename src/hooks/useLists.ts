// File: src/hooks/useLists.ts
import { useEffect, useState } from 'react';
import type { ListData, AnimalItem } from '../types';

const useLists = () => {
  const [list1, setList1] = useState<AnimalItem[]>([]);
  const [list2, setList2] = useState<AnimalItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch('https://apis.ccbp.in/list-creation/lists')
      .then((res) => res.json())
      .then((data: ListData) => {
        const lists = data.lists ?? [];
        setList1(lists[0]?.items ?? []);
        setList2(lists[1]?.items ?? []);
        setLoading(false);
      })
      .catch(() => {
        setError(true);
        setLoading(false);
      });
  }, []);

  const moveToList = (item: AnimalItem, from: 'list1' | 'list2') => {
    if (from === 'list1') {
      setList1((prev) => prev.filter((i) => i.id !== item.id));
      setList2((prev) => [item, ...prev]);
    } else {
      setList2((prev) => prev.filter((i) => i.id !== item.id));
      setList1((prev) => [item, ...prev]);
    }
  };

  return { list1, list2, moveToList, loading, error };
};

export default useLists;