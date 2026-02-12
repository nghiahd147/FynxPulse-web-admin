export type Pagination = {
  page: number;
  page_size: number;
  total: number;
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

export type UserTypes = {
  data: {
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
};
