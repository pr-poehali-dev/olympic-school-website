import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

const Index = () => {
  const sports = [
    { name: "Хоккей", icon: "Disc3" },
    { name: "Фигурное катание", icon: "Sparkles" },
    { name: "Художественная гимнастика", icon: "Trophy" },
    { name: "Рукопашный бой", icon: "Swords" },
    { name: "Волейбол", icon: "Circle" },
    { name: "Шашки", icon: "Grid3x3" },
  ];

  const news = [
    {
      title: "Победа на Чемпионате России",
      date: "15 ноября 2024",
      image: "https://cdn.poehali.dev/projects/fc24805a-ff2b-48b2-8b63-b748ef1d47c0/files/f72704f9-8062-4263-91c0-891f5e205f26.jpg",
      excerpt: "Наши хоккеисты завоевали золотые медали на первенстве России среди юношей"
    },
    {
      title: "Открытие нового сезона",
      date: "1 сентября 2024",
      image: "https://cdn.poehali.dev/projects/fc24805a-ff2b-48b2-8b63-b748ef1d47c0/files/8797bdd0-f219-4ee0-bd20-4eb225e53ce4.jpg",
      excerpt: "Состоялось торжественное открытие спортивного сезона 2024-2025"
    },
    {
      title: "Успех на соревнованиях по фигурному катанию",
      date: "20 октября 2024",
      image: "https://cdn.poehali.dev/projects/fc24805a-ff2b-48b2-8b63-b748ef1d47c0/files/4e62dabf-0a70-413f-a870-ccefea5a3a8e.jpg",
      excerpt: "Воспитанники школы заняли призовые места на областных соревнованиях"
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <section className="relative h-[600px] flex items-center justify-center text-white">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('https://cdn.poehali.dev/projects/fc24805a-ff2b-48b2-8b63-b748ef1d47c0/files/51cb9a3f-6466-46cd-9ef2-9dae15ac58e6.jpg')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/60" />
        <div className="relative z-10 text-center max-w-4xl px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Спортивная школа<br />олимпийского резерва
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-white/90">
            им. В.М. Боброва, г. Ступино
          </p>
          <Link to="/schedule">
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-white text-lg px-8 py-6">
              Записаться
            </Button>
          </Link>
        </div>
      </section>

      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-8 text-primary">О школе</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto text-lg leading-relaxed">
            Муниципальное бюджетное учреждение дополнительного образования<br />
            «Спортивная школа олимпийского резерва имени В.М. Боброва»
          </p>
          <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-6 mb-12">
            {sports.map((sport, idx) => (
              <Card key={idx} className="hover:shadow-xl transition-all hover:-translate-y-1">
                <CardContent className="p-6 text-center h-full flex flex-col items-center justify-center">
                  <div className="bg-accent/10 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                    <Icon name={sport.icon} size={40} className="text-accent" />
                  </div>
                  <h3 className="font-semibold text-sm leading-tight">{sport.name}</h3>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center">
            <Link to="/about">
              <Button variant="outline" size="lg">
                Подробнее о школе
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-primary">Новости</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {news.map((item, idx) => (
              <Card key={idx} className="hover:shadow-xl transition-all hover:-translate-y-1 overflow-hidden">
                <CardContent className="p-0">
                  <img 
                    src={item.image}
                    alt={item.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <p className="text-sm text-muted-foreground mb-2">{item.date}</p>
                    <h3 className="font-bold text-xl mb-3">{item.title}</h3>
                    <p className="text-muted-foreground mb-4">{item.excerpt}</p>
                    <Button variant="link" className="p-0 h-auto text-accent">
                      Читать далее →
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="hover:shadow-xl transition-all">
              <CardContent className="p-8 text-center">
                <div className="bg-accent/10 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                  <Icon name="Building2" size={40} className="text-accent" />
                </div>
                <h3 className="font-bold text-2xl mb-2">Ледовый дворец</h3>
                <p className="text-muted-foreground">
                  Большая и малая ледовая арена для тренировок
                </p>
              </CardContent>
            </Card>
            <Card className="hover:shadow-xl transition-all">
              <CardContent className="p-8 text-center">
                <div className="bg-accent/10 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                  <Icon name="Dumbbell" size={40} className="text-accent" />
                </div>
                <h3 className="font-bold text-2xl mb-2">ФОК "ОКА"</h3>
                <p className="text-muted-foreground">
                  Физкультурно-оздоровительный комплекс
                </p>
              </CardContent>
            </Card>
            <Card className="hover:shadow-xl transition-all">
              <CardContent className="p-8 text-center">
                <div className="bg-accent/10 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                  <Icon name="Home" size={40} className="text-accent" />
                </div>
                <h3 className="font-bold text-2xl mb-2">База "Берёзка"</h3>
                <p className="text-muted-foreground">
                  Учебно-тренировочная база с интернатом
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

export default Index;
