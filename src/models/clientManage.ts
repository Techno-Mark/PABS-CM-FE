import { BusinessList } from "./userManage";

export interface ClientDrawerProps {
  openDrawer: boolean;
  setOpenDrawer: React.Dispatch<React.SetStateAction<boolean>>;
  clientId: number;
  setClientId: () => void;
  canEdit: boolean;
  type: string;
  getClientList: () => void;
  businessList: BusinessList[];
  handleClear: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface ClientModalProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  businessList: BusinessList[];
  sendFilterData: (
    businessId: number[],
    statusId: number[],
    checkListStatusId: string[],
    saveClicked: boolean
  ) => void;
  clientListParams: any;
}

export interface ClientList {
  ClientId: number;
  SfId: string;
  Clientname: string;
  BusinessType: string;
  Status: string;
  AssignUser: string;
  checkListStatus: number;
}

export interface GetClientListResponse {
  totalClients: number;
  totalPages: number;
  currentPage: number;
  clients: ClientList[];
}

export interface GetClientByIdResponse {
  ClientId: number;
  SFID: string;
  Clientname: string;
  Email: string;
  BusinessTypeId: number;
  BusinessTypeName: string;
  Status: boolean;
  ClientLogo: string;
}
