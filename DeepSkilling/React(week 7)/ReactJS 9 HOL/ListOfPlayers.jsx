// ListOfPlayers.jsx
import React from 'react';

const players = [
  { name: 'Virat Kohli', score: 85 },
  { name: 'Rohit Sharma', score: 65 },
  { name: 'KL Rahul', score: 72 },
  { name: 'Suryakumar Yadav', score: 55 },
  { name: 'Jasprit Bumrah', score: 90 },
  { name: 'Ravindra Jadeja', score: 68 },
  { name: 'Hardik Pandya', score: 78 },
  { name: 'Shubman Gill', score: 60 },
  { name: 'Ishan Kishan', score: 95 },
  { name: 'Shreyas Iyer', score: 49 },
  { name: 'Kuldeep Yadav', score: 82 },
];

const ListOfPlayers = () => {
  // Filter players with score below 70
  const below70 = players.filter(p => p.score < 70);

  return (
    <div>
      <h2>All Players</h2>
      <ul>
        {players.map((p, idx) => (
          <li key={idx}>
            {p.name} - {p.score}
          </li>
        ))}
      </ul>
      <hr style={{ border: '1px solid gray', margin: '20px 0' }} />
      <h3>Players with Score below 70</h3>
      <ul>
        {below70.map((p, idx) => (
          <li key={idx}>
            {p.name} - {p.score}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListOfPlayers;
