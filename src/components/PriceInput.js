import { useState } from 'react';
import { addComma } from '../helpers/utils';
import InputLabel from './InputLabel';
import ErrorMessage from './ErrorMessage';

const PriceInput = ({ index, price, callback }) => {
  const [error, setError] = useState('');

  const handleOnChange = (e) => {
    const val = e.target.value;
    if (val.length === 0) setError('不可以為空白');
    else {
      setError('');
    }
    price = addComma(val);
    callback(price, index);
  };

  return (
    <div>
      <InputLabel title='入住費用 (每人每晚)' />
      <div className='flex rounded-md'>
        <span className='inline-flex items-center rounded-l-md border border-gray-700 border-r-0 bg-gray-700 text-gray-100 px-3'>
          TWD
        </span>
        <input
          type='text'
          name='priceInput'
          data-testid='priceInput'
          className='block w-full p-2 rounded-none rounded-r-md border-0 ring-1 ring-gray-700 ring-inset focus:ring-2 focus:ring-inset focus:ring-primary outline-0 placeholder:text-gray-200'
          placeholder='100'
          onChange={handleOnChange}
          value={price}
        />
      </div>
      {error && <ErrorMessage content={error} />}
      <p className='text-end mt-1'>輸入0表示免費</p>
    </div>
  );
};

export default PriceInput;
