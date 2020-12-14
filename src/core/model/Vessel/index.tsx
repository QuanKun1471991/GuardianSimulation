export const simulationFormatMessage = (data: any) => {
  const { mmsi, heading, longLatCoord, timeStamp, speed, createdAt } = data;

  return {
    id: "996db34a-d55b-5781-bd56-06ebd9ab1716",
    rot: 0,
    flag: "Cyprus",
    mmsi,
    nmea: "!AIVDM,1,1,,B,137g`F001T1ud71dQgh2nR480000,0*2A",
    speed: speed || Math.floor(Math.random() * 21),
    course: 73,
    msg_id: "1594941958_209447000",
    source: "FM107",
    status: 0,
    heading,
    accuracy: 0,
    latitude: longLatCoord[1],
    maneuver: 0,
    msg_type: 1,
    position: {
      type: "point",
      coordinates: longLatCoord,
    },
    longitude: longLatCoord[0],
    timestamp: timeStamp,
    created_at: createdAt || timeStamp,
    collection_type: "satellite",
    flag_short_code: "CY",
  };
};

export const aisFakeMessage = (data: any) => {
  return {
    paging: {
      limit: 5000,
      latest_id: 111111111,
      total: data.length,
    },
    data,
  };
};
