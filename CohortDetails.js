// CohortDetails.js
import React from 'react';
import styles from './components/CohortDetails.module.css';

function CohortDetails({ cohort }) {
  const statusClass = cohort.currentStatus === 'Ongoing' ? styles.ongoing : styles.other;

  return (
    <div className={styles.box}>
      <h3 className={statusClass}>
        {cohort.cohortCode} - <span>{cohort.technology}</span>
      </h3>
      <dl>
        <dt>Start Date:</dt>
        <dd>{cohort.startDate}</dd>

        <dt>End Date:</dt>
        <dd>{cohort.endDate}</dd>

        <dt>Status:</dt>
        <dd>{cohort.currentStatus}</dd>

        <dt>Coach:</dt>
        <dd>{cohort.coachName}</dd>

        <dt>Trainer:</dt>
        <dd>{cohort.trainerName}</dd>
      </dl>
    </div>
  );
}

export default CohortDetails;
