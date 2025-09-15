// import { useState } from "react";
// import axios from "../api/axios";
// import { useNavigate } from "react-router-dom";

// export default function Login() {
//   const [idNumber, setIdNumber] = useState("");
//   const [password, setPassword] = useState("");
//   const [show, setShow] = useState(false);
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const res = await axios.post("/vendor/login", { idNumber, password });

//       localStorage.setItem("vendorToken", res.data.token);
//       localStorage.setItem("vendorInfo", JSON.stringify(res.data.vendor));

//       alert("✅ Login successful!");
//       navigate("/"); 
//     } catch (err) {
//       console.error(err);
//       alert("❌ Login failed");
//     }
//   };

//   return (
//     <div className="max-w-md mx-auto mt-10 bg-white p-8 rounded shadow-md">
//       <h2 className="text-2xl font-bold mb-6">Vendor Login</h2>
//       <form onSubmit={handleSubmit} className="space-y-4">
//         <input
//           type="text"
//           name="idNumber"
//           placeholder="15-digit Vendor ID"
//           value={idNumber}
//           onChange={(e) => setIdNumber(e.target.value)}
//           className="w-full border p-2 rounded"
//           required
//         />
//         <div className="relative">
//           <input
//             type={show ? "text" : "password"}
//             name="password"
//             placeholder="Password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             className="w-full border p-2 rounded"
//             required
//           />
//           <span
//             className="absolute top-2 right-3 cursor-pointer text-sm"
//             onClick={() => setShow(!show)}
//           >
//             {show ? "🙈 Hide" : "👁 Show"}
//           </span>
//         </div>

//         <button
//           type="submit"
//           className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
//         >
//           Login
//         </button>
//       </form>
//     </div>
//   );
// }






// import { useState } from "react";
// import axios from "../api/axios";
// import { useNavigate } from "react-router-dom";

// export default function Login() {
//   const [idNumber, setIdNumber] = useState("");
//   const [password, setPassword] = useState("");
//   const [show, setShow] = useState(false);
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const res = await axios.post("/vendor/login", { idNumber, password });

//       localStorage.setItem("vendorToken", res.data.token);
//       localStorage.setItem("vendorInfo", JSON.stringify(res.data.vendor));

//       alert("✅ Login successful!");
//       window.location.href = "/";

//     } catch (err) {
//       console.error(err);
//       alert("❌ Login failed");
//     }
//   };

//   return (
//     <div className="max-w-md mx-auto mt-10 bg-white p-8 rounded shadow-md">
//       <h2 className="text-2xl font-bold mb-6">Vendor Login</h2>
//       <form onSubmit={handleSubmit} className="space-y-4">
//         <input
//           type="text"
//           name="idNumber"
//           placeholder="15-digit Vendor ID"
//           value={idNumber}
//           onChange={(e) => setIdNumber(e.target.value)}
//           className="w-full border p-2 rounded"
//           required
//         />
//         <div className="relative">
//           <input
//             type={show ? "text" : "password"}
//             name="password"
//             placeholder="Password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             className="w-full border p-2 rounded"
//             required
//           />
//           <span
//             className="absolute top-2 right-3 cursor-pointer text-sm"
//             onClick={() => setShow(!show)}
//           >
//             {show ? "🙈 Hide" : "👁 Show"}
//           </span>
//         </div>

//         <button
//           type="submit"
//           className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
//         >
//           Login
//         </button>
//       </form>

//       {/* ✅ Register Link */}
//       <p className="mt-4 text-sm text-center">
//         Don't have an account?{" "}
//         <span
//           onClick={() => navigate("/register")}
//           className="text-green-600 hover:underline cursor-pointer"
//         >
//           Register here
//         </span>
//       </p>
//     </div>
//   );
// }









// import { useState } from "react";
// import axios from "../api/axios";
// import { useNavigate } from "react-router-dom";
// import logo from '../logo/sparepartslogo.jpg'

// export default function Login() {
//   const [idNumber, setIdNumber] = useState("");
//   const [password, setPassword] = useState("");
//   const [show, setShow] = useState(false);
//   const navigate = useNavigate();
// const handleSubmit = async (e) => {
//   e.preventDefault();
//   try {
//     const res = await axios.post("/vendor/login", { idNumber, password });

//   sessionStorage.setItem("vendorToken", res.data.token);
//     sessionStorage.setItem("vendorInfo", JSON.stringify(res.data.vendor));

//     alert("✅ Login successful!");
// navigate("/vendor");
//   } catch (err) {
//     console.error(err);

