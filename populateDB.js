const connect = async () => {
  const connectToDatabase = require("./config/database");
  await connectToDatabase();

  const Options = require("./models/options");

  Options.insertMany(
    [
      {
        label: "Ice level",
        limit: 1,
        options: [
          {
            label: "Regular ice",
            price: 0,
          },
          {
            label: "Less ice",
            price: 0,
          },
          {
            label: "No ice",
            price: 0,
          },
          {
            label: "Extra ice",
            price: 0,
          },
        ],
      },
      {
        label: "Sugar level",
        limit: 1,
        options: [
          {
            label: "100%",
            price: 0,
          },
          {
            label: "75%",
            price: 0,
          },
          {
            label: "50%",
            price: 0,
          },
          {
            label: "25%",
            price: 0,
          },
          {
            label: "0%",
            price: 0,
          },
        ],
      },
      {
        label: "Dairy alternatives",
        limit: 1,
        options: [
          {
            label: "House milk (Regular)",
            price: 0,
          },
          {
            label: "Fresh milk",
            price: 0,
          },
          {
            label: "Almond milk",
            price: 0.5,
          },
          {
            label: "Oat milk",
            price: 0.5,
          },
        ],
      },
      {
        label: "Toppings",
        limit: -1,
        options: [
          {
            label: "Honey boba",
            price: 0.5,
          },
          {
            label: "Agar boba",
            price: 0.5,
          },
          {
            label: "Brown sugar boba",
            price: 0.5,
          },
          {
            label: "Red bean",
            price: 0.5,
          },
          {
            label: "Lychee jelly",
            price: 0.5,
          },
          {
            label: "Coffee jelly",
            price: 0.5,
          },
          {
            label: "Grass jelly",
            price: 0.5,
          },
          {
            label: "Caramel pudding",
            price: 0.75,
          },
        ],
      },
    ],
    (err, docs) => {
      if (err) {
        console.log(err);
      }

      console.log(docs);
    }
  );
};

connect();
