import {createElement, Component} from 'rax';
import View from 'rax-view';
import Text from 'rax-text';
import Image from 'rax-image';
import ScrollView from 'rax-scrollview';
import Header from '../../mods/Header';
import Footer from '../../mods/Footer';
// import Search from '../mods/Search';
import Slider from '../../mods/Slider';
import Scroller from '../../mods/Scroller';
import {intl, I18nView} from '@ali/rax-intl';
import styles from '../SimpleApp.js';
import {genPath} from '../../mods/util';
import {Link} from '@ali/rax-navigation';


intl.init(require('../../mods/rax-locale/index'));

class App extends Component {

  render() {
    return (
      <ScrollView ref={() => {
        this.scrollview = this;
      }}>
        <View style={{
          marginTop: 14,
          marginBottom: 14,
        }}>
          <Link href={genPath('items/1')}>
            <Image source={{
              uri: 'https://gw.alicdn.com/tfs/TB1_rjjaTZRMeJjSsppXXXrEpXa-750-207.png'
            }}
              style={{
                width: 750,
                height: 207,
              }} />
          </Link>
        </View>

        <I18nView style={{marginBottom: 14, flexDirection: 'row'}}>
          <Link href={genPath('items/2')}>
            <Image source={{
              uri: 'https://gw.alicdn.com/tfs/TB1Z.2kaUgQMeJjy0FgXXc5dXXa-368-261.png'
            }}
              style={{
                width: 368,
                height: 261,
              }} />
          </Link>
          <View style={{
            width: 14,
            height: 261,
          }} />
          <Link  href={genPath('items/3')}>
            <Image source={{
              uri: 'https://gw.alicdn.com/tfs/TB1n9P7aEtWMKJjy0FaXXcCDpXa-367-261.png'
            }}
              style={{
                width: 368,
                height: 261,
              }} />
          </Link>
        </I18nView>

        <I18nView style={{marginBottom: 14, flexDirection: 'row'}}>
          <Link  href={genPath('items/4')}>
            <Image source={{
              uri: 'https://gw.alicdn.com/tfs/TB1fnrfaRUSMeJjSspfXXX0VFXa-368-259.png'
            }}
              style={{
                width: 368,
                height: 261,
              }} />
          </Link>
          <View style={{
            width: 14,
            height: 261,
          }} />
          <Link  href={genPath('items/5')}>
            <Image source={{
              uri: 'https://gw.alicdn.com/tfs/TB1vBTiaUgQMeJjy0FfXXbddXXa-367-259.png'
            }}
              style={{
                width: 368,
                height: 261,
              }} />
          </Link>
        </I18nView>

        <I18nView style={{marginBottom: 14, flexDirection: 'row'}}>
          <Link  href={genPath('items/5')}>
            <Image source={{
              uri: 'https://gw.alicdn.com/tfs/TB1KmnkaMoQMeJjy1XaXXcSsFXa-239-238.png'
            }}
              style={{
                width: 240,
                height: 238,
              }} />
          </Link>
          <View style={{
            width: 14,
            height: 238,
          }} />
          <Link  href={genPath('items/6')}>
            <Image source={{
              uri: 'https://gw.alicdn.com/tfs/TB1kOPjaMsSMeJjSspcXXXjFXXa-240-238.png'
            }}
              style={{
                width: 240,
                height: 238,
              }} />
          </Link>
          <View style={{
            width: 14,
            height: 238,
          }} />
          <Link  href={genPath('items/7')}>
            <Image source={{
              uri: 'https://gw.alicdn.com/tfs/TB1Rb6iaTZRMeJjSspnXXcJdFXa-239-238.png'
            }}
              style={{
                width: 240,
                height: 238,
              }} />
          </Link>
        </I18nView>

        <Header />

        <View style={{
          backgroundColor: '#0e1f29',
          marginBottom: 14,
          paddingBottom: 9,
        }}>
          <Text style={{
            height: 70,
            lineHeight: 70,
            fontSize: 30,
            color: '#f35f19',
            textAlign: 'center',
          }}>Ending in</Text>
          <Scroller />
        </View>

        <View style={{
          marginBottom: 14,
        }}>
          <Image source={{
            uri: 'https://gw.alicdn.com/tfs/TB1nD_naMMPMeJjy1XdXXasrXXa-750-206.png'
          }}
            style={{
              width: 750,
              height: 206,
            }} />
        </View>

        <Link  href={genPath('items/11')} style={{
          marginBottom: 14,
        }}>
          <Image source={{
            uri: 'https://gw.alicdn.com/tfs/TB1DTHraUgQMeJjy0FgXXc5dXXa-750-207.png'
          }}
            style={{
              width: 750,
              height: 206,
            }} />
        </Link>

        <Slider />
        <I18nView style={{...styles.mod2, flexDirection: 'row'}}><Text style={styles.boxtext2} >{intl.getText('t1')}</Text></I18nView>
        <I18nView style={{...styles.mod3, flexDirection: 'row'}}><Text style={styles.boxtext3}>{intl.getText('t2')}</Text></I18nView>
        <I18nView style={{...styles.mod3, flexDirection: 'row'}}><Text style={styles.boxtext3}>{intl.getText('t3')}</Text></I18nView>
        <I18nView style={{...styles.mod3, flexDirection: 'row'}}><Text style={styles.boxtext3}>{intl.getText('t4')}</Text></I18nView>
        <I18nView style={{...styles.mod3, flexDirection: 'row'}}><Text style={styles.boxtext3}>{intl.getText('t5')}</Text></I18nView>
        <I18nView style={{...styles.mod4, flexDirection: 'row'}}>
          <Text style={styles.boxtext4}>{intl.getText('t27')}</Text>
          <Text style={styles.boxtext5}>{intl.getText('t28')}</Text>
        </I18nView>
        <Footer />
      </ScrollView>
    );
  }
}


export default App;
