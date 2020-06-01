import React, { Component } from 'react';
import cnames from 'classnames';
import styles from './Burst.module.scss';

var burstConfig = {
  clones: 16,            // number of clones
  randomClones: true,   // number of clones will differ by 0-50% for each burst
  spread: 0.5,            // spread of clones
  rotate: 480,          // rotation of clones starting from 0
  angle: 0,             // direction of burst in degrees, 0 only support at the moment
  opacity: 1,           // end opacity of clone
  origin: 'top',    // burst starting point
  element: null,        // element to use as clone
  rate: 80,             // time between clones
  scale: 1,             // final clone size starting from 1
  randomScale: true,    // final clone size will differ by 0-50% for each clone
  time: 6000,              // time of animation for each clone
}

let viewport = {
  height: window.innerHeight,
  width: window.innerWidth
}

const Beacon = (props) => {
  const classnames = cnames(styles.beacon, {
    [styles.pulse]: props.pulse,
  })

  return(
    <div className={classnames}>
      <div className={styles.core} />
    </div>
  )
}

const element =
    <svg viewBox="0 0 20 18.35" width="28" fill="currentColor" className={styles.heart}>
      <path d="M10 18.35L8.55 17C3.4 12.36 0 9.28 0 5.5A5.45 5.45 0 0 1 5.5 0 6 6 0 0 1 10 2.09 6 6 0 0 1 14.5 0 5.45 5.45 0 0 1 20 5.5c0 3.78-3.4 6.86-8.55 11.54z" />
    </svg>

class Burst extends Component {
  constructor (props) {
    super()
    this.burstItems = Array(burstConfig.clones).fill(element);
    this.burstItemsClone = []
    this.trigger = this.trigger.bind(this);
    this.state = {
      beacon: true
    }
  }

  componentDidMount() {
    this.setState({
      burstItemsClone: [],
    })
  }

  trigger(items) {
    for (let i = items.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [items[i], items[j]] = [items[j], items[i]];
    }
    items.forEach((item, i) => {
      setTimeout(() => this.burst(item, i), burstConfig.rate * i)
    });
    this.setState({
      beacon: false,
    })
  }

  burst(item, index) {
    if (!item) return null
    const el = item
    var spread
    var scale
    var origin = burstConfig.position
    var angle
    var transformOrigin
    var rotate = burstConfig.rotate
    var transitionTimingFunction = 'cubic-bezier(.1,1,.1,1)'
    var time = burstConfig.time

    spread = Math.floor( Math.random() * (viewport.width/2*burstConfig.spread) )
    scale = burstConfig.randomScale ? (Math.random() + .4) * burstConfig.scale : burstConfig.scale

    spread = Math.random() < 0.5 ? spread : spread * -1
    rotate = Math.random() < 0.5 ? rotate : rotate * -1
    transformOrigin = Math.random() < 0.5 ? 'top left' : 'top right'

    // angle = ( el.getBoundingClientRect().top + el.clientHeight * scale) * -1


    if (origin === 'top'){
      angle = window.innerHeight + el.clientHeight * scale * 4
    } else {
      angle = (el.getBoundingClientRect().top + el.clientHeight * scale) * -1
    }

    // el.offsetHeight // hack for transitions to work

    el.style.transitionTimingFunction= transitionTimingFunction
    el.style.opacity = burstConfig.opacity
    el.style.transitionProperty = 'transform, opacity'
    el.style.transitionDuration = time+'ms'
    el.style.transform = "translate3d("+ spread +"px,"+ angle +"px,0) rotate("+ rotate +"deg) scale("+scale+")"
    el.style.transformOrigin = transformOrigin
  }

  render() {

    const {
      position,
    } = this.props

    const items = this.burstItems

    const burstClones = []

    const classNames = cnames(styles.burstInner, {
      [styles.top]: position === 'top',
      [styles.bottom]: position === 'bottom',
    })

    return (
      <React.Fragment>
        {this.state.beacon &&
          <>
            <Beacon pulse={this.state.beacon} />
            <button onClick={() => this.trigger(burstClones)} aria-label="burst animation" className={styles.beacon}>
              <div className={styles.core} />
            </button>
          </>
        }
        <div className={styles.burstOuter}>
          <div className={classNames}>
            { items.map((item, i) => (
              <div
                className={styles.burstItem}
                ref={n => burstClones.push(n)}
                key={item+i}
              >
                { item }
              </div>
            ))}
          </div>
        </div>
      </React.Fragment>
    )
  }
}

export default Burst;
