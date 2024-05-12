// components/Board.js
"use client"
import React, { useState } from 'react';

const Board = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);

  const handleClick = (i) => {
    const newBoard = [...board];
    if (calculateWinner(board) || newBoard[i]) {
      return;
    }
    newBoard[i] = xIsNext ? 'X' : 'O';
    setBoard(newBoard);
    setXIsNext(!xIsNext);
  };

  const handleReset = () => {
    setBoard(Array(9).fill(null));
    setXIsNext(true);
  };

  const renderSquare = (i) => {
    return (
      <button className="square bg-gray-200 text-4xl font-bold border border-gray-400" onClick={() => handleClick(i)}>
        {board[i]}
      </button>
    );
  };

  const winner = calculateWinner(board);
  let status;
  if (winner) {
    status = <span className="text-2xl font-bold text-green-600">Winner: {winner}</span>;
  } else {
    status = <span className="text-xl font-bold">Next player: {xIsNext ? <span className="text-blue-600">X</span> : <span className="text-red-600">O</span>}</span>;
  }

  return (
    <div className="max-w-lg mx-auto">
      <div className='flex items-center mb-4 justify-around'>

      <div className="status ">{status}</div>
      <button className="reset-btn bg-green-500 hover:bg-green-600 ml-4 text-white font-bold py-2 px-4 rounded mt-8" onClick={handleReset}>Reset</button>
      </div>
      <div className="board grid grid-cols-3 gap-4 justify-items-center">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
    </div>
  );
};

// Function to calculate winner
const calculateWinner = (squares) => {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
};

export default Board;
