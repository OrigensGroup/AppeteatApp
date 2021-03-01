export type Marker = {
  coordinate: {
    latitude: number;
    longitude: number;
  };
  title: string;
  description: string;
  image: string;
};

const useMarkers = (): Marker[] => [
  {
    coordinate: {
      latitude: 45.524548,
      longitude: -122.6749817,
    },
    title: 'Be At One',
    description: '12 Upper St, The Angel, London N1 0PQ',
    image: '',
  },
  {
    coordinate: {
      latitude: 45.524698,
      longitude: -122.6655507,
    },
    title: 'Jack Solomon',
    description: '12 Upper St, The Angel, London N1 0PQ',
    image: '',
  },
  {
    coordinate: {
      latitude: 45.5230786,
      longitude: -122.6701034,
    },
    title: 'Third Best Place',
    description: 'This is the third best place in Portland',
    image: '',
  },
  {
    coordinate: {
      latitude: 45.521016,
      longitude: -122.6561917,
    },
    title: 'Fourth Best Place',
    description: 'This is the fourth best place in Portland',
    image: '',
  },
];

export default useMarkers;
