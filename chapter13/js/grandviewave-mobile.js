function validateGPS(lat,lon) {
    if (lat == 0 || lon == 0) return false;
    if (lat < 38 || lat > 41)  return false;
    if (lon > -82 || lon < -84)  return false;
    if (!isNaN(lat) && !isNaN(lon)) return true;
    return false;
}
