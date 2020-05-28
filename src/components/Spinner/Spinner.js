import React from 'react';
import spinner from './spinner.gif';

export default () => {
  return (
    <div>
      <img
        src={spinner}
        style={{ width: '200px', margin: 'auto', display: 'block' , backgroundColor: "rgb(250, 250, 250)"}}
        alt="Loading..."
      />
    </div>
  );
};
