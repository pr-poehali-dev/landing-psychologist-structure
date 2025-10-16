import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [formData, setFormData] = useState({ name: '', contact: '', messenger: 'telegram', request: '' });
  const [isOpen, setIsOpen] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setIsOpen(false);
    setFormData({ name: '', contact: '', messenger: 'telegram', request: '' });
  };

  const scrollToForm = () => {
    document.getElementById('name-final')?.scrollIntoView({ behavior: 'smooth', block: 'center' });
  };

  return (
    <div className="min-h-screen bg-background">
      <section className="relative min-h-screen flex items-center justify-center px-4 py-20 bg-gradient-to-b from-primary/10 to-background">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in">
            <h1 className="text-5xl lg:text-6xl font-bold text-foreground leading-tight">
              Помогу вернуть радость жизни и построить здоровые отношения
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Психолог для тех, кто готов к переменам. Провожу индивидуальные онлайн-консультации по всему миру.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Icon name="CheckCircle" className="text-primary" size={24} />
                <span className="text-foreground">Первая встреча-знакомство — 20 минут бесплатно</span>
              </div>
              <div className="flex items-center gap-3">
                <Icon name="CheckCircle" className="text-primary" size={24} />
                <span className="text-foreground">Более 5000 часов практики</span>
              </div>
              <div className="flex items-center gap-3">
                <Icon name="CheckCircle" className="text-primary" size={24} />
                <span className="text-foreground">Бережный подход без осуждения и директивных советов</span>
              </div>
            </div>
            <Dialog open={isOpen} onOpenChange={setIsOpen}>
              <DialogTrigger asChild>
                <Button size="lg" className="text-lg px-8 py-6 rounded-full shadow-lg hover:shadow-xl transition-all">
                  Записаться на бесплатную встречу-знакомство
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-md">
                <DialogHeader>
                  <DialogTitle>Запись на консультацию</DialogTitle>
                  <DialogDescription>
                    Заполните форму, и я свяжусь с вами в течение 24 часов
                  </DialogDescription>
                </DialogHeader>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Label htmlFor="name">Ваше имя *</Label>
                    <Input id="name" required value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} />
                  </div>
                  <div>
                    <Label htmlFor="messenger">Предпочтительный способ связи *</Label>
                    <select 
                      id="messenger" 
                      required 
                      value={formData.messenger} 
                      onChange={(e) => setFormData({ ...formData, messenger: e.target.value })}
                      className="w-full px-3 py-2 border border-input bg-background rounded-md"
                    >
                      <option value="telegram">Telegram</option>
                      <option value="whatsapp">WhatsApp</option>
                    </select>
                  </div>
                  <div>
                    <Label htmlFor="contact">Ваш контакт *</Label>
                    <Input id="contact" required placeholder="@username или номер телефона" value={formData.contact} onChange={(e) => setFormData({ ...formData, contact: e.target.value })} />
                  </div>
                  <div>
                    <Label htmlFor="request">Кратко опишите ваш запрос</Label>
                    <Textarea id="request" rows={3} value={formData.request} onChange={(e) => setFormData({ ...formData, request: e.target.value })} />
                  </div>
                  <Button type="submit" className="w-full">Отправить заявку</Button>
                  <p className="text-xs text-muted-foreground text-center">
                    Нажимая на кнопку, вы даете согласие на обработку персональных данных
                  </p>
                </form>
              </DialogContent>
            </Dialog>
            <p className="text-sm text-muted-foreground">
              Это 20-минутный онлайн-звонок, чтобы понять, сможем ли мы помочь друг другу
            </p>
          </div>
          <div className="relative hidden lg:block">
            <div className="aspect-square rounded-3xl shadow-2xl overflow-hidden">
              <img 
                src="https://cdn.poehali.dev/projects/261100a0-8528-4114-bc3d-a1c038befac7/files/9f7b0a98-b75e-4b66-aeb8-9fd54e77c558.jpg" 
                alt="Алла Байдак - психолог" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-secondary/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4">Я могу помочь, если вы...</h2>
          <p className="text-center text-muted-foreground mb-8">Узнайте себя в одной из ситуаций</p>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6 space-y-4">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                  <Icon name="Heart" className="text-primary" size={24} />
                </div>
                <h3 className="text-xl font-semibold">Тревога, апатия, выгорание</h3>
                <ul className="text-muted-foreground space-y-2 text-sm">
                  <li>• Чувствуете, что постоянно всё перепроверяете?</li>
                  <li>• Навязчивые мысли мешают жить и отнимают силы?</li>
                  <li>• Апатия и выгорание забрали все краски?</li>
                  <li>• Потеряли себя и не знаете, чего хотите?</li>
                </ul>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6 space-y-4">
                <div className="w-12 h-12 rounded-full bg-accent/40 flex items-center justify-center">
                  <Icon name="Users" className="text-primary" size={24} />
                </div>
                <h3 className="text-xl font-semibold">Проблемы в отношениях</h3>
                <ul className="text-muted-foreground space-y-2 text-sm">
                  <li>• Постоянно ссоритесь по пустякам, а потом жалеете?</li>
                  <li>• Созависимость — не можете сказать «нет» близким?</li>
                  <li>• Чувствуете себя одиноко даже рядом с партнёром?</li>
                  <li>• Боитесь остаться одной, но и вместе невыносимо?</li>
                </ul>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6 space-y-4">
                <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center">
                  <Icon name="Sparkles" className="text-primary" size={24} />
                </div>
                <h3 className="text-xl font-semibold">Жизненные кризисы</h3>
                <ul className="text-muted-foreground space-y-2 text-sm">
                  <li>• Переживаете развод или расставание — кажется, жизнь рухнула?</li>
                  <li>• Потеря близкого человека — горе не отпускает?</li>
                  <li>• Стоите перед важным выбором и парализованы страхом ошибки?</li>
                  <li>• Чувствуете, что «застряли» и не знаете, куда двигаться?</li>
                </ul>
              </CardContent>
            </Card>
          </div>
          <div className="text-center mt-8">
            <button onClick={scrollToForm} className="text-primary hover:underline font-medium inline-flex items-center gap-2">
              <Icon name="MessageCircle" size={16} />
              Узнали себя? Давайте обсудим вашу ситуацию
            </button>
          </div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Понятный и безопасный процесс работы</h2>
          <div className="space-y-8">
            {[
              { icon: 'MessageCircle', title: 'Знакомство', description: 'Вы оставляете заявку, и мы договариваемся о бесплатной 20-минутной встрече. На ней мы знакомимся, вы задаете вопросы, и решаем, подходим ли друг другу.' },
              { icon: 'Compass', title: 'Первая сессия', description: 'Мы глубоко погружаемся в ваш запрос, определяем цели и намечаем план работы. Вы поймете причины своих трудностей.' },
              { icon: 'TrendingUp', title: 'Регулярная работа', description: 'Встречаемся 1 раз в неделю онлайн. С помощью проверенных методик вы учитесь новым способам мышления, находите внутренние опоры.' },
              { icon: 'Award', title: 'Завершение', description: 'Когда вы чувствуете, что достигли цели и готовы двигаться самостоятельно, мы проводим завершающую сессию и подводим итоги.' }
            ].map((step, index) => (
              <div key={index} className="flex gap-6 items-start">
                <div className="flex-shrink-0 w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center">
                  <Icon name={step.icon as any} className="text-primary" size={28} />
                </div>
                <div className="flex-grow">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-3xl font-bold text-primary/40">{index + 1}</span>
                    <h3 className="text-2xl font-semibold">{step.title}</h3>
                  </div>
                  <p className="text-muted-foreground text-lg">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-accent/20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">Давайте познакомимся ближе</h2>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="aspect-square rounded-3xl shadow-xl overflow-hidden">
              <img 
                src="https://cdn.poehali.dev/projects/261100a0-8528-4114-bc3d-a1c038befac7/files/642e8d4b-4f2d-4a8a-afe2-e5a7c0e495de.jpg" 
                alt="Алла Байдак в домашней обстановке" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-semibold mb-3">Моя философия</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Я верю, что каждый человек уже имеет внутри себя ресурсы для счастья. Моя задача — помочь вам их найти и научиться ими пользоваться. Я не даю советов, а создаю безопасное пространство для ваших собственных открытий.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-3">Моя квалификация</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex gap-2"><Icon name="GraduationCap" className="text-primary flex-shrink-0" size={20} /><span>Высшее психологическое образование (МГУ, 2015)</span></li>
                  <li className="flex gap-2"><Icon name="BookOpen" className="text-primary flex-shrink-0" size={20} /><span>Гештальт-терапия, 3-летняя программа (500+ часов)</span></li>
                  <li className="flex gap-2"><Icon name="UserCheck" className="text-primary flex-shrink-0" size={20} /><span>Член Ассоциации практикующих психологов</span></li>
                  <li className="flex gap-2"><Icon name="RefreshCw" className="text-primary flex-shrink-0" size={20} /><span>Регулярная личная терапия и супервизия</span></li>
                </ul>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-3">Немного о личном</h3>
                <p className="text-muted-foreground leading-relaxed">
                  В свободное время я занимаюсь йогой и люблю гулять по лесу — это помогает мне восстанавливать ресурс для работы с вами.
                </p>
              </div>
              <Button variant="outline" size="lg" className="mt-4" onClick={() => window.open('https://t.me/alla_psychologist', '_blank')}>
                <Icon name="Send" className="mr-2" size={18} />
                Больше обо мне в Telegram-канале
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4">Выберите удобный формат</h2>
          <p className="text-center text-muted-foreground mb-12">Прозрачные цены без скрытых платежей</p>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="hover:shadow-xl transition-shadow">
              <CardContent className="p-8 space-y-6">
                <div>
                  <h3 className="text-2xl font-semibold mb-2">Разовая консультация</h3>
                  <p className="text-4xl font-bold text-primary">5000 ₽</p>
                  <p className="text-muted-foreground mt-2">50-60 минут</p>
                </div>
                <p className="text-muted-foreground">
                  Для тех, кто хочет разобрать конкретную ситуацию или познакомиться с моим методом работы
                </p>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button variant="outline" className="w-full">Записаться на консультацию</Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-md">
                    <DialogHeader>
                      <DialogTitle>Запись на консультацию</DialogTitle>
                      <DialogDescription>Заполните форму, и я свяжусь с вами</DialogDescription>
                    </DialogHeader>
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div><Label htmlFor="name2">Ваше имя *</Label><Input id="name2" required /></div>
                      <div><Label htmlFor="messenger2">Способ связи *</Label><select id="messenger2" required className="w-full px-3 py-2 border border-input bg-background rounded-md"><option value="telegram">Telegram</option><option value="whatsapp">WhatsApp</option></select></div>
                      <div><Label htmlFor="contact2">Ваш контакт *</Label><Input id="contact2" required placeholder="@username или номер" /></div>
                      <div><Label htmlFor="request2">Опишите ваш запрос</Label><Textarea id="request2" rows={3} /></div>
                      <Button type="submit" className="w-full">Отправить заявку</Button>
                    </form>
                  </DialogContent>
                </Dialog>
              </CardContent>
            </Card>
            <Card className="hover:shadow-xl transition-shadow border-2 border-primary relative">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-medium">
                Рекомендую
              </div>
              <CardContent className="p-8 space-y-6">
                <div>
                  <h3 className="text-2xl font-semibold mb-2">Пакет из 4 сессий</h3>
                  <div className="flex items-baseline gap-2">
                    <p className="text-4xl font-bold text-primary">18 000 ₽</p>
                    <span className="text-sm text-muted-foreground line-through">20 000 ₽</span>
                  </div>
                  <p className="text-muted-foreground mt-2">4 встречи по 50-60 минут</p>
                </div>
                <p className="text-muted-foreground">
                  Для глубокой и системной проработки запроса. Оптимальный формат для достижения устойчивых изменений
                </p>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button className="w-full">Приобрести пакет сессий</Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-md">
                    <DialogHeader>
                      <DialogTitle>Запись на консультацию</DialogTitle>
                      <DialogDescription>Заполните форму, и я свяжусь с вами</DialogDescription>
                    </DialogHeader>
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div><Label htmlFor="name3">Ваше имя *</Label><Input id="name3" required /></div>
                      <div><Label htmlFor="messenger3">Способ связи *</Label><select id="messenger3" required className="w-full px-3 py-2 border border-input bg-background rounded-md"><option value="telegram">Telegram</option><option value="whatsapp">WhatsApp</option></select></div>
                      <div><Label htmlFor="contact3">Ваш контакт *</Label><Input id="contact3" required placeholder="@username или номер" /></div>
                      <div><Label htmlFor="request3">Опишите ваш запрос</Label><Textarea id="request3" rows={3} /></div>
                      <Button type="submit" className="w-full">Отправить заявку</Button>
                    </form>
                  </DialogContent>
                </Dialog>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-secondary/30">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Что говорят клиенты о нашей работе</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { problem: 'Панические атаки и страх выходить из дома', result: 'Спустя 3 месяца терапии я снова езжу в метро и хожу в кино. Вернулось спокойствие', name: 'Анна, 32 года' },
              { problem: 'Созависимые отношения, постоянные конфликты', result: 'Научилась выстраивать границы и говорить о своих потребностях. Отношения изменились к лучшему', name: 'Мария, 28 лет' },
              { problem: 'Выгорание, апатия, потеря смысла', result: 'Нашла новые цели и вернула интерес к жизни. Работа перестала быть единственным источником ценности', name: 'Елена, 35 лет' }
            ].map((testimonial, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6 space-y-4">
                  <div className="space-y-2">
                    <p className="text-sm font-medium text-muted-foreground">Запрос:</p>
                    <p className="text-foreground">{testimonial.problem}</p>
                  </div>
                  <div className="space-y-2">
                    <p className="text-sm font-medium text-primary">Результат:</p>
                    <p className="text-foreground font-medium">{testimonial.result}</p>
                  </div>
                  <p className="text-sm text-muted-foreground italic">— {testimonial.name}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Ответы на частые вопросы</h2>
          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="item-1" className="border rounded-lg px-6">
              <AccordionTrigger className="text-lg font-medium hover:no-underline">
                Гарантируете ли вы результат?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                В психотерапии невозможно дать 100% гарантию, так как результат зависит от нашей общей работы. Я создаю безопасное пространство и применяю проверенные методы, но важна и ваша готовность к изменениям.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2" className="border rounded-lg px-6">
              <AccordionTrigger className="text-lg font-medium hover:no-underline">
                А это конфиденциально?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Да, абсолютно. Я следую этическому кодексу психолога. Всё, что вы говорите на сессии, остается между нами. Исключение — ситуации, угрожающие жизни.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3" className="border rounded-lg px-6">
              <AccordionTrigger className="text-lg font-medium hover:no-underline">
                Что, если я захочу отменить или перенести сессию?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Прошу предупреждать об отмене или переносе не менее чем за 24 часа. Так мы сможем найти новое удобное время. При отмене менее чем за 24 часа сессия оплачивается.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4" className="border rounded-lg px-6">
              <AccordionTrigger className="text-lg font-medium hover:no-underline">
                Как понять, что вы мне подходите?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Именно для этого существует бесплатная 20-минутная встреча-знакомство. На ней мы познакомимся, обсудим ваш запрос, и вы поймете, комфортно ли вам со мной.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5" className="border rounded-lg px-6">
              <AccordionTrigger className="text-lg font-medium hover:no-underline">
                Я никогда не был у психолога, мне страшно. Что делать?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Это абсолютно нормально — бояться перед первым визитом. Многие мои клиенты испытывали такой же страх. На первой встрече мы будем двигаться в вашем темпе, без давления. Вы всегда можете сказать, если вам некомфортно.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      <section className="py-20 px-4 bg-gradient-to-b from-primary/10 to-background">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="text-center space-y-4">
            <h2 className="text-5xl font-bold">Готовы сделать первый шаг к себе?</h2>
            <p className="text-xl text-muted-foreground">
              Запишитесь на бесплатную 20-минутную онлайн-встречу, чтобы понять, как я могу вам помочь. Это вас ни к чему не обязывает.
            </p>
          </div>
          <Card className="max-w-2xl mx-auto">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name-final" className="text-base">Ваше имя *</Label>
                  <Input 
                    id="name-final" 
                    required 
                    placeholder="Как к вам обращаться?"
                    value={formData.name} 
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="h-12"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="messenger-final" className="text-base">Предпочтительный способ связи *</Label>
                  <select 
                    id="messenger-final" 
                    required 
                    value={formData.messenger} 
                    onChange={(e) => setFormData({ ...formData, messenger: e.target.value })}
                    className="w-full h-12 px-4 border border-input bg-background rounded-md"
                  >
                    <option value="telegram">Telegram</option>
                    <option value="whatsapp">WhatsApp</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="contact-final" className="text-base">Ваш контакт *</Label>
                  <Input 
                    id="contact-final" 
                    required 
                    placeholder="@username или номер телефона"
                    value={formData.contact} 
                    onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
                    className="h-12"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="request-final" className="text-base">Кратко опишите ваш запрос</Label>
                  <Textarea 
                    id="request-final" 
                    rows={4}
                    placeholder="Это необязательно, но поможет мне подготовиться к нашей встрече"
                    value={formData.request} 
                    onChange={(e) => setFormData({ ...formData, request: e.target.value })}
                    className="resize-none"
                  />
                  <p className="text-xs text-muted-foreground">Поле необязательное, но помогает лучше подготовиться к встрече</p>
                </div>
                <Button type="submit" size="lg" className="w-full h-12 text-base">
                  Начать изменения
                </Button>
                <p className="text-xs text-muted-foreground text-center">
                  Нажимая на кнопку, вы даете согласие на обработку персональных данных. Я свяжусь с вами в течение 24 часов для уточнения деталей.
                </p>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      <footer className="py-12 px-4 border-t bg-secondary/20">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="font-semibold mb-4">Контакты</h3>
              <div className="space-y-2 text-sm text-muted-foreground">
                <p className="flex items-center gap-2"><Icon name="Mail" size={16} />alla@example.com</p>
                <p className="flex items-center gap-2"><Icon name="MessageCircle" size={16} />@alla_psychologist</p>
              </div>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Документы</h3>
              <div className="space-y-2 text-sm">
                <a href="#" className="block text-muted-foreground hover:text-foreground">Политика конфиденциальности</a>
                <a href="#" className="block text-muted-foreground hover:text-foreground">Договор-оферта</a>
              </div>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Социальные сети</h3>
              <div className="flex gap-4">
                <a href="https://t.me/alla_psychologist" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground"><Icon name="Send" size={20} /></a>
                <a href="#" className="text-muted-foreground hover:text-foreground"><Icon name="Instagram" size={20} /></a>
              </div>
            </div>
          </div>
          <div className="pt-8 border-t text-center text-sm text-muted-foreground">
            <p>© 2025 Алла Байдак. ИП Байдак А.В. ИНН 123456789012</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
