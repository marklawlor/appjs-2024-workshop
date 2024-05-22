import { MediaCard } from "./MediaCard";
import Carousel, { CarouselProps } from "./Carousel";

export default function MediaCarousel({
  title,
  data,
}: Omit<CarouselProps, "renderItem">) {
  return <Carousel title={title} data={data} renderItem={MediaCard} />;
}
