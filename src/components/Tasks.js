import PriceInput from './PriceInput';
import AgeGroupSelect from './AgeGroupSelect';
import AgeGroupPriceList from './AgeGroupPriceList';
import Section from './SectionContainer';

const Tasks = () => {
  return (
    <main>
      {/* Components */}
      <Section id='priceInput' title='PriceInput'>
        <PriceInput />
      </Section>
      <Section id='ageGroupSelect' title='AgeGroupSelect'>
        <AgeGroupSelect />
      </Section>
      <Section id='ageGroupPriceList' title='AgeGroupPriceList'>
        <AgeGroupPriceList />
      </Section>
      {/* Components */}
    </main>
  );
};

export default Tasks;
