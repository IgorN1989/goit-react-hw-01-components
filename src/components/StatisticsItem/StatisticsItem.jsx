import {
  StatisticsItemContainer,
  StatisticsItemLabel,
  StatisticsItemValue,
} from './StatisticsItem.styled';

export const StatisticsItem = ({ title, value }) => (
  <StatisticsItemContainer>
    <StatisticsItemLabel>{title}</StatisticsItemLabel>
    <StatisticsItemValue>{value}%</StatisticsItemValue>
  </StatisticsItemContainer>
);
