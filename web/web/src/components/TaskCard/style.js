import styled from "styled-components";

export const Container = styled.div`
    width:230px;
    height:150px;
    box-shadow: -3px 1px 13px -2px rgba(0,0,0,0.75);
    border-radius:10px;

    display:flex;
    align-items:center;
    justify-content:space-around;
    flex-direction:column ;
    margin:15px;

    &:hover{
        opacity:0.5;
        cursor: pointer;
        transition:all 0.3s ease;
    }
`;

export const TopCard = styled.div`
    display:flex;
    align-items:center;
    justify-content:space-between;
    flex-direction:column ;

    img{
        width:80px;
        height:80px;
        margin-bottom:5px;
    }


`;

export const BottomCard = styled.div`
    width:100%;
    display:flex;
    justify-content:space-around;
    

    strong{
        color: #EE6b26;
        font-weight:bold;
    }

    span{
        color:#707070;
    }

`;
