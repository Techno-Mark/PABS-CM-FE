export interface SystemAccessDetailsFormTypes {
  nameOfResource: string;
  role: string;
  corporateAddress: string;
  email: string;
  accountingSoftware: string;
  bankDetails: string;
  taxDetails: string;
  payrollDetails: string;
  comments: string;
  [key: string]: string | null;
}

export interface SystemAccessDetailsFormErrors
  extends Partial<SystemAccessDetailsFormTypes> {}

export interface SystemAccessDetailsTypes {
  className?: string;
  smbSystemAccessDetailsCheckStatus: boolean;
  handleSwitch: any;
  smbSystemAccessDetails: SystemAccessDetailsFormTypes;
  setSmbSystemAccessDetails: React.Dispatch<
    React.SetStateAction<SystemAccessDetailsFormTypes>
  >;
  smbSystemAccessDetailsErrors: SystemAccessDetailsFormErrors;
  setSmbSystemAccessDetailsErrors: React.Dispatch<
    React.SetStateAction<SystemAccessDetailsFormErrors>
  >;
}
