import { useEffect, useState } from 'react';
import AgeGroupSelect from './AgeGroupSelect';
import PriceInput from './PriceInput';
import { getNumberIntervals } from '../helpers/utils';
import { group } from '../const';

const divider = <div className='border border-b-1 border-gray-200 mt-8'></div>;

const AgeGroupPriceList = () => {
  const [list, setList] = useState([group]);
  const [available, setAvailable] = useState(false);
  const [ageError, setAgeError] = useState(false);

  useEffect(() => {
    setAgeError(false);
    setAvailable(false);
    const ageRanges = list.map((obj) => obj.ageRange);
    const intervals = getNumberIntervals(ageRanges);
    if (intervals.overlap.length !== 0) {
      setAgeError(true);
    }
    // If length of notInclude is 0, it means numbers from 0 to 20 has selected
    if (intervals.notInclude.length !== 0) {
      setAvailable(true);
    }
  }, [list]);

  const renderList = () => {
    return list.map((_, i) => (
      <div key={`list-${i}`} className='pt-4'>
        <h2 className='text-lg'>{`價格設定 - ${i + 1}`}</h2>
        <div className='grid sm:grid-cols-2 grid-cols-1 sm:gap-x-4 gap-y-8 sm:gap-y-0 mt-5'>
          <AgeGroupSelect
            index={i}
            error={ageError}
            callback={selectCallback}
          />
          <PriceInput index={i} callback={inputCallback} />
        </div>
        {divider}
      </div>
    ));
  };

  const selectCallback = (index, range) => {
    setList((prevList) => {
      const updatedList = [...prevList];
      updatedList[index] = { ...updatedList[index], ageRange: range };
      return updatedList;
    });
  };

  const inputCallback = (index, price) => {
    setList((prevList) => {
      const updatedList = [...prevList];
      updatedList[index] = { ...updatedList[index], price: price };
      return updatedList;
    });
  };

  const handleOnClick = () => {
    if (available) {
      setList((prevList) => [...prevList, group]);
    }
  };

  return (
    <div>
      {renderList()}
      <div className='mt-8'>
        <h2
          className={`text-lg ${
            available ? 'text-primary cursor-pointer' : 'text-gray-400'
          }`}
          onClick={handleOnClick}
        >
          ＋ 新增價格設定
        </h2>
      </div>
      {/* Output */}
      <div className='mt-16'>
        <h2 className='text-lg'>結果:</h2>
        <p>{JSON.stringify(list)}</p>
      </div>
      {/* Output */}
    </div>
  );
};

export default AgeGroupPriceList;
