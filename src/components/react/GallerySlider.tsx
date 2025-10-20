import { Carousel, CarouselContent, CarouselItem } from "../ui/carousel";

export default function Gallery() {
  return (
    <Carousel
      opts={{
        align: 'center',
        loop: true,
      }}
    >
      <CarouselContent className="-ml-2 md:-ml-4">
        <CarouselItem className="basis-5/6 pl-2 md:pl-4 md:basis-2/3">
          <img
            src="/photo1.webp"
            alt="img 1"
            className="aspect-[16/9] w-full rounded-xl object-cover"
            width={100}
            height={100}
          />
        </CarouselItem>
        <CarouselItem className="basis-5/6 pl-2 md:pl-4 md:basis-2/3">
          <img
            src="/photo2.webp"
            alt="img 2"
            className="aspect-[16/9] w-full rounded-xl object-cover"
            width={100}
            height={100}
          />
        </CarouselItem>
        <CarouselItem className="basis-5/6 pl-2 md:pl-4 md:basis-2/3">
          <img
            src="/photo3.webp"
            alt="img 3"
            className="aspect-[16/9] w-full rounded-xl object-cover"
            width={100}
            height={100}
          />
        </CarouselItem>
        <CarouselItem className="basis-5/6 pl-2 md:pl-4 md:basis-2/3">
          <img
            src="/photo4.webp"
            alt="img 4"
            className="aspect-[16/9] w-full rounded-xl object-cover"
            width={100}
            height={100}
          />
        </CarouselItem>
      </CarouselContent>
    </Carousel>
  );
}