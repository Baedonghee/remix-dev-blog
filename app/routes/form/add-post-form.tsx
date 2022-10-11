import React from "react";
import { Form, useParams } from "@remix-run/react";
import { Input, Textarea, ButtonPrimary } from "~/components/shared";
import { redirect } from "@remix-run/server-runtime";
import { createPost } from "~/api";

export default function AddPostForm() {
  const { category } = useParams();
  return (
    <Form method="post" action="/form/add-post-form" className="flex flex-col">
      <Input name="title" placeholder="title" className="my-2" />
      <Input name="description" placeholder="description" />
      <Input name="slug" placeholder="slug" />

      <Input name="category" value={category} />

      <Textarea name="content" placeholder="content" rows="6" />
      <ButtonPrimary type="submit" className="mt-3">
        Create Post
      </ButtonPrimary>
    </Form>
  );
}

export async function action(props) {
  const { request } = props;

  const formData = await request.formData();
  const category = formData.get("category");
  const data = {
    title: formData.get("title"),
    description: formData.get("description"),
    slug: formData.get("slug"),
    content: formData.get("content"),
  };

  createPost(data, category);

  return redirect("/");
}
