import React from 'react';
import numeral from 'numeral';

function TastApp(num) {
  const number = 123456.789;
  const formattedNumber = numeral(number).format('$0,0.00');

  return <span>{formattedNumber}</span>;
}

export default TastApp