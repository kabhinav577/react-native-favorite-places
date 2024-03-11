const MAP_TOOLKIT_API_KEY =
  'c3abdac123mshb2771eb1ba78208p1eeec5jsn1c9fe8a1ecde';

const MAP_TOOLKIT_BASE_URI = 'https://maptoolkit.p.rapidapi.com/staticmap';

export const getMapPreview = (lat, lng) => {
  const imageUri = `${MAP_TOOLKIT_BASE_URI}?maptype=terrain&size=750x300&center=${lat},${lng}&zoom=11&marker=center:${lat},${lng}|anchor:bottom&rapidapi-key=${MAP_TOOLKIT_API_KEY}`;

  return imageUri;
};
