import React, { Component } from 'react';

// custom components for demo
import ComponentWithStyledComponents from './components/with-styled-components/ComponentWithStyledComponents';

class App extends Component {
  render() {
    return (
      <div>
        
        <main>
          <ComponentWithStyledComponents />
        </main>
      </div>
    );
  }
}

export default App;
