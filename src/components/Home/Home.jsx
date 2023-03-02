const Home = () => {
  return (
    <div className="border-2 border-solid border-purple-300 text-center">
      {/* Delete this later */}
      <h1 className="">Home</h1>

      <section
        id="hook"
        className="m-4 grid grid-cols-3 grid-rows-1 gap-1.5 border-2 border-solid border-purple-600"
      >
        <div className="col-start-1 col-end-3 border border-solid border-purple-900 py-64 px-32">
          Greeting
        </div>
        <div className="col-start-3 col-end-4 border border-solid border-purple-900 px-32 py-64">
          Picture
        </div>
      </section>

      <section
        id="background"
        className="m-4 grid grid-cols-5 grid-rows-1 gap-1.5 border-2 border-solid border-purple-600"
      >
        <div className="col-start-1 col-end-5 border border-solid border-purple-900 px-32 py-64">
          Background Info
        </div>
        <div className="col-start-5 col-end-6 border border-solid border-purple-900 px-32 py-64">
          Photo
        </div>
      </section>
    </div>
  );
};

export default Home;
