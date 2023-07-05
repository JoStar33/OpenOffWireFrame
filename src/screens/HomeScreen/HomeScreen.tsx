import EventCard from "components/molecules/cards/EventCard/EventCard";
import CommonCarousel from "components/molecules/carousel/CommonCarousel/CommonCarousel";
import OrganizerCarousel from "components/molecules/carousel/OrganizerCarousel/OrganizerCarousel";
import { carouselData } from "data/lists/carousels";
import { eventList } from "data/lists/eventList";
import { FlatList, ScrollView, View } from "react-native";
import { homeScreenStyles } from "./HomeScreen.style";

const HomeScreen = () => {
  return (
    <View style={homeScreenStyles.container}>
      <ScrollView
        style={{ flex: 1 }}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
      >
        <CommonCarousel carouselData={carouselData} />
        <OrganizerCarousel />
        <FlatList
          scrollEnabled={false}
          data={eventList}
          numColumns={1}
          onEndReachedThreshold={0.5}
          keyExtractor={(item) => String(item.id)}
          renderItem={(event) => (
            <EventCard key={event.index} event={event.item} />
          )}
        />
        <FlatList
          scrollEnabled={false}
          data={eventList}
          numColumns={1}
          onEndReachedThreshold={0.5}
          keyExtractor={(item) => String(item.id)}
          renderItem={(event) => (
            <EventCard key={event.index} event={event.item} />
          )}
        />
      </ScrollView>
    </View>
  );
};

export default HomeScreen;
