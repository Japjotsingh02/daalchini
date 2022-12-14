import styled from "styled-components";

export const ProductItem = styled.div`
    @import url('https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@400;700&family=Roboto:wght@400;700&display=swap');

    display:flex;
    border-bottom: 3px solid rgba(244,244,244,255);
    padding-bottom: 2rem;
    margin:2rem 1rem;
    font-family:"Roboto",sans-serif;
    gap:1.5rem;

    .productImage{
        height:10rem;
        width:10rem;
    }

    .productInfo{
        flex:1;
    }

    .name{
        font-size:2rem;
        font-family: 'Roboto Condensed', sans-serif;
        font-weight:700;
    }

    .description{
        color:rgba(43, 49, 51, 0.4);
        font-family:"Roboto",sans-serif;
        font-size:1.2rem;
        font-weight:700;
        margin-top:1px;
    }

    .flex{
        display:flex;
        justify-content: space-between;
        height: calc(100% - 4rem);
        flex-direction:row;
    }

    .priceRow{
        margin-top:1.5rem;
        align-self:flex-start;
    }

    .price{
        font-size:2rem;
        font-weight:400;    
    }

    @media screen and (max-width: 1024px) {
        .flex{
            height: calc(100% - 5rem);
        }
    }

    @media screen and (max-width: 450px) {
        .flex{
            height: calc(100% - 6rem);
        }
    }

    @media screen and (max-width: 380px) {
        .flex{
            height: calc(100% - 5rem);
        }
    }

    .prevPrice{
        font-size:2rem;
        font-weight:400;
        color:rgba(43, 49, 51, 0.4);
        margin-left:2.5rem;
    }

    .itemInput{
        align-self:flex-end;
        position:relative;
    }

    @media screen and (max-width: 380px) {
        .itemInput{
            align-self:center;
        }
    }

    .addButton{
        color:#fff;
        cursor:pointer;
        font-size: 1rem;
        text-transform:uppercase;
        background-color:rgba(21,176,119,255);
        width: 6.25rem;
        height: 2.375rem;
        border:0;
        border-radius:4px;
    }
`;



