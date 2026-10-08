import { Component, lazy, Suspense, useCallback, useEffect, useRef, useState, type ReactNode } from 'react';
import { m, useMotionValue, useSpring, useReducedMotion } from 'framer-motion';
import { Pause, Play, RotateCw, Layers3, Box } from 'lucide-react';
import LogisticsIllustration from './LogisticsIllustration';
const Terminal3D = lazy(() => import('./Terminal3D'));
class TerminalBoundary extends Component<{children:ReactNode;fallback:ReactNode;onFailure:()=>void},{failed:boolean}> {
  state={failed:false};
  static getDerivedStateFromError(){return {failed:true};}
  componentDidCatch(){this.props.onFailure();}
  render(){return this.state.failed?this.props.fallback:this.props.children;}
}
export default function LogisticsScene() {
  const reduced = useReducedMotion();
  const [supported,setSupported]=useState(false);
  const [visible,setVisible]=useState(true);
  const [playing,setPlaying]=useState(true);
  const [view,setView]=useState(0);
  const [exploded,setExploded]=useState(false);
  const ref=useRef<HTMLDivElement>(null);
  const x=useMotionValue(0), y=useMotionValue(0);
  const rotateX=useSpring(x,{stiffness:110,damping:24});
  const rotateY=useSpring(y,{stiffness:110,damping:24});
  const fallback=useCallback(()=>setSupported(false),[]);
  useEffect(()=>{
    if(reduced) return;
    const probe=document.createElement('canvas');
    let available=false;
    try { const context=probe.getContext('webgl2'); available=Boolean(context); context?.getExtension('WEBGL_lose_context')?.loseContext(); } catch { available=false; }
    const readiness=requestAnimationFrame(()=>setSupported(available));
    const observer=typeof IntersectionObserver !== 'undefined' ? new IntersectionObserver(([entry])=>setVisible(entry.isIntersecting),{threshold:0.05}) : null;
    if(ref.current)observer?.observe(ref.current);
    const visibility=()=>setVisible(document.visibilityState==='visible' && Boolean(ref.current && ref.current.getBoundingClientRect().bottom>0 && ref.current.getBoundingClientRect().top<window.innerHeight));
    document.addEventListener('visibilitychange',visibility);
    return ()=>{cancelAnimationFrame(readiness);observer?.disconnect();document.removeEventListener('visibilitychange',visibility);};
  },[reduced]);
  const interactive=supported && !reduced;
  return <m.div ref={ref} className="terminal-experience" style={{rotateX:reduced?0:rotateX,rotateY:reduced?0:rotateY,transformPerspective:1400}}
    onPointerMove={event=>{if(reduced||event.pointerType!=='mouse')return;const rect=event.currentTarget.getBoundingClientRect();x.set(((event.clientY-rect.top)/rect.height-.5)*-5);y.set(((event.clientX-rect.left)/rect.width-.5)*6);}}
    onPointerLeave={()=>{x.set(0);y.set(0);}}>
    <div className="terminal-topline"><span><Box size={15}/> THE EXPORT TERMINAL</span><span className="terminal-label">{interactive?'INTERACTIVE 3D':'ISOMETRIC OVERVIEW'}</span></div>
    <div className="terminal-stage" role={interactive?'img':undefined} aria-label={interactive?'Interactive 3D warehouse and container truck at an Indian export terminal':undefined}>
      {interactive?<TerminalBoundary fallback={<LogisticsIllustration/>} onFailure={fallback}><Suspense fallback={<LogisticsIllustration/>}><Terminal3D playing={playing&&visible} view={view} exploded={exploded} onFailure={fallback}/></Suspense></TerminalBoundary>:<LogisticsIllustration/>}
      <div className="terminal-tag tag-origin"><span/> INDIA / ORIGIN HUB</div>
      <div className="terminal-tag tag-cargo"><strong>{exploded?'Cargo compartment':'Export-ready cargo'}</strong><small>PACKED FOR THE JOURNEY</small></div>
    </div>
    <div className="terminal-controls"><div><small>EXPLORE THE OPERATION</small><p>{interactive?'Rotate the terminal. Inspect the cargo.':'Warehouse → port → global markets'}</p></div><div className="terminal-buttons">
      <button disabled={!interactive} aria-label="Rotate 3D terminal" onClick={()=>setView(v=>v+1)} title="Rotate terminal"><RotateCw size={17}/></button>
      <button disabled={!interactive} aria-label="Inspect cargo compartment" aria-pressed={exploded} onClick={()=>setExploded(e=>!e)} title="Inspect cargo"><Layers3 size={17}/></button>
      <button disabled={!interactive} aria-label={playing?'Pause 3D animation':'Play 3D animation'} onClick={()=>setPlaying(p=>!p)} title={playing?'Pause motion':'Play motion'}>{playing?<Pause size={17}/>:<Play size={17}/>}</button>
    </div></div>
  </m.div>;
}

