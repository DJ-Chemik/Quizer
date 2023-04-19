import React from 'react';
import DummyBackendConnector from '../DummyBackendConnector/DummyBackendConnector';
import { QuizerRootWrapper } from './QuizerRoot.styled';

const QuizerRoot = () => {
  return (
    <QuizerRootWrapper>
      <main>Quizer Root</main>
      <DummyBackendConnector />
    </QuizerRootWrapper>
  );
};

export default QuizerRoot;
