import {createElement, Component} from 'rax';
import View from 'rax-view';
import Text from 'rax-text';
import ScrollView from 'rax-scrollview';
import Header from '../../mods/Header';
import Footer from '../../mods/Footer';
import Search from '../../mods/Search';
import Slider from '../../mods/Slider';
import {intl, I18nText, I18nView} from '@ali/rax-intl';
import styles from '../SimpleApp.js';

intl.init(require('../../mods/rax-locale/index'));

class App extends Component {
  render() {
    return (
      <View style={styles.app}>
        <ScrollView>
          <Header />
          <Search />
          <Slider />
          <I18nView style={{...styles.mod2, flexDirection: 'row'}}><Text style={styles.boxtext2} >{intl.getText('t1')}</Text></I18nView>
          <I18nView style={{...styles.mod3, flexDirection: 'row'}}><Text style={styles.boxtext3}>{intl.getText('t2')}</Text></I18nView>
          <I18nView style={{...styles.mod3, flexDirection: 'row'}}><Text style={styles.boxtext3}>{intl.getText('t3')}</Text></I18nView>
          <I18nView style={{...styles.mod3, flexDirection: 'row'}}><Text style={styles.boxtext3}>{intl.getText('t4')}</Text></I18nView>
          <I18nView style={{...styles.mod3, flexDirection: 'row'}}><Text style={styles.boxtext3}>{intl.getText('t5')}</Text></I18nView>
          <I18nView style={{...styles.mod3, flexDirection: 'row'}}><Text style={styles.boxtext3}>{intl.getText('t6')}</Text></I18nView>
          <I18nView style={{...styles.mod3, flexDirection: 'row'}}><Text style={styles.boxtext3}>{intl.getText('t7')}</Text></I18nView>
          <I18nView style={{...styles.mod3, flexDirection: 'row'}}><Text style={styles.boxtext3}>{intl.getText('t8')}</Text></I18nView>
          <I18nView style={{...styles.mod3, flexDirection: 'row'}}><Text style={styles.boxtext3}>{intl.getText('t9')}</Text></I18nView>
          <I18nView style={{...styles.mod3, flexDirection: 'row'}}><Text style={styles.boxtext3}>{intl.getText('t10')}</Text></I18nView>
          <I18nView style={{...styles.mod3, flexDirection: 'row'}}><Text style={styles.boxtext3}>{intl.getText('t11')}</Text></I18nView>
          <I18nView style={{...styles.mod3, flexDirection: 'row'}}><Text style={styles.boxtext3}>{intl.getText('t12')}</Text></I18nView>
          <I18nView style={{...styles.mod3, flexDirection: 'row'}}><Text style={styles.boxtext3}>{intl.getText('t13')}</Text></I18nView>
          <I18nView style={{...styles.mod3, flexDirection: 'row'}}><Text style={styles.boxtext3}>{intl.getText('t14')}</Text></I18nView>
          <I18nView style={{...styles.mod3, flexDirection: 'row'}}><Text style={styles.boxtext3}>{intl.getText('t15')}</Text></I18nView>
          <I18nView style={{...styles.mod3, flexDirection: 'row'}}><Text style={styles.boxtext3}>{intl.getText('t16')}</Text></I18nView>
          <I18nView style={{...styles.mod3, flexDirection: 'row'}}><Text style={styles.boxtext3}>{intl.getText('t17')}</Text></I18nView>
          <I18nView style={{...styles.mod3, flexDirection: 'row'}}><Text style={styles.boxtext3}>{intl.getText('t18')}</Text></I18nView>
          <I18nView style={{...styles.mod3, flexDirection: 'row'}}><Text style={styles.boxtext3}>{intl.getText('t19')}s</Text></I18nView>
          <I18nView style={{...styles.mod3, flexDirection: 'row'}}><Text style={styles.boxtext3}>{intl.getText('t20')}</Text></I18nView>
          <I18nView style={{...styles.mod3, flexDirection: 'row'}}><Text style={styles.boxtext3}>{intl.getText('t21')}</Text></I18nView>
          <I18nView style={{...styles.mod3, flexDirection: 'row'}}><Text style={styles.boxtext3}>{intl.getText('t22')}</Text></I18nView>
          <I18nView style={{...styles.mod3, flexDirection: 'row'}}><Text style={styles.boxtext3}>{intl.getText('t23')}</Text></I18nView>
          <I18nView style={{...styles.mod3, flexDirection: 'row'}}><Text style={styles.boxtext3}>{intl.getText('t24')}</Text></I18nView>
          <I18nView style={{...styles.mod3, flexDirection: 'row'}}><Text style={styles.boxtext3}>{intl.getText('t25')}</Text></I18nView>
          <I18nView style={{...styles.mod3, flexDirection: 'row'}}><Text style={styles.boxtext3}>{intl.getText('t26')}</Text></I18nView>
          <I18nView style={{...styles.mod4, flexDirection: 'row'}}>
            <Text style={styles.boxtext4}>{intl.getText('t27')}</Text>
            <Text style={styles.boxtext5}>{intl.getText('t28')}</Text>
          </I18nView>
          <Footer />
        </ScrollView>
      </View>
    );
  }
}


export default App;
