import React, { Component } from 'react';
import s from './Price.module.css';
import gs from './../../App.module.css';
import Subscription from './../helpers/subscribtion-form/Subscription';



class Price extends Component {
    render() {
        return (
            <div className={s.price}>
                <div className={gs.sectionWhite}>
                    <h2>Стоимость</h2>
                    <h3 className={s.service}>Очная сессия в Москве</h3>
                    <p>1. Личные встречи проходят в уютном кабинете в центре Москвы. Длительность сессии - 55-60 минут.

                    </p>
                </div>

                <div className={gs.sectionGrey}>
                    <p>2. На первой встрече мы с вами знакомимся, вы рассказываете про себя и про проблемы,
                        которые хотели бы решить с помощью наших сессий. Я задаю уточняющие вопросы,
                        формирую гипотезы и предлагаю стратегию работы. Мы проводим 4 пробные сессии,
                        на которых у вас будет возможность познакомиться с методом и почувствовать
                        меня в контакте. Если ваша проблема может быть решена только в формате длительной
                        терапии, то на 5ой встрече мы заключаем с вами психологический контракт
                        (это стандартный процесс в любом терапевтическом процессе), который описывает
                        наш формат и правила взаимодействия, чтобы сделать его эффективным.
                    </p>
                </div>

                <div className={gs.sectionWhite}>
                    <p>3. Формат работы на последующих встречах выглядит следующим образом.
                    В начале мы настраиваемся, вы озвучиваете запрос - тему, над которой хотели
                    бы поработать сегодня. Минут 20-30 мы обсуждаем вашу ситуацию, я задаю вам
                    уточняющие вопросы, которые уже могут натолкнуть на осознание каких-то вещей.
                    </p>
                </div>

                <div className={gs.sectionGrey}>
                    <p>4. Далее я предлагаю вам специальные упражнения с использованием движения,
                    дыхания и иногда звуков, через которые вы можете понять и почувствовать причины
                    вашей проблемы, а также в ходе сессии получаете инструменты для её решения.
                    </p>
                </div>

                <div className={gs.sectionWhite}>
                    <p>5. Затем мы завершаем сессию, проговариваем то ценное, что вы для себя открыли
                    и поняли за текущую встречу.
                    </p>
                </div>

                <div className={gs.sectionGrey}>
                    <p>6. Проблемы бывают разной сложности и глубины, у разных людей - разная готовность
                    идти глубоко в процесс и разная скорость прохождения терапии, а потому
                    нет единого ответа, сколько понадобится сессий - всё обсуждается в каждом
                    случае индивидуально после предварительного знакомства и общения.
                    В случае регулярной терапии рекомендуемая частота встреч - 1 раз в неделю.
                    </p>

                    <h3>Стоимость 1 сессии - 2500 руб.</h3>
                </div>

                <div className={gs.sectionWhite}>
                    <h3 className={s.service}>Онлайн-встреча</h3>
                    <p>1. Мы с вами созваниваемся по скайпу в оговоренное время. Длительность сессии - 55-60 минут. Важно, чтобы вы находились в уединенном тихом месте, где сможете посвятить 1 час времени только себе, без посторонних людей и отвлекающих факторов. Желательно, чтобы руки были свободны, а потому если вы с телефона, он должен быть на подставке.
                    </p>
                </div>

                <div className={gs.sectionGrey}>
                    <p>2. На первой встрече мы с вами знакомимся, вы рассказываете про себя и про проблемы, которые хотели бы решить с помощью наших сессий. Я задаю уточняющие вопросы, формирую гипотезы и предлагаю стратегию работы. Мы проводим 4 пробные сессии, на которых у вас будет возможность познакомиться с методом и почувствовать меня в контакте. Если ваша проблема может быть решена только в формате длительной терапии, то на 5ой встрече мы заключаем с вами психологический контракт (это стандартный процесс в любом терапевтическом процессе), который описывает наш формат и правила взаимодействия, чтобы сделать его эффективным.</p>
                </div>
                <div className={gs.sectionWhite}>
                    <p>3. Формат работы на последующих встречах выглядит следующим образом. Мы обсуждаем ваш запрос. Я задаю уточняющие или наводящие вопросы. Анализирую ситуацию и подсвечиваю, что на самом деле происходит внутри вас на подсознательном уровне.</p>
                </div>
                <div className={gs.sectionGrey}>
                    <p>4. Мы ищем с вами пути решения сложившейся проблемы, осваиваем новые стратегии реагирования и поведения. В зависимости от запроса я могу предложить мягкие телесные практики, которые возможно делать самостоятельно и удалённо.</p>
                </div>
                <div className={gs.sectionWhite}>
                    <p>5. Я также рада буду предложить домашнее задание. Если вы готовы его выполнять - это значительно ускорит процесс терапии.</p>
                </div>
                <div className={gs.sectionGrey}>
                    <p>6. Проблемы бывают разной сложности и глубины, у разных людей - разная готовность идти глубоко в процесс и разная скорость прохождения терапии, а потому нет единого ответа, сколько понадобится сессий - всё обсуждается в каждом случае индивидуально после предварительного знакомства и общения. В случае регулярной терапии рекомендуемая частота встреч - 1 раз в неделю.</p>
                    <h3>Стоимость 1 сессии - 2000 руб.</h3>
                
                </div>
                <Subscription/>
            </div>
        );
    }
}

export default Price;