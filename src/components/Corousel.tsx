import Slider from 'react-slick';
import partner1 from "../images/partner1.svg";
import partner2 from "../images/partner2.svg";
import partner3 from "../images/partner3.png";
import partner4 from "../images/partner4.webp";
import partner5 from "../images/partner5.webp";
import partner6 from "../images/partner6.png";
import partner7 from "../images/partner7.webp";
import partner8 from "../images/partner8.png";
import partner9 from "../images/partner9.png";
import partner10 from "../images/partner10.png";
import partner11 from "../images/partner11.png";

const partners = [
  { logo: partner1, name: 'Partner 1' },
  { logo: partner2, name: 'Partner 2' },
  { logo: partner3, name: 'Partner 3' },
  { logo: partner4, name: 'Partner 4' },
  { logo: partner5, name: 'Partner 5' },
  { logo: partner6, name: 'Partner 6' },
  { logo: partner7, name: 'Partner 7' },
  { logo: partner8, name: 'Partner 8' },
  { logo: partner9, name: 'Partner 9' },
  { logo: partner10, name: 'Partner 10' },
  { logo: partner11, name: 'Partner 11' },
];

const NetworkReachCarousel = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 4000,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: 'linear',
    arrows: false, // Disable left and right arrows
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="container mx-auto p-6 pb-10">
      <h2 className="text-3xl font-bold text-center mb-6">Our Courier Partners</h2>
      <Slider {...settings} className="partner-carousel">
        {partners.map((partner, index) => (
          <div key={index} className="p-4">
            <div className="bg-white p-1 rounded-lg shadow-md hover:shadow-lg transition-shadow flex flex-col items-center">
              <img src={partner.logo} alt={partner.name} className="w-20 h-16 mb-4" />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default NetworkReachCarousel;
