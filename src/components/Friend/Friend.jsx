import {
  FriendContainer,
  Status,
  FriendAvatar,
  FriendName,
} from './Friend.styled';

import defaultAvatar from 'images/profile-default-avatar.png';

export const Friend = ({
  status,
  friendAvatar = defaultAvatar,
  friendName,
}) => (
  <FriendContainer>
    <Status status={status} />
    <FriendAvatar src={friendAvatar} alt={friendName} />
    <FriendName>{friendName}</FriendName>
  </FriendContainer>
);
