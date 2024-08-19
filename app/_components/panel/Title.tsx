import React from "react";

interface titleProp {
    title:string
}
 
const Title:React.FC<titleProp> = ({title}) => {
  return (
    <>
      <h3 className="bg-green-700 text-xl text-white rounded-md p-2">{title}</h3>
    </>
  );
};

export default Title;
