"use client";
import { StoryblokCMS } from "@/utils/cms";
import { storyblokInit, apiPlugin } from "@storyblok/react/rsc";

import Page from "@/components/content-types/Page";

import Teaser from "@/components/nestable/Teaser";
import RichTextDefault from "@/components/nestable/RichText";
import header from "@/components/nestable/Header";
import footer from "@/components/nestable/Footer";
import Hero from "@/components/nestable/Hero";
import Banner from "@/components/nestable/Banner";
import Grid from "@/components/nestable/Grid";
import ProductList from "@/components/nestable/ProductList";
import ProductPage from "@/components/content-types/ProductPage";
import Image from "@/components/nestable/Image";

const components = {
  page: Page,
  teaser: Teaser,
  richtext: RichTextDefault,
  header: header,
  footer: footer,
  hero: Hero,
  banner: Banner,
  grid: Grid,
  product_list: ProductList,
  product: ProductPage,
  image: Image
};

storyblokInit({
  accessToken: StoryblokCMS.TOKEN,

  use: [apiPlugin],
  components,
});

export default function StoryblokProvider({ children }) {
  return children;
}
