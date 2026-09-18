import type { Metadata } from "next";
import "../../../globals.css";

export const metadata: Metadata = {
  title: "Gear Guru — Case Study | Nithinnaresh",
  description:
    "An automotive enthusiast's hub for networking & e-commerce — a case study by Nithinnaresh.",
};

export default function GearGuruLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
