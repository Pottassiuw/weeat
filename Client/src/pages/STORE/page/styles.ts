import styled from "styled-components";
import {
  Search,
  ArrowRight,
  MapPinned,
  Sparkles,
  TicketPercent,
} from "lucide-react";
import { Link } from "react-router-dom";
import { flexCenter } from "../../../styles/mixins";

export const Container = styled.div`
  display: flex;
  flex-flow: column wrap;
  position: relative;
  width: 100%;
  height: max-content;
  overflow: hidden;
`;
// --------------------Reusable----------------------------------
export const Divisor = styled.div`
  width: 100%;
  height: 100px;
  background-color: #e8e8e8;
  opacity: 1;
`;
export const SeeMore = styled.button``;
// --------------------------------------------------------------

//----------------Categories---------------------
export const CategoriesSection = styled.section`
  display: flex;
  width: 100dvw;
  flex-flow: column nowrap;
`;
export const WeeatTitleWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const WeeatTitle = styled.h1`
  font-size: ${(p) => p.theme.font.titleG};
  color: #d92121;
  font-weight: 500;
  text-align: center;
`;
export const CategoriesWrapper = styled.div`
  margin-top: 4%;
  display: flex;
  flex-flow: column wrap;
  align-items: center;
  padding: 0 4%;
`;
export const SearchWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 3rem;
  border-radius: 10px;
  flex-flow: column nowrap;
  overflow: hidden;
`;
export const SearchContentText = styled.h1`
  font-size: 22pt;
  font-weight: 600;
`;
export const SearchContentWrapper = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
`;
export const SearchContentContainer = styled.div`
  display: flex;
  flex-flow: row nowrap;
  border-radius: 0.6rem;
  border: 1px solid black;
  padding: 0.5rem;
  align-items: center;
  width: 100%;
`;

export const SearchIcon = styled(Search)`
  margin-right: 5px;
`;
export const SearchBar = styled.input`
  height: 100%;
  width: 100%;
  border: none;
  &:focus {
    outline: none;
  }
`;
export const SearchContentButton = styled.button`
  margin-left: 1rem;
  border-color: #ff0000;
  border-width: 2px;
  border-radius: 0.6rem;
  background-color: #fff;
  padding: 0.7rem;
  color: #ff0000;
  font-weight: 600;
  width: 150px;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out;

  &:hover {
    background-color: #ff0000;
    color: #fff;
  }
`;
export const SearchResultsWrapper = styled.div`
  display: flex;
  margin-top: 2rem;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  width: 100%;
  border-radius: ${({ theme }) => theme.border.button};
`;
export const NoStoresMessage = styled.p`
  font-size: ${({ theme }) => theme.font.text};
  width: 100%;
  padding: 1rem;
  color: ${({ theme }) => theme.colors.primary};
  border: 2px dotted currentColor;
  opacity: 0.9;
  border-radius: ${({ theme }) => theme.border.button};
`;

export const StoreCard = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 180px;
  margin-bottom: 2rem;
  border: 2px solid #ddd;
  border-radius: 10px;
  padding: 20px;
  overflow: hidden;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

export const StoreLogo = styled.img`
  width: 170px;
  height: 150px;
  border-radius: 50%;
  margin-bottom: 10px;
  object-fit: contain;
`;

export const StoreInfo = styled.div`
  display: flex;
  flex-flow: column wrap;
  flex-direction: column;
  width: fit-content;
  margin-left: 1rem;
`;

export const StoreName = styled.h2`
  font-size: ${({ theme }) => theme.font.subtitle};
  color: ${({ theme }) => theme.colors.primaryDark};
  font-weight: bold;
  margin-bottom: 10px;
`;
export const StoreDescription = styled.p`
  font-size: ${({ theme }) => theme.font.text};
  color: #666;
  margin-bottom: 10px;
`;

export const StoreRating = styled.p`
  font-size: 14px;
  color: #666;
  margin-bottom: 10px;
`;
export const StoreCategory = styled.p`
  font-size: 14px;
  color: #666;
  margin-bottom: 10px;
`;

export const StoreLink = styled(Link)`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.primary};
  transition: color 0.2s ease;
`;
export const StoreLinkButton = styled.button`
  border: 2px solid #fe2c2c;
  background-color: transparent;
  border-radius: ${(p) => p.theme.border.button};
  color: #fe2c2c;
  font-weight: 500;
  width: 100px;
  padding: 0.6rem;
  font-size: 12pt;
  transition: background-color 0.1s ease-in-out, color 0.1s ease-in-out;
  &:hover {
    color: ${({ theme }) => theme.colors.white};
    background-color: #fe2c2c;
  }
`;
export const GreetingsWrapper = styled.div`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  width: 100%;
  margin: 2rem 0;
`;
export const Greetings = styled.h2`
  text-align: center;
`;
export const CategoryWrapper = styled.div`
  display: flex;
  flex-flow: row nowrap;
  width: 100%;
  justify-content: space-between;
`;
export const CategoryButtonWrapper = styled.div``;
export const CategoryButton = styled.button`
  border-radius: 10px;
  border: 2px solid #eb4032;
  padding: 0.5rem;
  color: #eb4032;
  margin: 0px 20px 0px 0px;
`;
export const CategoryFavorites = styled.div`
  display: flex;
  flex-flow: row nowrap;
  position: relative;

  ${CategoryButton} {
    padding-right: 5rem;
  }
`;
export const ArrowIcon = styled(ArrowRight)`
  position: absolute;
  right: 10%;
  top: 50%;
  transform: translate(-50%, -50%);
  color: tomato;
`;
export const StoresCategoryWrapper = styled.div`
  display: flex;
  flex-flow: row wrap;
  margin-top: 10%;
`;
export const StoresCategoryButton = styled.button`
  height: 350px;
  width: 250px;
  font-size: 14pt;
  font-weight: bold;
  border-radius: 5px;
  border-color: #000;
  border-width: 4px;
  margin: 0 auto;
  color: #eb4032;
  background-color: white;
  margin-bottom: 30px;
  transition: color 0.2s ease-in-out, border-color 0.2s ease-in-out,
    scale 0.2s ease-in-out;

  &:hover {
    color: ${({ theme }) => theme.colors.primaryDark};
    border-color: ${({ theme }) => theme.colors.primaryDark};
    scale: 0.99;
  }
`;
//----------------Categories---------------------

