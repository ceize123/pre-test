import { useState, useMemo } from 'react';
import InputLabel from './InputLabel';
import ErrorMessage from './ErrorMessage';

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
      } border-0 ring-1 ring-gray-700 ring-inset focus:ring-2 focus:ring-inset focus:ring-primary outline-0`}
    >
      {options}
    </select>
  );
};

const AgeGroupSelect = ({ index, error, ageRange, callback }) => {
  let startAge = ageRange[0];
  let endAge = ageRange[1];

  // prevent redundant rendering
  const startOptions = useMemo(() => renderStartAgeOptions(endAge), [endAge]);
  const endOptions = useMemo(() => renderEndAgeOptions(startAge), [startAge]);

  const handleStartAge = (e) => {
    const val = parseInt(e.target.value);
    if (callback) callback([val, endAge], index);
  };

  const handleEndAge = (e) => {
    const val = parseInt(e.target.value);
    if (callback) callback([startAge, val], index);
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
        <div className='bg-gray-700 border border-y-gray-700 self-stretch flex items-center justify-center w-16 text-gray-100'>
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
