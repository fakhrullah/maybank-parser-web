
function App() {

  const outputString = { output: "miaw", hello: [1, 2, 4] };
  const output = JSON.stringify(outputString, null, 4);

  return (
    <div class="">
      <header class="">
        <h1>
          <a
            class=""
            href="/"
          >
            Maybank Statement Parser
          </a>
        </h1>
      </header>
      <main>
        <div>
          <textarea name="" id="" cols="30" rows="10"></textarea>
        </div>
        <div class="output"><pre>{output}</pre></div>
      </main>
    </div>
  );
}

export default App;
