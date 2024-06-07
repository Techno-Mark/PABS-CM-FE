import { ReactNode } from "react";

export interface ChecklistAccordianProps {
  title: string;
  children: ReactNode;
  expandedAccordian: boolean;
  handleChange: any;
  // setExpandedAccordian:React.Dispatch<React.SetStateAction<number>>
}

export interface GroupEmailEstablishedFormTypes {
  groupEmailEstablishStatus: string;
  groupEmailEstablishComments: string;
  groupEmailEstablishDetails: string;
  groupEmailEstablishActionName: string;
  groupEmailEstablishActionItems: string;
}

export interface PreKickOffFormTypes {
  preKickOffStatus: string;
  preKickOffComments: string;
  preKickOffDetails: string;
  preKickOffActionName: string;
  preKickOffActionItems: string;
}

export interface KickOffFormTypes {
  kickOffStatus: string;
  kickOffComments: string;
  kickOffDetails: string;
  kickOffActionName: string;
  kickOffActionItems: string;
}

export interface ITStructureReviewFormTypes {
  itStructureStatus: string;
  itStructureComments: string;
  itStructureDetails: string;
  itStructureActionName: string;
  itStructureActionItems: string;
}

export interface AccessComputerFormTypes {
  accessComputerStatus: string;
  accessComputerComments: string;
  accessComputerDetails: string;
  accessComputerActionName: string;
  accessComputerActionItems: string;
}

export interface PosSystemFormTypes {
  posSystemStatus: string;
  posSystemComments: string;
  posSystemDetails: string;
  posSystemActionName: string;
  posSystemActionItems: string;
}

export interface AccountingSoftwareFormTypes {
  accountingSoftwareStatus: string;
  accountingSoftwareComments: string;
  accountingSoftwareDetails: string;
  accountingSoftwareActionName: string;
  accountingSoftwareActionItems: string;
}

export interface CloudDocumentManagementFormTypes {
  cloudDocumentManagementStatus: string;
  cloudDocumentManagementComments: string;
  cloudDocumentManagementDetails: string;
  cloudDocumentManagementActionName: string;
  cloudDocumentManagementActionItems: string;
}

export interface ScannerFormTypes {
  scannerStatus: string;
  scannerComments: string;
  scannerDetails: string;
  scannerActionName: string;
  scannerActionItems: string;
}

export interface GroupEmailEstablishedTypes {
  autoCareGroupEmailEstablished: GroupEmailEstablishedFormTypes;
  setAutoCareGroupEmailEstablished: React.Dispatch<
    React.SetStateAction<GroupEmailEstablishedFormTypes>
  >;
}

export interface PreKickOffTypes {
  autoCarePreKickOff: PreKickOffFormTypes;
  setAutoCarePreKickOff: React.Dispatch<
    React.SetStateAction<PreKickOffFormTypes>
  >;
}

export interface KickOffTypes {
  autoCareKickOff: KickOffFormTypes;
  setAutoCareKickOff: React.Dispatch<React.SetStateAction<KickOffFormTypes>>;
}

export interface ITStructureReviewTypes {
  autoCareITStructureReview: ITStructureReviewFormTypes;
  setAutoCareITStructureReview: React.Dispatch<
    React.SetStateAction<ITStructureReviewFormTypes>
  >;
}

export interface AccessComputerMethodTypes {
  autoCareAccessComputerMethod: AccessComputerFormTypes;
  setAutoCareAccessComputerMethod: React.Dispatch<
    React.SetStateAction<AccessComputerFormTypes>
  >;
}

export interface PosSystemTypes {
  autoCarePosSystem: PosSystemFormTypes;
  setAutoCarePosSystem: React.Dispatch<
    React.SetStateAction<PosSystemFormTypes>
  >;
}

export interface AccountingSoftwareTypes {
  autoCareAccountingSoftware: AccountingSoftwareFormTypes;
  setAutoCareAccountingSoftware: React.Dispatch<
    React.SetStateAction<AccountingSoftwareFormTypes>
  >;
}

export interface CloudDocumentManagementTypes {
  autoCareCloudDocumentManagement: CloudDocumentManagementFormTypes;
  setAutoCareCloudDocumentManagement: React.Dispatch<
    React.SetStateAction<CloudDocumentManagementFormTypes>
  >;
}

export interface ScannerTypes {
  autoCareScanner: ScannerFormTypes;
  setAutoCareScanner: React.Dispatch<
    React.SetStateAction<ScannerFormTypes>
  >;
}
