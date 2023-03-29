db.createCollection("users", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      title: "sales Object Validation",
      //required: ["name", "email", "password"],
      properties: {
        name:{
            bsonType: "string",
            description: "'name' must be string and is required",
        },
        photo:{
            bsonType: "binData",
            description: "'photo' must be binData",
        },
        album:{
            bsonType: "array",
            items:{
                bsonType: "object",
                //required:["date","total","payment_metod"],
                properties:{
                    title:{
                        bsonType: "string",
                        description: "'title' must be string and is required",
                    },
                    date:{
                        bsonType: "date",
                        description: "'date' must be date and is required",
                    },
                    cover:{
                        bsonType: "binData",
                        description: "'photo' must be binData",
                    },
                    songs:{
                        bsonType: "array",
                        items:{
                            bsonType: "object",
                            //required:["date","total","payment_metod"],
                            properties:{
                                title:{
                                    bsonType: "string",
                                    description: "'title' must be string and is required",
                                },
                                length:{
                                    bsonType: "number",
                                    description: "'length' must be number and is required",
                                },
                                playbacks:{
                                    bsonType: "number",
                                    description: "'playbacks' must be number and is required",
                                },
                            }
                        }
                    }
                }

            }
        }


      },
    },
  },
});
