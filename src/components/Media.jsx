import { Carousel } from 'react-responsive-carousel';
import { useMediaQuery } from '@react-hook/media-query';
import YouTube from 'react-youtube';
import Img1 from '../assets/gallery/1.jpg';
import Img2 from '../assets/gallery/2.jpg';
import Img3 from '../assets/gallery/3.jpg';
import Img4 from '../assets/gallery/4.jpg';
import Img5 from '../assets/gallery/5.jpg';
import Img6 from '../assets/gallery/6.jpg';
import Img7 from '../assets/gallery/7.jpg';
import Img8 from '../assets/gallery/8.jpg';
import Img9 from '../assets/gallery/9.jpg';
import Img10 from '../assets/gallery/10.jpg';
import Img11 from '../assets/gallery/11.jpg';
import Img12 from '../assets/gallery/12.jpg';
import Img13 from '../assets/gallery/13.jpg';
import Img14 from '../assets/gallery/14.jpg';

const Media = () => {
  const isMd = useMediaQuery('only screen and (min-width: 768px)');

  const images = [
    Img1,
    Img2,
    Img3,
    Img4,
    Img5,
    Img6,
    Img7,
    Img8,
    Img9,
    Img10,
    Img11,
    Img12,
    Img13,
    Img14
  ];

  return (
    <div className="flex flex-col items-center">
      <p className="text-3xl md:text-4xl text-center my-5">NAJNOWSZE SZOTY</p>
      <div className="pb-16">
        <Carousel
          width={isMd ? 500 : 300}
          showThumbs={false}
          infiniteLoop
          autoPlay
          statusFormatter={() => null}
        >
          {images.map(image => (
            <div key={image}>
              <img
                className="max-h-[500px] object-contain"
                alt=""
                src={image}
              />
            </div>
          ))}
        </Carousel>
      </div>
      <YouTube
        className="my-5"
        videoId="cTQLZD5FYHs"
        opts={{
          height: isMd ? '390' : '100%',
          width: isMd ? '640' : '300'
        }}
      />
    </div>
  );
};

export default Media;
