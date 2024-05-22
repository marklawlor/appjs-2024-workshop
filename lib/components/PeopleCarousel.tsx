import { PersonCard } from "./PersonCard";
import Carousel, { CarouselProps } from "./Carousel";

export default function PeopleCarousel({
  title,
  data,
}: Omit<CarouselProps, "renderItem">) {
  return <Carousel title={title} data={data} renderItem={PersonCard} />;
}
