import { ReactNode } from "react";

export interface StringFieldType {
  value: string;
  error: boolean;
  errorText: string;
}

export interface NumberFieldType {
  value: number;
  error: boolean;
  errorText: string;
}

export interface AuthType {
  // token: string | null;
  passwordType: "Reset" | "Create";
  checkForToken: boolean;
}

export interface childPropsType {
  children: ReactNode;
}

export interface DrawerPropsType {
  children: ReactNode;
  openDrawer: boolean;
  isLoading: boolean;
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
  isDisabled: boolean;
}
