import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';

export function HeroCarousel() {
  const slides = [
    {
      image: 'https://dev.viaproxy.eu/img/services/marketplace.jpg',
      title: 'Good deals and supportive neighbors',
      subtitle: 'Trusted neighbors ready to help you!',
    },
    {
      image: 'https://dev.viaproxy.eu/img/services/livreurs.jpg',
      title: 'Eco-responsible deliveries',
      subtitle: 'Pick up your orders from your retailer or have them eco-delivered!',
    },
    {
      image: 'https://dev.viaproxy.eu/img/services/promos.jpg',
      title: 'Local promotions',
      subtitle: 'Take advantage of promotional checks from local merchants and artisans',
    },
  ];

  //   const totalSlides = slides.length;
  //   const autoplayInterval = 1000; // 5 seconds autoplay interval

  //   // Autoplay logic
  //   useEffect(() => {
  //     const intervalId = setInterval(() => {
  //       setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides);
  //     }, autoplayInterval);

  //     return () => {
  //       clearInterval(intervalId); // Clean up the interval on unmount
  //     };
  //   }, [totalSlides]);

  return (
    <Carousel className="w-full relative">
      <CarouselContent>
        {slides.map((slide, index) => (
          <CarouselItem
            key={index}
            className="relative flex items-center justify-center min-h-screen w-full bg-cover bg-center"
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            {/* Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-50" />
            {/* Text Content */}
            <div className="relative z-10 text-center text-white px-4">
              <h1 className="text-4xl font-bold sm:text-5xl">{slide.title}</h1>
              <p className="mt-4 text-lg sm:text-xl">{slide.subtitle}</p>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>

      {/* Previous and Next Buttons */}
      <div className="absolute top-1/2 left-20 transform -translate-y-1/2 z-10">
        <CarouselPrevious className="text-white bg-black p-2 rounded-full">&lt;</CarouselPrevious>
      </div>
      <div className="absolute top-1/2 right-20 transform -translate-y-1/2 z-10">
        <CarouselNext className="text-white bg-black p-2 rounded-full">&gt;</CarouselNext>
      </div>
    </Carousel>
  );
}
