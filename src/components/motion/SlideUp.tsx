import type { ComponentProps } from "react";
import Reveal from "./Reveal";

export default function SlideUp(props: ComponentProps<typeof Reveal>) {
  return <Reveal variant="slideUp" {...props} />;
}
