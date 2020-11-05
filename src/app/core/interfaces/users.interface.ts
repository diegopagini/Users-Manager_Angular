export interface Users {
  results: Array<UsersData>;
}

export interface UsersData {
  gender: string;
  name: {
    gender: string;
    title: string;
    first: string;
    last: string;
  };
  location: {
    street: {
      number: number;
      name: string;
    };
    city: string;
    state: string;
    country: string;
    postcode: number;
    coordinates: {
      latitude: number;
      longitude: number;
    };
    timezone: {
      offset: number;
      description: string;
    };
  };
  email: string;
  login: {
    uuid: any;
    username: any;
    password: string;
  };
  dob: {
    date: any;
    age: number;
  };
  registered: {
    date: any;
    age: number;
  };
  phone: any;
  cell: any;
  id: {
    name: string;
    value: any;
  };
  picture: {
    large: string;
    medium: string;
    thumbnail: string;
  };
  nat: string;
}
