import {createElement, Component} from 'rax';
import View from 'rax-view';
import Text from 'rax-text';
import Image from 'rax-image';
import {intl, I18nText, I18nView} from '@ali/rax-intl';

class App extends Component {
  render() {
    return (
      <I18nView style={{...styles.appHeader, flexDirection: 'row'}}>
        <View style={styles.box1} />
        <View style={styles.box2}>
          <Image source={{
            uri: 'http://my-live-02.slatic.net/homepage/images/local_mobile_api/newlogo/my@3x-31da1633d2.png'
          }}
            style={{
              width: 180,
              height: 50,
            }} />
        </View>
        <View style={styles.box3}>
          <Image source={{
            uri: 'data:image/png;base64,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'
          }}
            style={{
              width: 75 / 3 * 2,
              height: 66 / 3 * 2,
            }} />
        </View>
      </I18nView>
    );
  }
}


let styles = {
  appHeader: {
    backgroundColor: '#274a60',
    height: 112,
  },
  box1: {
    width: 100,
    height: 112,
  },
  box2: {
    width: 550,
    height: 112,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  box3: {
    width: 100,
    height: 112,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
};

export default App;