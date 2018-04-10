import React, { Component } from 'react'
import { Accounts } from 'meteor/accounts-base';
import { withApollo } from 'react-apollo';


export default class LoginForm extends Component {
  login = (e) => {
    e.preventDefault();

    Meteor.loginWithPassword(this.email.value, this.password.value,
      (error) => {
        if (!error) {
          this.props.client.resetStore();
        }
      // console.error(err);
    });
  }

  render () {
    return (
      <form onSubmit={this.login}>
        <input type='email' ref={(input) => (this.email = input)}/>
        <input type='password' ref={(input) => (this.password = input)}/>
        <button className='btn btn-secondary' type='submit'>Login User</button>
      </form>
    )
  }
}

// export default withApollo(LoginForm);
