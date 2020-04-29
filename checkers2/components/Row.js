import Cell from "./Cell";

export default ({ number, area }) => {
  let row = [];
  for(let i = 1; i <= area; i++) {
    row.push(<Cell key={`cell-${i}`} number={(number - 1) * area + i} area={area} />)
  }
  return (
    <div className="row">
      {row}
      <style jsx>{`
        .row{
          display: flex;
          flex-wrap: nowrap;
          flex-direction: row;
          flex-shrink: 0;
          justify-content: center;
        }
      `}</style>
    </div>
  )
}