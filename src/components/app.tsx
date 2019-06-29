import * as React from 'react';
import { Alert } from 'react-bootstrap';

export class App extends React.PureComponent<{}> {
  render() {
    return (<div>
     <Alert variant='success'>
     <Alert.Heading>Oh snap! You found us we are building new website!</Alert.Heading>
      </Alert>
    </div>
    );
  }
}
