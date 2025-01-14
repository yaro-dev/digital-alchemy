"use client"
import { Environment } from '@react-three/drei'
import {Canvas} from '@react-three/fiber'
import clsx from 'clsx'
import React, { Suspense } from 'react'

const RenderModel = ({children, className}) => {
  return (
    <Canvas gl={{ logarithmicDepthBuffer: true }} style={{ pointerEvents: 'none' }}
    className={clsx("w-screen h-screen relative", className)}
    >
        <Suspense fallback={null}>
            {children}
        </Suspense>
        <Environment preset='dawn'/>
    </Canvas>
  )
}

export default RenderModel
