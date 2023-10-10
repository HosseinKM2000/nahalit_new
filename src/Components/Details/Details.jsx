import React from "react";
import Detail from "./Detail/Detail";

const Details = ({ blogs , users }) => {

  return (
    <div className="w-full flex justify-center gap-7 flex-col sm:flex-row flex-wrap px-3">
      {
        blogs?.map(blog => (
          <Detail blog={blog} users={users}/>
        ))
      }
    </div>
  );
};

export default Details;
