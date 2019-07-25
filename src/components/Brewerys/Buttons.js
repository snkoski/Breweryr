import React from 'react';

const Buttons = (arr, filter) => {
  const renderButton = (type, index) => (
    <div key={`btn-${index}`} className="input" style={{ display: 'inline' }}>
      <button
        type="button"
        name="breweryType"
        id={`type-${index}`}
        onClick={() => setFilter(type)}
      >
        {type}
      </button>
    </div>
  );
  return (
    <div>
      {arr.map(renderButton)}
    </div>
  );
};

export default Buttons;
