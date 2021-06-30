$(function () {
  // Code here

  let current = ['x', 'o'];

  $('.box').on('click', function (event) {
    let box = event.target
    let $box = $(box)

    if ($box.hasClass('active')) {
      // выхожу из функции и дальнейший код не выполняю
      return
    }

    // Меняем фон
    box.style.backgroundImage = `url(${current[0]}.svg)`;
    $box.addClass('active');
    $box.addClass(current[0]);

    if (checkWin(current[0])) {
      $('.js-reset').show()
    }

    current.reverse();
  });

  $('.js-reset').on('click', function() {
    $('.box').removeClass('active')
    $('.box').removeClass('x')
    $('.box').removeClass('o')
    $('.box').attr('style', '')
    $('.js-reset').hide()
  });
})


function checkWin(current) {
  console.log('Проверка на победителя для: ', current);

  let box = $('.box');

  let winWariants = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],

    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],

    [0, 4, 8],
    [2, 4, 6],
  ]

  for (let i = 0; i < winWariants.length; i++) {
    let variant = winWariants[i]

    if (box.eq(variant[0]).hasClass(current) &&
      box.eq(variant[1]).hasClass(current) &&
      box.eq(variant[2]).hasClass(current)) {
      alert('Победитель: ' + current)
      return true
    }
  }

  if ($('.box.active').length === 9) {
    alert('Ничья!')
    return true
  }

  return false
}
