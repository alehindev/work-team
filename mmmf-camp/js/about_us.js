var tutorsProfileTemplate = '<div class="teacher-profile">' +
    '<h3 class="teacher-profile__title">|</h3><div class="teacher-profile__img" style="background: url(\'./../img/about_us_jpg/||\'); background-repeat: no-repeat; background-size: cover;"></div>' +
    '<p class="teacher-profile__subtitle">|||</p></div>';

var tutorsNames = ["Коробицын Дмитрий Александрович",
    "Засыпкина Ирина Сергеевна",
    "Носков Михаил Сергеевич",
    "Захаров Роман Викторович",
    "Шестаков Иван Валерьевич",
    "Кульгин Юрий Владимирович",
    "Белянская Ирина Фёдоровна",
    "Гомартели Анна Мамукаевна",
    "Гурская Александра Николаевна",
    "Дудникова Татьяна Анатольевна",
    "Заславский Олег Алексеевич",
    "Засыпкин Сергей Александрович",
    "Зейнолдина Арайлым Мухаметкалиевна",
    "Знаменская Оксана Евгеньевна",
    "Исаева Анна Азадовна",
    "Карпенко Анна Валерьевна",
    "Кореневский Александр Сергеевич",
    "Кукса Алина Александровна",
    "Назмутдинов Аскар Флоридович",
    "Мамышев Бахыт Жанасович",
    "Матвеев Даниил Андреевич",
    "Мосейко Екатерина Ивановна",
    "Пендюр Дарья Андреевна",
    "Распопов Алексей Александрович",
    "Ретинский Вадим Игоревич",
    "Рябичева Татьяна Михайловна",
    "Рябов Егор Николавич",
    "Скопцов Кирилл Александрович",
    "Солынин Андрей Александрович",
    "Устинов Алексей Владимирович",
    "Федотова Наталья Петровна",
    "Шаповалов Александр Васильевич",
    "Шаповалов Максим Александрович",
    "Чегодаев Александр Вячеславович",
    "Чемеркин Артем Александрович",
    "Южаков Александр Олегович",
    "Варламов Сергей Дмитриевич",
    "Гришин Егор Максимович",
    "Дергачева Лидия Викторовна",
    "Критченкова Анна Михайловна",
    "Оболенский Игорь Сергеевич",
    "Панкратов Владислав Владимирович",
    "Юлдашева Мария Рашидовна",
    "Афанасьева Елена Владимировна"];

