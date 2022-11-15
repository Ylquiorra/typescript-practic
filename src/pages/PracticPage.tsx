import React, { FC } from 'react';
import { Card, CardVariant } from '../components/Card';
import { EventsExample } from '../components/EventsExample';

export const PracticPage: FC = () => {
  return (
    <>
      <EventsExample />
      <Card
        handleClick={(num: number) => console.log(num, 'click')}
        variant={CardVariant.primary}
        width="400px"
        height="500px">
        <button>Кнопка</button>
      </Card>
    </>
  );
};
