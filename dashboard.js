<!DOCTYPE html>
<html lang="pt-br">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Dashboard - FTC Scouting</title>

  <link rel="stylesheet" href="styling.css" />

  <!-- React + Babel + Axios + Recharts -->
  <script src="https://unpkg.com/react@18/umd/react.development.js"></script>
  <script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
  <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
  <script src="https://unpkg.com/recharts/umd/Recharts.min.js"></script>
</head>

<body>

  <div class="container">
    <h1 class="title">Dashboard</h1>

    <a class="btn" href="index.html">Voltar</a>

    <div id="root"></div>
  </div>

  <!-- Scripts -->
  <script type="text/babel" src="sheets.js"></script>
  <script type="text/babel" src="dashboard.js"></script>

  <script type="text/babel">
    ReactDOM.createRoot(document.getElementById("root")).render(<Dashboard />);
  </script>
</body>
</html>
