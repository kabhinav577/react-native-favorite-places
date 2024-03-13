import PlaceForm from '../components/Places/PlaceForm';
import { insertPlace } from '../utils/database';

const AddPlace = ({ navigation }) => {
  const createPlaceHandler = async (place) => {
    await insertPlace(place);
    navigation.navigate('AllPlaces');
  };

  return <PlaceForm onAddPlace={createPlaceHandler} />;
};

export default AddPlace;
