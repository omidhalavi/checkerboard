export default ({ number, area }) => {
  const rowNumber = Math.ceil(number/area);
  let className = `cell ${rowNumber % 2 === 0 ? "even" : "odd"}`;
  return (
    <div className={className}>
      <style jsx>{`
        .cell {
          border: 1px solid black;
          flex-basis: 5rem;
          height: 5rem;
          flex-shrink: 0;
        }
        .cell.even:nth-of-type(2n), .cell.odd:nth-of-type(2n+1) {
          background: linear-gradient(black, black);
        }
      `}</style>
    </div>
  )
}