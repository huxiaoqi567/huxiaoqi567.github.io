import {createElement, Component} from 'rax';
import View from 'rax-view';
import Text from 'rax-text';
import styles from '../SimpleApp.js';
import DetailPage from '../../mods/DetailPage';



class ItemDetailScreen extends Component {
  static navigationOptions = {
    title: 'ItemDetail'
  }

  render() {
    // this is detail page with itemId = {this.props.params && this.props.params.itemId}
    return (<View style={[styles.fullScreen]}>
     <DetailPage />
    </View>);
  }
}

export default ItemDetailScreen;