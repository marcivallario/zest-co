import { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Login from "./pages/login/Login";

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    fetch("/api/hello")
      .then((r) => r.json())
      .then((data) => setCount(data.count));
  }, []);

  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route path="/testing">
            <h1>Test Route</h1>
          </Route>
          <Route path="/" component={Login} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;