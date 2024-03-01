import React from "react";

const Address = () => {
  const address = {
    city: "El Haouaria",
    postalCode: "8045",
    country: "Nabeul",
  };

  return (
    <div className="adress2">
      <p>
        {address.city}, {address.postalCode}, {address.country}
      </p>
    </div>
  );
};

export default Address;