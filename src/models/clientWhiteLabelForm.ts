// export interface AccountFormTypes {
//     className?: string
//     accountDetails: AccountDetailsType,
//     setAccountDetails: (value:any) => void,
//     errors,
// }

export interface FormErrors extends Partial<AccountDetailsType> {}

export interface AccountDetailsType {
    cpaName: string;
    city: string;
    corporateAddress: string;
    state: string;
    zip: string;
    ownerContact: string;
    ownerEmail: string;
    ownerPhone: string;
}