import styled from "styled-components";

export const PokemonStatsTypes = styled.div`
  display: flex;
  justify-content: start;
  flex-flow: column;
`;

export const PokemonStatsTypesItems = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
  margin-bottom: 10px;
`;

export const ItemOptionsControlerStyle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 2px 3px 0 rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  padding: 10px;
  width: 90%;
  background-color: #ffffff;
`;

export const ItemListStyle = styled.span`
  box-shadow: 0 2px 3px 0 rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  text-align: center;
  padding: 5px;
  width: 80%;
`;

export const ImgIconChangeStyle = styled.img`
  transition: transform 0.5s;
  width: 15px;
  height: 15px;
  border-radius: 10px;
  padding: 5px;
  box-shadow: 0 3px 5px 0 rgba(0, 0, 0, 0.21);
  transform: ${props => (props.showTypes ? `rotate(180deg)` : "")};
`;


