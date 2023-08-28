type AvatarProps = {
  name: string;
};

function nameToInitials(name: string) {
  if (!name) {
    return "A";
  }

  const split = name.split(" ");
  const initials =
    split.length > 1
      ? `${split[0].charAt(0)}${split[1].charAt(0)}`
      : `${split[0].slice(0, 1)}`;
  return initials.toUpperCase();
}

export function Avatar({ name }: AvatarProps) {
  const initials = nameToInitials(name);

  return (
    <div className="avatar placeholder">
      <div className="bg-secondary text-neutral-content rounded-full w-8 lg:w-9">
        <span className="text-sm text-white">{initials}</span>
      </div>
    </div>
  );
}
