import { Header, Title } from './Header/Header.styled';
import { Section } from './Section/Section.styled';

// ===============================================

import { Profile } from './Profile/Profile';
import { Statistics } from './Statistics/Statistics';
import { FriendsList } from './FriendsList/FriendsList';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';

// ===============================================

import user from 'data/user.json';
import data from 'data/data.json';
import friends from 'data/friends.json';
import transactions from 'data/transactions.json';

export const App = () => (
  <>
    <Section>
      <Header>
        Task 1 - <Title>Profile</Title>
      </Header>
      <Profile {...user} />
    </Section>

    <Section>
      <Header>
        Task 2 - <Title>Statistics</Title>
      </Header>
      <Statistics title="Upload stats" stats={data} />
    </Section>

    <Section>
      <Header>
        Task 3 - <Title>Friends List</Title>
      </Header>
      <FriendsList friends={friends} />
    </Section>

    <Section>
      <Header>
        Task 4 - <Title>Transaction History</Title>
      </Header>
      <TransactionHistory transactions={transactions}/>
    </Section>
  </>
);
