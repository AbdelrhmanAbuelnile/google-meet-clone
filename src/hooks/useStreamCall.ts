import { useCall } from "@stream-io/video-react-sdk";

export default function useStreamCall(){
  const call = useCall()

  if(!call){
    throw new Error("use stream call must be used inside a StreamCall component with a valid call prop")
  }
  return call
}

