import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import html from 'remark-html';
import { remark } from 'remark';
import { Post } from './types/post.types';

const postDir = path.join(process.cwd(), 'posts');

export function getSortedHistoryPostsData() {
  const fileNames = fs.readdirSync(postDir);

  const allHistoryPostsData = fileNames.map(fileName => {
    // Remove md
    const id = fileName.replace(/\.md$/, '');

    // Read markdown file as string
    const fullPath = path.join(postDir, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    // Parse metadata
    const matterRes = matter(fileContents);

    return {
      id,
      ...matterRes.data,
    } as Post;
  });

  return allHistoryPostsData.sort(({ date: a }, { date: b }) => {
    return a < b ? -1 : 1;
  });
}

export function getAllHistoryPostIds() {
  const fileNames = fs.readdirSync(postDir);

  return fileNames.map(fileName => ({
    params: {
      id: fileName.replace(/\.md$/, ''),
    },
  }));
}

export async function getHistoryPostData(id: string) {
  const fullPath = path.join(postDir, `${id}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');

  const matterRes = matter(fileContents);

  // remark to convert md to html string
  const processedContent = await remark().use(html).process(matterRes.content);
  const contentHtml = processedContent.toString();

  return {
    id,
    contentHtml,
    ...matterRes.data,
  } as Post;
}
