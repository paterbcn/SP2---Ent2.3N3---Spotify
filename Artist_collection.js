use("spotify");

db.artist.drop();


db.createCollection("artist", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      title: "sales Object Validation",
      required: ["name"],
      properties: {
        name: {
          bsonType: "string",
          description: "'name' must be string and is required",
        },
        photo: {
          bsonType: "binData",
          description: "'photo' must be binData",
        },
        album: {
          bsonType: "array",
          items: {
            bsonType: "object",
            required: ["title", "date"],
            properties: {
              title: {
                bsonType: "string",
                description: "'title' must be string and is required",
              },
              date: {
                bsonType: "date",
                description: "'date' must be date and is required",
              },
              cover: {
                bsonType: "binData",
                description: "'photo' must be binData",
              },
              songs: {
                bsonType: "array",
                items: {
                  bsonType: "object",
                  required: ["title", "length", "playbacks"],
                  properties: {
                    title: {
                      bsonType: "string",
                      description: "'title' must be string and is required",
                    },
                    length: {
                      bsonType: "number",
                      description: "'length' must be number and is required",
                    },
                    playbacks: {
                      bsonType: "number",
                      description: "'playbacks' must be number and is required",
                    },
                  },
                },
              },
            },
          },
        },
      },
    },
  },
});

const artist1 = {
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


const artist2 = {
  name: "artist2",
  album: [
    {
      title: "album4",
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
      title: "album5",
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

const artist3 = {
  name: "artist3",
  album: [
    {
      title: "album10",
      date: new Date("2020-01-01"),
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
  ],
};

db.artist.insertMany([artist1,artist2,artist3])