import React, { useEffect, useRef } from 'react';

const PlexusWallpaper: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const ctxRef = useRef<CanvasRenderingContext2D | null>(null);
  const nodes = useRef<Array<{ x: number; y: number; vx: number; vy: number; size: number; color: string }>>([]);
  const numNodes = 50;
  const maxDistance = 100;
  const cruisingSpeed = 0.4;
  const minGap = 20;
  const backgroundColor = '#ffffff';
  const nodeColor = '#006e74';

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    ctxRef.current = ctx;

    const initializeNodes = () => {
      nodes.current = [];
      for (let i = 0; i < numNodes; i++) {
        let newNode;
        let overlapping;
        do {
          overlapping = false;
          newNode = {
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            vx: Math.random() * 2 - 1,
            vy: Math.random() * 2 - 1,
            size: 2 + Math.random() * 3,
            color: nodeColor
          };
          for (const otherNode of nodes.current) {
            const dx = otherNode.x - newNode.x;
            const dy = otherNode.y - newNode.y;
            const dist = Math.sqrt(dx * dx + dy * dy);
            if (dist < minGap) {
              overlapping = true;
              break;
            }
          }
        } while (overlapping);
        nodes.current.push(newNode);
      }
    };

    const updateNodeVelocities = () => {
      nodes.current.forEach(node => {
        const speed = Math.sqrt(node.vx * node.vx + node.vy * node.vy);
        if (speed !== 0) {
          node.vx = (node.vx / speed) * cruisingSpeed;
          node.vy = (node.vy / speed) * cruisingSpeed;
        }
        node.x += node.vx;
        node.y += node.vy;

        if (node.x < 0 || node.x > canvas.width) {
          node.vx = -node.vx;
        }
        if (node.y < 0 || node.y > canvas.height) {
          node.vy = -node.vy;
        }

        nodes.current.forEach(otherNode => {
          if (node !== otherNode) {
            const dx = otherNode.x - node.x;
            const dy = otherNode.y - node.y;
            const dist = Math.sqrt(dx * dx + dy * dy);

            if (dist < minGap) {
              const unitX = dx / dist;
              const unitY = dy / dist;
              node.x -= unitX * (minGap - dist) * 0.5;
              node.y -= unitY * (minGap - dist) * 0.5;
            }
          }
        });
      });
    };

    const animate = () => {
      const ctx = ctxRef.current;
      if (!ctx) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      updateNodeVelocities();

      nodes.current.forEach(node => {
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.size, 0, Math.PI * 2);
        ctx.fillStyle = node.color;
        ctx.fill();

        nodes.current.forEach(otherNode => {
          if (node !== otherNode) {
            const dx = otherNode.x - node.x;
            const dy = otherNode.y - node.y;
            const distance = Math.sqrt(dx * dx + dy * dy);

            if (distance < maxDistance) {
              ctx.beginPath();
              ctx.moveTo(node.x, node.y);
              ctx.lineTo(otherNode.x, otherNode.y);
              ctx.strokeStyle = nodeColor;
              ctx.lineWidth = 0.3;
              ctx.stroke();
            }
          }
        });
      });

      requestAnimationFrame(animate);
    };

    initializeNodes();
    animate();

    const handleResize = () => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      // cancelAnimationFrame(animate);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{ filter: 'blur(1px)', width: '100vw', height: '89vh', background: backgroundColor, display: 'block', position: 'fixed', top: '11vh', left: 0, zIndex: 0 }}
    />
  );
};

export default PlexusWallpaper;