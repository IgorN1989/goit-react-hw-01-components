import {
  StatisticsItemContainer,
  StatisticsItemLabel,
  StatisticsItemValue,
} from './StatisticsItem.styled';

export const StatisticsItem = ({title, value}) => {
  return (
    <StatisticsItemContainer>
      <StatisticsItemLabel>{title}</StatisticsItemLabel>
      <StatisticsItemValue>{value}%</StatisticsItemValue>
    </StatisticsItemContainer>
  );
};
