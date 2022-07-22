import { formatDate } from "./helpers";

/**
 * 
 * @param {object} props
 * @param {TransactionModel[]} props.transactions
 * @returns 
 */
function TransactionTable({transactions}) {

    const tBody = transactions.map((t) => (<tr>
        <td class="border border-gray-400 px-3">
          {formatDate(t.date)}
        </td>
        <td class="border border-gray-400 px-3">
          {t.type === 'income' && t.value}
        </td>
        <td class="border border-gray-400 px-3">
          {t.type === 'outgoing' && t.value}
        </td>
        <td class="border border-gray-400 px-3">
          {t.balance}
        </td>
        <td class="border border-gray-400 px-3">
          {t.description}
        </td>
        <td class="border border-gray-400 px-3">
          {t.moreDetail.map(detail => <div>{detail}</div>)}
        </td>
      </tr>
      ));
    
      const tHead = (<tr>
        <th class="border border-gray-400">Date</th>
        <th class="border border-gray-400">Income</th>
        <th class="border border-gray-400">Outgoing</th>
        <th class="border border-gray-400">Balance</th>
        <th class="border border-gray-400">Description</th>
        <th class="border border-gray-400">Detail</th>
      </tr>);
    
      const table = () => (<table class="mx-4 inline-block">
        <thead>{tHead}</thead>
        <tbody>{tBody}</tbody>
      </table>);
    
    
      return table;
}

export default TransactionTable
