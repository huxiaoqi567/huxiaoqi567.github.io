import {render, createElement, Component} from 'rax';
import View from 'rax-view';
import Text from 'rax-text';

class CommentScreen extends Component {
  render() {
    return (<View>
      <Text style={{fontSize: 40}}>CommentScreen</Text>
      <Text style={{fontSize: 32}}>params is:{JSON.stringify(this.props.params)}</Text>
    </View>);
  }
}

export default CommentScreen;