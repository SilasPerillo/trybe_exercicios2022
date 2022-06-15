import React from 'react';


class Image extends React.Component {
    render() {
      console.log(this.props);
      return <img src={this.props.source} alt={this.props.alternativeText} />;
      }
  }

export default Image;
