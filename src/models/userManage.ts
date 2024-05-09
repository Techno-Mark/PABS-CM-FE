export interface DrawerProps {
  openDrawer: boolean;
  setOpenDrawer: React.Dispatch<React.SetStateAction<boolean>>;
  canEdit: boolean;
  type: string;
}

export interface ModalProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface InActiveProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  handleApply: () => void;
  handleClose: () => void;
}

export interface Option {
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
}
