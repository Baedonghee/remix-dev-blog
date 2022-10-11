import React from "react";
import { Link } from "@remix-run/react";

export function CategoryItem(props) {
  const { category } = props;
  return (
    <Link to={`/${category.slug}`}>
      <div className="bg-gray-600">
        <h2 className="text-white text-center py-2 font-blod">
          {category.title}
        </h2>
      </div>
    </Link>
  );
}
