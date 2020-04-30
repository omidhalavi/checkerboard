export default ({ color, shape }) => {
  return (
    <div className="piece" >
      <style jsx>{`
        .piece {
          height: 80%;
          width: 80%;
          margin: 10% auto;
          border-radius: ${shape === "square" ? 0 : "50%"};
          background: ${color};
        }
      `}</style>
    </div>
  )
}