export interface AuditListType {
  page: number;
  limit: number;
  search: string;
}

export interface RoleList {
  RoleId: number;
  RoleName: string;
  RoleStatus: boolean;
}

export interface GetAuditLogListResponse {
  totalAuditLogs: number;
  totalPages: number;
  currentPage: number;
  auditLogs: any[];
}
