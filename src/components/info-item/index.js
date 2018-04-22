
import React from 'react';

function InfoItem({ infoItem }) {

  if (!infoItem) return null;
  return (
    <div>{infoItem.name}</div>
  )

}

export default InfoItem