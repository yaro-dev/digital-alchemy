/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/
"use client"
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three';

export function HatModel(props) {
  const { nodes, materials } = useGLTF('/models/sorcerers_kit.glb')
  const modelRef = useRef();
     Object.values(materials).forEach((material) => {
          material.transparent = false;
          material.opacity = 1;
          material.depthTest = true;
          material.depthWrite = true;
          material.side = THREE.DoubleSide;
      });
  
  useFrame(() => {
    modelRef.current.rotation.y += 0.0072

  })

  return (
    <group {...props} dispose={null} ref={modelRef} scale={[.5, .5, .5]} rotation={[0.4 , -1, 0]} position={[0,.4,0]}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Book2_BooksMat_0.geometry}
        material={materials.BooksMat}
        position={[0, 0.8, 0.8]}
        rotation={[3.1, -0.8, -1.6]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Book1_BooksMat_0.geometry}
        material={materials.BooksMat}
        position={[0, 0.3, 0.8]}
        rotation={[0, Math.PI / 3, Math.PI / 2]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Ground_GroundMat_0.geometry}
        material={materials.GroundMat}
        position={[-0.1, 0, 1]}
        rotation={[-Math.PI / 2, 0, 0.7]}
        scale={0.9}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Hat_HatMat_0.geometry}
        material={materials.HatMat}
        position={[0.4, 0.6, 1.4]}
        rotation={[-1.3, 0.2, -1.9]}
        scale={1.2}
      />
    </group>
  )
}

useGLTF.preload('/models/sorcerers_kit.glb')
