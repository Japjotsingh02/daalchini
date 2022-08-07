import styled from "styled-components";

export const Cart = styled.div`
@import url('https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@400;700&family=Roboto:wght@400;500;700&display=swap');

    bottom: 6.75rem;
    width: calc(100vw - 60px);
    position: fixed;
    background: #fff;
    z-index: 10000;
    color:rgba(113,113,113,255);
    font-family:"Roboto",sans-serif;
    font-weight:500;
    padding:1.2rem;
    max-height: 18.656rem;
    overflow-y: scroll;

    @media screen and (max-width: 1024px) {
        width: calc(100vw - 2.188rem);
    }

    .details{
        font-size:1.2rem;
        padding-bottom: 1rem;
        margin-bottom: 1rem;
        text-align:center;
    }

    .border{
        border-bottom: 3px solid rgba(244,244,244,255);
    }
`;

export const Table = styled.div`
`;

export const Row = styled.div`
    display:flex;
    padding:1.2rem 0rem;

    .lastCell{
        text-align:right;
    }

    .big{
        flex:0.5;
    }

    .small{
        flex:0.25;
    }

`;

export const Cell = styled.div`
    // flex:0.33;
    font-size:1.2rem;

`;
