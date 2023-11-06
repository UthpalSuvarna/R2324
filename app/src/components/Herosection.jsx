import heroImage from "../assets/image.png";
export default function Herosection() {
  return (
    <section
      id="herosection"
      className="flex justify-center bg-slate-950"
    >
      <div className="flex items-center justify-around min-h-screen  max-w-screen-2xl">
        <div className="p-5 m-10">
          <h1 className="text-teal-200 text-5xl font-bold">
            Welcome to the world of <br/><span>FOSS</span>
          </h1>
          <p className=" text-emerald-300 mt-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores quia dicta et ipsum iste in quis dolorum omnis ea pariatur?
          </p>
        </div>
        <div className="flex items-center justify-center">
          <img src={heroImage} alt="image" className=" w-3/4" />
        </div>
      </div>
    </section>
  );
}
