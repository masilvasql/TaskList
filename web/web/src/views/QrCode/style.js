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
    margin-top:25px;

    h1{
        color:#EE6B26
    }

    p{
        color:#20295F;
        font-weight:bold;
    }
`;

export const QrCodeArea = styled.div`
    padding-top:15px;
    padding-bottom:15px;
    width:100%;
    display:flex;
    justify-content:center;
`;

export const ValidationCode = styled.div`
    display:flex;
    flex-direction:column;
    margin:10px;

    span{
        text-transform:uppercase;
        font-weight:bold;
    }

    input{
        font-size:18px;
        padding:10px;
        text-align:center;
        border-radius:5px;
        border: 2px solid #20295f;

        &:focus{
            outline:0px;
            outline-offset:0px;
            border:2px solid #EE6B26; 
            
        }
    }

    button{
        font-weight:bold;
        background:#EE6B26;
        color:#fff;
        font-size:18px;
        padding:10px;
        border-radius:30px;
        border:none;
        cursor: pointer;
        margin-top:10px;

        &:hover{
            background:#20295f;

        }
    }
`;
