export const SORT = "SORT";

export const sortBy = (sortValue) => ({
  type: SORT,
  payload: sortValue,
});
