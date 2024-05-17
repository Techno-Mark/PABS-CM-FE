import { RolePermission } from "./roleManage";

export interface userLoginData {
  UserId: number;
  Username: string;
  Token: string;
  RefreshToken: string;
  TokenExpiry: string;
  RefreshTokenExpiry: string;
  RoleName: string;
  Permissions: RolePermission[];
}

export interface userResetpasswordData {
  email: string;
}
