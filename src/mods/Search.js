import {createElement, Component} from 'rax';
import View from 'rax-view';
import TextInput from 'rax-textinput';
import {intl, I18nView} from '@ali/rax-intl';

class Search extends Component {
  render() {
    return (
      <I18nView style={{
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 20,
        paddingRight: 20,
        flexDirection: 'row'
      }}>
        <View>
          <TextInput
            onClick={() => {
              this.props.onClick && this.props.onClick();
            }}
            style={{
              width: 710,
              borderWidth: 1,
              borderStyle: 'solid',
              borderColor: '#acacac',
              backgroundColor: '#ffffff',
              borderRadius: 10,
              paddingLeft: 10,
              paddingRight: 10,
            }}
            value={intl.getText('SIMPLE')} />
        </View>
      </I18nView>
    );
  }
}

export default Search;