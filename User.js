use("spotify");

db.users.drop();

db.createCollection("users", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      title: "sales Object Validation",
      required: ["email", "password", "birthday","user_name","gender","country","type"],
      properties: {
        email: {
          bsonType: "string",
          description: "'email' must be string and is required",
        },
        password: {
          bsonType: "string",
          description: "'password' must be string and is required",
        },
        birthday: {
          bsonType: "date",
          description: "'birthday' must be date and is required",
        },
        user_name: {
          bsonType: "string",
          description: "'user_name' must be string and is required",
        },
        gender: {
          bsonType: "string",
          enum: ["male", "female"],
          description: "'gender' must be male or female and is required",
        },
        country: {
          bsonType: "string",
          description: "'country' must be string and is required",
        },
        type: {
          bsonType: "string",
          enum: ["free", "premium"],
          description: "'gender' must be male or female and is required",
        },
        subscription: {
          bsonType: "array",
          items: {
            bsonType: "object",
            required:["renewal_date","start_date","payments"],
            properties: {
              renewal_date: {
                bsonType: "date",
                description: "'renewal_date' must be date and is required",
              },
              start_date: {
                bsonType: "date",
                description: "'start_date' must be date and is required",
              },
              payments: {
                bsonType: "array",
                items: {
                  bsonType: "object",
                  required:["date","total","payment_metod"],
                  properties: {
                    date: {
                      bsonType: "date",
                      description: "'date' must be date",
                    },
                    total: {
                      bsonType: "number",
                      description: "'total' must be number",
                    },
                    payment_metod: {
                      bsonType: "objectId",
                      description:
                        "'payment_metod' must be objectId",
                    },
                  },
                },
              },
            },
          },
        },
        user_payments_metods: {
          bsonType: "array",
          items: {
            bsonType: "object",
            required:["name"],
            properties: {
              name: {
                bsonType: "string",
                enum: ["credit card", "paypal"],
                description:
                  "'name' must be 'credit card' or 'paypal' and is required",
              },
              cc_number: {
                bsonType: "number",
                description: "'cc_number' must be number",
              },
              cc_exp_date: {
                bsonType: "string",
                description: "'cc_exp_date' must be string",
              },
              cc_sec_number: {
                bsonType: "number",
                description: "'cc_sec_number' must be number",
              },
              pp_user_name: {
                bsonType: "string",
                description: "'pp_user_name' must be string",
              },
            },
          },
        },
        playlist: {
          bsonType: "array",
          items: {
            bsonType: "object",
            required:["name","state"],
            properties: {
              name: {
                bsonType: "string",
                description: "'name' must be string and is required",
              },
              state: {
                bsonType: "string",
                enum: ["public", "private"],
                description:
                  "'name' must be 'public' or 'private' and is required",
              },
              songs: {
                bsonType: "array",
                items: {
                  bsonType: "objectId",
                },
              },
              followers: {
                bsonType: "array",
                items: {
                  bsonType: "object",
                  properties: {
                    id_user: {
                      bsonType: "objectId",
                      description: "'id_user' must be objectId",
                    },
                    songs: {
                      bsonType: "array",
                      items: {
                        bsonType: "object",
                        properties: {
                          id_song: {
                            bsonType: "objectId",
                            description:
                              "'id_song' must be objectId",
                          },
                          date: {
                            bsonType: "date",
                            description: "'date' must be date",
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
      },
    },
  },
});

const user1 = {
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
      state: "public",
      songs: [
        ObjectId("642153299216c6c22f0aa878"),
        ObjectId("642155d1545c6699fd25082c"),
        ObjectId("642153299216c6c22f0aa879"),
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
    },
  ],
};
  

  const user2 = {
    email: "bbb@email.com",
    password: "133333",
    birthday: new Date("1990-01-01"),
    user_name: "user2",
    gender: "female",
    country: "spain",
    type: "free",
    
    playlist: [
      {
        name: "list2",
        state: "private",
        songs: [
          ObjectId("642153299216c6c22f0aa878"),
          ObjectId("642155d1545c6699fd25082c"),
          ObjectId("642153299216c6c22f0aa879"),
        ],
      },
      {
        name: "list3",
        state: "public",
        songs: [
          ObjectId("642153299216c6c22f0aa888"),
          ObjectId("642155d1545c6699fd25082c"),
          ObjectId("642153299216c6c22f0aa889"),
        ],
        followers: [
          {
            id_user: ObjectId("642153299216c6c22f0aa979"),
            songs: [
              {
                id_song: ObjectId("642153299216c6c22f0aa780"),
                date: new Date(),
              },
              {
                id_song: ObjectId("642153299216c6c22f0aa781"),
                date: new Date(),
              },
            ],
          },
        ],
      },
    ],
  };
  
  const user3 = {
    email: "cccc@email.com",
    password: "122345",
    birthday: new Date("2001-01-01"),
    user_name: "user3",
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
        name: "list4",
        state: "public",
        songs: [
          ObjectId("642153299216c6c22f0aa878"),
          ObjectId("642155d1545c6699fd25082c"),
          ObjectId("642153299216c6c22f0aa879"),
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
      },
      {
        name: "list5",
        state: "private",
        songs: [
          ObjectId("642153299216c6c22f0aa878"),
          ObjectId("642155d1545c6699fd25082c"),
          ObjectId("642153299216c6c22f0aa879"),
        ],
          },
    ],
  };
    


db.users.insertMany([user1,user2,user3])