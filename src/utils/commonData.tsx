import stringToColor from "string-to-color";

export const renderCellFunction = (value:string) => {
  if (typeof value === 'string') {
    return value.split(' ').map((word, index) => (
      <>
        {word}
        {index < value.split(' ').length - 1 && <>&nbsp;</>}
      </>
    ));
  }
  return value;
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

export const noRecordText: { noRowsLabel: string } = {
  noRowsLabel: "No records found",
};

