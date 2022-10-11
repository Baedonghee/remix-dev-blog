import React, { useState } from "react";
import { Link, useParams } from "@remix-run/react";
import { ButtonPrimary, Modal } from "~/components/shared";
import AddCategoryForm from "~/routes/form/add-category-form";
import AddPostForm from "~/routes/form/add-post-form";

export function Menu() {
  const { category } = useParams();
  const [show, setShow] = useState(false);
  const [modalContent, setModalContent] = useState<any>(null);

  const onOpenCloseModal = () => {
    setShow((prev) => !prev);
  };

  const addPost = () => {
    setModalContent(<AddPostForm />);
    onOpenCloseModal();
  };

  const addCategory = () => {
    setModalContent(<AddCategoryForm />);
    onOpenCloseModal();
  };

  return (
    <>
      <div className="bg-stone-800 flex items-center justify-between py-5 px-10">
        <div />
        <Link to="/">
          <h1 className="text-white text-2xl">DevBlog</h1>
        </Link>
        <div>
          {category ? (
            <ButtonPrimary type="button" onClick={addPost}>
              Crate Post
            </ButtonPrimary>
          ) : (
            <ButtonPrimary type="button" onClick={addCategory}>
              Create Category
            </ButtonPrimary>
          )}
        </div>
      </div>
      <Modal show={show} close={onOpenCloseModal} children={modalContent} />
    </>
  );
}
