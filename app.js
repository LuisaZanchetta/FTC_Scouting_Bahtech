function App() {
  return (
    <div>
      <h1>FTC Scouting</h1>

      <ScoutForm />
      <hr />
      <Dashboard />
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
