const ErrorMessage = ({ content }) => {
  return (
    <div className='bg-red-100 text-red-700 rounded-sm p-1'>
      <p>{content}</p>
    </div>
  );
};

export default ErrorMessage;
