import CostsBackground from '../assets/costs-background.png';

const Costs = () => (
  <div className="bg-black flex items-center">
    <div className="relative">
      <div className="absolute inset-0 bg-white opacity-50" />
      <div className="text-black w-full md:w-max items-center md:left-12 lg:left-36 absolute text-2xl text-center flex flex-col gap-3 h-full justify-center">
        <p className="text-5xl">CENNIK</p>
        <p className="text-4xl mt-5">ZAJĘCIA GRUPOWE</p>
        <p>(max. 7 osób)</p>
        <p className="underline">2-GODZINNE 100 ZŁ</p>
        <p className="text-4xl mt-5">ZAJĘCIA INDYWIDUALNE</p>
        <p className="underline">1-GODZINNE 100 ZŁ</p>
        <p className="text-4xl mt-5">WYPOŻYCZENIE SPRZĘTU</p>
        <p className="underline">10 ZŁ</p>
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
