import React from "react";
import "../styles/PropertyCard.css"

const PropertyCard = ({ property }) => {
  return (
    <div className="property-card">
      <img src={property.image} alt={property.name} className="property-image" />
      <h2>{property.name}</h2>
      <p>Location: {property.location}</p>
      <p>Price: ${property.price}</p>
    </div>
  );
};

export default PropertyCard;
