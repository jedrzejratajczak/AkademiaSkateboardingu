import AboutPhoto from '../assets/about-photo.jpg';
import Contact from './Contact';
import Gallery from './Gallery';

const About = () => (
  <div>
    <div className="p-10 gap-10 flex flex-col md:flex-row items-center">
      <div className="overflow-hidden md:hidden">
        <img
          className="object-cover h-96 -mb-32 md:h-auto md:mb-0 md:w-[300px] lg:w-[400px]"
          src={AboutPhoto}
          alt="Adam, instruktor"
        />
      </div>
      <img
        className="hidden md:block object-cover h-96 -mb-32 md:h-auto md:mb-0 md:w-[300px] lg:w-[400px]"
        src={AboutPhoto}
        alt="Adam, instruktor"
      />
      <div className="text-sm md:text-base lg:text-xl flex flex-col gap-5 uppercase">
        <p>
          Cześć, jestem Adam i od 13 lat jeżdżę na deskorolce, która z czasem z
          prostej zajawki zmieniła się w nieodłączną część mojego życia.
        </p>
        <p>
          Poza czystą przyjemnością z jazdy, pozwoliła mi ona zmienić sposób
          postrzegania świata, poznać wspaniałych ludzi z różnych zakątków
          polski i świata, oraz trafić w nowe miejsca.
        </p>
        <p>
          W 2021 roku zacząłem uczyć jazdy, żeby móc dzielić się zajawką z
          innymi osobami i móc pokazać to co w skateboardingu spodobało mi się
          najbardziej.
        </p>
        <p>
          Obecnie jestem licencjonowanym instruktorem polish skate federation i
          prowadzę: <br />- regularne zajęcia we Wrocławiu <br />- warsztaty dla
          szkół i fundacji <br />- zajęcia wyjazdowe w różnych miastach <br />-
          w roli instruktora prowadzę także stałą współpracę z największymi w
          europie obozami deskorolkowymi woodcamp.
        </p>
        <p>
          „Ogromną częścią skateboardingu, zarówno fizycznie, jak i kulturowo,
          jest odkrywanie rzeczy, o których nie wiedziałeś, że ich szukasz” -
          Jack Sabback
        </p>
      </div>
    </div>
    <Contact />
    <Gallery />
  </div>
);

export default About;
