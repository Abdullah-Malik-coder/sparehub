// src/pages/admin/AdminVendorProfile.js
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "../../api/axios";

export default function AdminVendorProfile() {
  const { id } = useParams(); // vendor id from URL
  const navigate = useNavigate();
  const [vendor, setVendor] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null); // ✅ for preview

  useEffect(() => {
    const fetchVendor = async () => {
      try {
        const res = await axios.get(`/admin/vendor/${id}`, {
          headers: {
            Authorization: `Bearer ${sessionStorage.getItem("adminToken")}`,
          },
        });
        setVendor(res.data);
      } catch (err) {
        console.error("Failed to load vendor profile", err);
      }
    };
    fetchVendor();
  }, [id]);

  if (!vendor) return <div className="p-6">Loading profile...</div>;

  return (
    <div className="p-6">
      <button
        onClick={() => navigate(-1)}
        className="mb-4 bg-gray-500 hover:bg-gray-600 text-white px-3 py-1 rounded"
      >
        ← Back
      </button>

      <h2 className="text-2xl font-bold mb-4">Vendor Profile</h2>

      <p>
        <strong>Name:</strong> {vendor.firstName} {vendor.lastName}
      </p>
      <p>
        <strong>Trade Name:</strong> {vendor.tradeName}
      </p>
      <p>
        <strong>License Number:</strong> {vendor.licenseNumber}
      </p>
      <p>
        <strong>TRN Number:</strong> {vendor.trnNumber}
      </p>
      <p>
        <strong>Business Type:</strong> {vendor.businessType}
      </p>
      <p>
        <strong>Vendor ID:</strong> {vendor.idNumber}
      </p>
      <p>
        <strong>Contact:</strong> {vendor.contact}
      </p>
      <p>
        <strong>Address:</strong> {vendor.address}, {vendor.city},{" "}
        {vendor.area}
      </p>

      {/* Thumbnails */}
      <div className="flex gap-4 mt-4">
        {vendor.idCardImage && (
          <img
            src={vendor.idCardImage}
            alt="ID"
            className="w-40 rounded shadow cursor-pointer hover:scale-105 transition"
            onClick={() => setSelectedImage(vendor.idCardImage)}
          />
        )}
        {vendor.licenseImage && (
          <img
            src={vendor.licenseImage}
            alt="License"
            className="w-40 rounded shadow cursor-pointer hover:scale-105 transition"
            onClick={() => setSelectedImage(vendor.licenseImage)}
          />
        )}
        {vendor.passportImage && (
          <img
            src={vendor.passportImage}
            alt="Passport"
            className="w-40 rounded shadow cursor-pointer hover:scale-105 transition"
            onClick={() => setSelectedImage(vendor.passportImage)}
          />
        )}
      </div>

      {/* ✅ Fullscreen Image Preview */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50">
          <div className="relative">
            <button
              className="absolute top-2 right-2 text-white text-2xl"
              onClick={() => setSelectedImage(null)}
            >
              ✖
            </button>
            <img
              src={selectedImage}
              alt="Preview"
              className="max-w-[90vw] max-h-[90vh] object-contain rounded"
            />
          </div>
        </div>
      )}
    </div>
  );
}
