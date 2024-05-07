import { Info } from "lucide-react";
import "./App.css";
import Alert from "./components/ui/Alert";

function App() {
  return (
    <main className="wrapper">
      <Alert title="UPDATE TITLE" icon={<Info size={14} />}>
        <p>
          Vite requires <a href="">static initialization blocks </a> version 18+. 20+. However, some templates require a
          <code style={{ backgroundColor: "#abab07", color: "white", borderRadius: "4px" }}>
            useDefineForClassFields
          </code>{" "}
          to work, please upgrade if your package manager warns about it.
        </p>
      </Alert>

      <Alert
        classNameType="info-alert"
        title="Compatibility Note"
        icon={<Info size={14} />}
        description="Vite requires version 18+. 20+. However, some templates require a
          to work, please upgrade if your package manager warns about it."
      />
      {/*       
      <Alert classNameType="error-alert" title="Compatibility Note" icon={<Info size={14} />}>
        <p>
          Vite requires <a href="">static initialization blocks </a> version 18+. 20+. However, some templates require a
          to work, please upgrade if your package manager warns about it.
        </p>
      </Alert>
      <Alert classNameType="warning-alert" title="Compatibility Note" icon={<Info size={14} />}>
        <p>
          Vite requires <a href="">static initialization blocks </a> version 18+. 20+. However, some templates require a
          to work, please upgrade if your package manager warns about it.
        </p>
      </Alert>
      <Alert classNameType="success-alert" title="Compatibility Note" icon={<Info size={14} />}>
        <p>
          Vite requires <a href="">static initialization blocks </a> version 18+. 20+. However, some templates require a
          to work, please upgrade if your package manager warns about it.
        </p>
      </Alert> */}
    </main>
  );
}

export default App;
