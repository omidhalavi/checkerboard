import Piece from "./Piece";

export default (props) => {
  const { number, area, topColor, bottomColor, shape } = props;
  const topRows = area * 2;
  const bottomRows = (area * area) - topRows;
  const rowNumber = Math.ceil(number/area);
  let className = `cell ${rowNumber % 2 === 0 ? "even" : "odd"}`;
  return (
    <div className={className}>
      { number <= topRows && <Piece color={topColor} shape={shape} />}
      { number > bottomRows && number <= number && <Piece color={bottomColor} shape={shape} />}
      <style jsx>{`
        .cell {
          border: 1px solid black;
          flex-basis: 5rem;
          height: 5rem;
          flex-shrink: 0;
        }
        .cell.even:nth-of-type(2n), .cell.odd:nth-of-type(2n+1) {
          background: black;
        }
      `}</style>
    </div>
  )
}