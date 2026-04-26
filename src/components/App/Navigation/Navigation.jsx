import { NavLink } from "react-router-dom";

function Navigation({
  className = "",
  items = [],
  itemClassName = "",
  activeItemClassName = "",
}) {
  return (
    <nav className={className}>
      {items.map((item) => {
        const key = item.key || item.label;
        const combinedClassName = ({ isActive }) =>
          [itemClassName, item.className, isActive && activeItemClassName]
            .filter(Boolean)
            .join(" ");

        if (item.href) {
          return (
            <a
              key={key}
              href={item.href}
              target={item.target}
              rel={item.rel}
              className={[itemClassName, item.className]
                .filter(Boolean)
                .join(" ")}
            >
              {item.label}
            </a>
          );
        }

        return (
          <NavLink
            key={key}
            to={item.to}
            end={item.end}
            className={combinedClassName}
          >
            {item.label}
          </NavLink>
        );
      })}
    </nav>
  );
}

export default Navigation;
