import { ReactNode } from "react";

export interface ChecklistAccordianProps {
  title: string;
  children: ReactNode;
  expandedAccordian:boolean
  handleChange:any
  // setExpandedAccordian:React.Dispatch<React.SetStateAction<number>>
}


export interface ITStructureReviewFormTypes {
  itStructureStatus: string,
  itStructureComments: string,
  itStructureDetails: string,
  itStructureActionName: string,
  itStructureActionItems: string,
}

export interface AccessComputerFormTypes {
  accessComputerStatus: string,
  accessComputerComments: string,
  accessComputerDetails: string,
  accessComputerActionName: string,
  accessComputerActionItems: string,
}

export interface PosSystemFormTypes {
 posSystemStatus: string,
 posSystemComments: string,
 posSystemDetails: string,
 posSystemActionName: string,
 posSystemActionItems: string,
}

export interface AccountingSoftwareFormTypes {
  accountingSoftwareStatus: string,
  accountingSoftwareComments: string,
  accountingSoftwareDetails: string,
  accountingSoftwareActionName: string,
  accountingSoftwareActionItems: string,
 }

// export interface GroupEmailEstablishedTypes {
//   autoCareGroupEmailEstablished:ChecklistFormTypes,
//   setAutoCareGroupEmailEstablished:React.Dispatch<React.SetStateAction<ChecklistFormTypes>>,
// }

// export interface PreKickOffTypes {
//   autoCarePreKickOffEstablished:ChecklistFormTypes,
//   setAutoCarePreKickOffEstablished:React.Dispatch<React.SetStateAction<ChecklistFormTypes>>,
// }

// export interface KickOffTypes {
//   autoCareKickOff:ChecklistFormTypes,
//   setAutoCareKickOff:React.Dispatch<React.SetStateAction<ChecklistFormTypes>>,
// }

export interface ITStructureReviewTypes {
  autoCareITStructureReview:ITStructureReviewFormTypes,
  setAutoCareITStructureReview:React.Dispatch<React.SetStateAction<ITStructureReviewFormTypes>>,
}

export interface AccessComputerMethodTypes {
  autoCareAccessComputerMethod:AccessComputerFormTypes,
  setAutoCareAccessComputerMethod:React.Dispatch<React.SetStateAction<AccessComputerFormTypes>>,
}

export interface PosSystemTypes {
  autoCarePosSystem:PosSystemFormTypes,
  setAutoCarePosSystem:React.Dispatch<React.SetStateAction<PosSystemFormTypes>>,
}

export interface AccountingSoftwareTypes {
  autoCareAccountingSoftware:AccountingSoftwareFormTypes,
  setAutoCareAccountingSoftware:React.Dispatch<React.SetStateAction<AccountingSoftwareFormTypes>>,
}
