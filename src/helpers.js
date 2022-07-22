
/**
 * 
 * @param {TransactionModel[]} transactions 
 * @returns {string}
 */
export const convertToCSV = (transactions) => {
  const output = [];
  const headerLine = 'Date,Income,Outgoing,Balance,Description,More Details';
  output.push(headerLine);

  transactions.forEach(({
    date, type, value, balance, description, moreDetail,
  }) => {
    const currencyFormat = new Intl.NumberFormat('ms-MY', {
      minimumFractionDigits: 2,
    });
    const dateFormat = (date) => new Intl.DateTimeFormat().format(date)
    const formattedDate = dateFormat(date);
    const income = type === 'income' ? value / 100 : 0;
    const outgoing = type === 'outgoing' ? value / 100 : 0;

    // const formattedBalance = numFormat.format(balance / 100);
    const formattedBalance = balance / 100;

    const line = `${formattedDate},${currencyFormat.format(income)},${currencyFormat.format(outgoing)},${currencyFormat.format(formattedBalance)},"${description}","${moreDetail.join(', ')}"`;
    output.push(line);
  });

  return output.join('\n');
};

export const formatDate = (date) => new Intl.DateTimeFormat().format(date);
