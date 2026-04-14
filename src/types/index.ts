export type Params = Record<string, unknown>;

export type Pagination = {
  page: number;
  page_size: number;
  total?: number;
};

export type Role = {
  admin: string;
  user: string;
};

export type UserVerifyStatus = {
  AcessToken: string;
  RefreshToken: string;
  EmailVerifyToken: string;
  PasswordForgotToken: string;
};

export type UserType = {
  active: boolean;
  _id?: string;
  email: string;
  password: string;
  first_name: string;
  last_name: string;
  email_verify_token: string;
  forgot_password_token: string;
  role: Role;
  is_active: boolean;
  date_of_birth: Date;
  created_at: Date;
  update_at: Date;
  verify: UserVerifyStatus;

  bio: string;
  location: string;
  website: string;
  avatar: string;
  profile_picture_url: string;
};

export type TypePost = {
  Post: string;
  Repost: string;
  Comment: string;
  QuotePost: string;
};

export type TypeMedia = {
  url: string;
  type: string;
};

export type PostAudience = {
  everyone: string;
  fynx_circle: string;
};

export type PostType = {
  _id?: string;
  userInfo: {
    _id: string;
    first_name: string;
    last_name: string;
  };
  type: TypePost;
  content: string;
  media?: TypeMedia;
  audience: PostAudience;
  parent_id?: string;
  hashtags?: string[];
  mentions?: string[];
  guest_view?: number;
  user_view?: number;
  like_count?: number;
  comment_count?: number;
  created_at?: Date;
  updated_at?: Date;
};