//----------------Discount---------------------
export const DiscountSection = styled.section`
  width: 100dvw;
  margin: 10% 0;
  padding: 0 4%;
`;
export const DiscountTitleWrapper = styled.div`
  display: flex;
  align-items: center;
  background-color: #fff;
  width: fit-content;
  border-radius: 10px;
  padding: 1rem;
`;
export const DiscountTitle = styled.h1`
  font-size: 22pt;
  padding-right: 1rem;
`;
export const DiscountTitleIcon = styled(TicketPercent)`
  color: #ebb134;
  width: 40px;
  height: 40px;
`;
export const DiscountCardWrapper = styled.div`
  display: flex;
  flex-flow: row wrap;
  height: 100%;
`;
export const DiscountCard = styled.div`
  position: relative;
  border: 3px solid #d9d9d9;
  border-radius: 1rem;
  width: 450px;
  height: 550px;
  margin: 4rem auto 0 0;
`;
export const DiscountCardIconWrapper = styled.div`
  width: 100%;
  height: 15%;
  border-bottom: 3px solid #d9d9d9;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const DiscountCardIcon = styled.img``;
export const DiscountCardImage = styled.img``;
export const DiscountCardNameWrapper = styled.div`
  width: 50%;
  height: 7%;
  border: 3px solid #d9d9d9;
  border-left: none;
  border-bottom: none;
  position: absolute;
  bottom: 0;
  border-top-right-radius: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const DiscountCardName = styled.p`
  font-size: 14pt;
`;
export const DiscountCardPriceWrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;
  position: absolute;
  right: 0;
  bottom: 0;
  background-color: #fff;
  border-bottom-right-radius: 1rem;
  border-top-left-radius: 1rem;
  padding: 1rem;
  width: 40%;
  align-items: center;
`;
export const DiscountCardOldPrice = styled.p`
  text-decoration: line-through;
  color: #797171;
  font-size: 20pt;
`;
export const DiscountCardNewPrice = styled.p`
  font-size: 20pt;
`;
//----------------Discount---------------------

//----------------Stores-----------------------
export const StoresSection = styled.section`
  width: 100dvw;
  display: flex;
  justify-content: center;
  padding: 0 4%;
  margin-bottom: 5%;
  flex-flow: column nowrap;
`;
export const StoresTitleWrapper = styled.div`
  display: flex;
  margin: 1rem 0;
  flex-flow: column nowrap;
`;
export const StoresTitleContent = styled.div`
  display: flex;
  align-items: center;
`;
export const StoresTitle = styled.h1`
  font-size: 18pt;
  padding-right: 1rem;
`;
export const StoresSubtitle = styled.h2`
  color: #958a8a;
  font-size: 14pt;
`;
export const StoresMapIcon = styled(MapPinned)`
  color: #ebb134;
`;
export const StoresStarIcon = styled(Sparkles)`
  color: #ebb134;
`;
export const StoresCardWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-flow: row wrap;
`;
export const StoresCard = styled.div`
  display: flex;
  flex-flow: row nowrap;
  border: 4px solid #d9d9d9;
  width: 400px;
  height: 200px;
  border-radius: 12px;
  margin: 2rem auto 0 0;
  overflow: hidden;
  position: relative;
  transition: 200ms ease;

  &:hover {
    cursor: pointer;
    backdrop-filter: blur(10px);
  }
  &::after {
    content: "Ver Estabelecimento";
    border-radius: ${({ theme }) => theme.border.button};
    ${flexCenter}
    position: absolute;
    bottom: 0;
    left: 50%;
    width: 100%;
    height: 0;
    backdrop-filter: blur(5px);
    font-weight: bold;
    transform: translateX(-50%);
    color: transparent;
    text-align: center;
    transition: 0.15s ease-in-out;
    background-color: #fff;
    opacity: 0.9;

  }
  &:hover::after {
    height: 45%;
    transform: translateX(-50%);
    color: ${({ theme }) => theme.colors.primary};
    font-size: 14pt;
    font-weight: 600;
  }
`;
export const StoresCardLogoWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50%;
`;
export const StoresCardNameWrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;
  width: 50%;
  justify-content: center;
`;
export const StoresCardLogo = styled.img`
  width: 120px;
  height: 120px;
  border-radius: 12px;
`;
export const StoresCardName = styled.p`
  font-size: ${(p) => p.theme.font.text};
  font-weight: 600;
`;
export const StoresCardCategory = styled.p`
  color: ${(p) => p.theme.colors.secondary};
  font-weight: 500;
  font-size: ${(p) => p.theme.font.text};
`;

//----------------Stores-----------------------
