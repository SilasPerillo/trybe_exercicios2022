import React from "react";

class Pokemon extends React.Component {
  render() {
    return (
      <div key={this.props.name} className="box-pokemon">
        <div className="div-text">
          <p>{this.props.name}</p>
          <p>{this.props.type}</p>
          <p>{this.props.average} kg</p>
        </div>
        <div className="div-img">
          <img src={this.props.image} alt="imagem do pokemon" />
        </div>
      </div>
    );
  }
}

export default Pokemon;
