import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const About = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-center mb-8 text-primary">О школе</h1>
          <p className="text-center text-xl text-muted-foreground mb-16 max-w-4xl mx-auto">
            Муниципальное бюджетное учреждение дополнительного образования<br />
            «Спортивная школа олимпийского резерва имени В.М. Боброва»
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 max-w-5xl">
          <Card className="mb-12">
            <CardContent className="p-8">
              <h2 className="text-3xl font-bold mb-6 text-primary">Общая информация</h2>
              <div className="space-y-4 text-lg leading-relaxed">
                <p>
                  <strong>Дата основания:</strong> 26 мая 2005 года
                </p>
                <p>
                  <strong>Директор:</strong> Разумовский Дмитрий Александрович
                </p>
                <p>
                  7 августа 2024 года к учреждению присоединена МБУДО "СШ "Прогресс-Смена" 
                  (постановление администрации г.о. Ступино от 08.04.2024 № 1607-п)
                </p>
              </div>
            </CardContent>
          </Card>

          <h2 className="text-3xl font-bold mb-8 text-primary text-center">Структура учреждения</h2>
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <Card className="hover:shadow-xl transition-all">
              <CardContent className="p-8">
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-accent/10 rounded-full p-4">
                    <Icon name="Building2" size={40} className="text-accent" />
                  </div>
                  <h3 className="font-bold text-2xl">Ледовый дворец спорта</h3>
                </div>
                <p className="text-muted-foreground">
                  Большая и малая ледовая арена, оснащенные современным оборудованием для тренировок по хоккею и фигурному катанию
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all">
              <CardContent className="p-8">
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-accent/10 rounded-full p-4">
                    <Icon name="Dumbbell" size={40} className="text-accent" />
                  </div>
                  <h3 className="font-bold text-2xl">ФОК "ОКА"</h3>
                </div>
                <p className="text-muted-foreground">
                  Физкультурно-оздоровительный комплекс с залами для различных видов спорта и тренажерными площадками
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all">
              <CardContent className="p-8">
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-accent/10 rounded-full p-4">
                    <Icon name="Trophy" size={40} className="text-accent" />
                  </div>
                  <h3 className="font-bold text-2xl">СК "Прогресс-Смена"</h3>
                </div>
                <p className="text-muted-foreground">
                  Спортивный комплекс для тренировок по различным видам спорта с современной инфраструктурой
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all">
              <CardContent className="p-8">
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-accent/10 rounded-full p-4">
                    <Icon name="Home" size={40} className="text-accent" />
                  </div>
                  <h3 className="font-bold text-2xl">База "Берёзка"</h3>
                </div>
                <p className="text-muted-foreground">
                  Учебно-тренировочная база с интернатом для иногородних спортсменов, включающая комфортабельное проживание и питание
                </p>
              </CardContent>
            </Card>
          </div>

          <Card className="mb-12">
            <CardContent className="p-8">
              <h2 className="text-3xl font-bold mb-6 text-primary">Наша миссия</h2>
              <p className="text-lg leading-relaxed mb-4">
                Мы готовим спортсменов высокого класса по 6 направлениям с 1978 года. 
                Наша главная цель — воспитание здорового поколения и подготовка спортивного резерва для сборных команд России.
              </p>
              <p className="text-lg leading-relaxed">
                Школа является одним из ведущих спортивных учреждений Московской области, 
                обеспечивающим качественную подготовку спортсменов по олимпийским видам спорта.
              </p>
            </CardContent>
          </Card>

          <div className="grid md:grid-cols-3 gap-6">
            <Card>
              <CardContent className="p-8 text-center">
                <div className="text-5xl font-bold text-accent mb-2">1978</div>
                <p className="text-muted-foreground">Год основания</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-8 text-center">
                <div className="text-5xl font-bold text-accent mb-2">6</div>
                <p className="text-muted-foreground">Спортивных отделений</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-8 text-center">
                <div className="text-5xl font-bold text-accent mb-2">50+</div>
                <p className="text-muted-foreground">Призёров России</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
