import React, { Suspense, useEffect, useRef, useState } from 'react';

import { Environment, Html, Line, Loader, Text } from '@react-three/drei';
import { Canvas, useFrame } from '@react-three/fiber';
import {
  CanvasContainer,
  Cell1Container,
  Cell2Container,
} from './CellFight.styles';

interface CellProgressBar {
  c1p: number;
  c2p: number;
  c1d: number;
  c2d: number;
  c1am: number;
  c2am: number;
}

const CellProgressBar: React.FC<CellProgressBar> = ({
  c1p,
  c2p,
  c1d,
  c2d,
  c1am,
  c2am,
}) => {
  return (
    <CanvasContainer>
      <Canvas dpr={[1, 2]} camera={{ position: [0, 0, 2.5] }}>
        <color attach="background" args={['#fbf9f8']} />
        <Suspense fallback={null}>
          <ProgressBar
            c1p={c1p}
            c2p={c2p}
            c1d={c1d}
            c2d={c2d}
            c1am={c1am}
            c2am={c2am}
          />
          <Environment preset="city" />
        </Suspense>
      </Canvas>
      <Loader />
    </CanvasContainer>
  );
};

export default CellProgressBar;

const vertexShader = `
varying vec2 vUv;

void main() {
  vUv = uv;
  vec4 modelPosition = modelMatrix * vec4(position, 1.0);
  vec4 viewPosition = viewMatrix * modelPosition;
  vec4 projectedPosition = projectionMatrix * viewPosition;

  gl_Position = projectedPosition;
}
`;

const getShader = (cell1: number) => {
  const roundedValue = roundTo2Dec(cell1) / 100;
  return `

  varying vec2 vUv;

  vec3 colorA = vec3(0.89,0.10,0.32);
  vec3 colorB = vec3(0.0,0.40,0.40);

  void main() {
    vec3 color = vec3(0,0,0);
    if(vUv.x > ${roundedValue}) {
      gl_FragColor = vec4(colorA, 1.0);
    } else {
      gl_FragColor = vec4(colorB, 1.0);
    }
  }
  `;
};

const roundTo2Dec = (num: number) => Math.round(num * 100) / 100;

interface ProgressBarProps {
  c1p: number;
  c2p: number;
  c1d: number;
  c2d: number;
  c1am: number;
  c2am: number;
}

//choose the screen size

const ProgressBar: React.FC<ProgressBarProps> = ({
  c1p,
  c2p,
  c1d,
  c2d,
  c1am,
  c2am,
}) => {
  const [shader, setShader] = useState(getShader(c1p));
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const groupRef = useRef<THREE.Group>(null);

  const handleResize = () => {
    if (window.innerWidth <= 1512) {
      // making it look good on mac books.
      setIsSmallScreen(true);
    } else {
      setIsSmallScreen(false);
    }
  };

  useEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    setShader(getShader(c1p));
  }, [c1p]);

  useFrame(state => {
    if (groupRef.current) {
      const t = state.clock.getElapsedTime();
      groupRef.current.rotation.x = 0.2 - Math.cos(t / 4) / 6;
      groupRef.current.rotation.y = Math.sin(t / 4) / 10;
      groupRef.current.position.y = (1 + Math.sin(t / 1.5)) / 20;
    }
  });

  return (
    <group ref={groupRef} position={[0, 0, -2.5]}>
      <mesh>
        <boxGeometry args={[12, 1, 1]} />
        <meshPhysicalMaterial
          thickness={6}
          roughness={0.2}
          clearcoat={0.5}
          clearcoatRoughness={1}
          transmission={0.97}
          ior={1.05}
          envMapIntensity={9}
          color="#FFFFFF"
          attenuationColor="#ffe79e"
          attenuationDistance={0}
        />
      </mesh>
      <group>
        <mesh>
          <boxGeometry args={[11.3, 0.8, 0.8]} />
          <shaderMaterial fragmentShader={shader} vertexShader={vertexShader} />
        </mesh>
        <group position={[4.9, 0, 0.55]}>
          <Text textAlign="right" fontSize={0.2}>
            {`${c2d} Donations\n${c2am} SEK`}
          </Text>
          <Text
            position={[-2.13, 0, 0]}
            fontSize={0.2}
            font="https://fonts.gstatic.com/s/raleway/v14/1Ptrg8zYS_SKggPNwK4vaqI.woff"
          >
            {`${roundTo2Dec(c2p)}%`}
          </Text>
        </group>
        <group position={[-4.9, 0, 0.55]}>
          <Text fontSize={0.2}>{`${c1d} Donations\n${c1am} SEK`}</Text>
          <Text
            position={[2.13, 0, 0]}
            fontSize={0.2}
            font="https://fonts.gstatic.com/s/raleway/v14/1Ptrg8zYS_SKggPNwK4vaqI.woff"
          >
            {`${roundTo2Dec(c1p)}%`}
          </Text>
        </group>

        <mesh position={[3, isSmallScreen ? 1.4 : 1.2, 0]}>
          <Html sprite transform>
            <Cell2Container>
              <p style={{ color: 'white', margin: 0 }}>
                Cell 2{' '}
                <span style={{ fontSize: '0.75rem', paddingBottom: 3 }}>
                  {c2am > c1am && '👑'}
                </span>
              </p>
              <p style={{ color: 'white', margin: 0, fontSize: '0.6rem' }}>
                <i>Cell La Vie</i>
              </p>
            </Cell2Container>
          </Html>
        </mesh>
        <mesh position={[-3, isSmallScreen ? 1.4 : 1.2, 0]}>
          <Html sprite transform>
            <Cell1Container>
              <p style={{ color: 'white', margin: 0 }}>
                Cell 1 {c1am > c2am && '👑'}
              </p>
              <p style={{ color: 'white', margin: 0, fontSize: '0.6rem' }}>
                <i>Cellskapet </i>
              </p>
            </Cell1Container>
          </Html>
        </mesh>
        <Line
          points={[
            [3, 0, 0],
            [3, 1.2, 0],
          ]}
          color="black"
          lineWidth={4} // In pixels (default)
        />
        <Line
          points={[
            [-3, 0, 0],
            [-3, 1.2, 0],
          ]}
          color="black"
          lineWidth={4} // In pixels (default)
        />
      </group>
    </group>
  );
};
