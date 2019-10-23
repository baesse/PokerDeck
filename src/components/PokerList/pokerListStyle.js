import styled from "styled-components";
import logo from "../../assets/logo-6221638601ef7fa7c835eae08ef67a16.png";
export const Wrapper = styled.section`
  padding: 2em;
  background: #ef5350;
`;

export const ImgLogoHeader = styled.img.attrs({
  src: logo
})`
  object-fit: contain;
  width: 150px;
`;

export const PokerCard = styled.div`
  width: ${props => (props.showCard ? `90%` : "150px")};
  min-height: 150px;
  margin: 20px;
  border-radius: 20px;
  box-shadow: 0 2px 3px 0 rgba(0, 0, 0, 0.1);
  background-color: #ffffff;
  &:hover {
    box-shadow: 0 4px 5px 0 rgba(0, 0, 0, 0.1);
    cursor: pointer;
  }
  transition: width 0.5s, height 0.5s;
  position: ${props => (props.showCard ? `fixed` : "")};
  z-index: ${props => (props.showCard ? `5` : "")};
  left: ${props => (props.showCard && '5%')};
  top: ${props => (props.showCard && '10%')};
`;

export const PokerCardHeaderStyle = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;
`;

export const ListPokemons = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  padding: 10px;
`;

export const NextPageBtn = styled.button`
  width: 221px;
  height: 39px;
  border-radius: 8px;
  box-shadow: 0 2px 3px 0 rgba(0, 0, 0, 0.1);
  border: none;
  background-color: #ffc819;
  &:hover {
    cursor: pointer;
    box-shadow: 0 4px 5px 0 rgba(0, 0, 0, 0.1);
  }
  font-family: SofiaPro;
  font-size: 18px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: center;
  color: #ffffff;
`;

export const Body = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 50px;
  margin-bottom: 50px;
`;
export const PokemonName = styled.span`
  font-family: "Pokemon Hollow";
`;
