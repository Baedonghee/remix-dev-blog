import React, { useEffect } from "react";
import { BasicLayout } from "~/layouts";
import { getPost } from "~/api";
import { useLoaderData } from "@remix-run/react";
import Prism from "prismjs";

import "prismjs/components/prism-jsx.min";
import "prismjs/plugins/unescaped-markup/prism-unescaped-markup.min.js";

export default function Post() {
  const { attributes, html } = useLoaderData();
  const { title } = attributes;

  useEffect(() => {
    Prism.highlightAll();
  }, []);

  return (
    <BasicLayout className="mt-7">
      <h1 className="text-2xl text-center font-bold mb-5">{title}</h1>

      <div dangerouslySetInnerHTML={{ __html: html }} />
    </BasicLayout>
  );
}

export async function loader(data) {
  const { params } = data;
  const response = await getPost(params.category, params.post);

  return response;
}
