// import { useState } from "react";
// import axios from "../api/axios";
// import { useNavigate } from "react-router-dom";
// import logo from'../logo/sparepartslogo.jpg'
// export default function Register() {
//   const [form, setForm] = useState({
//     idNumber: "",
//     password: "",
//     contact: "",
//     address: "",
//     firstName: "",
//     lastName: "",
//     city: "",
//     area: ""
//   });

//   const [showPassword, setShowPassword] = useState(false);
//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (form.idNumber.length !== 15) {
//       return alert("ID must be exactly 15 digits.");
//     }

//     try {
//       await axios.post("/vendor/register", form);
//       alert("✅ Registered successfully!");
//       navigate("/login");
//     } catch (err) {
//       console.error(err);
//       alert("❌ Registration failed");
//     }
//   };

//   return (
//     <div className="max-w-xl mx-auto bg-white p-8 rounded shadow-md mt-10">
//          <div className="flex justify-center mb-6">
//           <img src={logo} alt="Vendor Logo" className="h-24 w-auto" />
//         </div>
//       <h2 className="text-2xl font-bold mb-6">Vendor Registration</h2>
//       <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-4">
//         <input name="firstName" onChange={handleChange} placeholder="First Name" required className="p-2 border rounded" />
//         <input name="lastName" onChange={handleChange} placeholder="Last Name" required className="p-2 border rounded" />
//         <input name="idNumber" onChange={handleChange} placeholder="15-digit Vendor ID" required className="p-2 border rounded" />
        
//         <div className="col-span-2 relative">
//           <input
//             type={showPassword ? "text" : "password"}
//             name="password"
//             onChange={handleChange}
//             placeholder="Create Password"
//             required
//             className="p-2 w-full border rounded"
//           />
//           <span
//             onClick={() => setShowPassword(!showPassword)}
//             className="absolute right-3 top-2 cursor-pointer text-sm text-gray-600"
//           >
//             {showPassword ? "🙈 Hide" : "👁 Show"}
//           </span>
//         </div>

//         <input name="contact" onChange={handleChange} placeholder="Contact Number" required className="p-2 border rounded" />
//         <input name="address" onChange={handleChange} placeholder="Shop Address" required className="p-2 border rounded" />
//         <input name="city" onChange={handleChange} placeholder="City" required className="p-2 border rounded" />
//         <input name="area" onChange={handleChange} placeholder="Area" required className="p-2 border rounded" />
//         <input
//   type="file"
//   name="idCardImage"
//   accept="image/*"
//   onChange={(e) => setFormData(e.target.files[0])}
// />

//         <div className="col-span-2 text-right">
//           <button className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700" type="submit">
//             Register
//           </button>
//         </div>
//       </form>
//       <p className="mt-4 text-sm text-center">
//   Already have an account?{" "}
//   <span
//     onClick={() => navigate("/login")}
//     className="text-blue-600 hover:underline cursor-pointer"
//   >
//     Login here
//   </span>
// </p>

//     </div>
//   );
// }



import { useState } from "react";
import axios from "../api/axios";
import { useNavigate } from "react-router-dom";
import logo from '../logo/sparepartslogo.jpg'

export default function Register() {
  const [form, setForm] = useState({
    idNumber: "",
    password: "",
    contact: "",
    address: "",
    firstName: "",
    lastName: "",
    city: "",
    area: ""
  });

  // NEW: state for file
  const [idCardImage, setIdCardImage] = useState(null);

  // NEW: Preview URL state
  const [previewURL, setPreviewURL] = useState(null);

  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (form.idNumber.length !== 15) {
      return alert("ID must be exactly 15 digits.");
    }
    if (!idCardImage) {
      return alert("Please upload an ID Card image!");
    }

    // NEW: building FormData
    const formData = new FormData();
    Object.keys(form).forEach((key) => {
      formData.append(key, form[key]);
    });
    formData.append("idCardImage", idCardImage);

    try {
      await axios.post("/vendor/register", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      alert("✅ Registered successfully!");
      navigate("/login");
    } catch (err) {
      console.error(err);
      alert("❌ Registration failed");
    }
  };

  return (
    <div className="max-w-xl mx-auto bg-white p-8 rounded shadow-md mt-10">
      <div className="flex justify-center mb-6">
        <img src={logo} alt="Vendor Logo" className="h-24 w-auto" />
      </div>
      <h2 className="text-2xl font-bold mb-6">Vendor Registration</h2>
      <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-4">
        <input name="firstName" onChange={handleChange} placeholder="First Name" required className="p-2 border rounded" />
        <input name="lastName" onChange={handleChange} placeholder="Last Name" required className="p-2 border rounded" />
        <input name="idNumber" onChange={handleChange} placeholder="15-digit Vendor ID" required className="p-2 border rounded" />
        
        <div className="col-span-2 relative">
          <input
            type={showPassword ? "text" : "password"}
            name="password"
            onChange={handleChange}
            placeholder="Create Password"
            required
            className="p-2 w-full border rounded"
          />
          <span
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-2 cursor-pointer text-sm text-gray-600"
          >
            {showPassword ? "🙈 Hide" : "👁 Show"}
          </span>
        </div>

        <input name="contact" onChange={handleChange} placeholder="Contact Number" required className="p-2 border rounded" />
        <input name="address" onChange={handleChange} placeholder="Shop Address" required className="p-2 border rounded" />
        <input name="city" onChange={handleChange} placeholder="City" required className="p-2 border rounded" />
        <input name="area" onChange={handleChange} placeholder="Area" required className="p-2 border rounded" />

     {/* Label text for file input */}
<label className="col-span-2 text-sm font-medium">Upload Your ID Card Image</label>

<input
  type="file"
  name="idCardImage"
  accept="image/*"
  onChange={(e) => {
    const file = e.target.files[0];
    setIdCardImage(file);
    if (file) {
      setPreviewURL(URL.createObjectURL(file));
    }
  }}
  className="col-span-2 p-2"
/>


        {/* NEW Image Preview */}
        {previewURL && (
          <img
            src={previewURL}
            alt="ID Card Preview"
            className="col-span-2 h-40 object-cover border rounded"
          />
        )}

        <div className="col-span-2 text-right">
          <button className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700" type="submit">
            Register
          </button>
        </div>
      </form>

      <p className="mt-4 text-sm text-center">
        Already have an account?{" "}
        <span
          onClick={() => navigate("/login")}
          className="text-blue-600 hover:underline cursor-pointer"
        >
          Login here
        </span>
      </p>
    </div>
  );
}
