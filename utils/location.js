const MAP_TOOLKIT_API_KEY =
  'c3abdac123mshb2771eb1ba78208p1eeec5jsn1c9fe8a1ecde';

const MAP_TOOLKIT_BASE_URI = 'https://maptoolkit.p.rapidapi.com/staticmap';

//https://maptoolkit.p.rapidapi.com/staticmap/?maptype=terrain&size=750x300&center=48.205,16.398&zoom=10&rapidapi-key=your-api-key

export const getMapPreview = (lat, lng) => {
  const imageUri = `${MAP_TOOLKIT_BASE_URI}?maptype=terrain&size400x300&center=${lat},${lng}&zoom=10&rapidapi-key=${MAP_TOOLKIT_API_KEY}`;
  console.log(imageUri);

  return imageUri;
};
