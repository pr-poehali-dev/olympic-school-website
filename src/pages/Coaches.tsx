import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Coaches = () => {
  const coaches = [
    { name: "Иванов Сергей Петрович", specialty: "Хоккей", experience: "15 лет", achievements: "Мастер спорта, тренер высшей категории" },
    { name: "Петрова Елена Викторовна", specialty: "Фигурное катание", experience: "12 лет", achievements: "Заслуженный тренер России" },
    { name: "Сидоров Дмитрий Александрович", specialty: "Рукопашный бой", experience: "10 лет", achievements: "Мастер спорта международного класса" },
    { name: "Козлова Анна Сергеевна", specialty: "Художественная гимнастика", experience: "8 лет", achievements: "Кандидат в мастера спорта" },
    { name: "Морозов Алексей Игоревич", specialty: "Волейбол", experience: "14 лет", achievements: "Мастер спорта, тренер первой категории" },
    { name: "Волкова Ирина Дмитриевна", specialty: "Шашки", experience: "11 лет", achievements: "Международный гроссмейстер" },
    { name: "Новиков Павел Андреевич", specialty: "Хоккей", experience: "9 лет", achievements: "Мастер спорта России" },
    { name: "Соколова Мария Владимировна", specialty: "Фигурное катание", experience: "7 лет", achievements: "Мастер спорта России" },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-center mb-8 text-primary">Наши тренеры</h1>
          <p className="text-center text-xl text-muted-foreground mb-16 max-w-4xl mx-auto">
            Профессиональные тренеры с большим опытом работы и спортивными достижениями
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {coaches.map((coach, idx) => (
              <Card key={idx} className="hover:shadow-xl transition-all hover:-translate-y-1">
                <CardContent className="p-0">
                  <div className="bg-secondary h-64 flex items-center justify-center">
                    <Icon name="User" size={80} className="text-muted-foreground" />
                  </div>
                  <div className="p-6">
                    <h3 className="font-bold text-xl mb-2 leading-tight">{coach.name}</h3>
                    <p className="text-accent font-semibold mb-1">{coach.specialty}</p>
                    <p className="text-sm text-muted-foreground mb-2">Стаж: {coach.experience}</p>
                    <p className="text-sm text-muted-foreground italic">{coach.achievements}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-3xl font-bold text-center mb-12 text-primary">Квалификация тренеров</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardContent className="p-8 text-center">
                <div className="bg-accent/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Icon name="Award" size={32} className="text-accent" />
                </div>
                <h3 className="font-bold text-xl mb-2">Высокая квалификация</h3>
                <p className="text-muted-foreground">
                  Все тренеры имеют высшее спортивное образование и регулярно проходят повышение квалификации
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-8 text-center">
                <div className="bg-accent/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Icon name="Trophy" size={32} className="text-accent" />
                </div>
                <h3 className="font-bold text-xl mb-2">Спортивные достижения</h3>
                <p className="text-muted-foreground">
                  Многие тренеры — мастера спорта и заслуженные тренеры России с международным опытом
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-8 text-center">
                <div className="bg-accent/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Icon name="Heart" size={32} className="text-accent" />
                </div>
                <h3 className="font-bold text-xl mb-2">Индивидуальный подход</h3>
                <p className="text-muted-foreground">
                  Каждый тренер находит подход к своим воспитанникам, развивая их таланты и способности
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Coaches;