var tutorsAbout = ["Руководитель выездных школ МММФ|Преподаватель Центра педагогического мастерства г. Москвы.",
    "Руководитель программ для начальной школы|Автор олимпиадной онлайн Школы «Math tiger MSU",
    "Руководитель лингвистических смен|Руководитель курсов по школьной математике",
    "Руководитель физических смен|Золотой медалист Международной олимпиады по физике в составе сборной России|Преподаватель физики Школы № 1329 г. Москвы",
    "Выпускник химфака МГУ|Преподаватель химии Центра педагогического мастерства г.Москвы",
    "Выпускник ФМ-класса Школы № 1329|Администратор по связям с общественностью",
    "Выпускница физического факультета СПбГУ|Педагог дополнительного образования системы кружков олимпиадной математики «Фрактал» (г.Санкт-Петербург)",
    "Учебный ассистент лаборатории НИУ ВШЭ|Амбассадор бренда «Changellenge» в сфере бизнес-образования|Аналитик по развитию карьеры студентов в «GC Platform»",
    "Педагог дополнительного образования Санкт-Петербургского Физико-математического Губернаторского Лицея 30",
    "Выпускница мехмата МГУ|Педагог дополнительного образования гимназии № 1514",
    "Выпускник мехмата МГУ|Преподаватель математики школы № 1543 и Лицее «Воробьёвы горы»",
    "Выпускник МФТИ|Биофизик|По совместительству преподаватель математики и физики в выездных школах МММФ",
    "Выпускница факультета информационных технологий Казахстанско-Британского технического университета|Менеджер IT проектов|Преподаватель математики математических кружков «Пифагор» г.Алматы (Казахстан) 2012-2016 гг.",
    "Преподаватель математических кружков в Санкт-Петербурге и Москве|Педагог начальных лингво-математических классов школы № 1329 г. Москвы",
    "Выпускница факультета математики и информатики МПГУ|Педагог дополнительного образования Физико-математической школы № 2007",
    "Выпускница мехмата МГУ, преподаватель математики школы 1568",
    "Магистрант матфака ВШЭ|Педагог дополнительного образования Школы 1568 г. Москвы",
    "Выпускница мехмата МГУ|Преподаватель математики Лицея «Воробьёвы горы» (г. Москва)",
    "Выпускник мехмата МГУ|Преподаватель математики Центра педагогического мастерства и школы № 1568 г. Москвы",
    "Директор и тренер олимпиадного направления образовательного центра «CleverS» (г. Алматы, Казахстан)",
    "Выпускник ФМ-класса Школы № 1329",
    "Учитель информатики и педагог дополнительного образования Лицея № 533 «Малая Охта» (г. Санкт-Петербург, классы и кружки ЮМШ)|Программист-разработчик ООО «Системы компьютерного зрения»",
    "Выпускница мехмата МГУ|Преподаватель математики Лицея «Воробьёвы горы»",
    "Выпускник мехмата МГУ|Преподаватель математики школы № 548 г. Москвы",
    "Студент матфака ВШЭ|Выпускник фм-класса Школы № 1329 г.Москвы|Бронзовый медалист Международной математической олимпиады в составе сборной России",
    "Выпускница МФТИ и РАНХиГС|Преподаватель занимательной математики в младших классах Лицея № 5 г. Долгопрудного",
    "Студент матфака ВШЭ|Выпускник фм-класса Школы № 1329 г. Москвы|Золотой медалист Международной математической олимпиады в составе сборной России",
    "Выпускник мехмата МГУ|Педагог дополнительного образования ЦДО ЦПМ|Преподаватель информатики школы 2086 г. Москвы",
    "Доцент математико-механического факультета Санкт-Петербургского государственного университета|Учитель и методист лицея № 533 «Малая Охта» (г. Санкт-Петербург, классы и кружки ЮМШ)",
    "Федеральный профессор в области математики|Главный научный сотрудник Хабаровского отделения Института прикладной математики ДО РАН|В прошлом — преподаватель мехмата МГУ и СУНЦ МГУ.|Персональная страница: http://iam.khv.ru/staff/Ustinov_AV.php",
    "Кандидат физико-математических наук|Доцент кафедры компьютерной безопасности и математических методов обработки информации Ярославского государственного университета|Преподаватель школы при математическом факультете ЯрГУ",
    "Автор кружковых книг и олимпиадных задач по математике|Ответственный редактор серии «Школьные математические кружки»|Председатель жюри Математического турнира Европы",
    "Преподаватель математики в школе «Норрвикен» (г. Стокгольм, Швеция)|Руководитель кружка при Стокгольмском университете",
    "Выпускник мехмата МГУ|Преподаватель математики Вологодского многопрофильного лицея",
    "Педагог дополнительного образования МОЦРО № 117 г. Омска",
    "Преподаватель олимпиадной математики ФМШ Тюменской области",
    "Член жюри Московской городской и Всероссийской олимпиады школьников по физике|Один из авторов журнала «Потенциал»",
    "Студент физического факультета МГУ|Призер и победитель математических олимпиад|Преподаватель физики в школе № 1329 г. Москвы|Сотрудник лаборатории теории расписаний и дискретной оптимизации института проблем управления РАН",
    "Член жюри Московской городской олимпиады и Международной экспериментальной олимпиады по физике (IEPHO)",
    "Заведующая кафедрой физики по тактическому развитию ГБОУ «Лицей «Вторая школа»|Автор учебно-методического пособия «Введение в технологию эксперимента»",
    "Заведующий кафедрой физики школы № 1329|Преподаватель по программе IB (Международный бакалавриат)|Преподаватель физики и астрономии в физико-математических и инженерных классах",
    "Выпускник физфака МГУ|Сотрудник лаборатории газовых лазеров ФИАН им. П.Н.Лебедева|Преподаватель физики школы № 1329 г. Москвы",
    "Старший преподаватель кафедры физики СУНЦ НГУ|Руководитель команд Новосибирска на Всероссийских и международных олимпиадах по физике|Член жюри IEPHO",
    "Преподаватель-методист по химии, учитель высшей категории|Преподаватель химии в Российско-Британской школе «Алгоритм»"];

