export interface userLoginData {
  UserId: number;
  Username: string;
  Token: string;
  RefreshToken: string;
  TokenExpiry: string;
  RefreshTokenExpiry: string;
}

export interface userResetpasswordData {
  email: string;
}
