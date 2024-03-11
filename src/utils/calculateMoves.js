const calculateMoves = (cell) => {
  const moves = []

  switch (cell.piece.type) {
    case 'pawn':
      if (cell.piece.player === 'white') {
        moves.push({ x: cell.x, y: cell.y + 1 })
        if (cell.y === 1) moves.push({ x: cell.x, y: cell.y + 2 })
      } else {
        moves.push({ x: cell.x, y: cell.y - 1 })
        if (cell.y === 6) moves.push({ x: cell.x, y: cell.y - 2 })
      }
      break
    default:
      break
  }
  return moves
}

export default calculateMoves
