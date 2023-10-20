import { FriendsListContainer } from './FriendsList.styled';
import { Friend } from 'components/Friend/Friend';

export const FriendsList = ({ friends }) => (
  <FriendsListContainer>
    {friends.map(({ id, avatar, name, isOnline }) => (
      <Friend
        key={id}
        friendAvatar={avatar}
        friendName={name}
        status={isOnline}
      />
    ))}
  </FriendsListContainer>
);
