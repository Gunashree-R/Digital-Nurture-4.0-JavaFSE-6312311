// App.js
import React from 'react';
import CohortDetails from './CohortDetails';

function App() {
  const cohorts = [
    {
      cohortCode: "FS101",
      technology: "React",
      startDate: "22-Feb-2022",
      endDate: "30-Apr-2022",
      currentStatus: "Ongoing",
      coachName: "John Doe",
      trainerName: "Jane Smith",
    },
    {
      cohortCode: "FS102",
      technology: "Java",
      startDate: "10-Sep-2021",
      endDate: "20-Nov-2021",
      currentStatus: "Completed",
      coachName: "Alice",
      trainerName: "Bob",
    },
    {
      cohortCode: "FS103",
      technology: "Angular",
      startDate: "01-Jan-2022",
      endDate: "01-Mar-2022",
      currentStatus: "Ongoing",
      coachName: "Charlie",
      trainerName: "Eve",
    },
  ];

  return (
    <div>
      <h1>Cohorts Details</h1>
      {cohorts.map((cohort, index) => (
        <CohortDetails key={index} cohort={cohort} />
      ))}
    </div>
  );
}

export default App;
