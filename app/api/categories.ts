import path from 'path';
import fs from 'fs/promises';
import fm from 'front-matter';
import { map } from 'lodash';
const categoriesPath = path.join(__dirname, '..', "db/categories");

export async function createCategory(data) {
  const postsPath = path.join(__dirname, '..', `db/posts/${data.slug}`);

  const md = `---
title: ${data.title}
slug: ${data.slug}
---`;

  const pathSaveFile = path.join(categoriesPath, `${data.slug}.md`);
  await fs.writeFile(pathSaveFile, md);
  await fs.mkdir(postsPath)
}

export async function getCategories() {
  const files = await fs.readdir(categoriesPath);

  return Promise.all(
    map(files, async (filename) => {
      const filePath = path.join(categoriesPath ,filename);
      const file = await fs.readFile(filePath, "utf-8");
      const { attributes } = fm(file);
      return attributes;
    })
  )
}