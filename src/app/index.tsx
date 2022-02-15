import React from 'react';
import styles from './index.module.scss';
import H2 from '../shared/ui/h2/h2';
import Button from '../shared/ui/button/button';
import Container from 'shared/ui/container/container';

function App() {
  return (
    <div className={styles.app}>
      <Container>
        <Button
          onClick={(e: any) => {
            console.log(e.type);
          }}
          text='Оформить заказ'
        />
        <H2 text={'Соберите бургер'} />
      </Container>
    </div>
  );
}

export default App;
