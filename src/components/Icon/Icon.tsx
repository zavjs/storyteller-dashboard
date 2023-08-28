import Image from "next/image";

export type Icons =
  | "analytics"
  | "book"
  | "calendar"
  | "code"
  | "identity"
  | "joystick"
  | "megaphone"
  | "question-mark"
  | "users";

type IconProps = {
  icon: Icons;
};

export function Icon({ icon }: IconProps) {
  return (
    <>
      {icon && (
        <Image
          src={`/icons/${icon}.svg`}
          width={18}
          height={20}
          aria-hidden
          alt=""
        />
      )}
    </>
  );
}
