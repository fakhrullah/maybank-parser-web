import { parser as maybankStatementParser } from "maybank-statement-parser";
import { createSignal } from "solid-js";
import ButtonPrimary from "./ButtonPrimary";
import ButtonSecondary from "./ButtonSecondary";
import { convertToCSV } from "./helpers";
import Input from "./Input";
import TransactionTable from "./TransactionTable";

function App() {

  const [inputString, setInputString] = createSignal('');
  const [output, setOutput] = createSignal(<></>);

  const inputHandler = (e) => {
    setInputString(e.target.value);
    // console.log(inputString());
  }

  const formattedOutput = (format) => {

    try {

      console.log('Format output');
      const transactions = maybankStatementParser(inputString());
      console.log(transactions);

      switch (format) {
        case 'csv':
          const csvOutput = convertToCSV(transactions);
          setOutput(<pre class="mx-4 inline-block">{csvOutput}</pre>)
          break;

        default:
          const tableOutput = TransactionTable({ transactions });
          setOutput(tableOutput);
          break;
      }


    } catch (error) {
      setOutput(<pre>No data found. Error {error.message}</pre>);
    }


  }

  return (
    <div class="">
      <header class="">
        <h1 class="text-3xl font-normal py-4 px-2">
          Maybank Statement Parser
        </h1>
      </header>
      <main>
        <div class="">
          <div class="p-2">
            <Input
              value={inputString}
              onInput={inputHandler}
              className="w-full bg-gray-200 p-2"
              placeholder="Paste your maybank statement here" />
          </div>

          {/* Actions */}
          <ButtonPrimary onClick={() => formattedOutput()}>Convert</ButtonPrimary>
          <ButtonSecondary onClick={() => formattedOutput('csv')}>Convert to CSV</ButtonSecondary>
          <ButtonSecondary>Download JSON</ButtonSecondary>

          <div class="output py-2 bg-gray-100 overflow-auto">{output()}</div>
        </div>

      </main>
    </div>
  );
}

export default App;
