import styled from "styled-components";

export const Foooter =styled.div`
    @import url('https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@400;700&family=Roboto:wght@400;700&display=swap');

    bottom: 0;
    position: fixed;
    z-index: 10000;
    background-color:rgba(21,176,119,255);
    width:100vw;
    font-family:"Roboto",sans-serif;
    align-items:center;
    display: flex;
    justify-content:space-around;
    gap: 5rem;
    padding-left: 1vh;
    color:#fff;

    .totalColumn{
        background-color:rgba(17,129,87,255);
        display:flex;
        margin: 1rem;
        border-radius: 6px;
        gap: 2rem;
        font-size: 1.4rem;
        padding: 0rem 0.6rem;
    }

    .total{
        margin: 0.7rem 0rem;
    }

    .continue{
        font-size:1.6rem;
    }

    .arrow-forward{
        font-size:2.8rem;
        cursor:pointer;
    }

    .expand-less{
        font-size:3.2rem;
        cursor:pointer;
    }

`;

export const PopUpBackground=styled.div`
    position:absolute;
    background-color:rgba(0,0,0,0.4);
    width:100vw;
    height:100vh;
    top:0;
`;
