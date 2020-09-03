import React, { useRef, useState, useLayoutEffect } from 'react';
import { position } from 'polished';

type CanvasProps = {
  width: number;
  height: number;
}

const Canvas = ({ width, height }: CanvasProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [context, setContext] = useState<CanvasRenderingContext2D | null>(null);

  useLayoutEffect(() => {
    function updateContext() {
      function smallStarCreate(ctx: CanvasRenderingContext2D, starNumber: number, starSize: number) {
        for(var i=0; i<starNumber; i++) {
            ctx.beginPath();
            var starLeft = Math.floor(Math.random()* width) + 1;
            var starTop = Math.floor(Math.random()* height) + 1;
            var colorVal01 =  Math.floor(Math.random()*106) + 150;
            var colorVal02 =  Math.floor(Math.random()*106) + 150;
            var opacityVal =  (Math.floor(Math.random()*11)) / 10;
            ctx.fillStyle = "rgba(" + colorVal01 + ", " + colorVal02 + ", " + 255 + ", " + opacityVal + ")";
            ctx.fillRect(starLeft, starTop, starSize, starSize);
            ctx.fill();
        }
      }

      function bigStarCreate(ctx: CanvasRenderingContext2D, starNumber: number, starSize: number) {
          for(var i=0; i<starNumber; i++) {
              ctx.beginPath();
              var starLeft = Math.floor(Math.random()* width) + 1;
              var starTop = Math.floor(Math.random()* height) + 1;
              var colorVal01 =  Math.floor(Math.random()*106) + 150;
              var colorVal02 =  Math.floor(Math.random()*106) + 150;
              var opacityVal =  (Math.floor(Math.random()*11)) / 10;
              var colorVal =  Math.floor(Math.random()*151);
              var radgrad = ctx.createRadialGradient(starLeft,starTop,0,starLeft,starTop,starSize);
              radgrad.addColorStop(0, 'rgba(255, 255, 255, 1)');
              radgrad.addColorStop(1, "rgba(" + colorVal01 + ", " + colorVal02 + ", " + 255 + ", " + opacityVal + ")");
              ctx.fillStyle = radgrad;
              ctx.arc(starLeft, starTop, starSize, 0, Math.PI * 2, true);
              ctx.fill();
          }
      }

      if (canvasRef.current) {
        const renderCtx = canvasRef.current.getContext('2d')

        if (renderCtx) {
          smallStarCreate(renderCtx, 200, 1)
          smallStarCreate(renderCtx, 50, 2)
          renderCtx.restore()
          renderCtx.save()
          bigStarCreate(renderCtx, 10, 1)
          bigStarCreate(renderCtx, 5, 2)
          renderCtx.restore()
          renderCtx.save()

          setContext(renderCtx);
        }
      }
    }
    window.addEventListener('resize', updateContext)
    updateContext()
    return () => window.removeEventListener('resize', updateContext)
  }, [context]);

  return (
    <div>
      <canvas
        id="canvas"
        ref={canvasRef}
        width={width}
        height={height}
        style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
        }}
      />
      Canvas
    </div>
  )
}

export default Canvas;

