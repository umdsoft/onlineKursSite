import React, {Fragment} from 'react';
import Header from "./components/header";
import "./style/main_style.scss";
import Body from "./components/body";
function App() {
  return (
    <Fragment>
      <Header/>
      <Body/>
    </Fragment>
  );
}

export default App;
