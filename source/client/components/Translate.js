import React from 'react';

class Translate extends React.Component {
  static propTypes = {
    lang: React.PropTypes.string
  };

  componentDidMount() {
    if (this.props.params.lang) {
      Blaze.renderWithData(Blaze.Template.mfTransLang, { lang: this.props.params.lang }, this.containerNode);
    } else {
      Blaze.render(Blaze.Template.mfTrans, this.containerNode);
    }
  };

  render() {
    return (
      <div>
        <div ref={node => this.containerNode = node}></div>
      </div>
    );
  };
}

export default Translate;
