import type { ComponentProps } from "react";
import Reveal from "./Reveal";

export default function ScaleIn(props: ComponentProps<typeof Reveal>) {
  return <Reveal variant="scale" {...props} />;
}
