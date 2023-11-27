export const geolocation = async () => {
  if ("geolocation" in navigator) {
    try {
      const position = await new Promise<GeolocationPosition>(
        (resolve, reject) => {
          navigator.geolocation.getCurrentPosition(resolve, reject);
        }
      );

      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;
      return {
        latitude,
        longitude,
      };
    } catch (error) {
      return {
        latitude: null,
        longitude: null,
      };
    }
  } else {
    return {
      latitude: null,
      longitude: null,
    };
  }
};
