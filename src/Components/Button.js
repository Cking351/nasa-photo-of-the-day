import styled from 'styled-components'


export default styled.button`
    background-color: #105bd8; 
    border: none;
    color: #e4e2e0;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    &:hover span{
        display: none;
    }
    &:hover:before{
        content: '🚀 LIFT OFF!'
    }
`