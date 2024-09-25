type Props = {
  title: React.ReactNode;
  children: React.ReactNode;
}

export default function MainLayout({ title, children }: Props) {
  return (
    <div className="flex flex-col gap-5 p-8 bg-[#f5f5f5]">
      <h1 className="text-[#4c4c4c] text-xl">
        {title}
      </h1>
      <div>
        {children}
      </div>
    </div>
  )
}
