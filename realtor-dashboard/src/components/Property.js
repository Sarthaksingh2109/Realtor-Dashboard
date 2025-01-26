import React, { useState } from "react";
import PropertyCard from "./PropertyCard";
import Pagination from "./Pagination";
import PropertyData from "../data/PropertyData";
import "../styles/Property.css"

const Property = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [newProperty, setNewProperty] = useState({
    name: "",
    location: "",
    price: "",
    image: "",
  });
  const [properties, setProperties] = useState(PropertyData);
  const propertiesPerPage = 5;
  const totalPages = Math.ceil(properties.length / propertiesPerPage);

  const startIndex = (currentPage - 1) * propertiesPerPage;
  const currentProperties = properties.slice(startIndex, startIndex + propertiesPerPage);

  const handleAddProperty = (e) => {
    e.preventDefault();
    const { name, location, price, image } = newProperty;
    if (name && location && price && image) {
      const newProp = {
        ...newProperty,
        id: properties.length + 1,
        price: parseFloat(price), // Ensure price is a number
      };
      setProperties([...properties, newProp]);
      setNewProperty({ name: "", location: "", price: "", image: "" });
    } else {
      alert("Please fill all fields.");
    }
  };

  return (
    <div>
      <h1>Property Listings</h1>
      <form onSubmit={handleAddProperty}>
        <input
          type="text"
          placeholder="Property Name"
          value={newProperty.name}
          onChange={(e) => setNewProperty({ ...newProperty, name: e.target.value })}
        />
        <input
          type="text"
          placeholder="Location"
          value={newProperty.location}
          onChange={(e) => setNewProperty({ ...newProperty, location: e.target.value })}
        />
        <input
          type="number"
          placeholder="Price"
          value={newProperty.price}
          onChange={(e) => setNewProperty({ ...newProperty, price: e.target.value })}
        />
        <input
          type="text"
          placeholder="Image URL"
          value={newProperty.image}
          onChange={(e) => setNewProperty({ ...newProperty, image: e.target.value })}
        />
        <button type="submit">Add Property</button>
      </form>

      <div className="property-list">
        {currentProperties.map((property) => (
          <PropertyCard key={property.id} property={property} />
        ))}
      </div>

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
};

export default Property;
