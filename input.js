;(function() {
  function formatDate(dateInput) {
    var dateVal = new Date(dateInput);
    return '' + dateVal.getDate() + '.'
      + (dateVal.getMonth() + 1) + '.'
      + dateVal.getFullYear();
  }

  function addListeners() {
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
  function addInvoiceDate() {
    var sel = 'invoiceDate';
    var $outs = document.getElementsByClassName(sel);
    [].forEach.call($outs, function($out) {
      $out.textContent = formatDate(Date.now());
    });
  }
  function bootstrap() {
    addListeners();
    addInvoiceDate();
  }


  
  function onChange(ev) {
    var $el = ev.target,
      newVal;

    if ($el.type === 'date') {
      newVal = formatDate($el.valueAsNumber);
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

