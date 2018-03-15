import {Component, createElement, render } from 'rax';
import View from 'rax-view';
import Text from 'rax-text';
import Image from 'rax-image';
import Slider from 'rax-slider';

class SliderDemo extends Component {
  constructor(props) {
    super(props);
  }

  onchange = (index) => {
    console.log('change', index);
  }

  render() {
    return (
      <Slider width="750rem" height="500rem" style={styles.slider}
        autoPlay={false}
        loop={true}
        showsPagination={true}
        paginationStyle={styles.paginationStyle}
        autoplayTimeout={3000}
        onChange={this.onchange}>
        <View style={styles.itemWrap}>
          <Image style={styles.image} source={{uri: '//my-live-03.slatic.net/cms/teasers/api/categories/720x389_Merdeka_140817.jpg'}} />
        </View>
        <View style={styles.itemWrap}>
          <Image style={styles.image} source={{uri: '//my-live-01.slatic.net/cms/teasers/api/categories/MAS_MBB_030717.jpg'}} />
        </View>
        <View style={styles.itemWrap}>
          <Image style={styles.image} source={{uri: '//my-live-01.slatic.net/cms/teasers/api/categories/720x289_MegaSportsExpo_31st.jpg'}} />
        </View>
        <View style={styles.itemWrap}>
          <Image style={styles.image} source={{uri: '//my-live-02.slatic.net/cms/teasers/api/categories/TBC_MAS.jpg'}} />
        </View>
        <View style={styles.itemWrap}>
          <Image style={styles.image} source={{uri: '//my-live-02.slatic.net/cms/teasers/api/categories/electrifying-deals2a.jpg'}} />
        </View>
        <View style={styles.itemWrap}>
          <Image style={styles.image} source={{uri: '//my-live-03.slatic.net/cms/teasers/api/categories/720x389_Merdeka_140817.jpg'}} />
        </View>
      </Slider>
    );
  }
}

let styles = {
  slider: {
    width: 750,
    position: 'relative',
    overflow: 'hidden',
    height: 485,
    backgroundColor: '#ffffff'
  },
  itemWrap: {
    width: 750,
    height: 405
  },
  image: {
    width: 750,
    height: 405
  },
  button: {
    marginTop: 20,
    width: 340,
    height: 80
  },
  paginationStyle: {
    position: 'absolute',
    width: 750,
    height: 40,
    bottom: 30,
    left: 0,
    itemColor: '#d5d5d5',
    itemSelectedColor: '#2b4b62',
    itemSize: 16
  }
};

export default SliderDemo;