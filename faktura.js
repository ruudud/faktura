;(function() {
  var TEMPLATES = {
    'Krisslee': {
      paymentInfo: 'Sponsing',
      accountNumber: '1503.42.91680',
      paidTo: 'Krisslee\nNeseveien 9\n4514 MANDAL',
      orgNumber: '913010779',
      webpage: 'www.krisslee.no'
    }
  };

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

    var sel = 'js-' + $el.id + 'Output';
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
        .addEventListener('change', onChange, false);
    });
  }
  function addInvoiceDate() {
    var sel = 'js-invoiceDateOutput';
    var $outs = document.getElementsByClassName(sel);
    [].forEach.call($outs, function($out) {
      $out.textContent = formatDate(Date.now());
    });
  }

  function tmplClickHandler(ev) {
    var $el = ev.currentTarget;
    var tmplId = $el.dataset.tmplId;
    var tmpl = TEMPLATES[tmplId];
    var fields = Object.keys(tmpl);
    fields.forEach(function(field) {
      var $inputEl = document.getElementById(field);
      $inputEl.value = tmpl[field];
      $inputEl.dispatchEvent(new Event('change'));
    });
  }

  function addTemplates() {
    var $container = document.getElementById('templates');
    Object.keys(TEMPLATES).forEach(function(tmplId) {
      var $listEl = document.createElement('li');
      var $el = document.createElement('a');
      $el.href = '#';
      $el.textContent = tmplId;
      $el.dataset.tmplId = tmplId;
      $el.addEventListener('click', tmplClickHandler, false);
      $listEl.appendChild($el);
      $container.appendChild($listEl);
    });
  }

  function bootstrap() {
    addListeners();
    addInvoiceDate();
    addTemplates();
  }

  window.addEventListener('load', bootstrap);
})()

