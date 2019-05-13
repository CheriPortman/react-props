import React from 'react';
import Dog from './Dog';
import Header from './Header';

export default function App() {
  return (
    <>
      <Header />
      <Dog name="Jimmy the Stitch" age={5} weight="18 pounds" />
    </>
  );
}
