import Image from "next/image";

type PageMiniaturePreviewProps = {
  storyId: number;
  miniatures: string[];
};

export function PageMiniaturePreview({
  storyId,
  miniatures,
}: PageMiniaturePreviewProps) {
  const limited = miniatures.slice(0, 5);
  const extra = miniatures.length - limited.length;
  const exceeds = extra > 0 ? extra : null;

  return (
    <div className="flex gap-x-1.5 max-w-full overflow-auto">
      {limited.map((page) => (
        <Image
          key={`${storyId}-${page}`}
          height={52}
          width={29}
          src="/images/preview-miniature.svg"
          alt=""
        />
      ))}
      {exceeds ? (
        <div>
          <span className="w-[29px] h-[56px] rounded-sm bg-[#f2f2f2] inline-flex items-center justify-center">
            <span className="text-sm text-[#a1a1a1]">+{exceeds}</span>
          </span>
        </div>
      ) : null}
    </div>
  );
}
