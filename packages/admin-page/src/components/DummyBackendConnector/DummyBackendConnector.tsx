import React, { useState } from 'react';
import superagent from 'superagent';

const DummyBackendConnector = () => {

  const [dummyResponse, setDummyResponse] = useState<string>();

  const handleClickDummyConnector = async () => {
    const NUMBER_1 = 10;
    const NUMBER_2 = 2;
    const NUMBER_3 = 3;
    const response = await superagent
      .post(`${process.env.API_URL}/dummy/${NUMBER_3}`)
      .send({
        'bodyParam': NUMBER_1,
      })
      .query({
        'queryParam': NUMBER_2,
      });
    setDummyResponse(response.text);
  };

  return (
    <div>
      <button onClick={handleClickDummyConnector}>Make request to backend</button>
      <p>Dummy response: {dummyResponse}</p>
    </div>
  );
};

export default DummyBackendConnector;
