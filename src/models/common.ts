import { ReactNode } from "react";

export interface StringFieldType {
  value: string;
  error: boolean;
  errorText: string;
}

export interface NumberFieldType extends Omit<StringFieldType, 'value'> {
  value: number;
}

export interface UserFormFieldType {
  fullName: StringFieldType;
  role: NumberFieldType;
  businessType: NumberFieldType;
  status: NumberFieldType;
  email: StringFieldType;
}

export interface ClientFormFieldType {
  clientFullName: StringFieldType;
  sFID: StringFieldType;
  businessType: NumberFieldType;
  status: NumberFieldType;
  email: StringFieldType;
}

export interface AuthType {
  // token: string | null;
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
