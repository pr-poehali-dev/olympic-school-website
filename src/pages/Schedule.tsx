import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import Icon from "@/components/ui/icon";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useState } from "react";

const Schedule = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    position: "",
    phone: "",
    section: ""
  });

  const sports = [
    "Хоккей",
    "Фигурное катание",
    "Художественная гимнастика",
    "Рукопашный бой",
    "Волейбол",
    "Шашки"
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Заявка отправлена! Мы свяжемся с вами в ближайшее время.");
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-center mb-8 text-primary">Расписание</h1>
          <p className="text-center text-xl text-muted-foreground mb-16 max-w-4xl mx-auto">
            График тренировок и массовых катаний
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <Card className="hover:shadow-xl transition-all">
              <CardContent className="p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="bg-accent/10 rounded-full p-4">
                    <Icon name="Calendar" size={40} className="text-accent" />
                  </div>
                  <h2 className="font-bold text-3xl">Тренировки</h2>
                </div>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold mb-2">Будние дни</h3>
                    <p className="text-muted-foreground">15:00 - 21:00</p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Выходные</h3>
                    <p className="text-muted-foreground">09:00 - 20:00</p>
                  </div>
                  <p className="text-sm text-muted-foreground pt-4">
                    Расписание тренировок по секциям уточняйте у тренеров или по телефону
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all">
              <CardContent className="p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="bg-accent/10 rounded-full p-4">
                    <Icon name="Users" size={40} className="text-accent" />
                  </div>
                  <h2 className="font-bold text-3xl">Массовые катания</h2>
                </div>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold mb-2">Суббота</h3>
                    <p className="text-muted-foreground">14:00 - 16:00, 18:00 - 20:00</p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Воскресенье</h3>
                    <p className="text-muted-foreground">11:00 - 13:00, 15:00 - 17:00</p>
                  </div>
                  <p className="text-sm text-muted-foreground pt-4">
                    Стоимость: 300₽ взрослый, 200₽ детский. Прокат коньков включён.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardContent className="p-8">
              <h2 className="text-3xl font-bold mb-6 text-primary text-center">Записаться в секцию</h2>
              <form onSubmit={handleSubmit} className="space-y-6 max-w-2xl mx-auto">
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
                        <SelectItem key={idx} value={sport}>
                          {sport}
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

      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-8 text-primary">Контактная информация</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card>
              <CardContent className="p-6 text-center">
                <Icon name="Phone" className="text-accent mx-auto mb-3" size={32} />
                <p className="font-semibold mb-1">Телефон</p>
                <p className="text-sm text-muted-foreground">+7 (496) 647-77-30</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <Icon name="Mail" className="text-accent mx-auto mb-3" size={32} />
                <p className="font-semibold mb-1">Email</p>
                <p className="text-sm text-muted-foreground">office@ledoviy-st.ru</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <Icon name="MapPin" className="text-accent mx-auto mb-3" size={32} />
                <p className="font-semibold mb-1">Адрес</p>
                <p className="text-sm text-muted-foreground">пр. Победы, вл.8, стр.1</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Schedule;
