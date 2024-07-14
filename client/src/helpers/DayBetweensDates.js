import { differenceInDays } from 'date-fns';

const calculateDaysBetweenDates = (startDate, endDate) => {
  const days = differenceInDays(new Date(endDate), new Date(startDate));
  if (days === 0) {
    return "Đi trong ngày";
  }
  return days + " ngày";
};

export default calculateDaysBetweenDates;