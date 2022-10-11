import React from "react";
import { BasicLayout } from "~/layouts";
import { map, size } from "lodash";
import { getPosts } from "~/api";
import { useLoaderData } from "@remix-run/react";
import { NoPosts, PostItem } from "~/components/blog";
export default function Category() {
  const { category, posts } = useLoaderData();

  return (
    <BasicLayout>
      <div className="grid grid-cols-2 gap-2 mt-10">
        {map(posts, (post, index) => (
          <PostItem key={index} post={post} category={category} />
        ))}
      </div>
      {size(posts) < 1 && <NoPosts />}
    </BasicLayout>
  );
}

export async function loader(data) {
  const { params } = data;

  const posts = await getPosts(params.category);

  return {
    category: params.category,
    posts,
  };
}
