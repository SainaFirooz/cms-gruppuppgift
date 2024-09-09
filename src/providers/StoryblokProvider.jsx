"use client";
import { StoryblokCMS } from "@/utils/cms";
import { storyblokInit, apiPlugin } from "@storyblok/react/rsc";

import Page from "@/components/content-types/Page";

import Teaser from "@/components/nestable/Teaser";
import RichTextDefault from "@/components/nestable/RichText";
import header from "@/components/nestable/Header";

const components = {
  page: Page,
  teaser: Teaser,
  richtext: RichTextDefault,
  header: header,
};

storyblokInit({
  accessToken: StoryblokCMS.TOKEN,

  use: [apiPlugin],
  components,
});

export default function StoryblokProvider({ children }) {
  return children;
}
