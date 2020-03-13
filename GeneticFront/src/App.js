import React from "react";
import "./App.css";
import PredictDiseaseView from "./views/PredictDiseaseView";
import { Container } from "@material-ui/core";
import { RestfulProvider } from "restful-react";

function App() {
  return (
    <RestfulProvider base={process.env.REACT_APP_API_HOST}>
      <div className="App">
        <Container>
          <PredictDiseaseView />
        </Container>
      </div>
    </RestfulProvider>
  );
}

export default App;
