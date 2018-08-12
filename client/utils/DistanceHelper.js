const toRad = degrees => degrees * (Math.PI / 180);

class DistanceHelper {
  static computeDistance(fst, snd) {
    const R = 3958.3; // miles  // metres = 6371e3
    const φ1 = toRad(snd.latitude);
    const φ2 = toRad(fst.latitude);
    const Δφ = toRad(fst.latitude - snd.latitude);
    const Δλ = toRad(fst.longitude - snd.longitude);

    const a = (Math.sin(Δφ / 2) * Math.sin(Δφ / 2)) + (Math.cos(φ1) * Math.cos(φ2) * Math.sin(Δλ / 2) * Math.sin(Δλ / 2));
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

    const d = R * c;
    return d.toFixed(1);
  }
}

export default DistanceHelper;
