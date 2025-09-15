// const mongoose = require("mongoose");

// const footerSchema = new mongoose.Schema(
//   {
//     about: {
//       title: { type: String, default: "Spare Parts Hub" },
//       description: {
//         type: String,
//         default:
//           "We provide high-quality spare parts with fast shipping and affordable prices — now with Cash on Delivery in major regions.",
//       },
//       logo: { type: String, default: "" }, 
//       cashOnDelivery: { type: Boolean, default: true },
//     },
//     customerServiceLinks: [
//       {
//         label: String,
//         url: String,
//       },
//     ],
//     pagesLinks: [
//       {
//         label: String,
//         url: String,
//       },
//     ],
//     contact: {
//       address: { type: String, default: "Cempaka Wangi No 22, Karachi - Pakistan" },
//       email: { type: String, default: "info@sparepartshubs.com" },
//       phone: { type: String, default: "+92 300-1234567" },
//       workingHours: { type: String, default: "7 Days a week from 10 am to 6 pm" },
//     },
//     socialLinks: [
//       {
//         platform: String, // e.g. "facebook"
//         icon: String, // e.g. "FaFacebookF"
//         url: String,
//       },
//     ],
//   },
//   { timestamps: true }
// );

// module.exports = mongoose.model("Footer", footerSchema);









const mongoose = require("mongoose");

const footerSchema = new mongoose.Schema(
  {
    about: {
      title: { type: String, required: true },
      description: { type: String, required: true },
      logo: { type: String }, 
      cashOnDelivery: { type: Boolean, default: true },
    },
    contact: {
      address: { type: String, required: true },
      email: { type: String, required: true },
      phone: { type: String, required: true },
      workingHours: { type: String, required: true },
    },
    socialLinks: [
      {
        platform: String, // facebook / instagram / twitter
        url: String,
      },
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Footer", footerSchema);
