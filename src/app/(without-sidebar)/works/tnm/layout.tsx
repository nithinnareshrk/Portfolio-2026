import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Time & Material Tickets — Case Study | Nithinnaresh",
  description:
    "A streamlined Time & Material ticketing workflow that simplifies site tracking, approvals, and reporting across teams.",
  openGraph: {
    title: "Time & Material Tickets — Case Study | Nithinnaresh",
    description:
      "A streamlined Time & Material ticketing workflow that simplifies site tracking, approvals, and reporting across teams.",
  },
};

export default function TnmLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
