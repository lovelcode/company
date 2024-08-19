import Link from "next/link";
import React from "react";
interface FeaturesAppProps {
  title: string;
  addLink: string;
  editLink: string;
}
const FeaturesApp:React.FC<FeaturesAppProps> = ({ title, addLink, editLink }) => {
  return (
    <>
      <div className="flex justify-between items-center">
        <Link href={editLink}>{title}</Link>
        <div className="flex gap-10 items-center">
          <Link className="flex items-center gap-2" href={addLink}>
            <i className="bi bi-plus-lg text-green-700"></i>
            <span>add</span>
          </Link>
          <Link className="flex items-center gap-2" href={editLink}>
            <i className="bi bi-pencil-fill text-yellow-500"></i>
            <span>edit</span>
          </Link>
        </div>
      </div>
    </>
  );
};

export default FeaturesApp;
