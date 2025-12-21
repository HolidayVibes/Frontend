export const now = ref<Date>(new Date());

export const useTimeUntilNewYear = () => {
  const nextYear = now.value.getFullYear() + 1;
  return new Date(nextYear, 0, 1).getTime() - now.value.getTime();
};
