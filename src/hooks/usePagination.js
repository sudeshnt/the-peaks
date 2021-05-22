import _merge from 'lodash/merge';
import { useCallback, useMemo, useState } from 'react';

export const defaultPagination = {
  pageSize: 15,
  total: 0,
  page: 1,
};

export default function usePagination(inputPagination) {
  const pageOptions = _merge({}, defaultPagination, inputPagination);

  const [pagination, setPagination] = useState({
    page: pageOptions.page,
    pageSize: pageOptions.pageSize,
    total: pageOptions.total,
  });

  const onPageChange = useCallback(
    (newPage, newTotal) => {
      if (pagination.page !== newPage || pagination.total !== newTotal) {
        const newPagination = {
          page: newPage,
          pageSize: pagination.pageSize,
          total: newTotal ?? pagination.total,
        };
        setPagination(newPagination);
      }
    },
    [pagination],
  );

  return useMemo(
    () => ({
      ...pagination,
      onPageChange,
    }),
    [onPageChange, pagination],
  );
}
