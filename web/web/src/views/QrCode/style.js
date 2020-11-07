import styled from "styled-components";

export const Container = styled.div`
    width:100%;
    margin-bottom:50px;
    display:flex;
    align-items:center;
    flex-direction:column;
`;

export const Content = styled.div`
    width:50%;
    display:flex;
    align-items:center;
    flex-direction:column;

    h1{
        color:#EE6B26
    }

    p{
        color:#20295F;
        font-weight:bold;
    }
`;

export const QrCodeArea = styled.div`
    width:100%;
    height:400px;
    background:red;
`;
