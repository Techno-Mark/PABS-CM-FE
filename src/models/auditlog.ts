export interface AuditListType {
  page: number;
  limit: number;
  search: string;
  fromDate: string;
  toDate: string;
  moduleNames: string[];
  userNames: string[];
  saveClicked: boolean;
}

export interface GetAuditLogListResponse {
  totalAuditLogs: number;
  totalPages: number;
  currentPage: number;
  auditLogs: any[];
}

export interface GetUserAllListResponse {
  userId: number;
  UserName: string;
}
