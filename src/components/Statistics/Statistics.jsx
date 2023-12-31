import {
  StatisticsContainer,
  StatisticsTitle,
  StatisticsList,
} from './Statistics.styled';

import { StatisticsItem } from 'components/StatisticsItem/StatisticsItem';

export const Statistics = ({ title, stats }) => (
  <StatisticsContainer>
    {title && <StatisticsTitle>{title}</StatisticsTitle>}

    <StatisticsList>
      {stats.map(({ id, label, percentage }) => (
        <StatisticsItem key={id} title={label} value={percentage} />
      ))}
    </StatisticsList>
  </StatisticsContainer>
);
