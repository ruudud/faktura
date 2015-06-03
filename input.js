;(function() {
  function bootstrap() {
    document
    .getElementById('amount')
    .addEventListener('blur', onChange, false);
    document
    .getElementById('deadline')
    .addEventListener('blur', onChange, false);
    document
    .getElementById('paidBy')
    .addEventListener('blur', onChange, false);
    document
    .getElementById('paymentInfo')
    .addEventListener('blur', onChange, false);
  
  }
  
  function onChange(ev) {
    var $el = ev.target,
      newVal, dateVal;

    if ($el.type === 'date') {
      dateVal = new Date($el.valueAsNumber);
      newVal = '' + dateVal.getDate() + '/'
        + (dateVal.getMonth() + 1) + '/'
        + dateVal.getFullYear();
    } else {
      newVal =  $el.value.replace(/\n\r?/g, '<br />');
    }

    var sel = $el.id + 'Output';
    var $outs = document.getElementsByClassName(sel);
    [].forEach.call($outs, function($out) {
      $out.innerHTML = newVal;
    });
  }
  
  window.addEventListener('load', bootstrap);
})()

