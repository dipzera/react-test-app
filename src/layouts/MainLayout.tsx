type Props = {
  title: React.ReactNode;
  children: React.ReactNode;
};

export default function MainLayout({ title, children }: Props) {
  return (
    <div className="flex flex-col gap-5 p-8">
      {title}
      <div>{children}</div>
    </div>
  );
}
