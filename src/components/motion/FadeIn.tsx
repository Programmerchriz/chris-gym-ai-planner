import type { ComponentProps } from "react";
import Reveal from "./Reveal";

export default function FadeIn(props: ComponentProps<typeof Reveal>) {
  return <Reveal variant="fade" {...props} />;
};
