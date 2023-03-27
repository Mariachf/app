import React from "react";
import Api from "./components/Api";
import * as S from "./components/Style";

export default class App extends React.Component {
  render() {
    return (
      <>
        <S.GlobalStyle />
        <Api />
      </>
    );
  }
}