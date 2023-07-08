import React from "react";

const UserItem = ({ id, name, image, places }) => {
  return (
    <div className=" card-bg w-[30%] mx-auto rounded-lg p-5 my-8 cursor-pointer">
      <div className=" flex gap-8">
        <img
          src={image}
          alt={name}
          className=" w-[60px] h-[60px] object-cover rounded-full"
        />
        <div>
          <h3 className=" text-xl text-yellow-400 font-semibold">{name}</h3>
          <p className="font-semibold">
            {places} {places == 1 ? "place" : "places"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default UserItem;
