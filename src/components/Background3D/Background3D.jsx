"use client"

import { Suspense, useEffect, useMemo, useRef, useState } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { Float, Sparkles } from "@react-three/drei"
import { useReducedMotion } from "framer-motion"
import styles from "./Background3D.module.css"

const SHAPES = [
  { position: [-4.4, 1.3, -2], geometryArgs: [1, 0], type: "icosahedron", color: "#00f5ff", speed: 0.6, scale: 1 },
  { position: [4.6, -1.4, -3], geometryArgs: [1.05, 0.34, 8, 24], type: "torus", color: "#00e5ff", speed: 0.8, scale: 1 },
  { position: [3.1, 2.3, -5], geometryArgs: [0.85, 0], type: "box", color: "#00f5ff", speed: 0.5, scale: 0.9 },
  { position: [-3.4, -2.1, -4], geometryArgs: [0.95, 0], type: "octahedron", color: "#00e5ff", speed: 0.7, scale: 1.1 },
  { position: [0.2, 3.1, -6.5], geometryArgs: [0.65, 0], type: "icosahedron", color: "#00f5ff", speed: 0.9, scale: 0.7 },
]

function ParallaxRig({ enabled, children }) {
  const group = useRef(null)
  const pointer = useRef({ x: 0, y: 0 })

  useEffect(() => {
    if (!enabled) return
    const handleMove = (e) => {
      pointer.current.x = (e.clientX / window.innerWidth) * 2 - 1
      pointer.current.y = (e.clientY / window.innerHeight) * 2 - 1
    }
    window.addEventListener("pointermove", handleMove)
    return () => window.removeEventListener("pointermove", handleMove)
  }, [enabled])

  useFrame(() => {
    const g = group.current
    if (!g) return
    const targetY = enabled ? pointer.current.x * 0.18 : 0
    const targetX = enabled ? -pointer.current.y * 0.1 : 0
    g.rotation.y += (targetY - g.rotation.y) * 0.03
    g.rotation.x += (targetX - g.rotation.x) * 0.03
  })

  return <group ref={group}>{children}</group>
}

function WireframeShape({ position, scale, speed, geometryArgs, type, color, spin }) {
  const mesh = useRef(null)

  useFrame((_, delta) => {
    const m = mesh.current
    if (!m || !spin) return
    m.rotation.x += delta * 0.06 * speed
    m.rotation.y += delta * 0.09 * speed
  })

  const geometry = useMemo(() => {
    switch (type) {
      case "torus":
        return <torusGeometry args={geometryArgs} />
      case "box":
        return <boxGeometry args={geometryArgs} />
      case "octahedron":
        return <octahedronGeometry args={geometryArgs} />
      default:
        return <icosahedronGeometry args={geometryArgs} />
    }
  }, [type, geometryArgs])

  return (
    <Float speed={spin ? speed : 0} rotationIntensity={0.3} floatIntensity={spin ? 1.4 : 0}>
      <mesh ref={mesh} position={position} scale={scale}>
        {geometry}
        <meshBasicMaterial color={color} wireframe transparent opacity={0.45} />
      </mesh>
    </Float>
  )
}

function GridFloor() {
  return <gridHelper args={[70, 46, "#00e5ff", "#052026"]} position={[0, -5.5, 0]} />
}

function Scene({ reducedMotion, dense, interactive }) {
  const shapes = dense ? SHAPES : SHAPES.slice(0, 3)

  return (
    <>
      <fog attach="fog" args={["#050505", 7, 24]} />
      <ambientLight intensity={0.5} />
      <pointLight position={[6, 6, 6]} color="#00f5ff" intensity={1.8} />
      <pointLight position={[-6, -4, -4]} color="#00e5ff" intensity={1.1} />

      <ParallaxRig enabled={interactive && !reducedMotion}>
        {shapes.map((shape, i) => (
          <WireframeShape key={i} {...shape} spin={!reducedMotion} />
        ))}
        <Sparkles
          count={dense ? 220 : 90}
          scale={[18, 11, 12]}
          size={2.2}
          speed={reducedMotion ? 0 : 0.35}
          opacity={0.55}
          color="#00f5ff"
        />
        <GridFloor />
      </ParallaxRig>
    </>
  )
}

const Background3D = () => {
  const reducedMotion = useReducedMotion()
  const [dense, setDense] = useState(() => typeof window !== "undefined" && window.innerWidth > 900)
  const [interactive] = useState(
    () => typeof window !== "undefined" && !window.matchMedia("(pointer: coarse)").matches
  )
  const glowRef = useRef(null)

  useEffect(() => {
    const handleResize = () => setDense(window.innerWidth > 900)
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  useEffect(() => {
    if (reducedMotion || !interactive) return
    const el = glowRef.current
    if (!el) return
    let frame = null
    const handleMove = (e) => {
      if (frame) return
      frame = requestAnimationFrame(() => {
        el.style.setProperty("--mx", `${e.clientX}px`)
        el.style.setProperty("--my", `${e.clientY}px`)
        frame = null
      })
    }
    window.addEventListener("pointermove", handleMove)
    return () => {
      window.removeEventListener("pointermove", handleMove)
      if (frame) cancelAnimationFrame(frame)
    }
  }, [reducedMotion, interactive])

  return (
    <div className={styles.wrapper} aria-hidden="true">
      <div className={styles.meshGradient}></div>
      <Canvas
        className={styles.canvas}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
        camera={{ position: [0, 0, 10], fov: 50 }}
      >
        <Suspense fallback={null}>
          <Scene reducedMotion={!!reducedMotion} dense={dense} interactive={interactive} />
        </Suspense>
      </Canvas>
      <div className={styles.grid}></div>
      <div className={`${styles.beam} ${styles.beam1}`}></div>
      <div className={`${styles.beam} ${styles.beam2}`}></div>
      <div className={`${styles.beam} ${styles.beam3}`}></div>
      {interactive && <div ref={glowRef} className={styles.cursorGlow}></div>}
      <div className={styles.vignette}></div>
    </div>
  )
}

export default Background3D
