"use client";
import { LightNodeProvider } from "@waku/react";

const NODE_OPTIONS = { defaultBootstrap: true };

export function WakuNode({ children } : { children: React.ReactNode }) {
  return <LightNodeProvider options={NODE_OPTIONS}>{children}</LightNodeProvider>;
}