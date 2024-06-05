import { ReactNode } from "react";

export interface ClientModalProps {
  isOpen: boolean;
  setIsOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
  handleClose: () => void;
}
