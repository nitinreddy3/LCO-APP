import React from "react"
import Link from '../components/Link';

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

import { useSpring, animated, config } from 'react-spring';
import './index.css';

const calc = (x, y) => [-(y - window.innerHeight / 2) / 20, (x - window.innerWidth / 2) / 20, 1.1]
const trans = (x, y, s) => `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`

const IndexPage = () => {

  const [props, set] = useSpring(() => ({ xys: [0, 0, 1], config: { mass: 5, tension: 350, friction: 40 } }))

  return (
    <Layout>
      <SEO title="Home" />
      <animated.div className="card"
        onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
        onMouseLeave={() => set({ xys: [0, 0, 1] })}
        style={{ transform: props.xys.interpolate(trans) }}
      />
      <Link to="/page-2/">Go to page 2</Link>
    </Layout>)
}

export default IndexPage
