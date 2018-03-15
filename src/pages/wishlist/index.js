import {createElement, Component} from 'rax';
import View from 'rax-view';
import Text from 'rax-text';
import Image from 'rax-image';
import {Link} from '@ali/rax-navigation';
import RecyclerView from 'rax-recyclerview';
import {intl, I18nText, I18nView} from '@ali/rax-intl';

intl.init(require('../../mods/rax-locale/index'));

class Item extends Component {
  render() {
    let itemStyle = listStyles;
    if (this.props.isList) {
      itemStyle = listStyles2;
    }
    return (
      <I18nView style={itemStyle.i0}>
        <Link href={'https://m.taobao.com/?_wx_tpl=http://groups.alidemo.cn/raxjs/demo-market/demo/archive/lazada.detail.js'}>
          <Image source={{
            uri: 'https://gw.alicdn.com/tfs/TB1YFKRcgMPMeJjy1XdXXasrXXa-353-265.png'
          }}
            style={itemStyle.i1} />
        </Link>
        <Link href={'https://m.taobao.com/?_wx_tpl=http://groups.alidemo.cn/raxjs/demo-market/demo/archive/lazada.detail.js'}>
          <View>
            <View style={{...itemStyle.i21, ...itemStyle.box}}>
              <I18nText name="i0" style={itemStyle.i22} />
            </View>
            <View style={{...itemStyle.i31, ...itemStyle.box}}>
              <I18nText name="i1" style={itemStyle.i32} />
            </View>
            <I18nView style={{...itemStyle.i41, ...itemStyle.box}}>
              <I18nText name="i2" style={itemStyle.i42} />
              <I18nText name="i3" style={itemStyle.i43} />
            </I18nView>
            <View style={{...itemStyle.i51, ...itemStyle.box}}>
              <I18nText name="i4" style={itemStyle.i52} />
            </View>
          </View>
        </Link>
      </I18nView>
    );
  }
}

class App extends Component {
  componentDidMount() {
    // alert(1);
  }
  touchStart = (e) => {
    this.props.onTouchStart();
    // console.log(e);
    // setTimeout(() => {
    //   alert(this.contentOffset);
    // }, 300);
  }
  scroll = (e) => {
    // this.props.onScroll(e);
    // console.log(e.nativeEvent.contentOffset.y);
  }
  render() {
    let data = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
    return (
      <RecyclerView
        style={{
          backgroundColor: '#ededed',
        }}
        onScroll={this.scroll}
        onTouchStart={this.touchStart}
        ref={() => {
          this.scrollview = this;
        }}>
        <RecyclerView.Cell>
          <View
            style={{
              marginTop: 81 + 78,
              marginBottom: 14,
            }}>
            <Image source={{
              uri: 'https://gw.alicdn.com/tfs/TB1_rjjaTZRMeJjSsppXXXrEpXa-750-207.png'
            }}
              style={{
                width: 750,
                height: 207,
              }} />
          </View>
        </RecyclerView.Cell>
        {
          this.props.isList ?
            data.map(() => {
              return (
                <RecyclerView.Cell>
                  <Item isList={true} />
                  <Item isList={true} />
                </RecyclerView.Cell>
              );
            })
            :
            data.map(() => {
              return (
                <RecyclerView.Cell>
                  <I18nView style={{
                    marginBottom: 14,
                    paddingLeft: 7,
                    paddingRight: 7,
                    flexDirection: 'row'
                  }}>
                    <Item isList={false} />
                    <Item isList={false} />
                  </I18nView>
                </RecyclerView.Cell>
              );
            })

        }


      </RecyclerView>
    );
  }
}


let listStyles = {
  i0: {
    width: 353,
    height: 535,
    marginLeft: 7,
    marginRight: 7,
    backgroundColor: '#fff',
  },
  i1: {
    width: 353,
    height: 265,
  },
  box: {
    paddingLeft: 20,
    paddingRight: 20,
  },
  i21: {
    height: 58,
  },
  i22: {
    fontSize: 20,
    lightHeight: 29,
    color: '#999',
  },
  i31: {
    height: 27,
    marginTop: 12,
    marginTop: 5,
  },
  i32: {
    lightHeight: 27,
    fontSize: 20,
    color: '#9d4462',
  },
  i41: {
    height: 27,
    marginBottom: 12,
    flexDirection: 'row'
  },
  i42: {
    lightHeight: 27,
    fontSize: 20,
    color: '#9b9b9b',
  },
  i43: {
    lightHeight: 27,
    fontSize: 20,
    color: '#9b9b9b',
  },
  i51: {
    height: 27,
  },
  i52: {
    lightHeight: 27,
    fontSize: 20,
    color: '#9b9b9b',
  },
};
let listStyles2 = {
  i0: {
    width: 722,
    height: 245,
    marginLeft: 14,
    marginRight: 14,
    marginBottom: 14,
    flexDirection: 'row',
    backgroundColor: '#fff',
  },
  i1: {
    width: 353 * 240 / 265,
    height: 240,
  },
  box: {
    width: 400,
    paddingLeft: 20,
    paddingRight: 20,
  },
  i21: {
    height: 58,
    marginTop: 20,
  },
  i22: {
    fontSize: 20,
    lightHeight: 29,
    color: '#999',
  },
  i31: {
    height: 27,
    marginTop: 12,
    marginTop: 5,
  },
  i32: {
    lightHeight: 27,
    fontSize: 20,
    color: '#9d4462',
  },
  i41: {
    height: 27,
    marginBottom: 12,
    flexDirection: 'row'
  },
  i42: {
    lightHeight: 27,
    fontSize: 20,
    color: '#9b9b9b',
  },
  i43: {
    lightHeight: 27,
    fontSize: 20,
    color: '#9b9b9b',
  },
  i51: {
    height: 27,
  },
  i52: {
    lightHeight: 27,
    fontSize: 20,
    color: '#9b9b9b',
  },
};

export default App;
