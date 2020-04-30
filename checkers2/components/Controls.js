export default ({ color, shape, handleColor, handleShape }) => (
  <div className="controls">
    <label className="head-label">Change Color</label>
    <div className="control">
      <div className="d-inline">
        <input type="radio" name="color" value="red" checked={color === "red"} onChange={handleColor} />
        <label>Red on Top</label>
      </div>
      <div className="d-inline">
        <input type="radio" name="color" value="grey" checked={color === "grey"} onChange={handleColor} />
        <label>Red on Bottom</label>
      </div>
    </div>
    <label className="head-label">Change Shape</label>
    <div className="control">
      <div className="d-inline">
        <input type="radio" name="shape" value="circle" checked={shape === "circle"} onChange={handleShape} />
        <label>Circle</label>
      </div>
      <div className="d-inline">
        <input type="radio" name="shape" value="square" checked={shape === "square"} onChange={handleShape} />
        <label>Square</label>
      </div>
    </div>
    <style jsx>{`
      .controls {
        display: flex;
        flex-direction: column;
        align-items: center;
      }
      .controls .head-label {
        margin-bottom: 5px;
        font-size: 18px;
      }
      .controls .control {
        margin-bottom: 15px;
      }
      .controls .control .d-inline:nth-child(2) {
        margin-left: 5px;
      }
      .d-inline {
        display: inline-block;
      }
    `}</style>
  </div>
)
