export const renderCellFunction = (data: any) => {
  return (
    <div
      style={{
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis",
      }}
    >
      {data}
    </div>
  );
};
