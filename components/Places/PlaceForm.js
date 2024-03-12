import { useCallback, useState } from 'react';
import { View, Text, ScrollView, TextInput, StyleSheet } from 'react-native';

import Button from '../UI/Button';
import ImagePicker from './ImagePicker';
import { Colors } from '../../constants/colors';
import LocationPicker from './LocationPicker';
import { Place } from '../../models/place';

const PlaceForm = ({ onAddPlace }) => {
  const [enteredTitle, setEnteredTitle] = useState('');
  const [selectImage, setSelectImage] = useState();
  const [pickedLocation, setPickedLocation] = useState();

  const titleChangeHandler = (enteredText) => {
    setEnteredTitle(enteredText);
  };

  const takeImageHandler = (imageUri) => {
    setSelectImage(imageUri);
  };

  const pickLocationHandler = useCallback((location) => {
    setPickedLocation(location);
  }, []);

  const savePlaceHandler = () => {
    const placeData = new Place(enteredTitle, selectImage, pickedLocation);
    onAddPlace(placeData);
    setEnteredTitle('');
    setSelectImage(null);
    setPickedLocation(null);
  };

  return (
    <ScrollView style={styles.form}>
      <View>
        <Text style={styles.label}>Title</Text>
        <TextInput
          value={enteredTitle}
          onChangeText={titleChangeHandler}
          style={styles.input}
        />
      </View>
      <ImagePicker onTakeImage={takeImageHandler} />
      <LocationPicker onPickLocation={pickLocationHandler} />
      <View style={styles.button}>
        <Button onPress={savePlaceHandler}>Add Place</Button>
      </View>
    </ScrollView>
  );
};

export default PlaceForm;

const styles = StyleSheet.create({
  form: {
    flex: 1,
    padding: 24,
  },
  label: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 4,
    color: Colors.primary500,
  },
  input: {
    backgroundColor: Colors.primary100,
    borderBottomColor: Colors.primary700,
    borderBottomWidth: 2,
    fontSize: 18,
    marginVertical: 15,
    paddingVertical: 8,
    paddingHorizontal: 4,
  },
  button: {
    marginTop: 10,
  },
});
