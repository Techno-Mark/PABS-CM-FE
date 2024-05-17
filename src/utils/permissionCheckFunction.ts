type PermissionType = "view" | "create" | "edit" | "delete";
// Cookie import
import Cookies from "js-cookie";

export const checkPermission = (
  moduleName: string,
  permissionType: PermissionType
): boolean => {
  const permission: any = Cookies.get("permission");
  const permissions = permission?.length > 0 ? JSON.parse(permission) : [];
  const modulePermission = permissions.find(
    (perm: any) => perm.moduleName === moduleName
  );

  if (modulePermission) {
    return modulePermission[permissionType];
  }
  return false;
};
