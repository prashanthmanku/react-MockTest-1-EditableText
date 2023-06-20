import {Component} from 'react'
import {
  AppContainer,
  EditCard,
  MainHeading,
  ContentContainer,
  Input,
  SavedText,
  SaveEditButton,
} from './styledComponent'

class TextEditor extends Component {
  state = {
    isInputActive: true,
    inputText: '',
  }

  onChangeInput = e => {
    this.setState({inputText: e.target.value})
  }

  onClickSaveEditBtn = () => {
    this.setState(prevState => ({isInputActive: !prevState.isInputActive}))
  }

  render() {
    const {isInputActive, inputText} = this.state
    return (
      <AppContainer>
        <EditCard>
          <MainHeading>Editable Text Input</MainHeading>
          <ContentContainer>
            {isInputActive ? (
              <Input
                type="text"
                value={inputText}
                onChange={this.onChangeInput}
              />
            ) : (
              <SavedText> {inputText} </SavedText>
            )}
            <SaveEditButton type="button" onClick={this.onClickSaveEditBtn}>
              {isInputActive ? 'Save' : 'Edit'}
            </SaveEditButton>
          </ContentContainer>
        </EditCard>
      </AppContainer>
    )
  }
}
export default TextEditor
