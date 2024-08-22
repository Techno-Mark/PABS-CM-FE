export const updateStatus = (
  details: string,
  setFormState: React.Dispatch<React.SetStateAction<any>>,
  statusField: string
) => {
  setFormState((prev: any) => ({
    ...prev,
    [statusField]: details === "" ? "Pending" : "In Progress",
  }));
};
