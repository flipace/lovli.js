import React from 'react';
import { connect } from 'react-redux';

const mapStateToProps = (state) => ({
  show: state.app.loadingIndicator
});
const LoadingIndicator = (props) => {
  return (
    <div
      key="loader"
      className={'loading-indicator ' + (props.show ? '' : ' inactive')}>
      <div className="spinner">
        <div className="image" />
      </div>
    </div>
  );
};

export default connect(mapStateToProps)(LoadingIndicator);
