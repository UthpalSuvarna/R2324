import fossimage from "../assets/GNU-white.png";
export default function GNUinfo() {
  return (
     <div className=" py-24 px-44">
      <div className="flex justify-around">
        
        <div>
          <h1 className=" text-center text-5xl p-10">GNU/Linux</h1>
          <p className="text-center py-10 pr-10 max-w-5xl">
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
        <img src={fossimage} alt="" className="h-96" />
      </div>
     
    </div>
  );
}
