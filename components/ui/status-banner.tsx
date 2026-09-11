type StatusBannerProps = {
  tone: "info" | "error" | "success";
  children: React.ReactNode;
};

export function StatusBanner({ tone, children }: StatusBannerProps) {
  return <div className={`status status-${tone}`}>{children}</div>;
}
