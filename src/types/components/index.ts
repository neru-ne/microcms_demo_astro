import type {itemListSingleType} from '@/types/api'
//CommonButton
export type commonButtonType = {
  mode: "button" | "link",
  linkHref: "" | string,
  name: string,
  blank:boolean,
  kinds:"primary"|"secondary" | "other",
  onClick?: () => void,
}
//CategoryList
export type categoryListType = {
  list:{
    id: string;
    name: string;
    slug: string;
  }[],
  className:string,
  link: boolean,
}
//TagList
export type tagListType = {
  list:string[],
  className:string,
}
//ItemSlideshow
export type itemSlideshowType = {
  list:{
    url: string;
    height: string;
    width: string;
  }[],
  className:string,
}

//CustomerList
export type customerListType = {
  list: {
    fieldId: string;
    name: string;
    contents: string;
  }[],
  className: string,
}

//RepeatContents
export type repeatContentsType = {
  data: {
    [key: string]: any
  }[]
}
//pageNavi
export type pageNaviType = {
  url: string;
  itemList: {
    data: itemListSingleType[];
    start: number;
    end: number;
    size: number;
    total: number;
    currentPage: number;
    lastPage: number;
    url: {
      current: string;
      next: string;
      prev: string;
    };
  };
}