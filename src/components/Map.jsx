import Locations from '../assets/map.png';

const Map = () => (
  <div>
    <p className="text-3xl md:text-4xl text-center my-5">
      MIEJSCA DO JAZDY NA DESKOROLCE
    </p>
    <img
      src={Locations}
      alt="Miejsca do jazdy na deskorolce zaznaczone na mapie"
      className="w-[300px] md:w-[700px] mx-auto my-5"
    />
  </div>
);

export default Map;
