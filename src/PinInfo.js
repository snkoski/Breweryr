import React from 'react';
import './App.css';


const PinInfo = (props) => {
  const { info } = props;

  return (
    <div className="popup">
      <div>
        {info.name}
        <br />
        {info.brewery_type}

        {info.website_url !== '' ? (
          <>
            <span>
              {' '}
              {' '}
|
              {' '}
              {' '}
            </span>
            <a
              target="_new"
              href={info.website_url}
            >
            Web site
            </a>

          </>
        ) : null}
      </div>
    </div>
  );
};

export default PinInfo;
