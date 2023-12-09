import { BaseTable, THead, Th, Tr, Td } from './CryptoHistory.styled';
import { dataFormat } from 'helppers/formatData';
export const CryptoHistory = ({ items }) => {
  const i = 1;
  return (
    <BaseTable>
      <THead>
        <tr>
          <Th>№</Th>
          <Th>PRICE</Th>
          <Th>AMOUNT</Th>
          <Th>DATE</Th>
        </tr>
      </THead>

      <tbody>
        {items.map(({ id, price, amount, date }, index) => (
          <Tr key={id}>
            <Td>{index + 1}</Td>
            <Td>{price}</Td>
            <Td>{amount}</Td>
            <Td>{dataFormat(date)}</Td>
          </Tr>
        ))}
      </tbody>
    </BaseTable>
  );
};
