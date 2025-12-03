import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import Icon from "@/components/ui/icon";
import { useState } from "react";

const Index = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    position: "",
    phone: "",
    section: ""
  });

  const sports = [
    { name: "Хоккей", icon: "Disc3" },
    { name: "Фигурное катание", icon: "Sparkles" },
    { name: "Художественная гимнастика", icon: "Trophy" },
    { name: "Рукопашный бой", icon: "Swords" },
    { name: "Волейбол", icon: "Circle" },
    { name: "Шашки", icon: "Grid3x3" },
  ];

  const coaches = [
    { name: "Иванов Сергей", specialty: "Хоккей", experience: "15 лет" },
    { name: "Петрова Елена", specialty: "Фигурное катание", experience: "12 лет" },
    { name: "Сидоров Дмитрий", specialty: "Рукопашный бой", experience: "10 лет" },
    { name: "Козлова Анна", specialty: "Гимнастика", experience: "8 лет" },
  ];

  const achievements = [
    "Более 50 призёров Чемпионата России",
    "15 мастеров спорта международного класса",
    "Победители первенства Московской области",
    "Участники Олимпийских игр",
  ];

  const galleryImages = [
    { url: "https://cdn.poehali.dev/projects/fc24805a-ff2b-48b2-8b63-b748ef1d47c0/files/8151c033-3b59-4cb3-b015-9628078c31e3.jpg", title: "Тренировка по хоккею" },
    { url: "https://cdn.poehali.dev/projects/fc24805a-ff2b-48b2-8b63-b748ef1d47c0/files/64b3233b-8417-4930-9e8d-7ac1bf67cdbe.jpg", title: "Соревнования по фигурному катанию" },
    { url: "https://cdn.poehali.dev/projects/fc24805a-ff2b-48b2-8b63-b748ef1d47c0/files/d3310136-8bcb-4785-8e05-674517eda301.jpg", title: "Художественная гимнастика" },
    { url: "https://cdn.poehali.dev/projects/fc24805a-ff2b-48b2-8b63-b748ef1d47c0/files/6599221c-4842-474f-b070-4d27bc570d2d.jpg", title: "Волейбол" },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div className="min-h-screen bg-white">
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
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Icon name="Trophy" size={32} className="text-accent" />
            <span className="text-xl font-bold">СШОР им. В.М. Боброва</span>
          </div>
          <div className="hidden md:flex gap-6 text-sm font-medium">
            <a href="#about" className="hover:text-accent transition-colors">О школе</a>
            <a href="#sports" className="hover:text-accent transition-colors">Отделения</a>
            <a href="#coaches" className="hover:text-accent transition-colors">Тренеры</a>
            <a href="#register" className="hover:text-accent transition-colors">Записаться</a>
            <a href="#contacts" className="hover:text-accent transition-colors">Контакты</a>
          </div>
        </div>
      </nav>

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
          <Button size="lg" className="bg-accent hover:bg-accent/90 text-white text-lg px-8 py-6">
            Записаться
          </Button>
        </div>
      </section>

      <section id="about" className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-primary">О школе</h2>
          <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-6">
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
          <p className="text-center text-muted-foreground mt-12 max-w-3xl mx-auto text-lg leading-relaxed">
            Мы готовим спортсменов высокого класса по 6 направлениям с 1978 года.
          </p>
        </div>
      </section>

      <section id="coaches" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-primary">Наши тренеры</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {coaches.map((coach, idx) => (
              <Card key={idx} className="hover:shadow-xl transition-all">
                <CardContent className="p-0">
                  <div className="bg-secondary h-64 flex items-center justify-center">
                    <Icon name="User" size={80} className="text-muted-foreground" />
                  </div>
                  <div className="p-6">
                    <h3 className="font-bold text-xl mb-2">{coach.name}</h3>
                    <p className="text-accent font-semibold mb-1">{coach.specialty}</p>
                    <p className="text-sm text-muted-foreground">Стаж: {coach.experience}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="register" className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-primary">
            Записаться в секцию
          </h2>
          <Card className="max-w-2xl mx-auto">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="fullName">ФИО</Label>
                  <Input
                    id="fullName"
                    placeholder="Иванов Иван Иванович"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="position">Должность</Label>
                  <Input
                    id="position"
                    placeholder="Администратор ФОК"
                    value={formData.position}
                    onChange={(e) => setFormData({ ...formData, position: e.target.value })}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">Телефон</Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="+7 495 644 12 13"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="section">Выбор секции</Label>
                  <Select value={formData.section} onValueChange={(value) => setFormData({ ...formData, section: value })}>
                    <SelectTrigger id="section">
                      <SelectValue placeholder="Выберите секцию" />
                    </SelectTrigger>
                    <SelectContent>
                      {sports.map((sport, idx) => (
                        <SelectItem key={idx} value={sport.name}>
                          {sport.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <Button type="submit" className="w-full bg-accent hover:bg-accent/90" size="lg">
                  Отправить заявку
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-primary">Наши достижения</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
            <div>
              <img 
                src="https://cdn.poehali.dev/projects/fc24805a-ff2b-48b2-8b63-b748ef1d47c0/files/c9997f9e-f7d9-49da-ae9f-a0f2d1511c97.jpg"
                alt="Награды"
                className="rounded-2xl shadow-2xl"
              />
            </div>
            <div className="space-y-6">
              {achievements.map((achievement, idx) => (
                <div key={idx} className="flex items-start gap-4">
                  <div className="bg-accent/10 rounded-full p-3 flex-shrink-0">
                    <Icon name="Award" size={24} className="text-accent" />
                  </div>
                  <p className="text-lg pt-2">{achievement}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-primary">
            Галерея
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {galleryImages.map((image, idx) => (
              <Card key={idx} className="overflow-hidden hover:shadow-xl transition-all hover:-translate-y-1">
                <CardContent className="p-0">
                  <img 
                    src={image.url}
                    alt={image.title}
                    className="w-full h-64 object-cover"
                  />
                  <div className="p-4">
                    <p className="font-semibold text-sm">{image.title}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-primary">
            Интернат "Берёзка"
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
            <div>
              <img 
                src="https://cdn.poehali.dev/files/06f8446e-0297-4e39-b288-aff49f226acc.png"
                alt="Интернат Берёзка"
                className="rounded-2xl shadow-2xl"
              />
            </div>
            <div>
              <p className="text-lg leading-relaxed mb-6">
                При спортивной школе работает комфортабельный интернат для иногородних спортсменов. 
                Современные условия проживания, питание и медицинское сопровождение.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Icon name="Check" className="text-accent" size={20} />
                  <span>2-3 местные номера</span>
                </div>
                <div className="flex items-center gap-3">
                  <Icon name="Check" className="text-accent" size={20} />
                  <span>4-разовое питание</span>
                </div>
                <div className="flex items-center gap-3">
                  <Icon name="Check" className="text-accent" size={20} />
                  <span>Медицинский контроль</span>
                </div>
                <div className="flex items-center gap-3">
                  <Icon name="Check" className="text-accent" size={20} />
                  <span>Учебные классы</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contacts" className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-primary">Контакты</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-12">
            <Card>
              <CardContent className="p-8 text-center">
                <div className="bg-accent/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Icon name="MapPin" size={32} className="text-accent" />
                </div>
                <h3 className="font-bold text-lg mb-2">Адрес</h3>
                <p className="text-muted-foreground">
                  142803, Московская область,<br />
                  город Ступино,<br />
                  пр-кт Победы, д.8 к.1
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-8 text-center">
                <div className="bg-accent/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Icon name="Phone" size={32} className="text-accent" />
                </div>
                <h3 className="font-bold text-lg mb-2">Телефон</h3>
                <p className="text-muted-foreground">
                  +7 (496) 642-12-34<br />
                  +7 (496) 642-56-78
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-8 text-center">
                <div className="bg-accent/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Icon name="Mail" size={32} className="text-accent" />
                </div>
                <h3 className="font-bold text-lg mb-2">Email</h3>
                <p className="text-muted-foreground">
                  info@sshor-bobrov.ru<br />
                  sport@stupino.ru
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="max-w-5xl mx-auto">
            <Card>
              <CardContent className="p-0">
                <div className="w-full h-[400px]">
                  <iframe
                    src="https://yandex.ru/map-widget/v1/?ll=38.074600%2C54.899900&z=16&l=map&pt=38.074600,54.899900,pm2rdm"
                    width="100%"
                    height="100%"
                    frameBorder="0"
                    className="rounded-lg"
                    title="Карта местоположения СШОР"
                  ></iframe>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-12 bg-white border-y">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center items-center gap-6">
            <a 
              href="https://mosreg.ru/gubernator" 
              target="_blank" 
              rel="noopener noreferrer"
              className="transition-transform hover:scale-105"
            >
              <img 
                src="https://cdn.poehali.dev/files/44a9527b-037f-49ad-ba24-07bd1843e76d.png" 
                alt="Команда губернатора | МОСОБЛСПОРТ | Противодействие коррупции"
                className="h-16 w-auto"
              />
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
                <a href="#about" className="block hover:text-accent transition-colors">О школе</a>
                <a href="#coaches" className="block hover:text-accent transition-colors">Тренеры</a>
                <a href="#register" className="block hover:text-accent transition-colors">Записаться</a>
                <a href="#contacts" className="block hover:text-accent transition-colors">Контакты</a>
              </div>
            </div>
            <div>
              <h4 className="font-bold mb-4">Контакты</h4>
              <div className="space-y-2 text-sm text-primary-foreground/80">
                <p>142803, Московская область, г. Ступино, пр-кт Победы, д.8 к.1</p>
                <p>+7 (496) 642-12-34</p>
                <p>info@sshor-bobrov.ru</p>
              </div>
            </div>
          </div>
          <div className="border-t border-primary-foreground/20 pt-8 text-center text-sm text-primary-foreground/60">
            <p>© 2024 СШОР им. В.М. Боброва. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
