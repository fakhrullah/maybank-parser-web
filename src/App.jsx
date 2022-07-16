import Input from "./Input";

function App() {

  const outputString = { output: "miaw", hello: [1, 2, 4] };
  const output = JSON.stringify(outputString, null, 4);

  const setStatementInput = (e) => {
    console.log('hello');
    value = e.target.value;
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
            <Input value="hello" className="block w-full bg-transparent p-2" />
          </div>
          <div class="output flex-1 p-2 bg-gray-100">{formattedOutput()}</div>
        </div>

        {/* Actions */}
        <button class="m-1 px-5 py-1 rounded-md bg-gray-600 text-white shadow-gray-800 shadow-sm hover:bg-gray-800">Convert</button>
        <button class="m-1 px-5 py-1 rounded-md bg-gray-100 text-gray-500 shadow-gray-600 border hover:bg-gray-200">Download CSV</button>
        <button class="m-1 px-5 py-1 rounded-md bg-gray-100 text-gray-500 shadow-gray-600 border hover:bg-gray-200">Download JSON</button>
      </main>
    </div>
  );
}

export default App;
