import { Link } from "react-router-dom";
import Icon from "@/components/ui/icon";

const Footer = () => {
  return (
    <>
      <section className="py-12 bg-white border-y">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center items-center gap-4">
            <a 
              href="https://mosreg.ru/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-6 py-3 bg-primary text-primary-foreground rounded-full hover:bg-primary/90 transition-all font-semibold"
            >
              Команда губернатора
            </a>
            <a 
              href="https://mst.mosreg.ru/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-6 py-3 bg-primary text-primary-foreground rounded-full hover:bg-primary/90 transition-all font-semibold"
            >
              Мособлспорт
            </a>
            <a 
              href="https://мвд.рф/request_main" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-6 py-3 bg-primary text-primary-foreground rounded-full hover:bg-primary/90 transition-all font-semibold"
            >
              Противодействие коррупции
            </a>
          </div>
        </div>
      </section>

      <footer className="bg-primary text-primary-foreground py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Icon name="Trophy" size={28} className="text-accent" />
                <span className="font-bold text-lg">СШОР им. В.М. Боброва</span>
              </div>
              <p className="text-sm text-primary-foreground/80">
                Спортивная школа олимпийского резерва с 1978 года
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Навигация</h4>
              <div className="space-y-2 text-sm">
                <Link to="/about" className="block hover:text-accent transition-colors">О школе</Link>
                <Link to="/sports" className="block hover:text-accent transition-colors">Отделения</Link>
                <Link to="/coaches" className="block hover:text-accent transition-colors">Тренеры</Link>
                <Link to="/schedule" className="block hover:text-accent transition-colors">Расписание</Link>
                <Link to="/documents" className="block hover:text-accent transition-colors">Документы</Link>
                <Link to="/contacts" className="block hover:text-accent transition-colors">Контакты</Link>
              </div>
            </div>
            <div>
              <h4 className="font-bold mb-4">Контакты</h4>
              <div className="space-y-2 text-sm text-primary-foreground/80">
                <p>142800, Московская область, г.о. Ступино, пр. Победы, вл.8, стр.1</p>
                <p>+7 (496) 647-77-30</p>
                <p>office@ledoviy-st.ru</p>
              </div>
            </div>
          </div>
          <div className="border-t border-primary-foreground/20 pt-8 text-center text-sm text-primary-foreground/60">
            <p>© 2024 МБУ "СШОР им. В.М. Боброва". Все права защищены.</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;