import { ClientInfoType } from "@/models/autoCareBasicDetails";

export interface ClientModalProps {
  clientInfo:ClientInfoType
  isOpen: boolean;
  setIsOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
  handleClose: () => void;
}
