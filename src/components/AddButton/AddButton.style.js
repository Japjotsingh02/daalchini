import styled from "styled-components";

export const Form =styled.div`
    text-align: center;
    font-weight:700;
    display:flex;
    border-radius:4px;
    align-self:flex-end;
    width: 100px;
    height: 38px;
    cursor:pointer;
    align-items: center;
  
  .value-button {
    border: 2px solid rgba(21,176,119,255);
    width: 30px;
    height: -webkit-fill-available;
    padding: 7px 0;
    user-select: none;
    cursor: pointer;
  }
  
  .value-button:hover {
    cursor: pointer;
  }
  
  #decrease {
    border-right:0px;
    border-bottom-left-radius: 4px;
    border-top-left-radius:4px
  }
  
  #increase {
    border-left:0px;
    border-bottom-right-radius: 4px;
    border-top-right-radius:4px
  }
  
  #input-wrap {
    margin: 0px;
    padding: 0px;
  }
  
  input#number {
    text-align: center;
    border: none;
    border-top: 2px solid rgba(21,176,119,255);
    border-bottom: 2px solid rgba(21,176,119,255);
    color:rgba(21,176,119,255);
    width: 40px;
    outline:0;
    height: -webkit-fill-available;
  }
  
  input[type=number]::-webkit-inner-spin-button,
  input[type=number]::-webkit-outer-spin-button {
      -webkit-appearance: none;
      margin: 0;
  }
`;