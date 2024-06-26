import { Container} from 'react-bootstrap';

import blockchain1 from "../../img/whatIsBlockChainPage/blockchain1.jpeg";

import "./whatIsBlockChain.css";

function WhatIsBlockChain() {
    return (
            <Container className="mainBlockWIB">
                <base target="_blank"></base>
                <div className="infoArticle">
                    <p>Опубликовано: 11.04.2024</p>
                    <p>Время чтения статьи: 11 мин.</p>
                </div>
                <h1 className="mainTitile">Что такое BlockChain?</h1>
                <div className="part1Article">
                    <div className="blockchain1Div">
                    <img src={blockchain1} className="blockchain1" alt="bch1"/>
                    </div>
                    <div>
                        <p>Если вы читаете эту статью – несложно догадаться, что вас привел сюда интерес к самой громкой инновации финансового мира за последние годы – криптовалютам, и в первую очередь биткоину. Давайте разберемся, что такое биткоин и почему о нем столько разговоров. Причем не только в соцсетях и на форумах, но и в центробанках, специальных комитетах и правительствах многих стран мира. Присоединиться к сообществу и начать пользоваться новыми цифровыми деньгами очень просто.</p>
                        <p>Термин <strong>"криптовалюта"</strong> - прямой перевод английского "cryptocurrency", то есть виртуальная валюта, защищенная криптографией. В первую очередь, криптовалюта – это быстрая и надежная система платежей и денежных переводов, основанная на новейших технологиях и неподконтрольная ни одному правительству.</p>
                    </div>
                </div>
                
                <div className="part3Article">
                    <p><strong>Блокчейн</strong> (от англ. blockchain — «цепочка блоков») — технология шифрования и хранения данных (реестра), которые распределены по множеству компьютеров, объединенных в общую сеть.</p>
                    <p>Блокчейн — это цифровая база данных информации, которая отражает все совершенные транзакции. Все записи в блокчейне представлены в виде блоков, которые связаны между собой специальными ключами. При этом каждый новый блок содержит данные о предыдущем.</p>
                    <p>Блокчейн применяется для хранения и передачи цифровых данных. Это могут быть как финансовые, так и нефинансовые активы (например, изображения или объекты индустрии видеоигр). Технология блокчейна позволяет присвоить активу уникальную информацию о его принадлежности конкретному лицу. При этом такую информацию невозможно подделать, удалить или незаметно изменить.</p>
                </div>

                <div className="part4Article">
                    <h3><strong>Как и когда появился блокчейн</strong></h3>
                    <p>
                    Основные принципы блокчейна (распределенность и объединение данных о подлинности документа в блоки) были разработаны еще в начале 1990-х годов на основе еще более ранних математических концепций. В 1991–1992 годах американские ученые Уэйкфилд Скотт Сторнетта, Стюарт Хабер и Дэйв Байер описали технологию последовательного создания блоков данных, в которых с помощью криптографических алгоритмов и дерева хешей фиксируются сертификат подлинности и информация о дате генерации. Но технической возможности для практической реализации данной идеи тогда еще не было.
                    </p>
                    <p>
                    В 2004 году американский программист Гарольд Томас Финни II разработал систему RPoW, которая считается прототипом криптовалюты. В октябре 2008 года Сатоси Накамото (это псевдоним человека или группы людей) в научной статье, посвященной первой криптовалюте, <a href="/whatIsBitcoin" alt="link">биткоину</a>, предложил использовать технологию блокчейна для создания децентрализованной и независимой платежной системы с ограниченным предложением активов. Разработка биткоина началась в 2007 году и завершилась в 2009 году.
                    </p>
                    <p>
                    Технология блокчейна стала актуальной тогда, когда появилась необходимость быстрой и надежной передачи цифровых данных.
                    </p>
                </div>

                <div className="part4Article">
                    <h3><strong>Как работает блокчейн</strong></h3>
                    <p>
                    Блокчейн позволяет каждому участнику сети иметь доступ к распределенной базе данных. При этом в блокчейне хранятся не сами данные, а записи о событиях (транзакциях) в их хронологической последовательности.
                    </p>
                    <p>
                    Все новые записи проверяются на подлинность — для занесения в блокчейн их должны подтвердить большинство участников сети. Записи группируются в блоки, которые объединяются в цепочки. Данные, попавшие в блокчейн, нельзя изменить или удалить, не нарушив целостность цепи блоков.
                    </p>
                </div>

                <div className="part4Article">
                    <h3><strong>Виды блокчейна</strong></h3>
                    <p>
                    Блокчейн может работать как в публичной (открытой) сети, к которой имеет доступ любой пользователь, так и в частной (закрытой), например, в корпоративной сети в случае использования конфиденциальных данных. В частных версиях блокчейна могут быть предусмотрены разные уровни доступа для пользователей и разная сложность шифрования информации. Самый известный пример публичного блокчейна — биткоин и другие криптовалюты. Корпорации используют блокчейн не только в финансовой сфере, но и в других секторах, например, в индустрии развлечений (при выпуске билетов) и здравоохранения (для защиты данных пациентов).
                    </p>
                    <p>
                    Бывают также гибридные сети, которые сочетают в себе свойства как открытых, так и закрытых сетей.
                    </p>
                    <p>
                    ЦБ классифицирует блокчейн по различным признакам:
                    </p>
                    <ol>
                        <li>по объектам транзакций:</li>
                        <ul>
                            <li>информация;</li>
                            <li>виртуальная ценность (ценность, аналог которой отсутствует в «реальном мире» — например, bitcoin);</li>
                        </ul>

                        <li>по типу доступа к сети:</li>
                        <ul>
                            <li>неограниченный (сети, в которых участникам позволено осуществлять любую деятельность);</li>
                            <li>ограниченный (сети, которые ограничивают виды деятельности участников);</li>
                        </ul>

                        <li>по требованиям к прохождению идентификации:</li>
                        <ul>
                            <li>анонимная;</li>
                            <li>псевдоанонимная;</li>
                            <li>полная идентификация;</li>
                        </ul>

                        <li>по применяемому протоколу достижения консенсуса сети:</li>
                        <ul>
                            <li>PoW (Proof-of-work) — право удостоверения блока дается участнику на основании выполнения им некоторой достаточно сложной работы, которая удовлетворяет заранее определенным критериям.</li>
                            <li>PoS (Proof-of-stake) — право удостоверения блока дается держателю счета, когда количество его средств и срок владения ими соответствуют заданным критериям. Формулы расчета критериев могут незначительно различаться.</li>
                            <li>PoS + PoW — гибрид PoW и PoS, когда блоки могут удостоверяться как через вычисляемые критерии PoS, так и PoW-перебором. Цель такого подхода — усложнить пересчет всей цепочки (с самого первого блока), возможный в случае использования PoS в чистом виде.</li>
                            <li>PBFT (Practical Byzantine Fault Tolerance), Paxos, RAFT — алгоритмы многоэтапного установления консенсуса сети. Алгоритмы данной группы позволяют блокчейну функционировать с небольшими затратами и имеют значительную пропускную способность, но слабоустойчивы к увеличению количества участников.</li>
                            <li>Non-BFT (Non Byzantine Fault Tolerance) — алгоритмы консенсуса, неустойчивые к поведению, при котором часть участников начинают работать против сети. Такие алгоритмы применимы в закрытых сетях с полной идентификацией.</li>
                        </ul>

                        <li>по наличию центрального администратора:</li>
                        <ul>
                            <li>существует центральный администратор;</li>
                            <li>отсутствует центральный администратор.</li>
                        </ul>
                    </ol>
                </div>

                <div className="part4Article">
                    <h3><strong>Где применяют блокчейн</strong></h3>
                    <p>
                    Блокчейн применяется во всех сферах, где необходима быстрота передачи информации с высокой степенью ее защиты. Технология используется для запуска и работы криптовалют и цифровых валют, при заключении смарт-контрактов на поставку товаров, при генерации невзаимозаменяемых токенов (non-fungible tokens, NFT), в банковской и правовой сферах, при администрировании сетей и в игровой индустрии. Технологии блокчейна находят применение в работе органов государственной власти (например, при проведении и обработке результатов референдумов и голосований), в деятельности публичных и непубличных корпораций, общественных организаций и частных лиц.
                    </p>
                    <h6><strong>Криптовалюта</strong></h6>
                    <p>
                    На основе технологии блокчейн функционирует любая <a href="/altcoins" alt="link">криптовалюта</a>. Технология применяется как при эмиссии (выпуске) новых криптовалют и генерации новых токенов (монет), так и при расчетах уже существующими. Сейчас в мире насчитывается более 300 криптовалютных проектов. Самые популярные помимо биткоина — Ethereum, Ripple, Tether, Litecoin и Dogecoin.
                    </p>
                    <p>
                    Расчеты в криптовалютах применяют платежные системы PayPal и Square и один из крупнейших международных банков JP Morgan. Криптовалюты, как правило, имеют высокую волатильность. Для инвестиций в криптовалюты существуют специализированные криптовалютные биржи.
                    </p>
                    <h6><strong>Цифровая валюта</strong></h6>
                    <p>
                    Некоторые страны мира запускают пилотные проекты по созданию национальных цифровых валют, работающих на технологии блокчейн. Высоких результатов в этом отношении достиг Китай — цифровой юань стал первой цифровой валютой, принятой в крупной мировой экономике.
                    </p>
                    <p>
                    Цифровые валюты Центрального банка (Central bank digital currency, CBDC) запустили также Центральный банк Багамских Островов (sand dollar), Восточно-Карибский центробанк (DCash) и ЦБ Нигерии (e-naira). О планах по выпуску своих национальных цифровых валют заявляли правительства (или Центробанки) Нидерландов, Японии, России, Казахстана и Эквадора.
                    </p>
                    <h6><strong>Смарт-контракты</strong></h6>
                    <p>
                    Технология блокчейна позволяет заключать смарт-контракты. Смарт-контракты — полностью цифровые контакты, информация о которых защищена шифрованием. Их ключевым отличием является автоматический контроль и выполнение пунктов договора. При выполнении условий контракт завершается автоматически, без совершения дополнительных действий и участия юристов. Смарт-контракты позволяют отслеживать всю цепочку поставок, что снижает или полностью исключает возможность подделки продукции или незаконных действий с ней.
                    </p>
                    <h6><strong>NFT</strong></h6>
                    <p>
                    <a href="/nft-tokens" alt="link">NFT</a> — вид токенов, где каждый экземпляр уникален, его нельзя заместить или обменять на другой токен. NFT свидетельствует о праве владения каким-либо активом в блокчейне и позволяет продавать и покупать виртуальные объекты: музыку, фотографии, картины, рисунки. Согласно статистике аналитического портала NFTgo, капитализация NFT-рынка составляет почти $22 млрд
                    </p>
                    <h6><strong>Игровая индустрия</strong></h6>
                    <p>
                    Еще одной сферой применения блокчейна является игровая индустрия. На основе криптовалютных технологий реализуются GameFi-проекты (от англ. game — «игра» и finance — «финансы»), сочетающие в себе игровую механику и NFT. Это онлайн-игры, которые записывают все происходящее в игре в транзакции на блокчейн и позволяют зарабатывать игрокам реальные деньги. С помощью блокчейна можно приобретать и продавать виртуальных персонажей и артефакты.
                    </p>
                    <h6><strong>DeFi и другое</strong></h6>
                    <p>
                    Технология блокчейна применяется в развивающемся рынке децентрализованных финансов (DeFi). Инвесторы также начинают вкладывать средства в новые виды цифровых активов, такие как аналоги ценных бумаг (security tokens).
                    </p>
                </div>

                <div className="part4Article">
                    <h3><strong>Кто такие майнеры</strong></h3>
                    <p>
                    Блоки в сеть блокчейна, например, при выпуске криптовалют, добавляются с помощью процедуры майнинга (от англ. mining — «добыча полезных ископаемых») — сбора и обработки информации о проводимых транзакциях.
                    </p>
                    <p>
                    В крупных блокчейн-сетях для этого нужны значительные вычислительные мощности, поэтому созданием блоков в них занимаются специальные лица — майнеры.
                    </p>
                </div>

                <div className="part4Article">
                    <h3><strong>Что такое блокчейн-кошелек</strong></h3>
                    <p>
                    <a href="/cryptowallet" alt="link">Блокчейн-кошелек</a> — это специальная программа, которая позволяет учитывать, хранить и совершать иные действия с диджитал-активами, в частности, с криптовалютой. При регистрации кошелька человек получает к нему доступ в виде открытого (публичного) и закрытого (приватного) ключа — криптографического кода. В кошельке хранятся записи о состоянии счета его владельца и вся история транзакций. В то же время криптовалюта не хранится непосредственно в кошельке, он содержит лишь информацию о публичных и приватных ключах, а сами монеты хранятся в блокчейне. Чаще всего блокчейн-кошельки анонимны.
                    </p>
                </div>

                <div className="part4Article">
                    <h3><strong>Децентрализация и распределенность</strong></h3>
                    <p>
                    Децентрализация и распределенность являются одновременно преимуществом и недостатком технологии блокчейн. Информация хранится одновременно на всех устройствах сети, единый центр управления данными и их хранения отсутствует. Изменения данных на каждом отдельном устройстве происходят независимо, но фиксируются остальными участниками системы.
                    </p>
                    <p>
                    Все транзакции проходят практически мгновенно, но на их подтверждение может потребоваться определенное время, которое зависит от алгоритма блокчейн-сети. Все сделки с активами конфиденциальны, указывается лишь номер кошелька, а комиссии минимальны, так как вместо централизованных посредников транзакции регистрируют майнеры.
                    </p>
                    <p>
                    Минусы децентрализации — необходимость наличия множества участников сети для поддержания ее целостности и устойчивости, а также затратность с точки зрения вычислительной мощности.
                    </p>
                </div>

                <div className="part4Article">
                    <h3><strong>Надежна ли технология блокчейна</strong></h3>
                    <p>
                    Технология блокчейна относительно надежна, но не лишена уязвимостей. Несмотря на децентрализацию и распределенность, существует риск хакерских атак. Есть также вероятность сговора пользователей с большими вычислительными мощностями с целью внесения изменений в блокчейн.
                    </p>
                    <p>
                    Кроме того, существует риск утраты активов из-за интернет-мошенничества. А утрата приватного хеш-ключа для доступа к блокчейн-кошельку фактически приводит к утрате активов, то есть прямой потере средств.
                    </p>
                </div>

                <div className="part4Article">
                    <h3><strong>Преимущества и недостатки блокчейна</strong></h3>
                    <p>
                    Основные преимущества блокчейна — обусловленные децентрализацией и распределенностью прозрачность технологии и невозможность изменения или уничтожения информации внутри блоков.
                    </p>
                    <p>
                    К недостаткам блокчейна можно отнести слабо проработанную нормативно-законодательную базу в абсолютном большинстве государств мира. Это приводит к попыткам регуляторов контролировать операции в блокчейне вплоть до запрета оборота криптовалют (так, например, поступили власти Китая). Регуляторы, как правило, объясняют свои действия риском возникновения мошеннических схем при обмене цифровых активов на реальные деньги из-за анонимности сделок. При этом еще одним недостатком блокчейна является необратимость транзакций.
                    </p>
                    <p>
                    Диджитал-активы, особенно криптовалюты, также обладают высокой волатильностью, что может грозить полной потерей средств.
                    </p>
                    <p>
                    Сооснователь Berezka DAO и Weezi Роман Кауфман отмечает, что технология блоков, последовательно соединенных особой меткой (хеш-функцией), подобно ДНК в организме человека, является очень устойчивой конструкцией, которая позволяет исключить изменение кода задним числом. Преимущества современных блокчейнов, по его словам, в их стабильности, а недостатки — в скорости транзакций.
                    </p>
                    <p>
                    Основатель TerraCrypto Никита Вассёв считает недостатком блокчейна необходимость высоких затрат на обеспечение подтверждающих транзакции узлов и записывающих в блокчейн майнеров. По его мнению, это наиболее характерно для сети биткоина, которая сейчас является наиболее устойчивой блокчейн-сетью.
                    </p>
                </div>

                <div className="part4Article">
                    <h3><strong>Какие перспективы у технологии</strong></h3>
                    <p>
                    Вассёв считает, что у технологии блокчейна есть значительные перспективы. По его мнению, блокчейн дает возможность сформировать новые схемы работы во многих сферах. С помощью блокчейна, по его словам, технически возможно также выполнять сделки по переходу права собственности через смарт-контракт.
                    </p>
                    <p>
                    Кауфман добавляет, что перспективы развития технологии блокчейна значительны в России. «В России много талантливых инженеров и программистов, которые выступают основателями крупнейших мировых блокчейнов, тот же Виталик Бутерин (основатель Ethereum), основатели NEAR и другие», — поясняет он. При этом эксперт обращает внимание на то, что это инновационное поле, которое еще требует доработки в сфере регулирования.
                    </p>
                </div>

                <div className="part4Article">
                    <h3><strong>Блокчейн: вместо заключения</strong></h3>
                    <p>
                    Блокчейн — технология шифрования и хранения данных, распределенных по множеству компьютеров, объединенных в общую сеть. Записи в блокчейне представлены в виде блоков, связанных между собой специальными ключами.
                    </p>
                    <p>
                    Технология применяется для хранения и передачи цифровых активов и может работать как в публичной сети, так и в частной. Блокчейн может применяться во многих сферах, где необходима быстрота передачи информации с высокой степенью ее защиты. На основе технологии блокчейна функционирует любая криптовалюта. Блокчейн также позволяет заключать смарт-контракты и выпускать NFT.
                    </p>
                    <p>
                    Блоки в блокчейне, например при выпуске криптовалют, создаются с помощью процедуры майнинга. Созданием блоков в крупных сетях занимаются специальные лица — майнеры.
                    </p>
                    <p>
                    Для учета, хранения и иных действий с цифровыми активами используется блокчейн-кошелек — специальная программа, которая хранит записи о состоянии счета его владельца и всю историю транзакций.
                    </p>
                    <p>
                    Особенностями блокчейна являются децентрализация и распределенность: информация хранится одновременно на всех устройствах сети, единый центр управления данными отсутствует. Но для поддержания целостности и устойчивости сети необходимо наличие множества участников. В целом технология блокчейна не лишена уязвимостей, таких как существует риск утраты доступа к активам из-за мошеннических действий. При инвестициях в цифровые активы также нужно помнить об их высокой волатильности.
                    </p>
                </div>
            </Container>
    );
}
export default WhatIsBlockChain;