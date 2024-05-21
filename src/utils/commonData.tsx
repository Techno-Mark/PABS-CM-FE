import stringToColor from "string-to-color";

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

export const AlphabetColor = ({ alphabet }: { alphabet: string }) => {
  // Generate color based on the alphabet
  const color = stringToColor(alphabet);

  return (
    <div style={{ backgroundColor: color, padding: "10px", color: "#fff" }}>
      {alphabet}
    </div>
  );
};
