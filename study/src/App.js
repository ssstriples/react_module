import React from 'react';

class LifeCycle extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  componentWillMount() {

  }

  render() {  // setState사용X
    return (<></>)
  }

  componentDidMount() {

  }

  componentWillUnmount() {  // setState사용X

  }
}

export default App;