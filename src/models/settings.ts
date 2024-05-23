export interface RoleListType {
  page: number;
  limit: number;
  search: string;
  dropdown: boolean;
}

export interface SwitchPopupType {
  isOpen: boolean;
  isChecked: null | boolean;
  roleId: number;
}
