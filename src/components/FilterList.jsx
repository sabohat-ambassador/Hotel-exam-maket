import styled, { ThemeContext } from 'styled-components';
import { useState } from "react"
import {useTranslation} from 'react-i18next'
import { useRef } from "react"
import React from 'react'

const SearchLoc = styled.div`
font-size: 18px;
font-weight: 500;
line-height: 23px;
color: ${(props) => props.theme.hotelThemesColor};
`

const SearchInput = styled.form`
position: relative;
`
const Input = styled.input`
background: ${(props) => props.theme.inputbgcolor};
border: 1px solid ${(props) => props.theme.border};
border-radius: 10px;
padding: 15px 20px;
outline: none;
width: 290px;
margin-top:13px;
::placeholder {
font-size: 16px;
font-weight: 400;
line-height: 24px;
color:'#E7ECF3';
font-family: DM Sans;
}
`
const SearchIcon = styled.i`
color: #DADADA;
font-size: 20px;
position: absolute;
right: 30px;
top: 25px;
`

const DifferentFilters = styled.form`
margin-top: 30px;
`

const PupularFilter = styled.div`
&:not(:last-child){
    border-bottom: 1px solid ${(props) => props.theme.borders};
    width: 260px;
}
padding-bottom:17px;
`
const InputNum = styled.input`
border: 2px solid #316BFF;
border-radius: 9px;
padding: 7px 10px;
outline: none;
width: 40px;
margin-left: 15px;
`
const InputCheck = styled.input`
display: flex;
flex-direction: column;
height: 20px;
width: 20px;
border-radius: 7px;

`
const PopFil = styled.div`
font-size: 18px;
font-weight: 500;
line-height: 23px;
color:${(props) => props.theme.hotelThemesColor};
margin-bottom: 14px;
margin-top: 30px;
`
const Label = styled.label`
font-size: 14px;
font-weight: 400;
line-height: 21px;
color:${(props) => props.theme.filteredColor};
margin-left: 12px;
`
const Checkbox = styled.div`
display: flex;
align-items: center;
margin-bottom: 17px;
`
const Checkboxx = styled.div`
display: flex;
align-items: center;
`
const See = styled.a`
font-size: 16px;
font-weight: 500;
line-height: 24px;
color: #145CE6;
`
const Row = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
margin-bottom: 17px;
`
const Span = styled.span`
font-size: 16px;
font-weight: 400;
line-height: 24px;
color: #84878B;
`
const SpanRange = styled.span`
color: ${(props) => props.theme.spanColor};
`

const Filter = ()=>{
    const {t} = useTranslation()
    const [num, setNum] = useState()
    
    
const handleCheck = (el)=>{
    console.log(el.target.value)
}
    return(
        <form >
            <div>
                <SearchLoc>{t('searchLoc')}</SearchLoc>
                <SearchInput>
                <Input  type="search" placeholder={t('placeholderr')}/>
                <SearchIcon className='icon-search'></SearchIcon>
                </SearchInput>
            </div>
            <div>
                <DifferentFilters>
                    <PupularFilter>
                    <PopFil>{t('popFil1')}</PopFil>
                    <Checkbox >
                    <InputCheck  type="checkbox" id="check3" value='Hotels' onChange={handleCheck}  />
                    <Label htmlFor='Hotels'>{t('label1')}</Label>
                    </Checkbox>
                    <Checkbox>
                    <InputCheck type="checkbox" id="" value='Breakfast and Dinner' onChange={handleCheck}/> 
                    <Label htmlFor="Breakfast and Dinner">{t('label2')}</Label>
                    </Checkbox>
                    <Checkbox>
                    <InputCheck type="checkbox" id="check3" value='Free Cancellationels' onChange={handleCheck}/> 
                    <Label htmlFor='Free Cancellationels'>{t('label3')}</Label>
                    </Checkbox>
                    <Checkbox>
                    <InputCheck type="checkbox" id="check3" value='No prepayment' onChange={handleCheck}/> 
                    <Label htmlFor='No prepayment'>{t('label4')}</Label>
                    </Checkbox>
                    <See>{t('see')}</See>
                    </PupularFilter>
                    <PupularFilter>
                    <PopFil>{t('popFil2')}</PopFil>
                    <input type='range' onChange={(el)=>setNum(el.target.value)} className='check' onChange={handleCheck}/>
            <InputNum type='number' value={num}  />
            <Row><SpanRange>$50</SpanRange>  
            <SpanRange>$150</SpanRange></Row>
                    </PupularFilter>
                    <PupularFilter>
                    <PopFil>{t('popFil3')}</PopFil>
                    <Row>
                    <Checkboxx>
                    <InputCheck type="checkbox" id="check3" value='Hotels' onChange={handleCheck}/>
                    <Label htmlFor='Hotels'>{t('label1')}</Label>
                    </Checkboxx>
                    <Span>108</Span>
                    </Row>
                   <Row>
                   <Checkboxx>
                    <InputCheck type="checkbox" id="" value='Apertments' onChange={handleCheck}/> 
                    <Label htmlFor="Apertments"> {t('label5')} </Label>
                    </Checkboxx>
                    <Span>141</Span>
                   </Row>
                    <Row>
                    <Checkboxx>
                    <InputCheck type="checkbox" id="check3" value='Resort' onChange={handleCheck}/> 
                    <Label htmlFor='Resort'>{t('label6')}</Label>
                    </Checkboxx>
                    <Span>108</Span>
                    </Row>
                    
                    <See>{t('see')}</See>
                    </PupularFilter>
                    <PupularFilter>
                    <PopFil>{t('popFil4')}</PopFil>
                    <Checkbox>
                    <InputCheck type="checkbox" id="Less than $75" value='Less than $75' onChange={handleCheck}/>
                    <Label htmlFor='Less than $75'>{t('label7')}</Label>
                    </Checkbox>
                    <Checkbox>
                    <InputCheck type="checkbox" id="$75 to 125" value='$75 to 125' onChange={handleCheck}/> 
                    <Label htmlFor="$75 to 125">{t('label8')} </Label>
                    </Checkbox>
                    <Checkbox>
                    <InputCheck type="checkbox" id="$125 to 200" value='$125 to 200' onChange={handleCheck}/> 
                    <Label htmlFor='$125 to 200'>{t('label9')}</Label>
                    </Checkbox>
                    <Checkbox>
                    <InputCheck type="checkbox" id="$200 to $300" value='$200 to $300' onChange={handleCheck}/> 
                    <Label htmlFor='$200 to $300'>{t('label10')}</Label>
                    </Checkbox>
                    <Checkbox>
                    <InputCheck type="checkbox" id="Greater than $300" value='Greater than $300' onChange={handleCheck}/> 
                    <Label htmlFor='Greater than $300'>{t('label11')}</Label>
                    </Checkbox>
                    </PupularFilter>
                    <PupularFilter>
                    <PopFil>{t('popFil5')} </PopFil>
                    <Row>
                    <Checkboxx>
                    <InputCheck type="checkbox" id="Outdoor Sports" value='Outdoor Sports'/>
                    <Label htmlFor='Outdoor Sports'>{t('label12')}</Label>
                 </Checkboxx>
                 <Span>108</Span>
                    </Row>
                    <Row>
                    <Checkboxx>
                    <InputCheck type="checkbox" id="Berbeque" value='Berbeque'/>
                    <Label htmlFor='Berbeque'>{t('label13')} </Label>
                 </Checkboxx>
                 <Span>141</Span>
                    </Row>
                    <Row>
                    <Checkboxx>
                    <InputCheck type="checkbox" id="Living Room"  value='Living Room'/>
                    <Label htmlFor='Living Room'>{t('label14')}</Label>
                 </Checkboxx>
                 <Span>108</Span>
                    </Row>
                    <Row>
                    <Checkboxx>
                    <InputCheck type="checkbox" id="Room Service"  value='Room Service'/>
                    <Label htmlFor='Room Service'>{t('label15')}</Label>
                 </Checkboxx>
                 <Span>108</Span>
                    </Row>
                    <Row>
                    <Checkboxx>
                    <InputCheck type="checkbox" id="Swimming Pool"  value='Swimming Pool'/>
                    <Label htmlFor='Swimming Pool'>{t('label16')}</Label>
                 </Checkboxx>
                 <Span>141</Span>
                    </Row>
                    <Row>
                    <Checkboxx>
                    <InputCheck type="checkbox" id="Spa"  value='Spa'/>
                    <Label htmlFor='Spa'>{t('label17')} </Label>
                 </Checkboxx>
                 <Span>108</Span>
                    </Row>
                    <See>{t('see')}</See>
                    </PupularFilter>
                    
                </DifferentFilters>
            </div>
        </form>
    )
}

export default Filter