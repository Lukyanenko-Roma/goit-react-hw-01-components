import React from 'react';
import styles from './statistical.module.css'
import PropTypes from 'prop-types';

const StatsListItm = ({id, label, percentage }) => {
    return (
    <li key={id} className={styles.item}>
      <span className={styles.label}>{label}</span>
      <span className={styles.percentage}>{percentage}</span>
        </li>
    )
}

const StatsList = ({ items }) => {
    if (items.lenght === 0) return null
    return <ul className={styles.stat_list}> {items.map(StatsListItm) }</ul>
}
   

const Statistics = ({ items }) => {
    return(
        <section className={styles.statistics}>
            <h2 className={styles.title}>Upload stats</h2>
            
       <StatsList items={items}/>
        </section>
    )
}

Statistics.propTypes = {
  title: PropTypes.string.isRequired,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }),
  ),
};


export default Statistics;