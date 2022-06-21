import "./App.css";
import Login from "./Login";
function App() {
  const handleSubmit = (username, password) =>
    console.log(`Welcome, ${username}`);

  return (
    <div className="App">
      <Login onSubmit={handleSubmit} />
    </div>
  );
}

export default App;
