import OrganizerButton from 'components/atoms/buttons/OrganizerButton/OrganizerButton';
import { organizerCategory } from 'data/forms/organizerCategory';
import Carousel from 'react-native-reanimated-carousel';

const OrganizerCarousel = () => {
  return (
    <Carousel
      loop={true}
      style={{ width: "100%"}}
      width={66}
      height={96}
      vertical={false}
      data={organizerCategory}
      renderItem={({ item, index }) => (
        <OrganizerButton key={index} organizer={item}/>
      )}/>
  );
};

export default OrganizerCarousel;