import styled from "styled-components";

export const Login =styled.div`
@import url('https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@400;700&family=Roboto:wght@400;500;700&display=swap');

    bottom: 0px;
    flex-direction: column;
    display: flex;
    align-items: center;
    width: calc(100vw - 3.55rem);
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
        width:100%;
        margin-bottom: 1rem;
        text-align:center;
    }

    .border{
        border-bottom: 3px solid rgba(244,244,244,255);
    }

    .input{
        padding:8px 2px;
        width:90%;
        outline: -webkit-focus-ring-color auto 1px;
        margin: 2.5rem 0rem;
        font-size:1.2rem;
    }

    .button{
        font-size:1.2rem;
        color:#fff;
        background-color:rgba(21,176,119,255);
        padding:5px;
        width:90%;
        border:0;
        outline:0;
        text-transform: uppercase;
        padding: 0.7rem;
        border-radius: 6px;
        margin: 0 5%;
    }

    .link{
        width:100%;
    }

    .LaterText{
        color:rgba(113,113,113,255);
        font-weight:400;
        margin: 12px 0rem 3rem 0rem;
        text-decoration:underline;
        padding:2px;
    }
`;
