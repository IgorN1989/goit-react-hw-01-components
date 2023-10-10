import { Container } from './Container/Container.styled';
import { Section } from './Section/Section.styled';
import { Header } from './Header/Header.styled';

// ===============================================

import { ProfileCard } from './Profile/Profile';
import { StatisticsCard } from './Statistics/Statistics';
import { FriendListCard } from './FriendList/FriendList';
import { TransactionHistoryCard } from './TransactionHistory/TransactionHistory';

export const App = () => {
  return (
    <Container>
      <Section>
        <Header>Task 1 - Profile</Header>
        <ProfileCard />
      </Section>
      <Section>
        <Header>Task 2 - Statistics</Header>
        <StatisticsCard />
      </Section>
      <Section>
        <Header>Task 3 - Friends List</Header>
        <FriendListCard />
      </Section>
      <Section>
        <Header>Task 4 - Transaction History</Header>
        <TransactionHistoryCard />
      </Section>
    </Container>
  );
};
