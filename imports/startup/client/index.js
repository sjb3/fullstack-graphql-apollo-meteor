import React, { Component } from 'react'
import { render } from 'react-dom';
import { Meteor } from 'meteor/meteor';

const App = () => <h1>FUCK</h1>;

Meteor.startup (() => {
render(
  <App />,
  document.getElementById('app')
  )
});