import HomeBackground from '../assets/home-background.png';

const Home = () => (
  <div>
    <div className="relative">
      <p className="text-white text-center w-full absolute top-5 text-3xl lg:text-5xl">
        AKADEMIA SKATEBOARDINGU
      </p>
      <img src={HomeBackground} alt="Kickflip" />
      <p className="text-white absolute bottom-5 w-full text-right text-3xl lg:text-5xl right-10">
        POSTAW PIERWSZE KROKI Z NAMI!
      </p>
    </div>
  </div>
);

export default Home;
