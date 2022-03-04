import React, { Suspense } from "react";
import "./App.css";

const App1 = React.lazy(() => import("app1/App"));

function App() {
  return (
    <div className="App">
      Host Application
      <Suspense fallback="Loading...">
        <App1 />
      </Suspense>
    </div>
  );
}

export default App;
