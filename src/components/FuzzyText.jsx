"use client";
import React, { useEffect, useRef } from "react";

const FuzzyText = ({
  children,
  fontSize = "clamp(1rem, 1.5vw, 10rem)",
  fontWeight = 900,
  fontFamily = "inherit",
  color = "#fff",
  enableHover = true,
  baseIntensity = 0.18,
  hoverIntensity = 0.5,
}) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    let animationFrameId = null;
    let isCancelled = false;
    const canvas = canvasRef.current;
    if (!canvas) return;

    const init = async () => {
      if (document.fonts?.ready) {
        await document.fonts.ready;
      }
      if (isCancelled) return;

      const ctx = canvas.getContext("2d");
      if (!ctx) return;

      const computedFontFamily =
        fontFamily === "inherit"
          ? window.getComputedStyle(canvas).fontFamily || "sans-serif"
          : fontFamily;

      const fontSizeStr =
        typeof fontSize === "number" ? `${fontSize}px` : fontSize;

      let numericFontSize = 24;
      if (typeof fontSize === "number") {
        numericFontSize = fontSize;
      } else if (typeof fontSize === "string" && /^\d+(\.\d+)?px$/.test(fontSize)) {
        numericFontSize = parseFloat(fontSize);
      } else {
        canvas.style.fontSize = fontSizeStr;
        numericFontSize = parseFloat(window.getComputedStyle(canvas).fontSize) || 24;
      }

      const text = React.Children.toArray(children).join("");

      const offscreen = document.createElement("canvas");
      const offCtx = offscreen.getContext("2d");
      if (!offCtx) return;

      offCtx.font = `${fontWeight} ${fontSizeStr} ${computedFontFamily}`;
      offCtx.textBaseline = "alphabetic";
      const metrics = offCtx.measureText(text);

      const actualLeft = metrics.actualBoundingBoxLeft ?? 0;
      const actualRight = metrics.actualBoundingBoxRight ?? metrics.width;
      const actualAscent = metrics.actualBoundingBoxAscent ?? numericFontSize;
      const actualDescent =
        metrics.actualBoundingBoxDescent ?? numericFontSize * 0.2;

      const textBoundingWidth = Math.ceil(actualLeft + actualRight);
      const tightHeight = Math.ceil(actualAscent + actualDescent);

      const extraWidthBuffer = 10;
      const offscreenWidth = textBoundingWidth + extraWidthBuffer;

      offscreen.width = offscreenWidth;
      offscreen.height = tightHeight;

      const xOffset = extraWidthBuffer / 2;
      offCtx.font = `${fontWeight} ${fontSizeStr} ${computedFontFamily}`;
      offCtx.textBaseline = "alphabetic";
      offCtx.fillStyle = color;
      offCtx.fillText(text, xOffset - actualLeft, actualAscent);

      const horizontalMargin = 50;
      const verticalMargin = 0;
      canvas.width = offscreenWidth + horizontalMargin * 2;
      canvas.height = tightHeight + verticalMargin * 2;
      ctx.translate(horizontalMargin, verticalMargin);

      const interactiveLeft = horizontalMargin + xOffset;
      const interactiveTop = verticalMargin;
      const interactiveRight = interactiveLeft + textBoundingWidth;
      const interactiveBottom = interactiveTop + tightHeight;

      let isHovering = false;
      const fuzzRange = 30;

      const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
      let prefersReducedMotion = mediaQuery.matches;

      const renderFrame = () => {
        if (isCancelled) return;
        ctx.clearRect(
          -fuzzRange,
          -fuzzRange,
          offscreenWidth + 2 * fuzzRange,
          tightHeight + 2 * fuzzRange
        );

        if (prefersReducedMotion) {
          ctx.drawImage(offscreen, 0, 0);
          return;
        }

        const intensity = isHovering ? hoverIntensity : baseIntensity;
        for (let j = 0; j < tightHeight; j++) {
          const dx = Math.floor(intensity * (Math.random() - 0.5) * fuzzRange);
          ctx.drawImage(
            offscreen,
            0,
            j,
            offscreenWidth,
            1,
            dx,
            j,
            offscreenWidth,
            1
          );
        }
      };

      const loop = () => {
        if (isCancelled) return;
        renderFrame();
        animationFrameId = window.requestAnimationFrame(loop);
      };

      const startLoop = () => {
        if (isCancelled || animationFrameId) return;
        if (document.hidden || prefersReducedMotion) {
          renderFrame();
          return;
        }
        animationFrameId = window.requestAnimationFrame(loop);
      };

      const stopLoop = () => {
        if (animationFrameId) {
          window.cancelAnimationFrame(animationFrameId);
          animationFrameId = null;
        }
      };

      const handleVisibilityChange = () => {
        if (document.hidden || prefersReducedMotion) {
          stopLoop();
        } else {
          startLoop();
        }
      };

      const handleMotionChange = (e) => {
        prefersReducedMotion = e.matches;
        if (prefersReducedMotion || document.hidden) {
          stopLoop();
          renderFrame();
        } else {
          startLoop();
        }
      };

      document.addEventListener("visibilitychange", handleVisibilityChange);
      if (mediaQuery?.addEventListener) {
        mediaQuery.addEventListener("change", handleMotionChange);
      } else if (mediaQuery?.addListener) {
        mediaQuery.addListener(handleMotionChange);
      }

      startLoop();

      const isInsideTextArea = (x, y) => {
        return (
          x >= interactiveLeft &&
          x <= interactiveRight &&
          y >= interactiveTop &&
          y <= interactiveBottom
        );
      };

      const handleMouseMove = (e) => {
        if (!enableHover || prefersReducedMotion) return;
        const rect = canvas.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        isHovering = isInsideTextArea(x, y);
      };

      const handleMouseLeave = () => {
        isHovering = false;
      };

      const handleTouchMove = (e) => {
        if (!enableHover || prefersReducedMotion || !e.touches[0]) return;
        const rect = canvas.getBoundingClientRect();
        const touch = e.touches[0];
        const x = touch.clientX - rect.left;
        const y = touch.clientY - rect.top;
        isHovering = isInsideTextArea(x, y);
      };

      const handleTouchEnd = () => {
        isHovering = false;
      };

      if (enableHover) {
        canvas.addEventListener("mousemove", handleMouseMove);
        canvas.addEventListener("mouseleave", handleMouseLeave);
        canvas.addEventListener("touchmove", handleTouchMove, { passive: true });
        canvas.addEventListener("touchend", handleTouchEnd);
      }

      const cleanup = () => {
        stopLoop();
        document.removeEventListener("visibilitychange", handleVisibilityChange);
        if (mediaQuery?.removeEventListener) {
          mediaQuery.removeEventListener("change", handleMotionChange);
        } else if (mediaQuery?.removeListener) {
          mediaQuery.removeListener(handleMotionChange);
        }
        if (enableHover) {
          canvas.removeEventListener("mousemove", handleMouseMove);
          canvas.removeEventListener("mouseleave", handleMouseLeave);
          canvas.removeEventListener("touchmove", handleTouchMove);
          canvas.removeEventListener("touchend", handleTouchEnd);
        }
      };

      canvas.cleanupFuzzyText = cleanup;
    };

    init();

    return () => {
      isCancelled = true;
      if (animationFrameId) {
        window.cancelAnimationFrame(animationFrameId);
      }
      if (canvas && canvas.cleanupFuzzyText) {
        canvas.cleanupFuzzyText();
      }
    };
  }, [
    children,
    fontSize,
    fontWeight,
    fontFamily,
    color,
    enableHover,
    baseIntensity,
    hoverIntensity,
  ]);

  return (
    <span className="relative inline-flex items-center">
      <canvas ref={canvasRef} aria-hidden="true" className="block" />
      <span className="sr-only">{children}</span>
    </span>
  );
};

export default FuzzyText;
