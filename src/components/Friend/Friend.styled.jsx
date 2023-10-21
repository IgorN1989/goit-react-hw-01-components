import styled from 'styled-components';

export const FriendContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  width: 450px;
  margin: 0;
  padding: 15px;
  background-color: #fff;
  border-radius: 15px;
  color: rgb(6, 152, 242, 0.7);
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    cursor: pointer;
    background-color: rgb(6, 152, 242, 0.7);
    color: #fff;
  }
`;

export const Status = styled.span`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${({ status }) => {
    return status === true ? 'green' : 'red';
  }};
  margin: 0;
`;

export const FriendAvatar = styled.img`
  width: 50px;
  height: 50px;
  margin: 0;
  padding: 5px;
  border: 2px solid rgb(6, 152, 242, 0.7);
  border-radius: 15px;
  background-color: #fff;
`;

export const FriendName = styled.p`
  margin: 0;
  font-size: 24px;
  font-weight: 700;
`;
