import React from 'react';
import '../css/cursTask.css';
import { Link } from "react-router-dom";
function CursTask() {
return (
    <div className="container">
        <div className="task-title">
            <h3> Лекция 1.</h3>
        </div>
        <div className="task-text">
            <span>
                Следующая тема, которая входит в основы программирования – это типы данных, переменные и константы.  Почти всегда первые темы в изучении любого курса – это в большинстве теория и скукотища. Так уж складывается, что чтобы начать писать более-менее интересные программы, надо освоить некие азы и получить базовые знания. Я, конечно, постараюсь покороче и поинтересней раскрыть тему этой статьи, но наберитесь терпения.  В этой статье мы разберёмся с тем, что же такое типы данных и зачем они нам понадобятся в программировании, а также узнаем о переменных и константах.
                Типы данных. Сначала отвечу “зачем” существуют типы данных. Смотрите, допустим нам надо написать программу, которая выводит на экран данные о возрасте, весе и росте человека. Но, чтобы  программа могла обращаться к этим данным, их надо хранить где-то в оперативной памяти компьютера, а уже потом “попросить” показать их. Вот для этого нам и нужны типы данных – чтобы компилятор “понял” сколько памяти надо выделить для данных и что в этой памяти будет храниться (целое число (возраст), вещественное (вес и рост), символы и .т.д.).
                Типы данных можно разбить на три группы: числовые, символьные и логические. Для обозначения типов данных используются специальные зарезервированные (ключевые) слова.  Ниже мы их рассмотрим и укажем сколько памяти для них выделяется и какие данные они могут хранить.
                Числовые типы данных: для хранения целых чисел (0, 33, -27 и т.д.)
                int   (4 байта)   –   хранит   числа  в  диапазоне   от   -2 147 483 648  до     2 147 483 647
                short (2  байта)  –  хранит числа в диапазоне от  -32 768 до 32 767
                long (4 байта) –   хранит   числа   в   диапазоне   от   -2 147 483 648   до 2 147 483 647
                Числовые типы данных: для хранения вещественных чисел (с плавающей точкой:  –435.332,  54.77, 3.0)
                float (4 байта)  – хранит дробные числа с точностью до 7 знаков после запятой
                double (8 байт) – хранит дробные числа с точностью до 15 знаков после запятой
                Символьный тип: для хранения одного символа
                char (1 байт) – хранит один символ. Например:  ‘f’,  ‘+’  или ‘4’ (как символ). Одинарные кавычки обязательны. 
                Типа данных для хранения строк в С++ нет. Позже мы с вами познакомимся с тем, каким образом можно хранить строки в памяти.
            </span>
            {/* <Link className='curs-autor-link' to="/">
               <div className='curs-autor'> Иван Иванов </div>
            </Link> */}
        </div>

    </div>

)
}

export default CursTask;