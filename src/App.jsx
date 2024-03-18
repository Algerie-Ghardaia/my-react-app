import "./App.css";
// import Content from "./components/Content";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Jobs from "./components/Jobs";

function App() {
  return (
    <>
      <div>
        <Header />
        <center className="center">
          <Jobs
            className="red"
            title="Full Tile Sales Associate-Sydney Boutique"
            contractType="CDI - "
            country="Australie - "
            city="Sydney"
          />
          <Jobs
            className="green"
            title="Agent de Sécurite - Pantin"
            contractType="CDI - "
            country="France - "
            city="Pantin"
          />
          <Jobs
            className="yallow"
            title="Responsable d'Atelie(H/F)"
            contractType="CDD - "
            country="France - "
            city="Paris"
          />
          <Jobs
            className="blue"
            title="Chef de Projets"
            contractType="CDD - "
            country="France - "
            city="Lyon"
          />
          <Jobs
            className="pink"
            title="Développeur React.js"
            contractType="CDI - "
            country="France - "
            city="Dreux"
          />
          <Jobs
            className="red"
            title="Seles Associate Stkholm"
            contractType="CDI - "
            country="Suède - "
            city="Stkholm"
          />
          <Jobs
            className="green"
            title="Vendeur Crans Montana"
            contractType="CDI - "
            country="Suisse - "
            city="Crans Montana"
          />
          <Jobs
            className="yallow"
            title="CRM & Data Quality Analyst"
            contractType="CDI - "
            country="usa - "
            city="New York"
          />
          <Jobs
            className="blue"
            title="Infirmier H/F"
            contractType="CDI - "
            country="France - "
            city="Nice"
          />
        </center>
        <Footer />
      </div>
    </>
  );
}

export default App;
