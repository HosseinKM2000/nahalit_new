import React from "react";
import Detail from "./Detail/Detail";

const Details = ({ blogs , users , Loading }) => {

  return (
    <>
     {
      Loading
      ?
      <div className="w-full">
        <img src="/img/Spinner-1s-229px.svg" alt="loading" className="mx-auto w-20"/>
      </div>
     :
      <div className="w-full flex justify-center gap-7 flex-col sm:flex-row flex-wrap px-3">
        {
          blogs?.map(blog => (
            <Detail blog={blog} users={users}/>
          ))
        }
      </div>
     }
    </>
  );
};

export default Details;
