import ProjectDetailNav from "@/components/ProjectDetailNav";

export default function WorksDetailLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <ProjectDetailNav />
      {children}
    </>
  );
}
