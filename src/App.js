const box = {
  height: "30px",
  width: "30px"
};

const array = [...Array(8).keys()];

const Box = ({ backgroundColor, size = "50" }) => {
  return (
    <td
      style={{
        ...box,
        backgroundColor,
        height: size + "px",
        width: size + "px"
      }}
    ></td>
  );
};

const Row = ({ initialColor, nextColor }) => {
  const row = array.map((i) => (
    <Box key={i} backgroundColor={i % 2 === 0 ? initialColor : nextColor} />
  ));

  return <tr>{row}</tr>;
};

const Board = () => {
  const board = array.map((i) => {
    const initialColor = i % 2 === 0 ? "grey" : "cyan";
    const nextColor = i % 2 === 0 ? "cyan" : "grey";
    return <Row key={i} initialColor={initialColor} nextColor={nextColor} />;
  });

  return (
    <table>
      <tbody>{board}</tbody>
    </table>
  );
};

export default function App() {
  return <Board />;
}
