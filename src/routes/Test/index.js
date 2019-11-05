import React, { Component } from 'react';
import styles from './Test.module.scss';


const Item = (props) => (
  <div className={styles.listItem}>{props.children}{props.set}</div>
)

const set = [<Item />, <Item />]

class Test extends Component {

  state = {
    items: [set]
  }

  addItem = () => (
    this.setState({
      items: this.state.items.concat([set])
    })
  )

  render() {
    return (
      <div>
        <div className={styles.list}>
          {
            this.state.items.map((items, n) => (
              items.map((item, i) => <Item key={i}>{n}</Item>)
            ))
          }
        </div>
        <div className={styles.buttons}>
          <button onClick={() => this.addItem()}>add</button>
          <button>remove</button>
        </div>
      </div>
    );
  }
}

export default Test;
