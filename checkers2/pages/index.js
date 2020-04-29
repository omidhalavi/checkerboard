import React, { Component } from "react";
import Board from "../components/Board";

class Index extends Component {
  state = {
    area: 8
  }

  handleChange = (e) => {
    this.setState({ area: e.target.value })
  }

  render() {
    return (
      <div className="main">
        <div className="input-area">
          <label>Enter a Number</label>
          <input type="number" value={this.state.area} onChange={this.handleChange} />
        </div>

        <Board area={this.state.area ? this.state.area : 0} />

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
