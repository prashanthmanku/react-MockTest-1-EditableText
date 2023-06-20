import styled from 'styled-components'

export const AppContainer = styled.div`
  background-color: #f5d0fe;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Roboto';
`

export const EditCard = styled.div`
  width: 90%;
  max-width: 400px;
  text-align: center;
  background-color: #ffffff;
  padding: 20px;
  border-radius: 10px;
`

export const MainHeading = styled.h1`
  color: #000000;
  margin-top: 0px;
  font-size: 22px;
  font-weight: 500;
`

export const ContentContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Input = styled.input`
  border: 1px solid #cbd2d9;
  color: #323f4b;
  height: 30px;
  width: 70%;
  margin-right: 10px;
  font-size: 15px;
  font-weight: normal;
  border-radius: 4px;
  padding: 8px 12px;
  outline: none;
`

export const SavedText = styled.p`
  width: 70%;
  color: #323f4b;
  margin-right: 10px;
  font-size: 15px;
  font-weight: normal;
`

export const SaveEditButton = styled.button`
  background-color: #d946ef;
  color: #ffffff;
  padding: 0px 12px;
  height: 30px;
  border: none;
  outline: none;
  cursor: pointer;
  border-radius: 4px;
`
