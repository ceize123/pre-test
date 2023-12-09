import Title from './SectionTitle';

const Section = ({ children, id, title }) => {
  return (
    <section
      id={id}
      className='min-h-screen flex flex-col items-center justify-center py-8'
    >
      <Title title={title} />
      <div className='pt-4 md:w-3/5 w-4/5 mx-auto'>{children}</div>
    </section>
  );
};

export default Section;
