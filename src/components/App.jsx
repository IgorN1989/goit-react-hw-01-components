import { Header, Title } from './Header/Header.styled';
import { Section } from './Section/Section.styled';

// ===============================================

import { ProfileCard } from './Profile/Profile';
import { StatisticsCard } from './Statistics/Statistics';
import { FriendListCard } from './FriendList/FriendList';
import { TransactionHistoryCard } from './TransactionHistory/TransactionHistory';

// ===============================================

import user from 'data/user.json';
import data from 'data/data.json';

export const App = () => {
  return (
    <>
      <Section>
        <Header>
          Task 1 - <Title>Profile</Title>
        </Header>
        <ProfileCard {...user} />
      </Section>

      <Section>
        <Header>
          Task 2 - <Title>Statistics</Title>
        </Header>
        <StatisticsCard title="Upload stats" stats={data} />
      </Section>

      <Section>
        <Header>
          Task 3 - <Title>Friends List</Title>
        </Header>
        <FriendListCard />
      </Section>

      <Section>
        <Header>
          Task 4 - <Title>Transaction History</Title>
        </Header>
        <TransactionHistoryCard />
      </Section>
    </>
  );
};
