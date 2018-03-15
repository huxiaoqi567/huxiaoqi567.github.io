import {createElement, Component} from 'rax';
import View from 'rax-view';
import Text from 'rax-text';
import Icon, {createIconSet} from 'rax-icon';
import TabHeader from 'rax-tabheader';
import {intl} from '@ali/rax-intl';
import _ from 'simple-lodash';

intl.init(require('./rax-locale/index'));

const IconFont = createIconSet({
  f: '\uE60b',
  g: '\uE627',
  y: '\uE663',
  x: '\uE62d',
  h: '\uE62c',
}, 'iconfont', 'https://at.alicdn.com/t/font_408110_dfge6zmei4hlrf6r.ttf');

class BottomBar extends Component {

  state = {
    curIndex: 0
  }

  componentDidMount() {

  }

  componentWillReceiveProps(props) {
    let {history} = props;
    let name = history && history.location.state && history.location.state.name;
    this.switchTo({name});
  }

  switchTo = (options) => {
    let {name, index} = options;
    let {routerConfig, navigation} = this.props;
    if (name) {
      index = _.findIndex(Object.keys(routerConfig), (v) => {
        return v === name;
      });
    }
    this.bottomBar.select(index);
    this.props.onSelect && this.props.onSelect(index);
    let routeName = Object.keys(routerConfig)[index];
    navigation.navigate(routeName);
  }


  render() {
    return (
      <View style={styles.container}>
        <TabHeader
          ref={(ref) => {
            this.bottomBar = ref;
          }}
          style={{height: 112}}
          dataSource={[
            {text: intl.getText('n101'), icon: 'h'},
            {text: intl.getText('n102'), icon: 'f'},
            {text: intl.getText('n103'), icon: 'g'},
            {text: intl.getText('n104'), icon: 'x'},
            {text: intl.getText('n105'), icon: 'y'}
          ]}
          renderItem={(item, index) => {
            return (
              <View
                onClick={() => this.switchTo({index})}
                style={{
                  width: (750 / 5) + 'rem',
                  height: 112
                }}>
                <IconFont style={{color: '#8c8c8c', fontSize: 46, marginTop: 10, textAlign: 'center'}}
                  name={item.icon} />
                <Text style={{color: '#8c8c8c', fontSize: 24, height: 30, textAlign: 'center'}}>{item.text}</Text>
              </View>
            );
          }}
          renderSelect={(item, index) => {
            return (
              <View
                style={{
                  width: (750 / 5) + 'rem',
                  height: 112
                }}>
                <IconFont style={{color: '#193447', fontSize: 46, marginTop: 10, textAlign: 'center'}}
                  name={item.icon} />
                <Text style={{color: '#193447', fontSize: 24, height: 30, textAlign: 'center'}}>{item.text}</Text>
              </View>
            );
          }}
          selected={this.state.curIndex}
          type={'default-noAnim-scroll'}
          itemWidth={750 / 5} />
      </View>
    );
  }
}

let styles = {
  container: {
    position: 'absolute',
    bottom: 0,
    width: 750,
    height: 112
  }

};

export default BottomBar;