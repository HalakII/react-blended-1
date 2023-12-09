import format from 'date-fns/format';
export const dataFormat = date => {
  return format(new Date(date), 'MM/dd/yyyy, HH:mm a');
};
//
