import React from 'react';
import useMacbookStore from '../store';
import clsx from 'clsx';
import { Canvas } from '@react-three/fiber';
import { Box } from '@react-three/drei';
import { OrbitControls } from '@react-three/drei';
import MacbookModel from './models/Macbook-14';
import StudioLights from './StudioLights';
import ModelSwitcher from './three/ModelSwitcher';
import { useMediaQuery } from 'react-responsive';

const ProductViewer = () => {
  const { color, setColor, scale, setScale } = useMacbookStore();
  const isMobile = useMediaQuery({ query: '(max-width:1024px)' });
  return (
    <section id='product-viewer'>
      <h2>Take a closer look</h2>

      <div className='controls'>
        <p className='info'>
          Macbook Pro | available in 14" & 16" in Space Gray and Dark colors
        </p>

        <div className='flex-center gap-5 mt-5'>
          <div className='color-control'>
            <div
              className={clsx(
                'bg-neutral-300',
                color === '#adb5bd' && 'active'
              )}
              onClick={() => setColor('#adb5bd')}
            />
            <div
              className={clsx(
                'bg-neutral-900',
                color === '#2e2c2e' && 'active'
              )}
              onClick={() => setColor('#2e2c2e')}
            />
          </div>

          <div className='size-control'>
            <div
              className={clsx(
                scale === 0.06
                  ? 'bg-white text-black'
                  : 'bg-transparent text-white'
              )}
              onClick={() => setScale(0.06)}
            >
              <p>14"</p>
            </div>
            <div
              className={clsx(
                scale === 0.08
                  ? 'bg-white text-black'
                  : 'bg-transparent text-white'
              )}
              onClick={() => setScale(0.08)}
            >
              <p>16"</p>
            </div>
          </div>
        </div>
      </div>

      <Canvas
        id='canvas'
        camera={{ position: [0, 2, 5], fov: 50, near: 0.1, far: 100 }}
      >
        <StudioLights />

        <ModelSwitcher
          scale={isMobile ? scale - 0.03 : scale}
          isMobile={isMobile}
        />
      </Canvas>
    </section>
  );
};

export default ProductViewer;