//     if (err.response?.status === 403) {
//       alert("⛔ Your account is not approved by admin yet.");
//     } else if (err.response?.status === 401) {
//       alert("❌ Invalid ID or password.");
//     } else if (err.response?.status === 404) {
//       alert("❌ Vendor not found.");
//     } else {
//       alert("❌ Login failed. Please try again.");
//     }
//   }
// };


//   return (
//     <div className="max-w-md mx-auto mt-10 bg-white p-8 rounded shadow-md">
//       <div className="flex justify-center mb-6">
//     <img src={logo} alt="Vendor Logo" className="h-24 w-auto" />
//   </div>
//       <h2 className="text-2xl font-bold mb-6">Vendor Login</h2>
//       <form onSubmit={handleSubmit} className="space-y-4">
//         <input
//           type="text"
//           name="idNumber"
//           placeholder="15-digit Vendor ID"
//           value={idNumber}
//           onChange={(e) => setIdNumber(e.target.value)}
//           className="w-full border p-2 rounded"
//           required
//         />
//         <div className="relative">
//           <input
//             type={show ? "text" : "password"}
//             name="password"
//             placeholder="Password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             className="w-full border p-2 rounded"
//             required
//           />
//           <span
//             className="absolute top-2 right-3 cursor-pointer text-sm"
//             onClick={() => setShow(!show)}
//           >
//             {show ? "🙈 Hide" : "👁 Show"}
//           </span>
//         </div>

//         <button
//           type="submit"
//           className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
//         >
//           Login
//         </button>
//       </form>

//       {/* 🔗 Register Link */}
//       <p className="mt-4 text-sm text-center">
//         Don't have an account?{" "}
//         <span
//           onClick={() => navigate("/register")}
//           className="text-green-600 hover:underline cursor-pointer"
//         >
//           Register here
//         </span>
//       </p>

//       {/* 🔐 Admin Login Link */}
//       <p className="mt-2 text-sm text-center">
//         Are you an admin?{" "}
//         <span
//           onClick={() => navigate("/admin/login")}
//           className="text-blue-600 hover:underline cursor-pointer"
//         >
//           Click here to login
//         </span>
//       </p>
//     </div>
//   );
// }



import { useState } from "react";
import axios from "../api/axios";
import { useNavigate } from "react-router-dom";
import logo from '../logo/sparepartslogo.jpg';

export default function Login() {
  const [idNumber, setIdNumber] = useState("");
  const [password, setPassword] = useState("");
  const [show, setShow] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/vendor/login", { idNumber, password });

      sessionStorage.setItem("vendorToken", res.data.token);
      sessionStorage.setItem("vendorInfo", JSON.stringify(res.data.vendor));

      alert("✅ Login successful!");
      navigate("/vendor");
    } catch (err) {
      console.error(err);

      if (err.response?.status === 401) {
        alert("❌ Invalid ID or password.");
      } else if (err.response?.status === 404) {
        alert("❌ Vendor not found.");
      } else {
        alert("❌ Login failed. Please try again.");
      }
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 bg-white p-8 rounded shadow-md">
      <div className="flex justify-center mb-6">
        <img src={logo} alt="Vendor Logo" className="h-24 w-auto" />
      </div>
      <h2 className="text-2xl font-bold mb-6">Vendor Login</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="idNumber"
          placeholder="15-digit Vendor ID"
          value={idNumber}
          onChange={(e) => setIdNumber(e.target.value)}
          className="w-full border p-2 rounded"
          required
        />
        <div className="relative">
          <input
            type={show ? "text" : "password"}
            name="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full border p-2 rounded"
            required
          />
          <span
            className="absolute top-2 right-3 cursor-pointer text-sm"
            onClick={() => setShow(!show)}
          >
            {show ? "🙈 Hide" : "👁 Show"}
          </span>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
        >
          Login
        </button>
      </form>

      {/* 🔗 Register Link */}
      <p className="mt-4 text-sm text-center">
        Don't have an account?{" "}
        <span
          onClick={() => navigate("/register")}
          className="text-green-600 hover:underline cursor-pointer"
        >
          Register here
        </span>
      </p>

      {/* 🔐 Admin Login Link */}
      <p className="mt-2 text-sm text-center">
        Are you an admin?{" "}
        <span
          onClick={() => navigate("/admin/login")}
          className="text-blue-600 hover:underline cursor-pointer"
        >
          Click here to login
        </span>
      </p>
    </div>
  );
}
