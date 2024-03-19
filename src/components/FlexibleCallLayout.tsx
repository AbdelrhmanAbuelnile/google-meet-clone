import useStreamCall from "@/hooks/useStreamCall";
import { CallControls, PaginatedGridLayout, SpeakerLayout } from "@stream-io/video-react-sdk";
import {
  BetweenHorizonalEnd,
  BetweenVerticalEnd,
  LayoutGrid,
} from "lucide-react";
import { useState } from "react";
import EndCallButton from "./EndCallButton";
import { useRouter } from "next/navigation";

type CallLayout = "speaker-vert" | "speaker-horiz" | "gird";

export default function FlexibleCallLayout() {
  const [layout, setLayout] = useState<CallLayout>("speaker-vert");

  const call = useStreamCall();

  const router = useRouter()

  return (
    <div className="space-y-3">
      <CallLayoutView layout={layout} />
      <CallLayoutButtons layout={layout} setLayout={setLayout} />
      <CallControls onLeave={() => router.push(`/meeting/${call.id}/left`)}/>
      <EndCallButton />
    </div>
  );
}

interface CallLayoutButtonsProps {
  layout: CallLayout;
  setLayout: (layout: CallLayout) => void;
}

function CallLayoutButtons({ layout, setLayout }: CallLayoutButtonsProps) {
  return (
    <div className="mx-auto w-fit space-x-6">
      <button
        title="Speaker view (vertical)"
        onClick={() => setLayout("speaker-vert")}
        className={
          layout !== "speaker-vert"
            ? "p-2 text-gray-400"
            : "text-centter rounded-full bg-blue-500 p-2 text-white"
        }
      >
        <BetweenVerticalEnd />
      </button>
      <button
        title="Speaker view (horizontal)"
        onClick={() => setLayout("speaker-horiz")}
        className={
          layout !== "speaker-horiz"
            ? "p-2 text-gray-400"
            : "text-centter rounded-full bg-blue-500 p-2 text-white"
        }
      >
        <BetweenHorizonalEnd />
      </button>
      <button
        title="Grid view"
        onClick={() => setLayout("gird")}
        className={
          layout !== "gird"
            ? "p-2 text-gray-400"
            : "text-centter rounded-full bg-blue-500 p-2 text-white"
        }
      >
        <LayoutGrid />
      </button>
    </div>
  );
}

interface CallLayoutViewProps {
  layout: CallLayout;
}

function CallLayoutView({ layout }: CallLayoutViewProps) {
  if (layout === "speaker-vert") {
    return <SpeakerLayout />;
  }

  if (layout === "speaker-horiz") {
    return <SpeakerLayout participantsBarPosition={"right"} />;
  }

  if (layout === "gird") {
    return <PaginatedGridLayout />;
  }

  return null;
}
