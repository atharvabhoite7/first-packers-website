import testimonialSchema from "../../models/testimonialSchema";
const mongoose = require("mongoose");

async function handler(req, res) {
  if (req.method != "POST") {
    return res.status(405).end();
  }

  try {
    const { fullName, location, testimonial } = req.body;
    await mongoose
      .connect(process.env.MONGO_URL, {
        useNewUrlParser: true,
      })
      .then(() => console.log("DB connected"));
    let newTestimonial = new testimonialSchema({
      fullName,
      location,
      testimonial,
    });
    await newTestimonial.save();
    console.log(newTestimonial);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal Error" });
  } finally {
    mongoose.connection.close();
  }
}

export default handler;
