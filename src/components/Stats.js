import { useSelector } from "react-redux";

const Stats = () => {
  const stats = useSelector(state => state.stats);

  // Get percentage of the goal raised and convert to string in the format "num%"" 
  const barWidth = Math.round(((stats.backed / stats.goal) * 100)).toString() + '%';

  const barStyle = {
    width: barWidth
  }

  // Format integers to system locale currency
  const formatter = new Intl.NumberFormat(undefined, {
    currency: 'USD'
  });

  return (
    <div className="stats section-box">
      <div className="stats-top-row">
        <div className="stat-item">
          <span className="number-large">${formatter.format(stats.backed)}</span>
          <p className="stat-item-sub text">of ${formatter.format(stats.goal)} backed</p>
        </div>
        <div className="stat-item">
          <span className="number-large">{stats.totalBackers}</span>
          <p className="stat-item-sub text">total backers</p>
        </div>
        <div className="stat-item">
          <span className="number-large">{stats.daysLeft}</span>
          <p className="stat-item-sub text">days left</p>
        </div>
      </div>
      <div className="stats-bar">
        <div className="bar-fill" style={barStyle}></div>
      </div>
    </div>
  )
}

export default Stats;