import styled from "styled-components";

export const Container = styled.div`
    width:100%;
    margin-bottom:50px;
    display:flex;
    flex-direction:column;
    align-items:center;
`;

export const Form = styled.div`
    width:50%;
    margin-bottom:70px;
   

`

export const TypeIcons = styled.div`
    width:100%;
    display:flex;
    justify-content:center;

    .inative{
        opacity:0.5
    }

    button{
        border:none;
        background:none;

        &:focus{
            outline:0px;
            outline-offset:0px;
        }
    }

    img{
        width:50px;
        height:50px;
        margin:15px;
        cursor:pointer;

        &:hover{
            opacity:0.5;
        }
    }
`

export const Input = styled.div `
    width:100%;
    display:flex;
    flex-direction:column;
    margin: 25px 0; 

    span{
        color:#707070;
        margin-top:5px 0 ;
    }

    input{
        font-size:16px;
        padding:15px;
        border:none;
        border-bottom:1px solid #EE6B26; 

        &:focus{
            outline:0px;
            outline-offset:0px;
            border-bottom:2px solid #EE6B26; 
        }
    }

    img { 
        width: 20px;
        height:20px;
        position:relative;
        left:96.5%;
    }
`

export const TextArea = styled.div`
    width:100%;
    display:flex;
    flex-direction:column;
    margin: 25px 0; 

    span{
        color:#707070;
        margin-top:5px 0 ;
    }

    textarea {
        font-size:16px;
        border:1px solid #EE6B26;
        border-radius:10px;
        padding:5px;

        &:focus{
            outline:0px;
            outline-offset:0px;
            border:2px solid #EE6B26; 
        }
    }


`

export const Options = styled.div`
    display:flex;
    justify-content:space-between;

    button{
        font-weight:bold;
        color: #20295f;
        border:none;
        background:none;
        font-size:18px;
        cursor:pointer;

        &:hover{
            opacity:0.7;
        }
    }

    div{
        display:flex;
        align-items:center;
        color: #EE6B26;
        font-weight: bold;
        font-size:18px;

        span {
            margin-left:5px;
        }
    }
`

export const Save = styled.div`
    width:100%;

    margin-top:20px; 
    button{
        width:100%;
        background-color:#EE6B26;
        border:none;
        font-size:20px;
        border-radius:30px;
        color:#FFF;
        font-weight:bold;
        padding:15px;
        cursor:pointer;

        &:hover{
            opacity:0.7
        }
    }
`