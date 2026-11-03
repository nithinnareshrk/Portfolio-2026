import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Daily Site Log — Case Study | Nithinnaresh",
  description:
    "A unified daily site log workflow that centralizes daily site updates, tracking, and reporting for better visibility and control.",
  openGraph: {
    title: "Daily Site Log — Case Study | Nithinnaresh",
    description:
      "A unified daily site log workflow that centralizes daily site updates, tracking, and reporting for better visibility and control.",
  },
};

export default function JournalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
