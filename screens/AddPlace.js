import PlaceForm from '../components/Places/PlaceForm';

const AddPlace = ({ navigation }) => {
  const createPlaceHandler = (place) => {
    navigation.navigate('AllPlaces', { place });
  };

  return <PlaceForm onAddPlace={createPlaceHandler} />;
};

export default AddPlace;
