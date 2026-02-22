import React, { useState, useLayoutEffect, useRef } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';

const data = [
  { month: 'Jan', traffic: 4000 },
  { month: 'Feb', traffic: 3000 },
  { month: 'Mar', traffic: 5000 },
  { month: 'Apr', traffic: 4500 },
  { month: 'Mei', traffic: 8000 },
  { month: 'Jun', traffic: 9500 },
];

const GrowthChart: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 350 });

  
  useLayoutEffect(() => {
    const updateSize = () => {
      if (containerRef.current) {
        setDimensions({
          width: containerRef.current.offsetWidth - 64, 
          height: 350
        });
      }
    };

    
    const timer = setTimeout(updateSize, 200);
    window.addEventListener('resize', updateSize);
    
    return () => {
      clearTimeout(timer);
      window.removeEventListener('resize', updateSize);
    };
  }, []);

  return (
    <div 
      ref={containerRef}
      className="rounded-[2.5rem] bg-surface-dark/40 border border-white/5 p-8 relative overflow-hidden h-500px flex flex-col"
    >
      <div className="flex justify-between items-start mb-8 relative z-10">
        <div>
          <h3 className="text-2xl font-black text-white mb-2">Lintasan Pertumbuhan</h3>
          <p className="text-text-muted font-medium">Rata-rata kenaikan trafik klien premium</p>
        </div>
        <div className="bg-primary/20 text-primary px-4 py-1.5 rounded-full text-sm font-black border border-primary/20">
          +45% MoM
        </div>
      </div>

      <div className="flex-1 w-full relative z-10 flex items-center justify-center">
        {}
        {dimensions.width > 0 ? (
          <AreaChart 
            width={dimensions.width} 
            height={dimensions.height} 
            data={data} 
            margin={{ top: 10, right: 10, left: -20, bottom: 0 }}
          >
            <defs>
              <linearGradient id="colorTraffic" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#13ec5b" stopOpacity={0.3} />
                <stop offset="95%" stopColor="#13ec5b" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="#1f3b2a" vertical={false} />
            <XAxis dataKey="month" stroke="#4a6b57" fontSize={12} tickLine={false} axisLine={false} dy={10} />
            <YAxis hide />
            <Tooltip 
              contentStyle={{ backgroundColor: '#193322', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px' }}
              itemStyle={{ color: '#13ec5b' }}
            />
            <Area type="monotone" dataKey="traffic" stroke="#13ec5b" strokeWidth={4} fill="url(#colorTraffic)" animationDuration={1000} />
          </AreaChart>
        ) : (
          <div className="text-primary font-black animate-pulse">SYNCHRONIZING...</div>
        )}
      </div>
      
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-primary/5 blur-[120px] pointer-events-none"></div>
    </div>
  );
};

export default GrowthChart;