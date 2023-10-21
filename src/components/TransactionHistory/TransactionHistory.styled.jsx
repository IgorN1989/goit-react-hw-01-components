import styled from 'styled-components';

export const Table = styled.table`
  width: 480px;
  border-collapse: collapse;
  border-radius: 15px;
  border-style: hidden;
  background-color: #fff;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  text-align: center;
`;

export const TableHeader = styled.th`
  padding: 15px;
  background-color: rgba(6, 152, 242, 0.7);
  border: 1px solid #fff;

  color: #fff;
  font-size: 18px;

  &:first-child {
    border-top-left-radius: 15px;
  }

  &:last-child {
    border-top-right-radius: 15px;
  }
`;

export const TableRow = styled.tr`
  font-weight: 500;
  background-color: ${({ $idx }) => {
    return $idx % 2 === 0 ? 'rgb(128, 128, 128, 0.1)' : '#fff';
  }};

  &:hover {
    cursor: pointer;
    background-color: rgba(6, 152, 242, 0.7);
    color: #fff;
  }
`;

export const TableData = styled.td`
  padding: 10px;
  border: 1px solid rgba(6, 152, 242, 0.7);
`;
