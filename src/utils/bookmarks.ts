import { Bookmark } from "@/types/bookmark";

const PER_PAGE = 50;

export const fetchBookmarks = async (page: number = 0) => {
  const bookmarks: Bookmark[] = [];

  const req = await fetch(
    ``,
    {
      headers: {
        Authorization: `Bearer ${process.env.RAINDROP_TOKEN}`,
      },
    }
  );

  const data = await req.json();

  bookmarks.push(...data.items.map(
    ({ cover, title, link, tags }) => ({
      link,
      title,
      cover,
      tags,
    })
  ));

  if (data.items.length === PER_PAGE) {
    bookmarks.push(...await fetchBookmarks(page + 1));
  }

  return bookmarks;
}
