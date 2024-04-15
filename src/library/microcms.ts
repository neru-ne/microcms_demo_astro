//SDK利用準備
import type { MicroCMSQueries } from "microcms-js-sdk";
import { createClient } from "microcms-js-sdk";

// types
import type { itemListType,itemType} from '@/types/api'

const client = createClient({
  serviceDomain: import.meta.env.MICROCMS_URL,
  apiKey: import.meta.env.MICROCMS_KEY,
});

//APIの呼び出し
export const getItemList = async (queries?: MicroCMSQueries) => {
  return await client.get<itemListType>({ endpoint: "item", queries });
};
export const getItem = async (
  contentId: string,
  queries?: MicroCMSQueries
) => {
  return await client.getListDetail<itemType>({
    endpoint: "item",
    contentId,
    queries,
  });
};