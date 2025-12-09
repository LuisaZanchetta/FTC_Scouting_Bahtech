function App() {
  const [page, setPage] = React.useState("scout");

  // deixamos a função global para os botões do HTML
  window.setPage = setPage;

  return (
    <div>
      {page === "scout" && <ScoutForm />}
      {page === "dashboard" && <Dashboard />}
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
