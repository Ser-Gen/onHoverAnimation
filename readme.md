# OnHoverAnimation
Инструмент для анимирования фонового изображения элемента, при условии, что это изображение — склеенная последовательность. Нужен для задач, при которых изображение, анимируемое при наведении на элемент, должно при уводе курсора продолжать проигрываться до тех пор, пока не дойдёт до исходного состояния.

[Пример использования](http://ser-gen.github.com/source/onHoverAnimation/demo.html)

## Вызов
    $(селектор).hoverAnimation({
      width : ширина кадра,
      frames : количество кадров
    })


## Параметры
* `.width` — ширина кадра, в пикселях;
* `.frames` — количество кадров, с 0;
* `.objAnimated` — селектор; указывается, если элемент с анимируемым фоном потомок элементов, к которым применяется плагин;
* `.duration` — длительность кадра, по умолчанию 45
* `.parent` и `.parentConditions` — селекторы; указываются, чтобы уточнить родителей элемента и их классы

## Условия
* Изоражения должны быть склеены по горизонтали
* У анимируемого элемента фоновое изображение должно повторяться хотя бы по горизонтали (`background-repeat: repeat-x;`), за умолчание для фоновых изображений браузерами принимается повторение по обоим осям
* jQuery >1.7 благодаря методу `.on()`
