import React from "react";

export default function Arama(props) {
  const { arama, setArama } = props;
  const SCInput = styled.input`
    padding: 8px;
    width: 30%;
    background-color: #ddd;
    color: black;
    border-style: solid;
  `;
  return (
    <SCInput
      type="text"
      placeholder="Arama"
      onChange={(event) => setArama(event.target.value)}
      value={arama}
      autoFocus
    ></SCInput>
  );
}
