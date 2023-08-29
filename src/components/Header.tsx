import Image from "next/image";
import { Avatar } from "./Avatar/Avatar";
import Menu from "./Menu/Menu";

export function Header() {
  return (
    <>
      <header>
        <section className="flex justify-between py-0.5 lg:py-1.5 px-4 bg-primary items-center">
          <div className="lg:hidden">
            <Menu.Trigger />
          </div>
          <div>
            <Image
              src="/images/logo.svg"
              priority
              height={38}
              width={186}
              alt="Storyteller logo"
            />
          </div>
          <div>
            <Avatar name="Henri" />
          </div>
        </section>
      </header>
    </>
  );
}
