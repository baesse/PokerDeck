import styled from "styled-components";

export const PokemonSearchInputTypes = styled.div`
  display: flex;
  justify-content: center;
  padding: 20px;
  align-items: center;
  width: ${props => (props.showEffect ? "250px" : "50px")};
  transition: width 1s;
`;

export const PokebolaImage = styled.img`
  width: 50px;
  height: 50px;
  margin-left: 20px;
  &:hover {
    cursor: pointer;
  }
`;

export const InputSearch = styled.input`
  height: 30px;
  background: linear-gradient(21deg, #FFC91A, #EF5350);
  border-radius: 8px;
  color: black;
  padding:5px;
  font-weight:bold;
  letter-spacing: 2px ;
  border:none;
  width: 100%;
  display: ${props => (props.showEffect ? "" : "none")};
`;
