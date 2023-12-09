import { useState, useMemo, useEffect } from 'react';
import InputLabel from './InputLabel';
import ErrorMessage from './ErrorMessage';
import { INITIAL_START_AGE, INITIAL_END_AGE } from '../const';

const renderStartAgeOptions = (end) => {
  const num = Number(end);
  return [...Array(num + 1)].map((_, i) => (
    <option key={`startAge-${i}`}>{i}</option>
  ));
};

const renderEndAgeOptions = (start) => {
  const num = Number(start);
  return [...Array(21 - num)].map((_, i) => {
    return <option key={`endAge-${i + num}`}>{Number(i + num)}</option>;
  });
};

// Select section
const SelectInputs = ({ name, value, handleOnChange, options }) => {
  return (
    <select
      name={name}
      id={name}
      value={value}
      type='number'
      onChange={handleOnChange}
      className={`block w-full p-2 rounded-none ${
        name === 'startAge' ? 'rounded-l-md' : 'rounded-r-md'
      } border-0 ring-1 ring-orange ring-inset focus:ring-2 focus:ring-inset focus:ring-orange outline-0`}
    >
      {options}
    </select>
  );
};

const AgeGroupSelect = ({ index, error, callback }) => {
  const [startAge, setStartAge] = useState(INITIAL_START_AGE);
  const [endAge, setEndAge] = useState(INITIAL_END_AGE);

  // prevent redundant rendering
  const startOptions = useMemo(() => renderStartAgeOptions(endAge), [endAge]);
  const endOptions = useMemo(() => renderEndAgeOptions(startAge), [startAge]);

  // If start age or end age has changed, call callback
  useEffect(() => {
    if (callback) callback(index, [startAge, endAge]);
  }, [startAge, endAge]);

  const handleStartAge = (e) => {
    setStartAge(parseInt(e.target.value));
  };

  const handleEndAge = (e) => {
    setEndAge(parseInt(e.target.value));
  };

  return (
    <div>
      <InputLabel title='年齡' />
      <div className='flex'>
        <SelectInputs
          name='startAge'
          value={startAge}
          handleOnChange={handleStartAge}
          options={startOptions}
        />
        <div className='bg-gray-200 border border-y-gray-400 self-stretch flex items-center justify-center w-16'>
          <span>~</span>
        </div>
        <SelectInputs
          name='endAge'
          value={endAge}
          handleOnChange={handleEndAge}
          options={endOptions}
        />
      </div>
      {error && <ErrorMessage content='年齡區間不可重疊' />}
    </div>
  );
};

export default AgeGroupSelect;
