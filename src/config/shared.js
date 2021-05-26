export const ArticleTypes = Object.freeze({
  WITH_TITLE: 'WITH_TITLE',
  WITH_TITLE_AND_THUMBNAIL: 'WITH_TITLE_AND_THUMBNAIL',
  WITH_TITLE_THUMBNAIL_AND_DESCRIPTION: 'WITH_TITLE_THUMBNAIL_AND_DESCRIPTION',
});

export const StorageKeys = Object.freeze({
  BOOKMARKS: 'bookmarks',
  SORT_ORDER: 'sort_order',
  THEME: 'theme',
});

export const SortOrders = Object.freeze({
  NEWEST_FIRST: {
    key: 'newest',
    name: 'Newest First',
  },
  OLDEST_FIRST: {
    key: 'oldest',
    name: 'Oldest First',
  },
});

export const DaysOfWeek = Object.freeze([
  'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun',
]);

export const ToastTypes = Object.freeze({
  SUCCESS: 'SUCCESS',
  ERROR: 'ERROR',
});
