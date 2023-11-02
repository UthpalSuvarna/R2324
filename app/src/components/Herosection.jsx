import heroImage from '../assets/image.png';
export default function Herosection() {
    return(
        <section id="herosection" className=" flex items-center justify-around h-screen bg-stone-800">
            <div className="m-20 p-5">
                <h1 className="text-emerald-300 text-5xl">Welocme to the world of FOSS</h1>
                <p className=' text-emerald-300'>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
            </div>
            <div className='flex items-center justify-center'>
                <img src={heroImage} alt="image" className=' w-3/4' />
            </div>
        </section>
    );
}