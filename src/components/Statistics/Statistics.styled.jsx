import styled from 'styled-components';

export const Statistics = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: baseline;
  align-items: center;

  min-width: 482px;

  background-color: #fff;

  border-radius: 15px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;

  &:hover {
    cursor: pointer;
  }
`;

export const StatisticsTitle = styled.h2`
margin: 0;
  padding: 30px 0;
  text-transform: uppercase;
  color: grey;
`;

export const StatisticsList = styled.ul`
  display: flex;
  justify-content: space-between;
  margin: 0;
  padding: 0;
  width: 100%;
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
  `;
