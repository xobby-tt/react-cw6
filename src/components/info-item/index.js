
import React from 'react';

function InfoItem({ infoItem }) {

  if (!infoItem) return null;
  return (
    <tr key={infoItem.id}>
      <td>{infoItem.name}</td>
      <td>{showDate(infoItem.date)}</td>
      <td>{infoItem.list1}</td>
      <td>{infoItem.list2}</td>
    </tr>

  )

  function showDate(item) {
    var str = '';

    if (item.getDate() < 10)
      str += '0' + item.getDate().toString() + '.';
    else str += item.getDate() + '.';

    if (item.getMonth() + 1 < 10)
      str += '0' + (item.getMonth() + 1).toString() + '.';
    else str += item.getDate() + '.';

    return str + item.getFullYear()
  }

}

export default InfoItem