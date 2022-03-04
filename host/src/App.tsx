import React, { Suspense } from "react";
import "./App.css";

const App1 = React.lazy(() => import("app1/App"));
const App2 = React.lazy(() => import("app2/App"));
const App3 = React.lazy(() => import("app3/App"));

function App() {
  return (
    <div className="App">
      Host Application
      <Suspense fallback="Loading...">
        <App1 />
        <App2 />
        <App3 />
      </Suspense>
    </div>
  );
}

export default App;
