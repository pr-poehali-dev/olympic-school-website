import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Contacts = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-center mb-8 text-primary">Контакты</h1>
          <p className="text-center text-xl text-muted-foreground mb-16 max-w-4xl mx-auto">
            Свяжитесь с нами удобным способом
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Card className="hover:shadow-xl transition-all">
              <CardContent className="p-8 text-center">
                <div className="bg-accent/10 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                  <Icon name="MapPin" size={40} className="text-accent" />
                </div>
                <h2 className="font-bold text-xl mb-3">Адрес</h2>
                <p className="text-muted-foreground leading-relaxed">
                  142800, Московская область,<br />
                  г.о. Ступино,<br />
                  пр. Победы, вл.8, стр.1
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all">
              <CardContent className="p-8 text-center">
                <div className="bg-accent/10 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                  <Icon name="Phone" size={40} className="text-accent" />
                </div>
                <h2 className="font-bold text-xl mb-3">Телефон</h2>
                <div className="space-y-2">
                  <p className="text-muted-foreground">+7 (496) 647-77-30</p>
                  <p className="text-sm text-muted-foreground">Пн-Пт: 9:00-18:00</p>
                  <p className="text-sm text-muted-foreground">Сб-Вс: 10:00-17:00</p>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all">
              <CardContent className="p-8 text-center">
                <div className="bg-accent/10 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                  <Icon name="Mail" size={40} className="text-accent" />
                </div>
                <h2 className="font-bold text-xl mb-3">Email</h2>
                <div className="space-y-2">
                  <p className="text-muted-foreground">office@ledoviy-st.ru</p>
                  <p className="text-sm text-muted-foreground">Ответим в течение 24 часов</p>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="mb-16">
            <CardContent className="p-0">
              <div className="w-full h-[500px]">
                <iframe
                  src="https://yandex.ru/map-widget/v1/?ll=38.074843%2C54.900196&mode=search&oid=1099680871&ol=biz&z=16"
                  width="100%"
                  height="100%"
                  frameBorder="0"
                  className="rounded-lg"
                  title="Карта местоположения СШОР им. В.М. Боброва"
                ></iframe>
              </div>
            </CardContent>
          </Card>

          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-6 text-primary">Руководство</h2>
                <div className="space-y-4">
                  <div>
                    <p className="font-semibold mb-1">Директор</p>
                    <p className="text-muted-foreground">Разумовский Дмитрий Александрович</p>
                  </div>
                  <div>
                    <p className="font-semibold mb-1">Приёмные часы</p>
                    <p className="text-muted-foreground">Вторник, Четверг: 14:00-17:00</p>
                    <p className="text-sm text-muted-foreground mt-1">Предварительная запись по телефону</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-6 text-primary">Реквизиты</h2>
                <div className="space-y-3 text-sm">
                  <div>
                    <p className="font-semibold">Полное наименование:</p>
                    <p className="text-muted-foreground">
                      Муниципальное бюджетное учреждение дополнительного образования 
                      «Спортивная школа олимпийского резерва имени В.М. Боброва»
                    </p>
                  </div>
                  <div>
                    <p className="font-semibold">Сокращённое наименование:</p>
                    <p className="text-muted-foreground">МБУ "СШОР им. В.М. Боброва"</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-3xl font-bold text-center mb-12 text-primary">Структурные подразделения</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <Icon name="Building2" className="text-accent" size={24} />
                  <h3 className="font-bold text-lg">Ледовый дворец спорта</h3>
                </div>
                <p className="text-muted-foreground text-sm mb-2">
                  Адрес: пр. Победы, вл.8, стр.1
                </p>
                <p className="text-muted-foreground text-sm">
                  Сайт: <a href="http://ledoviy-st.ru/" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">ledoviy-st.ru</a>
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <Icon name="Dumbbell" className="text-accent" size={24} />
                  <h3 className="font-bold text-lg">ФОК "ОКА"</h3>
                </div>
                <p className="text-muted-foreground text-sm">
                  Физкультурно-оздоровительный комплекс
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <Icon name="Trophy" className="text-accent" size={24} />
                  <h3 className="font-bold text-lg">СК "Прогресс-Смена"</h3>
                </div>
                <p className="text-muted-foreground text-sm">
                  Спортивный комплекс
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <Icon name="Home" className="text-accent" size={24} />
                  <h3 className="font-bold text-lg">УТБ "Берёзка"</h3>
                </div>
                <p className="text-muted-foreground text-sm">
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

export default Contacts;
