import React from "react";
import { Header } from "./lib/Header";
import "./App.css";
import "./lib/page.css";

type User = {
  name: string;
};

function App() {
  const [user, setUser] = React.useState<User>();
  return (
    <article>
      <Header
        user={user}
        onLogin={() => setUser({ name: "Jane Doe" })}
        onLogout={() => setUser(undefined)}
        onCreateAccount={() => setUser({ name: "Jane Doe" })}
      />

      <section>
        <img src="/pay-150x150.png" className="App-logo" alt="logo" />
        <h2>Frontend Assignment</h2>
        <p>
          With the <code>/data/merchants.json</code> (provided in this repo),
          create the following pages:
        </p>
        <ul>
          <li>An overview of merchants with ten merchants per page</li>
          <li>An edit form for that merchant</li>
          <li>Error handling on this form</li>
          <li>A confirmation page shown after saving</li>
        </ul>
        <p>
          Focus on something you can demo to a product owner and one front-end
          colleague.
        </p>
        <h3>Expectations</h3>
        <p>
          <li>Using this codebase is advised, but not required</li>
          <li>Use your own creativity on the design</li>
          <li>It's responsive with a mobile first mindset</li>
          <li>Use all properties provided in the json file</li>
          <li>Try and make it as accessible as you can (WCAG)</li>
          <li>Try to keep architecture in mind (folders, components, etc)</li>
        </p>
        <div className="tip-wrapper">
          <span className="tip">Tip</span> In the <code>/extras</code> folder
          you can find some fonts and colors
        </div>
      </section>
    </article>
  );
}

export default App;
