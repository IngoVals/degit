const Home = (): JSX.Element => {
  return (
    <>
      <div className="flex items-center justify-center min-h-screen bg-gray-200">
        <div className="max-w-sm p-6 tracking-wide bg-white border-2 border-gray-300 rounded-md shadow-lg">
          <div id="header" className="flex items-center mb-4">
            <img
              alt="avatar"
              className="w-20 border-2 border-gray-300 rounded-full"
              src="https://picsum.photos/seed/picture/200"
            />
            <div id="header-text" className="ml-6 leading-5 sm">
              <h4 id="name" className="text-xl font-semibold">
                Next app
              </h4>
              <h5 id="job" className="font-semibold text-blue-600">
                React Framework
              </h5>
            </div>
          </div>
          <div id="quote">
            <q className="italic text-gray-600">
              Initialized with typescript and tailwind.
            </q>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
