function Box({ sign, addSign }) {
  //   const [boxes, setBoxes] = useState(Array(9).fill("O"));
  return (
    <div className="box" onClick={addSign}>
      {sign}
    </div>
  );
}

export default Box;
