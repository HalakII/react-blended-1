import formatDistanceToNow from 'date-fns/formatDistanceToNow';
export const dataFormatToNow = date => {
  return formatDistanceToNow(new Date(date), { addSuffix: true });
};
