import {createElement, Component} from 'rax';
import View from 'rax-view';
import Image from 'rax-image';
import RecyclerView from 'rax-recyclerview';
import {intl, I18nText, I18nView} from '@ali/rax-intl';
import {createIconSet} from 'rax-icon';

const IconFont = createIconSet({
  f: '\uE60b',
  g: '\uE627',
  y: '\uE663',
  x: '\uE62d',
  h: '\uE62c',
}, 'iconfont', 'https://at.alicdn.com/t/font_408110_dfge6zmei4hlrf6r.ttf');

intl.init(require('./rax-locale/index'));

class App extends Component {
  componentDidMount() {
  }
  touchStart = (e) => {
    this.props.onTouchStart && this.props.onTouchStart();
  }
  scroll = (e) => {
    this.props.onScroll && this.props.onScroll(e);
  }
  render() {
    let data = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
    return (
      <RecyclerView
        style={{
          backgroundColor: '#fff',
        }}
        _autoWrapCell={true}
        onScroll={this.scroll}
        onTouchStart={this.touchStart}
        ref={() => {
          this.scrollview = this;
        }}>
        <I18nText name="i0" style={itemStyle.a0} />
        <I18nView style={itemStyle.abox}>
          <I18nText name="i1" style={itemStyle.a1} />
          <I18nText name="i2" style={itemStyle.a2} />
          <I18nText name="i3" style={itemStyle.a3} />
        </I18nView>
        <View style={itemStyle.b1}>
          <View style={itemStyle.b2}>
            <Image source={{
              uri: 'https://gw.alicdn.com/tfs/TB1_rjjaTZRMeJjSsppXXXrEpXa-750-207.png'
            }}
              style={{
                width: 515,
                height: 515,
              }} />
          </View>
        </View>
        <View style={itemStyle.c1}>
          <IconFont style={{color: '#999', fontSize: 46, marginTop: 10, textAlign: 'center'}} name={'x'} />
        </View>
        <View style={itemStyle.d1}>
          <I18nText name="i5" style={itemStyle.d2} />
        </View>

        <Image source={{
          uri: 'https://gw.alicdn.com/tfs/TB12u8ecwMPMeJjy1XdXXasrXXa-750-4639.jpg'
        }}
          quality={'original'}
          style={{
            quality: 'original',
            width: 750,
            height: 4639,
          }} />

      </RecyclerView>
    );
  }
}

// <Image source={{
//     uri: 'https://gw.alicdn.com/tfs/TB1nke_b3MPMeJjy1XdXXasrXXa-750-5611.jpg'
//   }}
//   quality={'original'}
//   style={{
//     quality: 'original',
//     width: 750,
//     height: 5611,
//   }} />

let itemStyle = {
  a0: {
    paddingTop: 20,
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 10,
    fontSize: 30,
    color: '#666',
  },
  abox: {
    flexDirection: 'row',
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 30,
  },
  a1: {
    marginLeft: 10,
    marginRight: 10,
    color: '#9d4462',
    fontSize: 40,
    lineHeight: 40,
  },
  a2: {
    marginLeft: 10,
    marginRight: 10,
    fontSize: 28,
    color: '#999',
    lineHeight: 40,
  },
  a3: {
    fontSize: 28,
    lineHeight: 40,
  },
  b1: {
    height: 515,
    backgroundColor: '#fff',
  },
  b2: {
    height: 515,
    width: 515,
    marginLeft: (750 - 515) / 2,
    backgroundColor: '#efefef',
  },
  c1: {
    width: 750,
    height: 88,
    borderBottomStyle: 'solid',
    borderBottomColor: '#f0f0f0',
    borderBottomWidth: 1,
  },
  d1: {
    width: 750,
    height: 81,
    borderBottomStyle: 'solid',
    borderBottomColor: '#f0f0f0',
    borderBottomWidth: 14,
  },
  d2: {
    color: '#193447',
    width: 750,
    fontSize: 30,
    marginTop: 10,
    paddingTop: 5,
    textAlign: 'center'
  },
};

export default App;
