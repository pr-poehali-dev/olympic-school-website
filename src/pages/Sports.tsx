import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Sports = () => {
  const sports = [
    {
      name: "Хоккей",
      icon: "Disc3",
      description: "Подготовка хоккеистов с 5 лет. Тренировки проходят на больших и малых аренах Ледового дворца. Наши воспитанники — призёры первенств России и международных турниров.",
      features: ["Возраст: от 5 лет", "Большая и малая арена", "Профессиональные тренеры", "Участие в соревнованиях"]
    },
    {
      name: "Фигурное катание",
      icon: "Sparkles",
      description: "Обучение фигурному катанию для детей и взрослых. Индивидуальные и групповые занятия. Подготовка к соревнованиям различного уровня.",
      features: ["Возраст: от 4 лет", "Индивидуальные занятия", "Групповые программы", "Выступления на соревнованиях"]
    },
    {
      name: "Художественная гимнастика",
      icon: "Trophy",
      description: "Развитие грации, пластики и координации. Работа с предметами: лента, мяч, обруч, булавы. Участие в соревнованиях областного и всероссийского уровня.",
      features: ["Возраст: от 5 лет", "Работа с предметами", "Развитие гибкости", "Соревнования всех уровней"]
    },
    {
      name: "Рукопашный бой",
      icon: "Swords",
      description: "Обучение техникам самозащиты и рукопашного боя. Развитие силы, выносливости и дисциплины. Подготовка спортсменов-разрядников.",
      features: ["Возраст: от 7 лет", "Техника самозащиты", "Физическая подготовка", "Разрядные нормативы"]
    },
    {
      name: "Волейбол",
      icon: "Circle",
      description: "Командная игра для развития реакции, координации и командного духа. Занятия в спортивных залах с профессиональными тренерами.",
      features: ["Возраст: от 9 лет", "Командная игра", "Тактическая подготовка", "Участие в турнирах"]
    },
    {
      name: "Шашки",
      icon: "Grid3x3",
      description: "Развитие логического мышления и стратегического планирования. Подготовка к соревнованиям различного уровня.",
      features: ["Возраст: от 6 лет", "Логическое мышление", "Стратегия и тактика", "Турниры разных уровней"]
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-center mb-8 text-primary">Спортивные отделения</h1>
          <p className="text-center text-xl text-muted-foreground mb-16 max-w-4xl mx-auto">
            В нашей школе работают 6 спортивных отделений по олимпийским и популярным видам спорта
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid md:grid-cols-2 gap-8">
            {sports.map((sport, idx) => (
              <Card key={idx} className="hover:shadow-xl transition-all hover:-translate-y-1">
                <CardContent className="p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="bg-accent/10 rounded-full w-20 h-20 flex items-center justify-center flex-shrink-0">
                      <Icon name={sport.icon} size={40} className="text-accent" />
                    </div>
                    <h2 className="font-bold text-3xl text-primary">{sport.name}</h2>
                  </div>
                  <p className="text-lg mb-6 leading-relaxed">{sport.description}</p>
                  <div className="space-y-2">
                    {sport.features.map((feature, fidx) => (
                      <div key={fidx} className="flex items-center gap-2">
                        <Icon name="Check" className="text-accent" size={20} />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-6 text-primary">Как записаться</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Для записи в одну из секций обратитесь по телефону или посетите наш офис. 
            Мы проведём консультацию и подберём оптимальную программу занятий.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Card>
              <CardContent className="p-6 flex items-center gap-3">
                <Icon name="Phone" className="text-accent" size={24} />
                <span className="font-semibold">+7 (496) 647-77-30</span>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 flex items-center gap-3">
                <Icon name="Mail" className="text-accent" size={24} />
                <span className="font-semibold">office@ledoviy-st.ru</span>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Sports;
