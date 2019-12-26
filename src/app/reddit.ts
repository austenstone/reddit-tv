
export interface Reddit {
  kind: string;
  data: RedditData;
}

export interface RedditData {
  modhash: string;
  dist: number;
  children: Child[];
  after: string;
  before: null;
}

export interface Child {
  kind: Kind;
  data: ChildData;
}

export interface ChildData {
  approved_at_utc: null;
  subreddit: Subreddit;
  selftext: string;
  author_fullname: string;
  saved: boolean;
  mod_reason_title: null;
  gilded: number;
  clicked: boolean;
  title: string;
  link_flair_richtext: any[];
  subreddit_name_prefixed: SubredditNamePrefixed;
  hidden: boolean;
  pwls: number;
  link_flair_css_class: null;
  downs: number;
  thumbnail_height: number;
  hide_score: boolean;
  name: string;
  quarantine: boolean;
  link_flair_text_color: LinkFlairTextColor;
  author_flair_background_color: null;
  subreddit_type: SubredditType;
  ups: number;
  total_awards_received: number;
  media_embed: MediaEmbed;
  thumbnail_width: number;
  author_flair_template_id: null;
  is_original_content: boolean;
  user_reports: any[];
  secure_media: Media;
  is_reddit_media_domain: boolean;
  is_meta: boolean;
  category: null;
  secure_media_embed: MediaEmbed;
  link_flair_text: null;
  can_mod_post: boolean;
  score: number;
  approved_by: null;
  author_premium: boolean;
  thumbnail: string;
  edited: boolean;
  author_flair_css_class: null;
  steward_reports: any[];
  author_flair_richtext: any[];
  gildings: Gildings;
  post_hint: PostHint;
  content_categories: null;
  is_self: boolean;
  mod_note: null;
  created: number;
  link_flair_type: FlairType;
  wls: number;
  removed_by_category: null;
  banned_by: null;
  author_flair_type: FlairType;
  domain: Domain;
  allow_live_comments: boolean;
  selftext_html: null;
  likes: null;
  suggested_sort: null;
  banned_at_utc: null;
  view_count: null;
  archived: boolean;
  no_follow: boolean;
  is_crosspostable: boolean;
  pinned: boolean;
  over_18: boolean;
  preview: Preview;
  all_awardings: AllAwarding[];
  awarders: string[];
  media_only: boolean;
  can_gild: boolean;
  spoiler: boolean;
  locked: boolean;
  author_flair_text: null;
  visited: boolean;
  removed_by: null;
  num_reports: null;
  distinguished: null;
  subreddit_id: SubredditID;
  mod_reason_by: null;
  removal_reason: null;
  link_flair_background_color: string;
  id: string;
  is_robot_indexable: boolean;
  report_reasons: null;
  author: string;
  discussion_type: null;
  num_comments: number;
  send_replies: boolean;
  whitelist_status: WhitelistStatus;
  contest_mode: boolean;
  mod_reports: any[];
  author_patreon_flair: boolean;
  author_flair_text_color: null;
  permalink: string;
  parent_whitelist_status: WhitelistStatus;
  stickied: boolean;
  url: string;
  subreddit_subscribers: number;
  created_utc: number;
  num_crossposts: number;
  media: Media;
  is_video: boolean;
}

export interface AllAwarding {
  count: number;
  is_enabled: boolean;
  subreddit_id: null;
  description: string;
  end_date: null;
  award_sub_type: string;
  coin_reward: number;
  icon_url: string;
  days_of_premium: number;
  is_new: boolean;
  id: string;
  icon_height: number;
  resized_icons: ResizedIcon[];
  days_of_drip_extension: number;
  award_type: string;
  start_date: null;
  coin_price: number;
  icon_width: number;
  subreddit_coin_reward: number;
  name: string;
}

export interface ResizedIcon {
  url: string;
  width: number;
  height: number;
}

export enum FlairType {
  Text = 'text',
}

export enum Domain {
  VimeoCOM = 'vimeo.com',
  YoutuBe = 'youtu.be',
  YoutubeCOM = 'youtube.com',
}

export interface Gildings {
  gid_2?: number;
  gid_1?: number;
}

export enum LinkFlairTextColor {
  Dark = 'dark',
}

export interface Media {
  oembed: Oembed;
  type: Domain;
}

export interface Oembed {
  provider_url: string;
  title: string;
  html: string;
  thumbnail_width: number;
  height: number;
  width: number;
  version: string;
  author_name: string;
  provider_name: ProviderName;
  thumbnail_url: string;
  type: Type;
  thumbnail_height: number;
  author_url: string;
  description?: string;
}

export enum ProviderName {
  Vimeo = 'Vimeo',
  YouTube = 'YouTube',
}

export enum Type {
  Video = 'video',
}

export interface MediaEmbed {
  content: string;
  width: number;
  scrolling: boolean;
  height: number;
  media_domain_url?: string;
}

export enum WhitelistStatus {
  AllAds = 'all_ads',
}

export enum PostHint {
  RichVideo = 'rich:video',
}

export interface Preview {
  images: Image[];
  enabled: boolean;
}

export interface Image {
  source: ResizedIcon;
  resolutions: ResizedIcon[];
  variants: Variants;
  id: string;
}

export interface Variants {
}

export enum Subreddit {
  Videos = 'videos',
}

export enum SubredditID {
  T52Qh1E = 't5_2qh1e',
}

export enum SubredditNamePrefixed {
  RVideos = 'r/videos',
}

export enum SubredditType {
  Public = 'public',
}

export enum Kind {
  T3 = 't3',
}
