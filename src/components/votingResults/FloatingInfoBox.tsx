export default function FloatingInfoBox({
  title,
  subTitle,
}: {
  title: string;
  subTitle: string;
}) {
  return (
    <div className="min-w-[150px] flex-grow flex flex-col bg-[#277E25]/10 px-10 py-6 rounded-md text-center">
      <h4 className="font-bold text-xl">{title}</h4>
      <h5>{subTitle}</h5>
    </div>
  );
}
