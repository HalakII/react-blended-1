import { BiDollarCircle } from 'react-icons/bi';
import { FcBullish, FcBearish } from 'react-icons/fc';
import { ForbesItem, Avatar, Name, Capital } from './ForbesListItem.styled';

import { theme } from 'styles/theme';

export const ForbesListItem = ({ item }) => {
  return (
    <ForbesItem>
      <Avatar src={item.avatar} alt={item.name} />
      <Name>{item.name}</Name>
      <Capital>
        {item.capital} <BiDollarCircle color={theme.colors.accent} size={22} />
        {item.isIncrease ? <FcBullish /> : <FcBearish />}
      </Capital>
    </ForbesItem>
  );
};
