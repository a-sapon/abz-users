import React, { useEffect } from 'react';
import { fetchPositions } from '../../../redux/operations';
import { connect } from 'react-redux';
import './positions.scss';

const Positions = ({ fetchPositions, positions, onHanleChange, position }) => {
  useEffect(() => {
    fetchPositions();
  }, [fetchPositions]);

  return (
    <>
      {typeof positions !== 'string' ? (
        <>
          {positions.length !== 0 && (
            <h3 className='position-title'>Select your position</h3>
          )}
          <ul className='position-list'>
            {positions.length !== 0 &&
              positions.map((pos) => (
                <li key={pos.id} className='position-list_item'>
                  <input
                    onChange={onHanleChange}
                    value={pos.name}
                    checked={position.id === pos.id}
                    type='radio'
                    name='position'
                    id={pos.id}
                  ></input>
                  <label htmlFor={pos.id} className='position-list_item-label'>
                    {pos.name}
                  </label>
                </li>
              ))}
          </ul>
        </>
      ) : (
        <h3>{positions}</h3>
      )}
    </>
  );
};

const mapStateToProps = ({ user }) => ({
  positions: user.positions,
});

export default connect(mapStateToProps, { fetchPositions })(Positions);
