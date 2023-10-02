import React from "react";
import "./App.css";
import MasterDetail from "./components/MasterDetail";
import graphql1 from "./assests/graphql_1.png";
import graphql2 from "./assests/graphql_1.png";


const App = () => (
  <>
    <h2>Task 1 - React / Task 2 - Graphql</h2>

    <MasterDetail/>

    <h2>Task 3 - Javascript</h2>
    <p>
      Implement a function which takes a arbitary nested JS Object and do the
      following transformations:
    </p>
    <ul>
      <li>
        add +1 to each Number within in Object (eg:{" "}
        <span
          style={{
            fontStyle: "italic",
            margin: "0 5px",
            display: "inline-block",
          }}
        >
          x: 9 =&gt; x: 10
        </span>
        )
      </li>
      <li>
        add 'AE' to each String within in Object (eg:{" "}
        <div
          style={{
            fontStyle: "italic",
            margin: "0 5px",
            display: "inline-block",
          }}
        >
          y: 'abc' =&gt; y: 'abc AE'
        </div>
        )
      </li>
      <li>The object should keep its structure!</li>
      <li>Log the result to the browser console</li>
    </ul>
    The components you develop during the interview should be rendered inside
    this {`<App />`} component.
    See the implemented code below:
    <pre>
      <code>{`
        const testObject = {
          a: 123,
          b: 'abc',
          c: [1, 2, 3]
        };

        const updateValue = (value) => {
          switch (typeof value) {
            case 'number':
              return value + 1;
            case 'string':
              return value + ' AE';
            case 'object': // also handles array
              if (value !== null) {
                const updatedValue = Array.isArray(value) ? [] : {};
                for (const key in value) {
                  updatedValue[key] = updateValue(value[key]);
                }
                return updatedValue;
              }
              break;
            default:
              return value;
          }
        };

        const updatedObject = updateValue(testObject);
        console.log(updatedObject);

`}</code>
    </pre>
    <h2>Task 4 - Backend (NodeJS)</h2>
    <p>
      Build a simple GraphQL server with fastify-gql (already preinstalled
      dependency) <a href="https://github.com/mcollina/fastify-gql">(Docs)</a>.
      Skeleton for this task lives in the server folder. The server should
      support
      <pre className="inline">
        <code>{`readContract, readContractComponent`}</code>
      </pre>{" "}
      queries. The first should return a full contract by a given contractId
      (otherwise null). The latter should return a contractComponent by a given
      contractComponentId (otherwise null). A simple data-set can be found in{" "}
      <pre className="inline">
        <code>{`data.js`}</code>
      </pre>
      , the respective schema are mostly predefined in{" "}
      <pre className="inline">
        <code>{`schema.graphql`}</code>
      </pre>
      .
    </p>
    <p><b>Answer:</b> The server runs in PORT 3001.  </p>
    <img height={500} src={graphql1} alt="Graphql1" />;
    <img height={500} src={graphql2} alt="Graphql2" />;
    <h2>Optional: Task 5 - Plain JS</h2>
    <p>
      What will be logged / happen with the following code lines:
      <pre>
        <code>
          {`
  const _promise = Promise.reject(new Error('BOOOM'));
  _promise.then(() => console.log('.then'));
  _promise.catch(console.log)
        `}
        </code>
      </pre>
      . Whats the issue here? Short description is totally fine.
    </p>
    <p><b>Answer:</b> Since we are rejectig the promise, the code <pre>_promise.catch(console.log)</pre> is invoked, which in turn outputs the error.</p>
    <h2>Best of Luck 🚀</h2>

  </>
);

export default App;
