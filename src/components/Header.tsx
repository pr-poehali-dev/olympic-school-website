import { Link, useLocation } from "react-router-dom";
import Icon from "@/components/ui/icon";

const Header = () => {
  const location = useLocation();

  const navItems = [
    { path: "/", label: "Главная" },
    { path: "/about", label: "О школе" },
    { path: "/sports", label: "Отделения" },
    { path: "/coaches", label: "Тренеры" },
    { path: "/schedule", label: "Расписание" },
    { path: "/documents", label: "Документы" },
    { path: "/contacts", label: "Контакты" },
  ];

  return (
    <>
      <div className="bg-secondary/50 border-b border-border">
        <div className="container mx-auto px-4 py-2 flex justify-end gap-4 text-sm">
          <a href="#" className="hover:text-accent transition-colors flex items-center gap-1">
            <Icon name="Eye" size={16} />
            Версия для слабовидящих
          </a>
          <a href="#" className="hover:text-accent transition-colors">
            Сведения об образовательной организации
          </a>
        </div>
      </div>

      <nav className="sticky top-0 w-full bg-primary text-primary-foreground z-50 shadow-md">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
              <Icon name="Trophy" size={32} className="text-accent" />
              <span className="text-xl font-bold">СШОР им. В.М. Боброва</span>
            </Link>
            <div className="hidden md:flex gap-6 text-sm font-medium">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`hover:text-accent transition-colors ${
                    location.pathname === item.path ? "text-accent" : ""
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
