import {createElement, Component} from 'rax';
import View from 'rax-view';
import Text from 'rax-text';
import Image from 'rax-image';
import ScrollView from 'rax-scrollview';

class App extends Component {
  render() {
    return (
      <ScrollView
        style={{
          height: 334,
          display: 'block',
        }}
        contentContainerStyle={{
          height: 334,
          borderWidth: 0,
          margin: 0,
          padding: 0,
          justifyContent: 'center',
          flexDirection: 'row',
          width: 200 * 9 + 19 * 8,
        }}
        showsHorizontalScrollIndicator={false}
        horizontal={true}>
        <Image source={{
          uri: 'https://gw.alicdn.com/tfs/TB1QyMgaCFRMKJjy0FhXXX.xpXa-200-334.png'
        }}
          style={{
            width: 200,
            height: 334,
          }} />
        <View style={{
          width: 19,
          height: 334,
        }} />
        <Image source={{
          uri: 'https://gw.alicdn.com/tfs/TB1NojraOERMeJjSspiXXbZLFXa-201-334.png'
        }}
          style={{
            width: 200,
            height: 334,
          }} />
        <View style={{
          width: 19,
          height: 334,
        }} />
        <Image source={{
          uri: 'https://gw.alicdn.com/tfs/TB1TDDraUgQMeJjy0FgXXc5dXXa-200-334.png'
        }}
          style={{
            width: 200,
            height: 334,
          }} />
        <View style={{
          width: 19,
          height: 334,
        }} />

        <Image source={{
          uri: 'https://gw.alicdn.com/tfs/TB1QyMgaCFRMKJjy0FhXXX.xpXa-200-334.png'
        }}
          style={{
            width: 200,
            height: 334,
          }} />
        <View style={{
          width: 19,
          height: 334,
        }} />
        <Image source={{
          uri: 'https://gw.alicdn.com/tfs/TB1NojraOERMeJjSspiXXbZLFXa-201-334.png'
        }}
          style={{
            width: 200,
            height: 334,
          }} />
        <View style={{
          width: 19,
          height: 334,
        }} />
        <Image source={{
          uri: 'https://gw.alicdn.com/tfs/TB1TDDraUgQMeJjy0FgXXc5dXXa-200-334.png'
        }}
          style={{
            width: 200,
            height: 334,
          }} />
        <View style={{
          width: 19,
          height: 334,
        }} />

        <Image source={{
          uri: 'https://gw.alicdn.com/tfs/TB1QyMgaCFRMKJjy0FhXXX.xpXa-200-334.png'
        }}
          style={{
            width: 200,
            height: 334,
          }} />
        <View style={{
          width: 19,
          height: 334,
        }} />
        <Image source={{
          uri: 'https://gw.alicdn.com/tfs/TB1NojraOERMeJjSspiXXbZLFXa-201-334.png'
        }}
          style={{
            width: 200,
            height: 334,
          }} />
        <View style={{
          width: 19,
          height: 334,
        }} />
        <Image source={{
          uri: 'https://gw.alicdn.com/tfs/TB1TDDraUgQMeJjy0FgXXc5dXXa-200-334.png'
        }}
          style={{
            width: 200,
            height: 334,
          }} />
      </ScrollView>
    );
  }
}

export default App;