ShowHeadTutors();

$("#btn-1").click(function () {
    if ($("#btn-1").hasClass("button_clicked") == false) {
        $("#btn-1").addClass("button_clicked");
        $("#btn-2").removeClass("button_clicked");
        $("#btn-3").removeClass("button_clicked");
        $("#btn-4").removeClass("button_clicked");
        ShowHeadTutors();
    }
}
);
$("#btn-2").click(function () {
    if ($("#btn-2").hasClass("button_clicked") == false) {
        $("#btn-1").removeClass("button_clicked");
        $("#btn-2").addClass("button_clicked");
        $("#btn-3").removeClass("button_clicked");
        $("#btn-4").removeClass("button_clicked");
        ShowMathTutors();
    }
}
);
$("#btn-3").click(function () {
    if ($("#btn-3").hasClass("button_clicked") == false) {
        $("#btn-1").removeClass("button_clicked");
        $("#btn-2").removeClass("button_clicked");
        $("#btn-3").addClass("button_clicked");
        $("#btn-4").removeClass("button_clicked");
        ShowPhysxTutors();
    }
}
);
$("#btn-4").click(function () {
    if ($("#btn-4").hasClass("button_clicked") == false) {
        $("#btn-1").removeClass("button_clicked");
        $("#btn-2").removeClass("button_clicked");
        $("#btn-3").removeClass("button_clicked");
        $("#btn-4").addClass("button_clicked");
        ShowChemTutors();
    }
}
);

function ShowHeadTutors() {
    $(".teachers").empty();
    for (var i = 0; i < 6; i++) {
        var newTmp = tutorsProfileTemplate.replace("|", tutorsNames[i].replaceAll(" ", "<br>")).replace("||", "tutor" + (i + 1) + ".jpg").replace("|||", tutorsAbout[i].replaceAll("|", "<br><br>"));
        $(".teachers").append(newTmp);
    }
}

function ShowMathTutors() {
    $(".teachers").empty();
    for (var i = 6; i < 36; i++) {
        var newTmp = tutorsProfileTemplate.replace("|", tutorsNames[i].replaceAll(" ", "<br>")).replace("||", "tutor" + (i + 1) + ".jpg").replace("|||", tutorsAbout[i].replaceAll("|", "<br><br>"));
        $(".teachers").append(newTmp);
    }
}

function ShowPhysxTutors() {
    $(".teachers").empty();
    for (var i = 36; i < 43; i++) {
        var newTmp = tutorsProfileTemplate.replace("|", tutorsNames[i].replaceAll(" ", "<br>")).replace("||", "tutor" + (i + 1) + ".jpg").replace("|||", tutorsAbout[i].replaceAll("|", "<br><br>"));
        $(".teachers").append(newTmp);
    }
}

function ShowChemTutors() {
    $(".teachers").empty();
    var newTmp = tutorsProfileTemplate.replace("|", tutorsNames[43].replaceAll(" ", "<br>")).replace("||", "tutor" + 44 + ".jpg").replace("|||", tutorsAbout[43].replaceAll("|", "<br><br>"));
    $(".teachers").append(newTmp);
}
//alert(elementChildrens.length);