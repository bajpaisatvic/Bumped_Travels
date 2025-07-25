import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const TourDetails = () => {
  const { packageId } = useParams();
  const navigate = useNavigate();
  const [tour, setTour] = useState(null);
  const [error, setError] = useState("");
  const [isDescriptionImage, setIsDescriptionImage] = useState(false);
  const backendURL = import.meta.env.VITE_PRODUCTION_URL_URL;
  useEffect(() => {
    const fetchTour = async () => {
      try {
        const res = await axios.get(`${backendURL}/packages/${packageId}`, {
          withCredentials: true,
        });
        setTour(res.data.data);
        if (res.data.data.descriptionImage !== "") {
          setIsDescriptionImage(true);
        }
      } catch (err) {
        setError("Oops! Failed to load tour details. Please try again.");
        console.error(err);
      }
    };

    fetchTour();
  }, [packageId]);

  if (error) {
    return (
      <div className="p-10 text-red-600 font-semibold text-center">{error}</div>
    );
  }

  if (!tour) {
    return (
      <div className="p-10 text-gray-500 dark:text-white text-center text-lg">
        Loading tour details...
      </div>
    );
  }

  return (
    <div className="min-h-screen dark:bg-gradient-to-b dark:from-gray-800 dark:to-gray-900 bg-gradient-to-b from-blue-50 to-white py-10">
      {/* Header Image */}
      <div className="w-11/12 max-w-6xl mx-auto overflow-hidden rounded-xl shadow-lg">
        <img
          src={tour.image}
          alt={tour.name}
          className="w-full h-[450px] object-cover"
        />
      </div>

      {/* Content Section */}
      <div className="w-11/12 max-w-4xl mx-auto dark:bg-gray-700 bg-white mt-10 p-8 rounded-xl shadow-md">
        <h1 className="text-4xl md:text-5xl font-bold text-center dark:text-white text-blue-800 mb-6">
          {tour.name}
        </h1>

        <div
          className="text-lg font-semibold dark:text-gray-200 text-gray-700 leading-relaxed text-justify"
          dangerouslySetInnerHTML={{ __html: tour.description }}
        ></div>

        {isDescriptionImage && (
          <div className="mt-6 flex justify-center">
            <img
              src={tour.descriptionImage}
              alt=""
              className="rounded-lg shadow-lg max-h-[500px] "
            />
          </div>
        )}

        {/* Price */}
        {tour.price && (
          <p
            className="text-2xl text-blue-600 dark:text-blue-200
           font-bold text-center mt-6"
          >
            ₹{tour.price}
          </p>
        )}

        {/* Category */}
        {tour.category?.name && (
          <div className="mt-6 text-center">
            <span className="inline-block bg-blue-100 text-blue-700 text-sm font-semibold px-4 py-2 rounded-full shadow">
              Category: {tour.category.name}
            </span>
          </div>
        )}

        {/* Contact Us CTA */}
        <div className="mt-10 text-center">
          <p className="text-gray-700 dark:text-gray-200 text-md mb-4 font-medium">
            For further queries or customization, feel free to reach out.
          </p>
          <button
            onClick={() => navigate("/contact")}
            className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition"
          >
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
};

export default TourDetails;
