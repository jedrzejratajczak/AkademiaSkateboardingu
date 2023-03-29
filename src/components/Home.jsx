import HomeBackground from '../assets/home-background.png';

const Home = () => (
  <div className="bg-black flex items-center">
    <div className="relative">
      <p className="text-white text-center w-full absolute top-5 text-3xl md:text-5xl lg:text-6xl">
        AKADEMIA SKATEBOARDINGU
      </p>
      <img
        className="h-[600px] w-screen object-cover"
        src={HomeBackground}
        alt="Kickflip"
      />
      <p className="text-white absolute bottom-36 w-full text-center md:text-right text-xl md:text-3xl lg:text-4xl md:right-10">
        WROCŁAWSKA SZKOŁA DESKOROLKI!
      </p>
      <p className="text-white absolute bottom-5 w-full text-center md:text-right text-xl md:text-3xl lg:text-4xl md:right-10">
        POSTAW PIERWSZE KROKI Z NAMI!
      </p>
    </div>
  </div>
);

export default Home;
