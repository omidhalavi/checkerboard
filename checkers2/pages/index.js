import React, { Component } from "react";
import Board from "../components/Board";
import Controls from "../components/Controls";

class Index extends Component {
  state = {
    area: 8,
    topColor: "red",
    bottomColor: "grey",
    shape: "circle"
  }

  handleChange = (e) => {
    this.setState({ area: e.target.value })
  }

  handleColor = () => {
    if(this.state.topColor === "red") {
      this.setState({ topColor: "grey", bottomColor: "red" });
    } else {
      this.setState({ topColor: "red", bottomColor: "grey" });
    }
  }

  handleShape = (e) => {
    this.setState({ shape: e.target.value })
  }

  render() {
    const { area, topColor, bottomColor, shape } = this.state;
    return (
      <div className="main">
        <div className="input-area">
          <label>Enter a Number</label>
          <input type="number" value={area} onChange={this.handleChange} />
        </div>
        <Controls color={topColor} shape={shape} handleColor={this.handleColor} handleShape={this.handleShape} />
        <Board area={area ? parseInt(area) : 0} topColor={topColor} bottomColor={bottomColor} shape={shape} />

        <style jsx>{`
          .input-area {
            display: flex;
            flex-direction: column;
            align-items: center;
            margin-bottom: 15px;
          }

          .input-area label {
            font-size: 16px;
            margin-bottom: 5px;
          }

          .input-area input {
            font-size: 16px;
            font-size: 16px;
            max-width: 150px;
            padding: 7px 8px;
            border: 2px solid #e7e7e7;
            outline: none
          }
        `}</style>
      </div>
    )
  }
}

export default Index;
