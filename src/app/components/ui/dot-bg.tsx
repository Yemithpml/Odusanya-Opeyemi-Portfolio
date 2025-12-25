export default function DotBackground({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.12)_1px,transparent_0)] [background-size:20px_20px] dark:opacity-20" />
      <div className="relative z-10">{children}</div>
    </div>
  );
}
