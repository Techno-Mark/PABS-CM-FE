export interface ClientModalProps {
  clientInfo:any
  isOpen: boolean;
  setIsOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
  handleClose: () => void;
}
