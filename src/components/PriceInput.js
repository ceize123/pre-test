import { useState, useEffect } from 'react';
import { addComma } from '../helpers/utils';
import InputLabel from './InputLabel';
import ErrorMessage from './ErrorMessage';
import { INITIAL_PRICE } from '../const';

const PriceInput = ({ index, callback }) => {
  const [price, setPrice] = useState(INITIAL_PRICE);
  const [error, setError] = useState('');

  // If price has changed, call callback
  useEffect(() => {
    if (callback) callback(index, price);
  }, [price]);

  const handleOnChange = (e) => {
    const val = e.target.value;
    if (val.length === 0) setError('不可以為空白');
    else {
      setError('');
    }
    setPrice(addComma(val));
  };

  return (
    <div>
      <InputLabel title='入住費用 (每人每晚)' />
      <div className='flex rounded-md'>
        <span className='inline-flex items-center rounded-l-md border border-r-0 border-gray-400 bg-gray-200 text-gray-400 px-3'>
          TWD
        </span>
        <input
          type='text'
          name='priceInput'
          data-testid='priceInput'
          className='block w-full p-2 rounded-none rounded-r-md border-0 ring-1 ring-orange ring-inset focus:ring-2 focus:ring-inset focus:ring-orange outline-0 placeholder:text-gray-200'
          placeholder='100'
          onChange={handleOnChange}
          value={price}
        />
      </div>
      {error && <ErrorMessage content={error} />}
      <p className='text-end text-gray-400 mt-1'>輸入0表示免費</p>
    </div>
  );
};

export default PriceInput;
