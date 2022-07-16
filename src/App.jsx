import { createSignal } from "solid-js";
import ButtonPrimary from "./ButtonPrimary";
import ButtonSecondary from "./ButtonSecondary";
import Input from "./Input";

function App() {

  const [inputString, setInputString] = createSignal('');

  const outputString = { output: "miaw", hello: [1, 2, 4] };
  const output = JSON.stringify(outputString, null, 4);

  const inputHandler = (e) => {
    setInputString(e.target.value);
    console.log(inputString());
  }

  const formattedOutput = () => {
    const statementData = "";

    const data = [
      {
        a: 'wfgeg',
        b: 32423,
        c: 'fawef',
        d: 'hello',
        e: 3223.23
      },

      {
        a: 'wfgeg',
        b: 8975,
        c: 'fawef',
        d: 'hello',
        e: 73.29
      }
    ];

    const formattedData = () => (<table>
      <thead>

      </thead>
      <tbody>
        {data.map((obj) => (
          <tr>
            {Object.values(obj).map(v => (<td class="border border-gray-400 px-3">{v}</td>))}
          </tr>
        ))}
      </tbody>
    </table>);

    return formattedData();
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
          <div class="output flex-1 p-2 bg-gray-100">{formattedOutput()}</div>
        </div>

        {/* Actions */}
        <ButtonPrimary>Convert</ButtonPrimary>
        <ButtonSecondary>Download CSV</ButtonSecondary>
        <ButtonSecondary>Download JSON</ButtonSecondary>
      </main>
    </div>
  );
}

export default App;
