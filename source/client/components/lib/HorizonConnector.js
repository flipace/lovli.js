import React from 'react';
import Horizon from '@horizon/client';

/**
 * Initializes connection to Horizon server and passes
 * hzConnected prop to enhanced component.
 */
export default (ConnectedComponent) => class extends React.Component {
  static defaultProps = {
    secure: false,
    authType: 'anonymous'
  };

  static childContextTypes = {
    horizon: React.PropTypes.func
  };

  getChildContext() {
    return { horizon: this.horizon };
  }

  constructor(props) {
    super(props);

    this.state = {
      connected: false
    };

    this.horizon = Horizon({ secure: props.secure, authType: props.authType });
    this.horizon.onConnected(this.onConnected);
    this.horizon.connect();
  }

  onConnected = () => {
    console.log("Connected to horizon server!");

    this.setState({
      connected: true
    });
  };

  render() {
    return this.state.connected
    ? this.renderConnected()
    : this.renderLoading();
  }

  renderConnected() {
    return (
      <ConnectedComponent
        {...this.props}
        horizonConnected={this.state.connected}
        horizon={this.horizon}
      />
    );
  }

  renderLoading() {
    return this.props.loadingComponent
    ? React.createElement(this.props.loadingComponent)
    : null;
  }
}
