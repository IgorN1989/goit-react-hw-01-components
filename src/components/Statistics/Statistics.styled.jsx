import styled from 'styled-components';

export const StatisticsContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: baseline;
  align-items: center;
  width: 480px;

  background-color: #fff;
  border-radius: 15px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`;

export const StatisticsTitle = styled.h2`
  margin: 0;
  padding: 30px 0;
  text-transform: uppercase;
  color: grey;
`;

export const StatisticsList = styled.ul`
  display: flex;
  gap: 0px;
  margin: 0;
  padding: 0;
  width: 100%;
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
`;
