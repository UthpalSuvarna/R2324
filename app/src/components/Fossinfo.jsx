import fossimage from "../assets/featured-open-source.png";
export default function Fossinfo() {
  return (
    <div className="px-44 py-24">
      <div className="flex justify-around">
        <img src={fossimage} alt="" className="h-96" />
        <div>
          <h1 className=" text-center text-5xl p-10">What is Foss?</h1>
          <p className="text-center py-10 pl-10">
            Lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
            optio repellendus totam ullam doloribus autem dolorem vel qui
            asperiores voluptate quidem perferendis quibusdam suscipit delectus
            cum 96 doloremque ut facilis, provident ad minima? Quas alias libero
            beatae, maxime ad adipisci ducimus reprehenderit, natus sit quo,
            repellendus modi? Veritatis, similique laboriosam? ipsum dolor sit
            amet, consectetur adipisicing elit. Quaerat, officiis.
          </p>
          <div className="flex justify-end mr-10">
            <button>know more</button>
          </div>
        </div>
      </div>
     
    </div>
  );
}
