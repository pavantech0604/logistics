import { useEffect, useRef, useState } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Group, PCFShadowMap, type Mesh, PerspectiveCamera } from 'three';

type TerminalProps = { playing: boolean; view: number; exploded: boolean; onFailure: () => void };
function Block({ position, size, color, ...rest }: { position: [number, number, number]; size: [number, number, number]; color: string; metalness?: number; roughness?: number }) {
  return <mesh position={position} castShadow receiveShadow><boxGeometry args={size} /><meshStandardMaterial color={color} roughness={rest.roughness ?? 0.55} metalness={rest.metalness ?? 0.12} /></mesh>;
}
function FlightPaths({ playing }: { playing: boolean }) {
  const orbit = useRef<Group>(null);
  const scanner = useRef<Mesh>(null);
  useFrame((state) => {
    if (!playing) return;
    if (orbit.current) orbit.current.rotation.y = state.clock.elapsedTime * 0.18;
    if (scanner.current) { scanner.current.position.z = Math.sin(state.clock.elapsedTime * 0.65) * 2.7; }
  });
  return <group>
    <group ref={orbit} position={[0,1.4,0]}>
      {[0,1,2].map(i => <group key={i} rotation={[0, i * Math.PI * 2 / 3, 0]}>
        <mesh rotation={[Math.PI / 2,0,0]}><torusGeometry args={[6.1,0.012,6,100,Math.PI * 0.8]}/><meshStandardMaterial color="#cba65a" emissive="#b68d3c" emissiveIntensity={2} transparent opacity={0.45}/></mesh>
        <mesh position={[6.1,0,0]}><sphereGeometry args={[0.065,12,12]}/><meshStandardMaterial color="#d8efff" emissive="#d7b66c" emissiveIntensity={4}/></mesh>
      </group>)}
    </group>
    <mesh ref={scanner} position={[0,0.2,0]} rotation={[-Math.PI/2,0,0]}><planeGeometry args={[9.7,0.06]}/><meshStandardMaterial color="#e1c586" emissive="#c29a48" emissiveIntensity={3} transparent opacity={0.6}/></mesh>
    {[-4.8,4.8].map(x => <group key={x}>
      <Block position={[x,1.7,-3]} size={[0.1,3.4,0.1]} color="#587c9e"/>
      <Block position={[x,3.4,-2.3]} size={[0.1,0.1,1.5]} color="#8ecaff"/>
      <pointLight position={[x,3.3,-1.6]} color="#7ac5ff" intensity={7} distance={6}/>
    </group>)}
  </group>;
}
function AerialLogistics({ playing }: { playing: boolean }) {
  const drone = useRef<Group>(null);
  const rotors = useRef<Group>(null);
  const hoist = useRef<Group>(null);
  const time = useRef(0);
  useFrame((_, delta) => {
    if (!playing) return;
    time.current += Math.min(delta, 0.05);
    const t = time.current;
    if (drone.current) {
      drone.current.position.set(Math.sin(t * 0.38) * 3.4, 4.1 + Math.sin(t * 1.5) * 0.15, Math.cos(t * 0.38) * 2.1);
      drone.current.rotation.y = -t * 0.38;
      drone.current.rotation.z = Math.cos(t * 0.38) * 0.06;
    }
    if (rotors.current) rotors.current.children.forEach(rotor => { rotor.rotation.y += delta * 28; });
    if (hoist.current) hoist.current.position.y = 1.25 + (Math.sin(t * 0.6) + 1) * 0.6;
  });
  return <group>
    <group ref={drone} position={[0,4.1,0]}>
      <Block position={[0,0,0]} size={[0.6,0.2,0.5]} color="#f4f8ff" metalness={0.55}/>
      <Block position={[0,0.03,0]} size={[1.5,0.06,0.09]} color="#4c73a7"/>
      <Block position={[0,0.03,0]} size={[0.09,0.06,1.3]} color="#4c73a7"/>
      <group ref={rotors}>{[[0.7,0],[-0.7,0],[0,0.6],[0,-0.6]].map(([x,z],i)=><group key={i} position={[x,0.1,z]}>
        <Block position={[0,0,0]} size={[0.62,0.025,0.07]} color="#183756"/>
        <mesh><cylinderGeometry args={[0.3,0.3,0.01,24]}/><meshStandardMaterial color="#558ed0" transparent opacity={0.18}/></mesh>
      </group>)}</group>
      <Block position={[0,-0.32,0]} size={[0.38,0.4,0.38]} color="#8eb6e6"/>
      <mesh position={[0,0.15,0]}><sphereGeometry args={[0.055,12,12]}/><meshStandardMaterial color="#3891ff" emissive="#1875ff" emissiveIntensity={2}/></mesh>
    </group>
    <group position={[4,0,-2.6]}>
      {[0,1.4].map(z=><Block key={z} position={[0,1.9,z]} size={[0.14,3.8,0.14]} color="#192e60" metalness={0.6}/>)}
      <Block position={[-0.7,3.85,0.7]} size={[1.6,0.16,1.7]} color="#243d75" metalness={0.6}/>
      <group ref={hoist} position={[-0.75,1.8,0.7]}>
        <Block position={[0,0,0]} size={[0.6,0.6,0.6]} color="#8eb6e6"/>
        <Block position={[0,0.36,0]} size={[0.8,0.07,0.7]} color="#426389"/>
        {[-0.27,0.27].map(x=><Block key={x} position={[x,0.9,0]} size={[0.025,1.1,0.025]} color="#7d95ad"/>)}
      </group>
    </group>
  </group>;
}
function ResponsiveCamera() {
  const { get, size, invalidate } = useThree();
  useEffect(() => {
    const camera = get().camera;
    if (camera instanceof PerspectiveCamera) {
      camera.fov = size.width / size.height < 1.15 ? 49 : 40;
      camera.updateProjectionMatrix();
      invalidate();
    }
  }, [get,size.width,size.height,invalidate]);
  return null;
}
function Terminal({ playing, view, exploded }: Omit<TerminalProps, 'onFailure'>) {
  const root = useRef<Group>(null);
  const truck = useRef<Group>(null);
  const cargo = useRef<Mesh>(null);
  const { invalidate } = useThree();
  useEffect(() => { invalidate(); }, [view, exploded, invalidate]);
  useFrame((state, delta) => {
    if (root.current) {
      const target = view * Math.PI / 2 + (playing ? Math.sin(state.clock.elapsedTime * 0.22) * 0.2 : 0);
      const difference = target - root.current.rotation.y;
      root.current.rotation.y += difference * Math.min(delta * 5, 1);
      if (Math.abs(difference) > 0.002) invalidate();
    }
    if (truck.current) truck.current.position.z = playing ? Math.sin(state.clock.elapsedTime * 0.45) * 0.85 : 0;
    if (cargo.current) {
      const target = exploded ? 2.8 : 1.33;
      const difference = target - cargo.current.position.y;
      cargo.current.position.y += difference * Math.min(delta * 6, 1);
      if (Math.abs(difference) > 0.002) invalidate();
    }
  });
  return <group ref={root} position={[0, -0.8, 0]}>
    <FlightPaths playing={playing} /><AerialLogistics playing={playing} />
    <Block position={[0,-0.12,0]} size={[10.4,0.26,8]} color="#a3adc1" />
    <Block position={[0,0.025,2.8]} size={[9.8,0.035,1.35]} color="#596780" />
    {Array.from({length:14},(_,i)=><Block key={i} position={[-4.5+i*0.68,0.05,2.8]} size={[0.3,0.02,0.055]} color="#b2d8f5" />)}
    <group position={[-2,0,-1.3]}>
      <Block position={[0,1.05,0]} size={[3.8,2.1,3.1]} color="#d7d2c4" />
      <Block position={[0,2.2,0]} size={[4.1,0.22,3.4]} color="#d2e5f3" />
      <Block position={[0,2.35,-0.12]} size={[3.5,0.12,2.8]} color="#203662" />
      {[-1.25,0,1.25].map(x=><group key={x}>
        <Block position={[x,0.85,1.57]} size={[0.88,1.5,0.08]} color="#0e223b" />
        {[0,1,2,3,4,5].map(i=><Block key={i} position={[x,0.24+i*0.22,1.62]} size={[0.8,0.035,0.025]} color="#677694" />)}
        <Block position={[x,1.74,1.64]} size={[0.9,0.05,0.04]} color="#9ddcff" />
        <Block position={[x,0.08,1.98]} size={[1,0.16,0.7]} color="#507294" />
      </group>)}
      <Block position={[1.93,1.5,0]} size={[0.025,0.52,2.35]} color="#467eac" />
      {[-1.1,-0.4,0.3,1].map(z=><Block key={z} position={[1.95,1.5,z]} size={[0.045,0.54,0.035]} color="#bed6e8" />)}
      <Block position={[0,2.45,-0.12]} size={[0.06,0.035,2.8]} color="#82b2da" />
    </group>
    <group ref={truck}>
      <group position={[2.6,0,0]}>
        <Block position={[0,0.58,0.15]} size={[1.7,0.22,4.6]} color="#142033" />
        <mesh ref={cargo} position={[0,1.33,-0.5]} castShadow><boxGeometry args={[1.68,1.35,3.05]} /><meshStandardMaterial color="#b48b3e" roughness={0.38} metalness={0.15} /></mesh>
        {exploded && [-0.42,0.42].map(x=><group key={x}>{[-1.45,-0.65,0.15].map(z=><Block key={z} position={[x,1.05,z]} size={[0.65,0.65,0.65]} color="#b2cae5" />)}</group>)}
        {[-0.86,0.86].map(x=><group key={x}>{Array.from({length:13},(_,i)=><Block key={i} position={[x,1.35,-1.88+i*0.23]} size={[0.025,1.12,0.05]} color="#95722d" />)}</group>)}
        <Block position={[0,0.76,1.88]} size={[1.6,0.55,1.15]} color="#e2edf7" />
        <Block position={[0,1.28,1.8]} size={[1.52,0.76,0.92]} color="#e2edf7" />
        <Block position={[0,1.4,2.27]} size={[1.22,0.42,0.035]} color="#173f60" />
        <Block position={[0,0.63,2.5]} size={[1.65,0.12,0.1]} color="#6689a8" />
        {[-0.56,0.56].map(x=><Block key={x} position={[x,0.83,2.48]} size={[0.28,0.14,0.035]} color="#f0f7ff" />)}
        {[-0.9,0.9].map(x=><group key={x}>{[-1.45,-0.65,1.88].map(z=><mesh key={z} position={[x,0.38,z]} rotation={[0,0,Math.PI/2]} castShadow><cylinderGeometry args={[0.37,0.37,0.2,20]} /><meshStandardMaterial color="#09101a" roughness={0.9} /></mesh>)}</group>)}
      </group>
    </group>
    {[[-3.8,0.4,1.6],[-3.05,0.4,1.8],[-3.8,1.05,1.6],[-2.8,0.4,2.55]].map((p,i)=><Block key={i} position={p as [number,number,number]} size={[0.62,0.65,0.62]} color={i%2 ? '#8faecf':'#bed1e8'} />)}
    {[-4.5,4.5].map(x=><group key={x}><mesh position={[x,0.08,2.8]} rotation={[-Math.PI/2,0,0]}><torusGeometry args={[0.26,0.025,8,32]} /><meshStandardMaterial color="#b48b3e" emissive="#d4ad5a" emissiveIntensity={0.45} /></mesh></group>)}
  </group>;
}
function ContextHealth({ onFailure }: { onFailure: () => void }) {
  const { gl } = useThree();
  useEffect(() => { const canvas=gl.domElement; const fail=(event:Event)=>{event.preventDefault();onFailure();}; canvas.addEventListener('webglcontextlost',fail); return ()=>canvas.removeEventListener('webglcontextlost',fail); }, [gl,onFailure]);
  return null;
}
export default function Terminal3D(props: TerminalProps) {
  const [dark, setDark] = useState(() => document.documentElement.classList.contains('dark'));
  useEffect(() => {
    const observer = new MutationObserver(() => setDark(document.documentElement.classList.contains('dark')));
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });
    return () => observer.disconnect();
  }, []);
  return <Canvas camera={{position:[12,10,15],fov:38}} dpr={[1,1.5]} shadows={{type:PCFShadowMap}} frameloop={props.playing?'always':'demand'} gl={{antialias:true,alpha:true,powerPreference:'low-power'}} fallback={null}>
    <ambientLight intensity={dark ? 0.65 : 1.4} /><hemisphereLight args={[dark ? '#9bcaff' : '#f3f7ff','#142d4d',dark ? 0.8 : 1.4]} />
    <directionalLight position={[4,9,5]} intensity={dark ? 2.1 : 3} castShadow shadow-mapSize={[1024,1024]} shadow-camera-left={-9} shadow-camera-right={9} shadow-camera-top={9} shadow-camera-bottom={-9} shadow-normalBias={0.04} />
    <directionalLight position={[-6,4,-4]} color="#e2c68b" intensity={dark ? 2.4 : 1.4} />
    <ResponsiveCamera /><Terminal {...props} /><ContextHealth onFailure={props.onFailure} />
  </Canvas>;
}

