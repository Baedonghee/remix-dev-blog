import React from "react";
import { Form } from "@remix-run/react";
import { redirect } from "@remix-run/server-runtime";
import { ButtonPrimary, Input } from "~/components/shared";
import { createCategory } from "~/api";

export default function AddCategoryForm() {
  return (
    <Form
      method="post"
      action="/form/add-category-form"
      className="flex flex-col"
    >
      <Input type="text" name="title" placeholder="title" className="my-2" />
      <Input type="text" name="slug" placeholder="slug" />

      <ButtonPrimary type="submit" className="mt-3">
        Create category
      </ButtonPrimary>
    </Form>
  );
}

export async function action(props) {
  const { request } = props;
  const formData = await request.formData();

  const data = {
    title: formData.get("title"),
    slug: formData.get("slug"),
  };

  await createCategory(data);

  return redirect("/");
}
