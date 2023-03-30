const user = {
  email: "aaa@email.com",
  password: "122345",
  birthday: new Date("2000-01-01"),
  user_name: "user1",
  gender: "male",
  country: "spain",
  type: "premium",
  subscription: [
    {
      renewal_date: new Date("2023-01-01"),
      start_date: new Date("2020-01-01"),
      payments: [
        {
          date: new Date("2021-01-01"),
          total: 50,
          payment_metod: ObjectId("642155d1545c6699fd25082c"),
        },
        {
          date: new Date("2022-01-01"),
          total: 50,
          payment_metod: ObjectId("642155d1545c6699fd25082c"),
        },
      ],
    },
  ],
  user_payments_metods: [
    {
      name: "paypal",
      pp_user_name: "user1",
    },
  ],
  playlist: [
    {
      name: "list1",
      state: "private",
      songs: [
        ObjectId("642153299216c6c22f0aa878"),
        ObjectId("642155d1545c6699fd25082c"),
        ObjectId("642153299216c6c22f0aa879"),
      ],
    },
  ],
  followers: [
    {
      id_user: ObjectId("642153299216c6c22f0aa879"),
      songs: [
        {
          id_song: ObjectId("642153299216c6c22f0aa880"),
          date: new Date(),
        },
        {
          id_song: ObjectId("642153299216c6c22f0aa881"),
          date: new Date(),
        },
      ],
    },
  ],
};


const artist = {
  name: "artist1",
  album: [
    {
      title: "album1",
      date: new Date("2022-01-01"),
      songs: [
        {
          title: "song1",
          length: 5,
          playbacks: 10,
        },
        {
          title: "song2",
          length: 3,
          playbacks: 30,
        },
        {
          title: "song3",
          length: 3,
          playbacks: 4,
        },
      ],
    },
    {
      title: "album2",
      date: new Date("2021-01-01"),
      songs: [
        {
          title: "song4",
          length: 5,
          playbacks: 10,
        },
        {
          title: "song5",
          length: 3,
          playbacks: 30,
        },
        {
          title: "song6",
          length: 3,
          playbacks: 4,
        },
      ],
    },
  ],
};
