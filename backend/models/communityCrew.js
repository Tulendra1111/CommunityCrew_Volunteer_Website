import mongoose from "mongoose";

const communityCrewSchema = new mongoose.Schema({
  name: String,
  email: String,
  amount: {
    type: String,
    required: true,
  },
  orderId: {
    type: String,
    required: true,
  },
  paymentStatus: String,
});

export const CommunityCrew = mongoose.model("CommunityCrew", communityCrewSchema);
