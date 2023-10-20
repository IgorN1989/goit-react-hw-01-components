import styled from 'styled-components';

export const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: baseline;
  align-items: center;
  width: 480px;

  background-color: #fff;
  border-radius: 15px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;

  &:hover {
    cursor: pointer;
  }
`;

export const UserDescription = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px 0 20px 0;
`;

export const UserAvatar = styled.img`
  width: 200px;
  height: 200px;
  object-fit: cover;
  object-position: center;
  border-radius: 50%;
  padding: 5px;
  background-color: rgb(6, 152, 242, 0.7);
`;

export const UserName = styled.p`
  margin: 0;
  padding: 25px 0 10px 0;
  font-size: 24px;
  font-weight: 700;
`;

export const UserTag = styled.p`
  margin: 0;
  padding: 5px 0;
  font-size: 18px;
  font-weight: 500;
  color: grey;
`;

export const UserLocation = styled.p`
  margin: 0;
  padding: 5px 0;
  font-size: 18px;
  font-weight: 500;
  font-style: italic;
  color: grey;
`;

export const UserStats = styled.ul`
  background-color: rgb(6, 152, 242, 0.7);
  display: flex;
  margin: 0;
  padding: 0;
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
`;

export const StatsItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100px;
  padding: 30px;
  border-right: 1px solid grey;

  &:last-child {
    border-right: none;
  }
`;

export const StatsLabel = styled.span`
  margin: 0;
  font-size: 18px;
  font-weight: 500;
  color: #fff;
`;

export const StatsQuantity = styled.span`
  margin: 0;
  font-size: 18px;
  font-weight: 700;
`;
