import { NextResponse } from "next/server";
import axios from "axios";
import { XmlToJson } from "@/app/utils/parser";
import * as cheerio from "cheerio";
import pLimit from "p-limit";

export async function GET(request: any) {
  type Item = {
    pubDate: any;
    description: string;
    title: string;
    link: string;
  };

  type RssType = {
    rss: {
      channel: {
        item: Item[];
      };
    };
  };

  const limit = pLimit(10);

  const baseUrl = (section: string) =>
    `https://www.straitstimes.com/news/${section}/rss.xml`;

  const sections = [
    "singapore",
    "world",
    "asia",
    "business",
    "tech",
    "sport",
    "life",
    "multimedia",
  ];

  const fetchAll = await Promise.all(
    sections.map(async (section) => {
      return axios.get(baseUrl(section)).then((res) => {
        const parsed = XmlToJson(res.data);
        return parsed;
      });
    })
  );

  const items = fetchAll.flatMap(
    (rss: unknown) => (rss as RssType).rss.channel.item
  );
  const fetchAndParseItem = async (item: Item) => {
    try {
      if (!item.link) return null;
      const response = await axios.get(item.link);
      const article = response.data;
      const $ = cheerio.load(article);
      const image = $("img").first().attr("src");
      return {
        title: item.title,
        description: item.description.replace(/<\/?p[^>]*>/gi, "").trim(),
        published: item.pubDate,
        urlPath: item.link,
        category: item.link.split("/")[3],
        image,
      };
    } catch (error) {
      console.error(`Failed to fetch or parse item ${item?.link}:`, error);
      return null; // Handle the error as needed
    }
  };
  const buildResponse = async (items: Item[]) => {
    // Map each item to a limited promise
    const results = await Promise.all(
      items.map((item) => limit(() => fetchAndParseItem(item)))
    );

    // Filter out any null results if needed
    return results.filter((result) => result !== null);
  };

  const finalResponse = await buildResponse(items);
  console.log(finalResponse);

  return NextResponse.json({ data: finalResponse.slice(0, 10) });
}
