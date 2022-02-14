import "./App.css";
import Navbar from "./components/Navbar";
import Welcome from "./components/Welcome";
import Services from "./components/Services";
import Transactions from "./components/Transactions";

const App = () => {
  return (
    <div className="min-h-screen">
      <div className="gradient-bg-welcome">
        <Navbar />
        <Welcome />
      </div>

      <Services />
      <Transactions />
    </div>
  );
};

export default App;
