import {
  Statistics,
  StatisticsTitle,
  StatisticsList,
} from './Statistics.styled';
import { StatisticsItem } from 'components/StatisticsItem/StatisticsItem';

export const StatisticsCard = ({ title, stats }) => {
  return (
    <Statistics>
      {title && <StatisticsTitle>{title}</StatisticsTitle>}

      <StatisticsList>
        {stats.map(({ id, label, percentage }) => (
          <StatisticsItem key={id} title={label} value={percentage} />
        ))}
      </StatisticsList>
    </Statistics>
  );
};
