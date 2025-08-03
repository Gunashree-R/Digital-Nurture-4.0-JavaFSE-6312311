// IndianPlayers.jsx
import React from 'react';

const oddTeam = ['Rohit', 'Virat', 'Ravindra', 'Hardik', 'Shreyas'];
const evenTeam = ['KL', 'Suryakumar', 'Jasprit', 'Shubman', 'Ishan'];

const T20players = ['PlayerA', 'PlayerB', 'PlayerC'];
const RanjiTrophy = ['PlayerD', 'PlayerE', 'PlayerF'];

// Merge using spread operator
const mergedPlayers = [...T20players, ...RanjiTrophy];

const IndianPlayers = () => {
  // Destructure first two from oddTeam as example
  const [firstOdd, secondOdd, ...restOdd] = oddTeam;
  const [firstEven, secondEven, ...restEven] = evenTeam;

  return (
    <div>
      <h2>Indian Players</h2>

      <div>
        <h3>Odd Team</h3>
        <p>First: {firstOdd}</p>
        <p>Second: {secondOdd}</p>
        <p>Others: {restOdd.join(', ')}</p>
      </div>
      <hr style={{ border: '1px solid gray', margin: '20px 0' }} />
      <div>
        <h3>Even Team</h3>
        <p>First: {firstEven}</p>
        <p>Second: {secondEven}</p>
        <p>Others: {restEven.join(', ')}</p>
      </div>
      <hr style={{ border: '1px solid gray', margin: '20px 0' }} />
      <div>
        <h3>Merged Players (T20 + Ranji)</h3>
        <ul>
          {mergedPlayers.map((p, i) => (
            <li key={i}>{p}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default IndianPlayers;
