import styled, { ThemeContext } from 'styled-components';
import { useState } from "react"
import {useTranslation} from 'react-i18next'

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
    return(
        <div>
            <div>
                <SearchLoc>{t('searchLoc')}</SearchLoc>
                <SearchInput>
                <Input type="search" placeholder={t('placeholderr')}/>
                <SearchIcon className='icon-search'></SearchIcon>
                </SearchInput>
            </div>
            <div>
                <DifferentFilters>
                    <PupularFilter>
                    <PopFil>{t('popFil1')}</PopFil>
                    <Checkbox>
                    <InputCheck type="checkbox" id="check3"/>
                    <Label htmlFor=''>{t('label1')}</Label>
                    </Checkbox>
                    <Checkbox>
                    <InputCheck type="checkbox" id=""/> 
                    <Label htmlFor="">{t('label2')}</Label>
                    </Checkbox>
                    <Checkbox>
                    <InputCheck type="checkbox" id="check3"/> 
                    <Label htmlFor='check3'>{t('label3')}</Label>
                    </Checkbox>
                    <Checkbox>
                    <InputCheck type="checkbox" id="check3"/> 
                    <Label htmlFor='check3'>{t('label4')}</Label>
                    </Checkbox>
                    <See>{t('see')}</See>
                    </PupularFilter>
                    <PupularFilter>
                    <PopFil>{t('popFil2')}</PopFil>
                    <input type='range' onChange={(el)=>setNum(el.target.value)} className='check'/>
            <InputNum type='number' value={num} />
            <Row><SpanRange>$50</SpanRange>  
            <SpanRange>$150</SpanRange></Row>
                    </PupularFilter>
                    <PupularFilter>
                    <PopFil>{t('popFil3')}</PopFil>
                    <Row>
                    <Checkboxx>
                    <InputCheck type="checkbox" id="check3"/>
                    <Label htmlFor=''>{t('label1')}</Label>
                    </Checkboxx>
                    <Span>108</Span>
                    </Row>
                   <Row>
                   <Checkboxx>
                    <InputCheck type="checkbox" id=""/> 
                    <Label htmlFor=""> {t('label5')} </Label>
                    </Checkboxx>
                    <Span>141</Span>
                   </Row>
                    <Row>
                    <Checkboxx>
                    <InputCheck type="checkbox" id="check3"/> 
                    <Label htmlFor='check3'>{t('label6')}</Label>
                    </Checkboxx>
                    <Span>108</Span>
                    </Row>
                    
                    <See>{t('see')}</See>
                    </PupularFilter>
                    <PupularFilter>
                    <PopFil>{t('popFil4')}</PopFil>
                    <Checkbox>
                    <InputCheck type="checkbox" id="check3"/>
                    <Label htmlFor=''>{t('label7')}</Label>
                    </Checkbox>
                    <Checkbox>
                    <InputCheck type="checkbox" id=""/> 
                    <Label htmlFor="">{t('label8')} </Label>
                    </Checkbox>
                    <Checkbox>
                    <InputCheck type="checkbox" id="check3"/> 
                    <Label htmlFor='check3'>{t('label9')}</Label>
                    </Checkbox>
                    <Checkbox>
                    <InputCheck type="checkbox" id="check3"/> 
                    <Label htmlFor='check3'>{t('label10')}</Label>
                    </Checkbox>
                    <Checkbox>
                    <InputCheck type="checkbox" id="check3"/> 
                    <Label htmlFor='check3'>{t('label11')}</Label>
                    </Checkbox>
                    </PupularFilter>
                    <PupularFilter>
                    <PopFil>{t('popFil5')} </PopFil>
                    <Row>
                    <Checkboxx>
                    <InputCheck type="checkbox" id="check3"/>
                    <Label htmlFor=''>{t('label12')}</Label>
                 </Checkboxx>
                 <Span>108</Span>
                    </Row>
                    <Row>
                    <Checkboxx>
                    <InputCheck type="checkbox" id="check3"/>
                    <Label htmlFor=''>{t('label13')} </Label>
                 </Checkboxx>
                 <Span>141</Span>
                    </Row>
                    <Row>
                    <Checkboxx>
                    <InputCheck type="checkbox" id="check3"/>
                    <Label htmlFor=''>{t('label14')}</Label>
                 </Checkboxx>
                 <Span>108</Span>
                    </Row>
                    <Row>
                    <Checkboxx>
                    <InputCheck type="checkbox" id="check3"/>
                    <Label htmlFor=''>{t('label15')}</Label>
                 </Checkboxx>
                 <Span>108</Span>
                    </Row>
                    <Row>
                    <Checkboxx>
                    <InputCheck type="checkbox" id="check3"/>
                    <Label htmlFor=''>{t('label16')}</Label>
                 </Checkboxx>
                 <Span>141</Span>
                    </Row>
                    <Row>
                    <Checkboxx>
                    <InputCheck type="checkbox" id="check3"/>
                    <Label htmlFor=''>{t('label17')} </Label>
                 </Checkboxx>
                 <Span>108</Span>
                    </Row>
                    <See>{t('see')}</See>
                    </PupularFilter>
                    
                </DifferentFilters>
            </div>
        </div>
    )
}

export default Filter