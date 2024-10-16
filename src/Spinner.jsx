const Spinner = () => {
  return (
    <div className="flex justify-center items-center min-h-screen flex-col gap-3">
      <div className="loader ease-linear rounded-full border-8 border-t-8 border-gray-200 h-32 w-32"></div>
      <h1 className="text-3xl font-semibold ">Loading...</h1>
    </div>
  );
};

export default Spinner;
