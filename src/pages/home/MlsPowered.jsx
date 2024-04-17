import React from "react";

const MlsPowered = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="w-11/12 lg:w-4/5 p-6 my-4">
        <div className="text-center ">
          Powered by{" "}
          <a
            target="mrp"
            href="https://artechworld.tech"
            className="text-blue-500"
          >
            artechworld.tech
          </a>
        </div>
        <div className="text-center">
          <img
            src="/asset/icon-mls.gif"
            className="mx-auto mb-4"
            alt="Reciprocity Logo"
          />
          <p className="text-sm text-gray-600">
            The data relating to real estate on this website comes in part from
            the MLS® Reciprocity program of either the Greater Vancouver
            REALTORS® (GVR), the Fraser Valley Real Estate Board (FVREB) or the
            Chilliwack and District Real Estate Board (CADREB). Real estate
            listings held by participating real estate firms are marked with the
            MLS® logo and detailed information about the listing includes the
            name of the listing agent. This representation is based in whole or
            part on data generated by either the GVR, the FVREB or the CADREB
            which assumes no responsibility for its accuracy. The materials
            contained on this page may not be reproduced without the express
            written consent of either the GVR, the FVREB or the CADREB.
          </p>
        </div>
      </div>
    </div>
  );
};

export default MlsPowered;
