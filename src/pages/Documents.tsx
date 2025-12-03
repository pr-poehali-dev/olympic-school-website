import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Documents = () => {
  const documentCategories = [
    {
      title: "Учредительные документы",
      icon: "FileText",
      documents: [
        "Устав учреждения",
        "Лицензия на образовательную деятельность",
        "Свидетельство о государственной регистрации",
        "ИНН, ОГРН"
      ]
    },
    {
      title: "Локальные акты",
      icon: "ScrollText",
      documents: [
        "Правила внутреннего распорядка",
        "Положение о структурных подразделениях",
        "Положение о приёме обучающихся",
        "Правила поведения обучающихся"
      ]
    },
    {
      title: "Образовательные программы",
      icon: "BookOpen",
      documents: [
        "Программа по хоккею",
        "Программа по фигурному катанию",
        "Программа по художественной гимнастике",
        "Программа по рукопашному бою",
        "Программа по волейболу",
        "Программа по шашкам"
      ]
    },
    {
      title: "Финансовая деятельность",
      icon: "DollarSign",
      documents: [
        "План финансово-хозяйственной деятельности",
        "Муниципальное задание",
        "Отчёт о результатах деятельности",
        "Информация о закупках"
      ]
    },
    {
      title: "Отчёты и планы",
      icon: "ClipboardList",
      documents: [
        "Годовой отчёт",
        "Публичный доклад",
        "План работы на учебный год",
        "Отчёт о самообследовании"
      ]
    },
    {
      title: "Противодействие коррупции",
      icon: "ShieldAlert",
      documents: [
        "План противодействия коррупции",
        "Кодекс этики сотрудников",
        "Порядок сообщения о коррупции",
        "Комиссия по противодействию коррупции"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-center mb-8 text-primary">Документы</h1>
          <p className="text-center text-xl text-muted-foreground mb-16 max-w-4xl mx-auto">
            Нормативные документы и локальные акты учреждения
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {documentCategories.map((category, idx) => (
              <Card key={idx} className="hover:shadow-xl transition-all">
                <CardContent className="p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="bg-accent/10 rounded-full p-4">
                      <Icon name={category.icon} size={32} className="text-accent" />
                    </div>
                    <h2 className="font-bold text-xl">{category.title}</h2>
                  </div>
                  <ul className="space-y-3">
                    {category.documents.map((doc, didx) => (
                      <li key={didx} className="flex items-start gap-2">
                        <Icon name="FileDown" size={16} className="text-muted-foreground mt-1 flex-shrink-0" />
                        <button className="text-left hover:text-accent transition-colors text-sm">
                          {doc}
                        </button>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4 max-w-4xl">
          <Card>
            <CardContent className="p-8">
              <h2 className="text-3xl font-bold mb-6 text-primary text-center">Контактная информация</h2>
              <div className="space-y-4 text-center">
                <p className="text-lg">
                  <strong>Полное наименование:</strong> Муниципальное бюджетное учреждение дополнительного образования 
                  «Спортивная школа олимпийского резерва имени В.М. Боброва»
                </p>
                <p className="text-lg">
                  <strong>Сокращённое наименование:</strong> МБУ "СШОР им. В.М. Боброва"
                </p>
                <p className="text-lg">
                  <strong>Директор:</strong> Разумовский Дмитрий Александрович
                </p>
                <div className="pt-6 flex flex-col sm:flex-row gap-4 justify-center">
                  <div className="flex items-center gap-2 justify-center">
                    <Icon name="Phone" className="text-accent" size={20} />
                    <span>+7 (496) 647-77-30</span>
                  </div>
                  <div className="flex items-center gap-2 justify-center">
                    <Icon name="Mail" className="text-accent" size={20} />
                    <span>office@ledoviy-st.ru</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-3xl font-bold text-center mb-12 text-primary">Полезные ссылки</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <a 
              href="https://mosreg.ru/gubernator" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <Card className="hover:shadow-xl transition-all h-full">
                <CardContent className="p-6 flex items-center gap-4">
                  <Icon name="ExternalLink" className="text-accent" size={32} />
                  <div>
                    <h3 className="font-bold mb-1">Команда губернатора</h3>
                    <p className="text-sm text-muted-foreground">Официальный портал</p>
                  </div>
                </CardContent>
              </Card>
            </a>
            <a 
              href="http://ledoviy-st.ru/" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <Card className="hover:shadow-xl transition-all h-full">
                <CardContent className="p-6 flex items-center gap-4">
                  <Icon name="ExternalLink" className="text-accent" size={32} />
                  <div>
                    <h3 className="font-bold mb-1">Ледовый дворец спорта</h3>
                    <p className="text-sm text-muted-foreground">Официальный сайт</p>
                  </div>
                </CardContent>
              </Card>
            </a>
            <a 
              href="http://sdyusshor-bobrova.edusite.ru" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <Card className="hover:shadow-xl transition-all h-full">
                <CardContent className="p-6 flex items-center gap-4">
                  <Icon name="ExternalLink" className="text-accent" size={32} />
                  <div>
                    <h3 className="font-bold mb-1">Образовательный портал</h3>
                    <p className="text-sm text-muted-foreground">Старая версия сайта</p>
                  </div>
                </CardContent>
              </Card>
            </a>
            <a 
              href="#" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <Card className="hover:shadow-xl transition-all h-full">
                <CardContent className="p-6 flex items-center gap-4">
                  <Icon name="ExternalLink" className="text-accent" size={32} />
                  <div>
                    <h3 className="font-bold mb-1">Противодействие коррупции</h3>
                    <p className="text-sm text-muted-foreground">Информация для граждан</p>
                  </div>
                </CardContent>
              </Card>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Documents;
