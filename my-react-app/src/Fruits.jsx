function Fruits() {
  const fruit1 = "Apple";
  const fruit2 = "Mango";

  return (
    <ul>
      <li>Banana</li>
      <li>{fruit1}</li>
      <li>{fruit2.toLocaleUpperCase()}</li>
    </ul>
  );
}
export default Fruits;
