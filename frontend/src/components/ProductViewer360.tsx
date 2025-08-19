import { useState, useRef, useCallback, useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { RotateCcw, Maximize2 } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ProductViewer360Props {
  productName: string;
  images: string[];
  className?: string;
  autoRotate?: boolean;
  size?: "small" | "medium" | "large";
}

export const ProductViewer360 = ({ 
  productName, 
  images, 
  className = "",
  autoRotate = false,
  size = "medium" 
}: ProductViewer360Props) => {
  const [currentFrame, setCurrentFrame] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [isAutoRotating, setIsAutoRotating] = useState(autoRotate);
  const [isLoaded, setIsLoaded] = useState(false);
  
  const containerRef = useRef<HTMLDivElement>(null);
  const startPosRef = useRef({ x: 0, frame: 0 });
  
  const x = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 300, damping: 30 });

  const totalFrames = images.length;
  const sizeClasses = {
    small: "w-32 h-32",
    medium: "w-48 h-48", 
    large: "w-64 h-64"
  };

  // Auto rotation effect
  useEffect(() => {
    if (!isAutoRotating || isDragging || totalFrames <= 1) return;
    
    const interval = setInterval(() => {
      setCurrentFrame(prev => (prev + 1) % totalFrames);
    }, 100);
    
    return () => clearInterval(interval);
  }, [isAutoRotating, isDragging, totalFrames]);

  // Handle mouse/touch drag
  const handlePointerDown = useCallback((e: React.PointerEvent) => {
    if (totalFrames <= 1) return;
    
    setIsDragging(true);
    setIsAutoRotating(false);
    
    const clientX = e.clientX || (e as TouchEvent).touches?.[0]?.clientX || 0;
    startPosRef.current = { x: clientX, frame: currentFrame };
    
    e.preventDefault();
  }, [currentFrame, totalFrames]);

  const handlePointerMove = useCallback((e: React.PointerEvent) => {
    if (!isDragging || totalFrames <= 1) return;
    
    const clientX = e.clientX || (e as TouchEvent).touches?.[0]?.clientX || 0;
    const deltaX = clientX - startPosRef.current.x;
    const sensitivity = 3;
    const frameChange = Math.floor(deltaX / sensitivity);
    
    let newFrame = (startPosRef.current.frame + frameChange) % totalFrames;
    if (newFrame < 0) newFrame = totalFrames + newFrame;
    
    setCurrentFrame(newFrame);
    x.set(deltaX);
  }, [isDragging, totalFrames, x]);

  const handlePointerUp = useCallback(() => {
    if (!isDragging) return;
    
    setIsDragging(false);
    x.set(0);
  }, [isDragging, x]);

  const resetRotation = () => {
    setCurrentFrame(0);
    setIsAutoRotating(false);
  };

  const toggleAutoRotate = () => {
    setIsAutoRotating(!isAutoRotating);
  };

  const currentImage = images[currentFrame] || images[0];

  return (
    <div className={`relative ${sizeClasses[size]} ${className}`}>
      {/* Main viewer container */}
      <motion.div
        ref={containerRef}
        className="relative w-full h-full bg-gradient-to-br from-background to-muted rounded-2xl overflow-hidden border border-border/20 shadow-lg group cursor-grab active:cursor-grabbing"
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerLeave={handlePointerUp}
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.2 }}
      >
        {/* Background glow effect */}
        <div className="absolute inset-0 bg-gradient-radial from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        {/* Product image */}
        <div className="relative w-full h-full flex items-center justify-center p-4">
          <motion.img
            src={currentImage}
            alt={`${productName} - Frame ${currentFrame + 1}`}
            className="max-w-full max-h-full object-contain drop-shadow-lg"
            style={{ x: springX }}
            onLoad={() => setIsLoaded(true)}
            draggable={false}
            animate={isLoaded ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.3 }}
          />
        </div>

        {/* Loading state */}
        {!isLoaded && (
          <div className="absolute inset-0 flex items-center justify-center bg-muted/50 backdrop-blur-sm">
            <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin" />
          </div>
        )}

        {/* Frame indicator */}
        {totalFrames > 1 && (
          <div className="absolute bottom-3 left-3 px-2 py-1 bg-black/50 backdrop-blur-sm rounded-md text-xs text-white font-mono">
            {currentFrame + 1}/{totalFrames}
          </div>
        )}

        {/* Controls */}
        <div className="absolute top-3 right-3 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          {totalFrames > 1 && (
            <>
              <Button
                variant="secondary"
                size="sm"
                onClick={resetRotation}
                className="w-8 h-8 p-0 bg-white/90 hover:bg-white shadow-sm"
              >
                <RotateCcw className="h-4 w-4" />
              </Button>
              <Button
                variant="secondary"
                size="sm"
                onClick={toggleAutoRotate}
                className={`w-8 h-8 p-0 shadow-sm ${
                  isAutoRotating 
                    ? "bg-primary text-primary-foreground hover:bg-primary/90" 
                    : "bg-white/90 hover:bg-white"
                }`}
              >
                <motion.div
                  animate={isAutoRotating ? { rotate: 360 } : { rotate: 0 }}
                  transition={{ duration: 2, repeat: isAutoRotating ? Infinity : 0, ease: "linear" }}
                >
                  <Maximize2 className="h-4 w-4" />
                </motion.div>
              </Button>
            </>
          )}
        </div>

        {/* Interaction hint */}
        {totalFrames > 1 && !isDragging && (
          <motion.div
            className="absolute bottom-3 right-3 text-xs text-muted-foreground bg-background/80 backdrop-blur-sm px-2 py-1 rounded-md opacity-0 group-hover:opacity-100"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            Drag to rotate
          </motion.div>
        )}
      </motion.div>

      {/* 360° indicator */}
      {totalFrames > 1 && (
        <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2">
          <div className="flex items-center gap-1 text-xs text-muted-foreground font-medium">
            <motion.div
              className="w-2 h-2 rounded-full bg-primary"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            360° View
          </div>
        </div>
      )}
    </div>
  );
};