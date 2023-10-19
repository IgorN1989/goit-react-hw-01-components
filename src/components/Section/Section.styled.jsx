import styled from 'styled-components';

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0;
  padding: 30px;
  border-bottom: thick double rgb(6, 152, 242, 0.7);

  &:last-child {
    border: none;
  }
`;
