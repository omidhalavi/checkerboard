import Row from "./Row";

export default (props) => {
  const { area } = props;
  let rows = [];
  for(let i = 1; i <= area; i++) {
    rows.push(<Row key={`row-${i}`} number={i} {...props} />)
  }
  return (
    <div className="board">
      {rows}
      <style jsx>{`
        .board{
          display: flex;
          flex-direction: column;
          height: 100vh;
          align-items: center;
          width: 100%;
        }
      `}</style>
    </div>
  )
}
