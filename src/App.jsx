import { parser as maybankStatementParser } from "maybank-statement-parser";
import { createSignal } from "solid-js";
import ButtonPrimary from "./ButtonPrimary";
import ButtonSecondary from "./ButtonSecondary";
import Input from "./Input";

function App() {

  const [inputString, setInputString] = createSignal('');
  const [output, setOutput] = createSignal(<></>);

  const inputHandler = (e) => {
    setInputString(e.target.value);
    // console.log(inputString());
  }

  const formatDate = (date) => new Intl.DateTimeFormat().format(date)

  const formattedOutput = () => {

    try {

      console.log('Format output');
      const transactions = maybankStatementParser(inputString());
      console.log(transactions);

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
          {t.description}
        </td>
        <td class="border border-gray-400 px-3">
          {t.moreDetail.map(detail => <div>{detail}</div>)}
        </td>
      </tr>
      ));

      const createHtmlTable = () => (<table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Income</th>
            <th>Outgoing</th>
            <th>Description</th>
            <th>Detail</th>
          </tr>
        </thead>
        <tbody>{tBody}</tbody>
      </table>);

      setOutput(createHtmlTable);

    } catch (error) {
      setOutput(<pre>No data found. Error {error.message}</pre>);
    }


  }

  return (
    <div class="">
      <header class="">
        <h1 class="text-3xl font-light text-red-300">
          <a
            class=""
            href="/"
          >
            Maybank Statement Parser
          </a>
        </h1>
      </header>
      <main>
        <div class="flex">
          <div class="flex-1 bg-gray-300">
            <Input value={inputString} onInput={inputHandler} className="block w-full bg-transparent p-2" />
          </div>
          <div class="output flex-1 p-2 bg-gray-100">{output()}</div>
        </div>

        {/* Actions */}
        <ButtonPrimary onClick={() => formattedOutput()}>Convert</ButtonPrimary>
        <ButtonSecondary>Download CSV</ButtonSecondary>
        <ButtonSecondary>Download JSON</ButtonSecondary>
      </main>
    </div>
  );
}

export default App;
