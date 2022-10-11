import path from "path";
import fs from "fs/promises";
import fm from 'front-matter';
import { map } from 'lodash';
import { marked } from 'marked';

export async function createPost(post, category) {
  const postPath = path.join(__dirname, "..", `db/posts/${category}`);

  const md = `---
title: ${post.title}
description: ${post.description}
miniature: ${category}.png
slug: ${post.slug}
---

${post.content}`;
  const pathSaveFile = path.join(postPath, `${post.slug}.md`);
  await fs.writeFile(pathSaveFile, md);
}

export async function getPosts(category) {
  const postsPath = path.join(__dirname, "..", `db/posts/${category}`);

  const files = await fs.readdir(postsPath);

  return Promise.all(
    map(files, async (filename) => {
      const filePath = path.join(postsPath, filename)
      const file = await fs.readFile(filePath, 'utf-8');
      const { attributes } = fm(file);
      return attributes;
    })
  );
}

export async function getPost(category, fileName) {
  const postPath = path.join(__dirname, "..", `db/posts/${category}/${fileName}.md`);

  const file = await fs.readFile(postPath, 'utf-8');

  const { attributes, body } = fm(file);

  return {
    attributes,
    html: marked(body)
  }
}