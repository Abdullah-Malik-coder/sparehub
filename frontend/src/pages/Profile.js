import { useEffect, useState } from "react";
import axios from "../api/axios";

export default function Profile() {
  const [form, setForm] = useState({
    tradeName: "",
    licenseNumber: "",
    trnNumber: "",
    businessType: "",
    address: "",
    city: "",
    area: "",
    contact: "",
    licenseImage: null,
    passportImage: null,
  });
  const [submitted, setSubmitted] = useState(false); // ✅ track if profile is already filled

  const token = sessionStorage.getItem("vendorToken");

  useEffect(() => {
    if (token) {
      axios
        .get("/vendor/profile", {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((res) => {
          setForm((prev) => ({ ...prev, ...res.data }));
          if (res.data.tradeName) setSubmitted(true); // ✅ mark as submitted if profile exists
        })
        .catch((err) => {
          console.error("Error fetching profile:", err);
        });
    }
  }, [token]);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (files) {
      setForm({ ...form, [name]: files[0] });
    } else {
      setForm({ ...form, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    Object.keys(form).forEach((key) => {
      data.append(key, form[key]);
    });

    try {
      await axios.put("/vendor/profile", data, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        },
      });
      alert("✅ Profile submitted successfully! Waiting for admin approval.");
      setSubmitted(true); // ✅ lock form after submit
    } catch (err) {
      console.error(err);
      alert("❌ Failed to submit profile");
    }
  };

  return (
    <div className="max-w-2xl mx-auto mt-10 bg-white p-6 rounded shadow-md">
      <h2 className="text-xl font-bold mb-4">Vendor Profile</h2>

      {/* If profile already submitted → show details instead of form */}
      {submitted ? (
        <div className="space-y-2">
          <p><strong>Trade Name:</strong> {form.tradeName}</p>
          <p><strong>License Number:</strong> {form.licenseNumber}</p>
          <p><strong>TRN Number:</strong> {form.trnNumber}</p>
          <p><strong>Business Type:</strong> {form.businessType}</p>
          <p><strong>Contact:</strong> {form.contact}</p>
          <p><strong>Address:</strong> {form.address}, {form.city}, {form.area}</p>

          <div className="flex gap-4 mt-4">
            {form.licenseImage && (
              <img src={form.licenseImage} alt="License" className="w-40 rounded shadow" />
            )}
            {form.passportImage && (
              <img src={form.passportImage} alt="Passport" className="w-40 rounded shadow" />
            )}
          </div>
        </div>
      ) : (
        // Editable form if not submitted
        <form onSubmit={handleSubmit} className="space-y-4">
          <input type="text" name="tradeName" placeholder="Trade Name" value={form.tradeName} onChange={handleChange} className="w-full border p-2 rounded" required />
          <input type="text" name="licenseNumber" placeholder="License Number" value={form.licenseNumber} onChange={handleChange} className="w-full border p-2 rounded" required />
          <input type="text" name="trnNumber" placeholder="TRN Number" value={form.trnNumber} onChange={handleChange} className="w-full border p-2 rounded" required />
          <input type="text" name="businessType" placeholder="Business Type" value={form.businessType} onChange={handleChange} className="w-full border p-2 rounded" required />
          <input type="text" name="contact" placeholder="Contact" value={form.contact} onChange={handleChange} className="w-full border p-2 rounded" required />
          <input type="text" name="address" placeholder="Address" value={form.address} onChange={handleChange} className="w-full border p-2 rounded" required />
          <input type="text" name="city" placeholder="City" value={form.city} onChange={handleChange} className="w-full border p-2 rounded" required />
          <input type="text" name="area" placeholder="Area" value={form.area} onChange={handleChange} className="w-full border p-2 rounded" required />

          <div>
            <label className="block text-sm font-semibold">Upload Trade License</label>
            <input type="file" name="licenseImage" onChange={handleChange} className="w-full border p-2 rounded" required />
          </div>
          <div>
            <label className="block text-sm font-semibold">Upload Passport/ID</label>
            <input type="file" name="passportImage" onChange={handleChange} className="w-full border p-2 rounded" required />
          </div>

          <button type="submit" className="w-full bg-green-600 text-white p-2 rounded hover:bg-green-700">
            Submit Profile
          </button>
        </form>
      )}
    </div>
  );
}
