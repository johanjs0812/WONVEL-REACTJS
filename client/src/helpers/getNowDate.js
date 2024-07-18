import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';

dayjs.extend(utc);
dayjs.extend(timezone);

const getFormattedDate = () => {
  const now = dayjs().tz('Asia/Ho_Chi_Minh');
  return now.format('DD/MM/YYYY');
};

export default getFormattedDate;
