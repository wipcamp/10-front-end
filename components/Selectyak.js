import React from 'react'
import Link from 'next/link'
import styled from 'styled-components'
import Bar from '../components/Bar'

const Box = styled.div`
    background-color: blue;
    width: 100%;
    height: 50%;
    max-height: 100%;
`
const Text = styled.h3`
    padding-right:10%;
    padding-left:10%;
    padding-top: 8%;
    padding-bottom:0px;
    
    `
const Choose = styled.h5`
    padding-top:0px;
    padding-left:10%;
    /* padding-bottom:2%; */
    
`

const Select =()=> (
    <div>
        
        <Link href="/whatyak">
            <Box>
            <h1 className><center>เลือกตัวละคร</center></h1>
         <Bar></Bar>
                <Text>ทีมพี่ยักษ์</Text>
                <Choose>เลือก</Choose>        
            </Box>         
        </Link>
    </div>
)
export default Select;