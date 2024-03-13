import { useEffect, useState } from 'react';
import { Text, ScrollView, Image, View, StyleSheet } from 'react-native';

import OutlinedButton from '../components/UI/OutlinedButton';
import { Colors } from '../constants/colors';
import { fetchPlaceDetails } from '../utils/database';

const PlaceDetails = ({ route, navigation }) => {
  const [fetchPlace, setFetchPlace] = useState();
  const selectedPlaceId = route.params.placeId;

  const showOnMapHandler = () => {
    navigation.navigate('Map', {
      initialLat: fetchPlace.lat,
      initialLng: fetchPlace.lng,
    });
  };

  useEffect(() => {
    const loadPlaceData = async () => {
      const place = await fetchPlaceDetails(selectedPlaceId);
      setFetchPlace(place);
      navigation.setOptions({
        title: place.title,
      });
    };

    loadPlaceData();
  }, [selectedPlaceId]);

  if (!fetchPlace) {
    return (
      <View style={styles.fallback}>
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <ScrollView>
      <Image style={styles.image} source={{ uri: fetchPlace.imageUri }} />
      <View style={styles.locationContainer}>
        <View style={styles.addressContainer}>
          <Text style={styles.address}>{fetchPlace.address}</Text>
        </View>
        <OutlinedButton icon="map" onPress={showOnMapHandler}>
          View on Map
        </OutlinedButton>
      </View>
    </ScrollView>
  );
};

export default PlaceDetails;

const styles = StyleSheet.create({
  fallback: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    height: '35%',
    minHeight: 300,
    width: '100%',
  },
  locationContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  addressContainer: {
    padding: 20,
  },
  address: {
    color: Colors.primary500,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
