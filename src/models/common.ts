import { ReactNode } from "react";

export interface StringFieldType {
  value: string;
  error: boolean;
  errorText: string;
}

export interface NumberArrayFieldType {
  value: number[];
  error: boolean;
  errorText: string;
}

export interface NumberFieldType extends Omit<StringFieldType, "value"> {
  value: number;
}

export interface UserFormFieldType {
  fullName: StringFieldType;
  role: NumberFieldType;
  businessType: NumberArrayFieldType;
  email: StringFieldType;
}

export interface ClientFormFieldType {
  clientFullName: StringFieldType;
  sFID: StringFieldType;
  businessType: NumberFieldType;
  email: StringFieldType;
  file: any;
}

export interface AuthType {
  passwordType: "Reset" | "Create";
  isReset: boolean;
}

export interface childPropsType {
  children: ReactNode;
}

export interface DrawerPropsType {
  children: ReactNode;
  openDrawer: boolean;
  isLoading: boolean;
  isSaveEnabled: boolean;
  type: string;
  canEdit: boolean;
  setOpenDrawer: React.Dispatch<React.SetStateAction<boolean>>;
  handleSubmit: (e: { preventDefault: () => void }) => void;
  setId: () => void;
  largeDrawer?: boolean;
}

export interface FilterProps {
  children: ReactNode;
  isOpen: boolean;
  isLoading: boolean;
  setIsOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
  handleResetSubmit: () => void;
  handleClose: () => void;
  handleSubmit: () => void;
  isSaveDisabled: boolean;
  isResetDisabled: boolean;
}

export interface CountryOption {
  id: number;
  name: string;
  timezones: string;
}

