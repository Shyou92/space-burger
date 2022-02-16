import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import styles from './index.module.scss';
import Container from 'shared/ui/container/container';
import Main from 'pages/main/main';
import Header from 'pages/main/header/header';
import Feed from 'entities/feed/feed';
import Construct from 'entities/construct/construct';
import Account from 'entities/account/account';

function App() {
  const [active, setActive] = useState(false);

  const onToggle = () => {
    setActive(!active);
  };

  return (
    <div className={styles.app}>
      <Header onToggle={onToggle} active={active} />
      <Container>
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/feed' element={<Feed />} />
          <Route path='/construct' element={<Construct />} />
          <Route path='/account' element={<Account />} />
        </Routes>
      </Container>
    </div>
  );
}

export default App;
