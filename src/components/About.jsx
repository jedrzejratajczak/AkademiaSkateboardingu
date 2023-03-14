import React from 'react';
import AboutPhoto from '../assets/about-photo.jpg';

const About = () => {
  return (
    <div className="p-10 gap-10 grid grid-cols-[max-content_1fr]">
      <img className="w-[400px]" src={AboutPhoto} alt="Adam, instruktor" />
      <div className="text-xl flex flex-col gap-5 uppercase">
        <p>
          Cześć, nazywam się Adam Szulc i od 13 lat jeżdżę na deskorolce, która
          z czasem z prostej zajawki zmieniła się w nieodłączną część mojego
          życia.
        </p>
        <p>
          Poza czystą przyjemnością z jazdy, pozwoliła mi ona zmienić sposób
          postrzegania świata, poznać wspaniałych ludzi z różnych zakątków
          polski i świata, oraz trafić w nowe miejsca.
        </p>
        <p>
          W 2021 roku zacząłem uczyć jazdy, żeby móc dzielić się doświadczeniami
          z innymi osobami i móc pokazać to co w skateboardingu spodobało mi się
          najbardziej.
        </p>
        <p>
          Obecnie jestem licencjonowanym instruktorem polish skate federation i
          prowadzę: - regularne zajęcia we Wrocławiu - warsztaty dla szkół i
          fundacji - zajęcia wyjazdowe w różnych miastach - w roli instruktora
          prowadzę także stałą współpracę z największymi w europie obozami
          deskorolkowymi woodcamp.
        </p>
        <p>
          „Ogromną częścią skateboardingu, zarówno fizycznie, jak i kulturowo,
          jest odkrywanie rzeczy, o których nie wiedziałeś, że ich szukasz” -
          Jack Sabback
        </p>
      </div>
    </div>
  );
};

export default About;
