$(function() {
  $('.area').on('input', '.input', function() {
    var that = $(this);
    var $area = that.closest('.area');

    var invalidCallback = function() {
      $area.find('.zei').text('(不正値です)');
      $area.find('.zeikomi').text('(不正値です)');
      $area.find('.zeinuki').text('(不正値です)');
      return;
    };

    var isInvalidValue = function(v) {
      return isNaN(v) || v === '' || v === undefined || v === null;
    }

    var val = that.val();
    if (isInvalidValue(val)) {
      invalidCallback();
      return;
    }

    var method = that.attr('method');
    var kingaku;

    if (method) {
      if (method === 'hostess') {
        var shiharai = $area.find('.shiharai').val();
        var nissu = $area.find('.nissu').val();

        if (isInvalidValue(shiharai) || isInvalidValue(nissu)) {
          invalidCallback();
          return;
        }

        kingaku = gensen.houshu[method](shiharai, nissu);

      } else if (method === 'gaikouin') {
        var shiharai = $area.find('.shiharai').val();
        var kyuyo = $area.find('.kyuyo').val();

        if (isInvalidValue(shiharai) || isInvalidValue(kyuyo)) {
          invalidCallback();
          return;
        }

        kingaku = gensen.houshu[method](shiharai, kyuyo);

      } else {
        kingaku = gensen.houshu[method](val); 
      }
    } else {
      kingaku = gensen.houshu(val);
    }

    $area.find('.zei').text(kingaku.zei);
    $area.find('.zeikomi').text(kingaku.zeikomi);
    $area.find('.zeinuki').text(kingaku.zeinuki);
  });
});
