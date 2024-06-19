import React, { useRef, useEffect } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

export function Tourist({ hovered, position, scale, ...props }) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/models/Tourist.gltf')
  const { actions } = useAnimations(animations, group)

  useEffect(() => {
    const anim = hovered ? "DanceAnimation" : "IdleAnimation";
    actions[anim].reset().fadeIn(0.5).play();
    return () => actions[anim].fadeOut(0.5);
  }, [hovered]);

  return (
    <group ref={group} position={position} scale={scale} {...props} dispose={null}>
      <group name="Scene">
        <group name="tourist" rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
          <primitive object={nodes.mixamorigHips} />
          <skinnedMesh name="tmpbqj9rwud001" geometry={nodes.tmpbqj9rwud001.geometry} material={materials['Material.005']} skeleton={nodes.tmpbqj9rwud001.skeleton} />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/models/Tourist.gltf')
