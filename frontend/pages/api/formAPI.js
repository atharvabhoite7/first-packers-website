import mongoose from "mongoose";
import FormResponse from "../../models/formResponse";

export default async function handler(req, res) {
  mongoose
    .connect(
      process.env.MONGO_URL,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    )
    .then(() => {
      console.log("Connected to Mongo");
    })
    .catch((e) => {
      console.log("Failed to connect to Mongo");
      console.log(e);
    });

  if (req.method === "POST") {
    console.log(req.body.formData);

    const formResponse = new FormResponse(req.body.formData);
    await formResponse.save();

    // console.log(userProfile);
    res.status(200).send("success");
  }
}
