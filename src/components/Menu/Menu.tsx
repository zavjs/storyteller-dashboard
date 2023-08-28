import { routes } from "@/app/routes";
import { Icon, Icons } from "../Icon/Icon";


type MenuProps = {
  children: React.ReactNode;
};

function MenuTrigger() {
  return (
    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button px-0">
      <svg
        width="24"
        height="16"
        viewBox="0 0 24 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect y="7" width="24" height="2" rx="1" fill="white" />
        <rect y="14" width="24" height="2" rx="1" fill="white" />
        <rect width="24" height="2" rx="1" fill="white" />
      </svg>
    </label>
  );
}

function Menu({ children }: MenuProps) {
  return (
    <menu className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content lg:w-[calc(100%-240px)]">{children}</div>
      <nav className="drawer-side top-[52px] lg:top-[60px]">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu py-0 px-0 w-3/5 lg:w-60 min-h-full bg-primary text-white text-sm">
          {Object.entries(routes).map(([key, items]) => (
            <ul key={key}>
              {items.map((item, index) => {
                const isFirst = index === 0;
                const isLast = index === items.length - 1;
                return (
                  <li
                    key={item.href}
                    className={`py-2.5 text-white pl-4 border-l-transparent border-l-4 relative ${
                      item?.active ? "border-l-[#76A0F0] bg-secondary" : ""
                    } ${isFirst ? "pt-5" : ""}`}
                  >
                    <div className="flex px-0 gap-x-2">
                      <span>
                        <Icon icon={item.icon} />
                      </span>
                      <a
                        className="text-white hover:text-white active:text-white"
                        href={item?.enabled ? item.href : ""}
                      >
                        {item.text}
                      </a>
                      {isLast ? (
                        <span className="absolute left-0 bottom-0 p-0 w-full h-px bg-gradient-to-r from-[#484848]"></span>
                      ) : null}
                    </div>
                  </li>
                );
              })}
            </ul>
          ))}
        </ul>
      </nav>
    </menu>
  );
}

Menu.Trigger = MenuTrigger;

export default Menu;
