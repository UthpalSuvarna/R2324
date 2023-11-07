export default function Navbar() {
  return (
    <div className="flex justify-center bg-slate-950  h-16 p-4 fixed top4 w-screen z-50">
      <div className="flex justify-between w-4/6">
        <div className=" text-emerald-300 tex-xl mx-4  font-sans font-bold">
          R2324
        </div>
        <nav>
          <ul className="flex text-white">
            <li className="mx-6">Home</li>
            <li className="mx-6">FOSS</li>
            <li className="mx-6">GNU/LInux</li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
