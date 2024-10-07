export function Section2comp ({title, text}: {title: string, text: string}) {
  return (
    <div className="flex justify-between items-center px-14 py-8 border-t border-default-white border-opacity-30">
      <h1 className="text-6xl">{title}</h1>
      <p className="opacity-60 font-roboto max-w-[284px]">{text}</p>
    </div>
  );
};
