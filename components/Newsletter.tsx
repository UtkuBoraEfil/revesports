export function Newsletter() {
  return (
    <section className="md:px-14 px-6 md:py-12 py-10 flex flex-col md:flex-row items-center justify-between bg-default-white text-default-black gap-4">
      <h1 className="lg:text-8xl md:text-6xl text-5xl">NEWSLETTER</h1>
      <div className=" md:w-1/2 w-full py-2">
        <div className=" w-full bg-default-black rounded-full flex items-center md:px-5 md:py-3 px-3 py-2">
          <input
            type="text"
            placeholder="Enter your email here.."
            className="w-full bg-default-black font-roboto placeholder:opacity-60 text-default-white focus:outline-none md:text-sm text-[12px]"
          />
          <button className="bg-default-white rounded-3xl md:py-3 md:px-6 py-2 px-3 md:text-sm text-[12px] lg:text-base">
            SUBSCRIBE
          </button>
        </div>
      </div>
    </section>
  );
}
