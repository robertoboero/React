import Header from "./components/Header/Header";
import { LOGO } from "./data";
import CoreConcepts from "./components/CoreConcepts/CoreConcepts";
import Examples from "./components/Examples/Examples";

function App() {
  return (
    <>
      <Header logo={LOGO.logo} alt="Stylized atom prop"></Header>
      <main>
        <CoreConcepts />
        <Examples />
      </main>
    </>
  );
}

export default App;
