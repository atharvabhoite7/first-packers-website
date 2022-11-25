import mongoose from "mongoose";
const Schema = mongoose.Schema;

const formResponseSchema = new Schema({
  fullName: {
    type: String,
  },
  email: {
    type: String,
  },
  contactno: {
    type: Number,
  },
  budget: {
    type: String,
  },
  items: {
    type: String,
  },
});

const FormResponse =
  mongoose.models.FormResponse ||
  mongoose.model("FormResponse", formResponseSchema);

export default FormResponse;
