import React, { useState } from 'react'

const ReadMore = ({ children }) => {
  const text = children;
  const [isReadMore, setIsReadMore] = useState(true);
  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };
  return (
    <p className="text">
      {isReadMore ? text.slice(0, 160) : text}
      <span onClick={toggleReadMore} className="cursor-pointer text-sm font-semibold text-zinc-600 font-one hover:underline mx-2">
        {isReadMore ? "...read more" : " show less"}
      </span>
    </p>
  );
};

export default ReadMore


