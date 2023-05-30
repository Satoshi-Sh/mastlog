interface mediaAttachment {
  id: { type: String; required: true };
  type: { type: String; required: true };
  url: { type: String; required: true };
  preview_url: { type: String; required: true };
  remote_url: String;
  text_url: String;
  meta: {
    original: {
      width: Number;
      height: Number;
      size: String;
      aspect: Number;
    };
    small: {
      width: Number;
      height: Number;
      size: String;
      aspect: Number;
    };
    focus: {
      x: Number;
      y: Number;
    };
  };
  description: String;
  blurhash: String;
}

export interface Whole {
  _id: string;
  event: string;
  data: {
    id: string;
    created_at: Date;
    in_reply_to_id: string;
    in_reply_to_account_id: string;
    sensitive: boolean;
    spoiler_text: string;
    visibility: string;
    language: string;
    uri: string;
    url: string;
    replies_count: number;
    reblogs_count: number;
    favourites_count: number;
    edited_at: Date | null;
    content: string;
    reblog: any | null; // Update this type accordingly
    application: {
      name: string;
      website: string | null;
    };
    account: Account;
    media_attachments: mediaAttachment[]; // Update this type accordingly
    mentions: Account[]; // Update this type accordingly
    tags: string[]; // Update this type accordingly
    emojis: any[]; // Update this type accordingly
    favourited: boolean;
    reblogged: boolean;
    muted: boolean;
    bookmarked: boolean;
    pinned: boolean;
  };
  __v: number;
}

export interface Account {
  id: string;
  username: string;
  acct: string;
  display_name: string;
  locked: boolean;
  bot: boolean;
  discoverable: boolean;
  group: boolean;
  created_at: string;
  note: string;
  url: string;
  avatar: string;
  avatar_static: string;
  header: string;
  header_static: string;
  followers_count: number;
  following_count: number;
  statuses_count: number;
  last_status_at: string;
  noindex: boolean;
  emojis: any[]; // You can specify the type if you have more information about the structure
  roles: any[]; // You can specify the type if you have more information about the structure
  fields: Field[];
}

interface Field {
  name: string;
  value: string;
  verified_at: string | null;
  _id: string;
}

export interface TootProps {
  data: Whole;
}

export interface TabProps {
  name: string;
  count: number;
  baseURL: string;
}

export interface DayProps {
  day: string;
  dayName: number;
  count: number;
}

export interface DailyData {
  _id: {
    day: string;
    dayName: number;
  };
  count: number;
  items: any[]; // Adjust the type of items based on your actual data structure
}

export interface SideBoxProps {
  title: string;
}

export interface SideBoxInterface {
  _id: string;
  count: number;
  url: string;
}

export interface RecentInterface {
  _id: { day: string; dayName: number };
  count: number;
}
