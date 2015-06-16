;(function() {
  var templates = [
    {
      id: 'Krisslee',
      paymentInfo: 'Sponsing',
      accountNumber: '1503.42.91680',
      paidTo: 'Krisslee\nNeseveien 9\n4514 MANDAL',
      orgNumber: '913010779',
      webpage: 'www.krisslee.no'
    }
  ];

  function formatDate(dateInput) {
    var dateVal = new Date(dateInput);
    return '' + dateVal.getDate() + '.'
      + (dateVal.getMonth() + 1) + '.'
      + dateVal.getFullYear();
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

  function addListeners() {
    [
      'amount', 'deadline', 'paidBy', 
      'paidTo', 'paymentInfo', 'accountNumber',
      'orgNumber', 'webpage'
    ].forEach(function(id) {
      document
        .getElementById(id)
        .addEventListener('blur', onChange, false);
    });

    // TODO improve this..
    document
      .getElementById('accountNumber')
      .dispatchEvent(new FocusEvent('blur'));
  }
  function addInvoiceDate() {
    var sel = 'invoiceDateOutput';
    var $outs = document.getElementsByClassName(sel);
    [].forEach.call($outs, function($out) {
      $out.textContent = formatDate(Date.now());
    });
  }
  function bootstrap() {
    addListeners();
    addInvoiceDate();
  }

  window.addEventListener('load', bootstrap);
})()

