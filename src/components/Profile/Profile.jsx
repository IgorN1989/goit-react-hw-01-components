import {
  ProfileContainer,
  UserDescription,
  UserAvatar,
  UserName,
  UserTag,
  UserLocation,
  UserStats,
  StatsItem,
  StatsLabel,
  StatsQuantity,
} from './Profile.styled';

import defaultAvatar from 'images/profile-default-avatar.png';

export const Profile = ({
  username,
  tag,
  location,
  avatar = defaultAvatar,
  stats,
}) => (
  <ProfileContainer>
    <UserDescription>
      <UserAvatar src={avatar} alt={username} />
      <UserName>{username}</UserName>
      <UserTag>@{tag}</UserTag>
      <UserLocation>{location}</UserLocation>
    </UserDescription>

    <UserStats>
      <StatsItem>
        <StatsLabel>Followers</StatsLabel>
        <StatsQuantity>{stats.followers}</StatsQuantity>
      </StatsItem>
      <StatsItem>
        <StatsLabel>Views</StatsLabel>
        <StatsQuantity>{stats.views}</StatsQuantity>
      </StatsItem>
      <StatsItem>
        <StatsLabel>Likes</StatsLabel>
        <StatsQuantity>{stats.likes}</StatsQuantity>
      </StatsItem>
    </UserStats>
  </ProfileContainer>
);
