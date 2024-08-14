import { RolePermission } from "@/models/roleManage";

export interface userLoginData {
  UserId: number;
  Username: string;
  Token: string;
  RefreshToken: string;
  TokenExpiry: string;
  RefreshTokenExpiry: string;
  RoleId: number;
  RoleName: string;
  BusinessTypeId:number;
  BusinessTypeName:string;
  ClientId:number;
  ClientSfId:string;
  ClientLogo:string;
  Permissions: RolePermission[];
}

export interface userResetpasswordData {
  email: string;
}
