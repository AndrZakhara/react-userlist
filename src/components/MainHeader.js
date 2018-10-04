import React, { Component } from 'react';
import { Button, Container, Header } from 'semantic-ui-react';


export default class MainHeader extends Component {
  render() {
    return (
      <Container color='green'>
        <Header as='h1'>App</Header>
        <Header as='h5'>list of clients</Header>

          <Header as='h1'>Hello world!</Header>

          <Button
            content='Discover docs'
            color='green'
            href='https://react.semantic-ui.com'
            icon='github'
            labelPosition='left'
          />

      </Container>

    )
  }
}
