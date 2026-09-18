import type { Metadata } from "next";
import "../../../globals.css";

export const metadata: Metadata = {
  title: "Rehabilitation — Case Study | Nithinnaresh",
  description:
    "A mobile health platform that adapts to your body — a case study by Nithinnaresh.",
};

export default function RehabilitationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
