export interface DrawerProps {
  openDrawer: boolean;
  setOpenDrawer: React.Dispatch<React.SetStateAction<boolean>>;
  userId: number;
  setUserId: () => void;
  canEdit: boolean;
  type: string;
  getUserList: () => void;
  roleList: RoleList[];
  businessList: BusinessList[];
}

export interface UserModalProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  roleList: RoleList[];
  businessList: BusinessList[];
  sendFilterData: (
    roleId: number[],
    statusId: number[],
    businessId: number[]
  ) => void;
}

export interface InActiveProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  handleApply: () => void;
  handleClose: () => void;
}

export interface Option {
  value: number;
  label: string;
}

export interface DeleteModalProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  type: "user" | "client";
  handleDelete: () => void;
  isLoading: boolean;
  handleClose: () => void;
}

export interface ConfirmModalProps {
  isOpen: boolean;
  title: string;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  message: string;
  handleModalSubmit: () => void;
  isLoading?: boolean;
  handleClose: () => void;
  setUserId?: () => void;
}

export interface RoleList {
  RoleId: number;
  RoleName: string;
  RoleStatus: boolean;
}

export interface RoleListResponse {
  totalRoles: number;
  totalPages: number;
  currentPage: number;
  roles: RoleList[];
}

export interface BusinessList {
  BusinessId: number;
  BussinessName: string;
}

export interface BusinessListResponse {
  BusinessTypes: BusinessList[];
}

export interface UserList {
  UserId: number;
  Username: string;
  Email: string;
  RoleName: string;
}

export interface GetUserListResponse {
  totalUsers: number;
  totalPages: number;
  currentPage: number;
  users: UserList[];
}

export interface GetUserByIdResponse {
  UserId: number;
  Username: string;
  Email: string;
  RoleId: number;
  RoleName: string;
  BusinessTypeId: number;
  BusinessTypeName: string;
  Status: number;
}
