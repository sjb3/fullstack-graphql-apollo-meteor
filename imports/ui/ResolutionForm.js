import React, { Component } from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';

// More of Query language than javaScript
const createResolution = gql`
  mutation createResolution($name: String!) {
    createResolution(name: $name) {
      _id
    }
  }
`;

class ResolutionForm extends Component {
  submitForm = () => {
    this.props.createResolution({
      variables: {
        name: this.name.value
      }
    // }).then(({data}) => {
      // this.props.refetch();
      // no need to use refecth
    }).catch(error => {
      console.log(error);
    })
  }

  render() {
    return (
      <div>
        <input type='text' ref={(input) => (this.name = input)} />
        <button className='btn btn-success' onClick={this.submitForm}>Submit</button>
      </div>
    )
  }
}

export default graphql(createResolution, {
  name: 'createResolution',
  options: {
    refetchQueries: ['Resolutions']
  }
})(ResolutionForm);
