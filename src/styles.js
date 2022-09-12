import styled from "styled-components";

export const Container = styled.div` 
    background-color: #ff7f50;
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 414px;
    height: 896px;
    margin: 0 auto;
    
    img{
        margin-top: 50px
    }
    textarea{
        width:342px;
        height:138px;
        margin-top: 50px;
        margin-bottom:25px;
        padding:5px;
        font-size: 19px;
    }

    
`;
export const List = styled.ul`

    li{
    background-color:#e89a7e;
    width: 342px;
    height:68px;
    margin-top: 20px;
    list-style-type: none;
    text-align:center;
    color:#fff;
    padding: 5px;
}

`;

export const Button = styled.button`
    background-color: ${props => props.isOn ? '#a34449' : '#a34443'} ;
    border-radius:10px;
    color: ${props => props.isOn ? '#fff' : '#000' } ;
    width: 342px;
    height: 64px;
    border:none;
    font-size: 16px;
    cursor: pointer;
    margin-top:25px


`;

