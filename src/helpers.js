
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
    
    const formattedDate = formatDate(date);
    const income = type === 'income' ? value / 100 : 0;
    const outgoing = type === 'outgoing' ? value / 100 : 0;

    // const formattedBalance = numFormat.format(balance / 100);
    const formattedBalance = balance / 100;

    const line = `${formattedDate},${formatCurrencyRM(income)},${formatCurrencyRM(outgoing)},${formatCurrencyRM(formattedBalance)},"${description}","${moreDetail.join(', ')}"`;
    output.push(line);
  });

  return output.join('\n');
};

export const formatDate = (date) => new Intl.DateTimeFormat('ms-MY').format(date);

export const formatCurrencyRM = (cents) => Intl.NumberFormat('ms-MY', {
  minimumFractionDigits: 2,
}).format(cents);
