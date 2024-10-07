export function Newsletter() {
  return (
    <section className="px-14 py-12 flex items-center justify-between bg-default-white text-default-black">
      <h1 className="text-8xl">NEWSLETTER</h1>
      <div className=" w-1/2 py-2">
        <div className=" w-full bg-default-black rounded-full flex items-center px-5 py-3">
          <input
            type="text"
            placeholder="Enter your email here.."
            className="w-full bg-default-black font-roboto placeholder:opacity-60"
          />
          <button className="bg-default-white rounded-3xl py-3 px-6">
            SUBSCRIBE
          </button>
        </div>
      </div>
    </section>
  );
}
