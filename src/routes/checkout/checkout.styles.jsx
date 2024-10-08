import styled from "styled-components";

export const CheckOutContainer = styled.div`
  width: 65%;
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 50px auto 0;

  @media (max-width: 390px) {
  width: 90%; 
} 
`;

export const CheckOutHeader = styled.div`
  width: 100%;
  padding: 10px 0;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid darkgrey;
`;

export const HeaderBlock = styled.div`
display:flex;  
text-transform: capitalize;
width: 22%;

  &:last-child {
    width: 17%;
  }


`;

export const Total =styled.div`
  margin-top: 30px;
  margin-left: auto;
  font-size: 36px;
`;

export const CheckOutSpan = styled.span`

display:flex;



@media (max-width: 390px) {
  width: 90%; 
  margin: 10px auto; 
}

`;

