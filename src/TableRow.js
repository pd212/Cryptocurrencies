import React from 'react';

const TableRow = ({ coin }) => {
  return (
    <tr>
      <td><img src={coin.image} alt={coin.name} /></td>
      <td>{coin.name}</td>
      <td>{coin.symbol}</td>
      <td>{coin.current_price}</td>
      <td>{coin.total_volume}</td>
    </tr>
  );
};

export default TableRow;
