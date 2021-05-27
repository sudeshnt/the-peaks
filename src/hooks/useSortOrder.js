import { useState } from 'react';
import { SortOrders, StorageKeys } from 'config/shared';

export default function useSortOrder() {
  const getInitialSortOrder = () => {
    const order = localStorage.getItem(StorageKeys.SORT_ORDER);
    // eslint-disable-next-line no-unused-vars
    const sortOrderValid = Object.entries(SortOrders).some(([id, { key }]) => key === order);
    if (sortOrderValid) {
      return order;
    }
    localStorage.setItem(StorageKeys.SORT_ORDER, SortOrders.NEWEST_FIRST.key);
    return SortOrders.NEWEST_FIRST.key;
  };

  const [sortOrder, setSortOrder] = useState(getInitialSortOrder());

  return {
    sortOrder,
    setSortOrder,
  };
}
