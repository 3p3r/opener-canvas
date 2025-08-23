"use client";

import { Canvas } from "@/components/canvas";
import { AssistantProvider } from "@/contexts/AssistantContext";
import { GraphProvider } from "@/contexts/GraphContext";
import { ThreadProvider } from "@/contexts/ThreadProvider";
import { Suspense } from "react";

export default function Home() {
  return (
    <Suspense>
      <ThreadProvider>
        <AssistantProvider>
          <GraphProvider>
            <Canvas />
          </GraphProvider>
        </AssistantProvider>
      </ThreadProvider>
    </Suspense>
  );
}
