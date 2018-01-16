import react from 'react'
import styled from 'styled-components'
import '../global-style'

const RegisButton = styled.div`
    width: 250px;
    height: 80px;    
    border-radius: 10%;
    background-color: #FF3333;
    transition:all 550ms ease-in-out;
    cursor: pointer;
    position:fixed;
    right:-90px;
    top:400px;          
    z-index: 1;
    color: white;
    letter-spacing: 5px;
    -webkit-transform:rotate(270deg);

    @media(max-width:720px) {
        width: 65px;            
        height: 65px;            
    }
`

const Regis = styled.span`
    font-size: 2.5em;
    font-weight: bold;
    font-family: 'Niramit';

    @media(max-width:720px) {
        font-size: 1em;            
    }
`

const RegisBut = () => (
    <RegisButton className="d-flex justify-content-center align-items-center" data-toggle="" data-target="#">
        <Regis className="text-center">ลงทะเบียน</Regis>
    </RegisButton>
)
export default RegisBut