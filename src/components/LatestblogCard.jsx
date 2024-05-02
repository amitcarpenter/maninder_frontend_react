import React from "react";

const LatestblogCard = ({ property }) => {
  return (
    <>
      <div className="flex justify-between items-center">
        <img
          className=" w-28 rounded-xl object-cover"
          src={
            property.image_urls.length > 0
              ? property.image_urls[0]
              : "https://www.realtor.ca/images/common/listingplaceholder-medres.jpg"
          }
          alt=""
        />

        <div className="pl-3">
          {property.additional_details &&
          property.additional_details.Property_Type ? (
            <p>{property.additional_details.Property_Type}</p>
          ) : (
            <p>Not available</p>
          )}
          <p className="text-NewYello">{property.price}</p>
        </div>
      </div>
    </>
  );
};

export default LatestblogCard;
