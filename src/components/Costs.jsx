import CostsBackground from '../assets/costs-background.png';

const Costs = () => (
  <div className="bg-black flex items-center">
    <div className="relative">
      <div className="absolute inset-0 bg-white opacity-50" />
      <div className="text-black w-full md:w-max items-center md:left-12 lg:left-36 absolute text-2xl text-center flex flex-col gap-3 h-full justify-center">
        <p className="text-5xl">CENNIK</p>
        <p className="text-4xl mt-5">ZAJĘCIA GRUPOWE</p>
        <p>* RAZ W TYGODNIU 2H</p>
        <p className="underline">300 ZŁ / MSC</p>
        <p>* 2 RAZY W TYGODNIU 2H</p>
        <p className="underline">500 ZŁ / MSC</p>
        <p className="text-4xl mt-5">ZAJĘCIA INDYWIDUALNE</p>
        <p className="underline">* 100 ZŁ / H</p>
        <p className="underline">* 150 ZŁ / 2H</p>
      </div>
      <img
        className="h-[600px] w-screen object-cover"
        src={CostsBackground}
        alt="Kickflip"
      />
    </div>
  </div>
);

export default Costs;
