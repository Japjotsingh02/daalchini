import styled from "styled-components";

export const Form =styled.div`
    text-align: center;
    font-weight:700;
    display:flex;
    border-radius:4px;
    align-self:flex-end;
    width: 6.25rem;
    height: 2.375rem;
    cursor:pointer;
    align-items: center;
  
  .value-button {
    border: 2px solid rgba(21,176,119,255);
    width: 1.875rem;
    height: -webkit-fill-available;
    padding: 0.438rem 0;
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
    width: 2.5rem;
    outline:0;
    height: -webkit-fill-available;
  }
  
  input[type=number]::-webkit-inner-spin-button,
  input[type=number]::-webkit-outer-spin-button {
      -webkit-appearance: none;
      margin: 0;
  }
`;