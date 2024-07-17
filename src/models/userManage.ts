export interface UserDrawerProps {
  openDrawer: boolean;
  setOpenDrawer: React.Dispatch<React.SetStateAction<boolean>>;
  userId: number;
  setId: () => void;
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
    statusId: boolean[],
    businessId: number[],
    saveClicked: boolean
  ) => void;
  userListParams: any;
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
  email?: string;
}

export interface StatusOption {
  value: boolean;
  label: string;
}

export interface StringOption extends Omit<Option, "value"> {
  value: string;
}

export interface ChecklistStatusOption {
  value: string;
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
  setId?: () => void;
}

export interface BulkModalProps {
  isOpen: boolean;
  title: string;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isLoading?: boolean;
  handleClose: () => void;
  getAccountList: () => void;
  clientInfo: any;
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
  Status: string;
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
  Status: boolean;
}
