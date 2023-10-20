import styled from 'styled-components';
import { getRandomHexColor } from 'helpers/randomColor';

export const StatisticsItemContainer = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px 0;
  width: 100%;
  border-right: 1px solid grey;
  background-color: ${getRandomHexColor};

  &:first-child {
    border-bottom-left-radius: 15px;
  }

  &:last-child {
    border-right: none;
    border-bottom-right-radius: 15px;
  }
`;

export const StatisticsItemLabel = styled.span`
  margin: 0;
  font-size: 18px;
  font-weight: 500;
  color: #fff;
  text-shadow: #000 1px 0 10px;
`;

export const StatisticsItemValue = styled.span`
  margin: 0;
  font-size: 18px;
  font-weight: 700;
  text-shadow: #fff 1px 0 10px;
`;
