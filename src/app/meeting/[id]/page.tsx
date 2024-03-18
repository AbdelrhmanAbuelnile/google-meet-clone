import { Metadata } from "next"
import MeetingPage from "./MeetingPage"

interface pageProps{
  params: { id: string }
}

export function generateMetadata({params: {id}}: pageProps): Metadata{
  return {
    title: `meeting ${id}`
  }
}

export default function page({params: {id}}:pageProps){
  return <>
  <MeetingPage id={id} />
  </>
}