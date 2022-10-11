import { useLoaderData } from "@remix-run/react";
import { BasicLayout } from "~/layouts";
import { getCategories } from "~/api";
import { CategoryItem } from "~/components/blog";
import { map } from "lodash";

export default function Index() {
  const categories = useLoaderData();

  return (
    <BasicLayout>
      <div className="grid grid-cols-4 gap-4 mt-10">
        {map(categories, (category, index) => (
          <CategoryItem key={index} category={category} />
        ))}
      </div>
    </BasicLayout>
  );
}

export function loader() {
  return getCategories();
}
