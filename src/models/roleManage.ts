export interface RoleList {
  RoleId: number;
  RoleName: string;
  RoleStatus: boolean;
}

export interface GetRoleListResponse {
  totalRoles: number;
  totalPages: number;
  currentPage: number;
  roles: RoleList[];
}

export interface RoleDrawerProps {
  openDrawer: boolean;
  setOpenDrawer: React.Dispatch<React.SetStateAction<boolean>>;
  roleId: number;
  setRoleId: () => void;
  canEdit: boolean;
  type: string;
  getRoleList: () => void;
}

export interface RolePermission {
  moduleId: number;
  moduleName: string;
  view: boolean;
  create: boolean;
  edit: boolean;
  delete: boolean;
}

export interface GetRoleByIdResponse {
  roleId: number;
  roleName: string;
  status: number;
  permissions: RolePermission[];
}
