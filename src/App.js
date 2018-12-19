import React from 'react';
import './App.css';
import Header from "./Header";
import Card from "./Card";
import {branch, renderComponent} from "recompose";
import Spinner from "./Spinner";

const App = ({ datas }) => {
    return (
      <div className="app-container">
        <Header id="main-header"/>
        <div className="body-container">
          {
            datas.map(data => (
              <Card
                key={data.name}
                name={data.name}
                picture={data.picture}
                description={data.description} />
            ))
          }
        </div>
      </div>
    );
};

export default branch(
  props => props.datas.length === 0,
  renderComponent(Spinner),
)(App);
