import CarouselCard from "components/molecules/cards/CarouselCard/CarouselCard";
import Carousel from "react-native-reanimated-carousel";
import { vw } from "rxn-units";
import { CarouselElement } from "types/apps/carousel";

interface Props<T> {
  carouselData: T[];
}

const CommonCarousel = <T extends CarouselElement>({
  carouselData,
}: Props<T>) => {
  return (
    <Carousel
      loop
      autoPlay={true}
      autoPlayInterval={8000}
      style={{ width: "100%", marginTop: 40 }}
      width={vw(97)}
      height={300}
      vertical={false}
      data={carouselData}
      renderItem={({ item, index }) => (
        <CarouselCard<T> key={index} item={item} index={index} />
      )}
    />
  );
};

export default CommonCarousel;
