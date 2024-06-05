export interface SidebarProps {
  openSidebar: boolean;
  setOpenSidebar: React.Dispatch<React.SetStateAction<boolean>>;
  onRouteChange: () => void;
}

export interface SidebarItemsType {
  module: string;
  link: string;
  icon: any;
}

export interface ClientSidebarItemsType {
  id: number;
  module: string;
  link: string;
  value: number;
}
