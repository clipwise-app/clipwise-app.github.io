/* Clipwise Pro op de site: één schakelaar.
 *
 * live: false  -> Pro staat er al, maar kopen kan nog niet ("Coming soon").
 * live: true   -> "Get Pro" gaat naar de betaalpagina van Lemon Squeezy, en
 *                 "Open your account" naar het klantportaal.
 * Zet hem pas op true als de winkel bij Lemon Squeezy uit testmodus is.
 * Zonder JavaScript werkt alles ook: de links wijzen dan naar pricing/account.
 */
(function () {
  'use strict';
  var PRO = {
    live: false,
    checkout: 'https://getclipwise.lemonsqueezy.com/checkout/buy/1268a8b6-540a-44e4-8732-a0e89875336d',
    portal: 'https://getclipwise.lemonsqueezy.com/billing'
  };
  function klaar() {
    document.querySelectorAll('[data-when]').forEach(function (el) {
      el.hidden = (el.getAttribute('data-when') === 'live') !== PRO.live;
    });
    if (!PRO.live) return;
    document.querySelectorAll('[data-checkout]').forEach(function (a) { a.href = PRO.checkout; });
    document.querySelectorAll('[data-portal]').forEach(function (a) { a.href = PRO.portal; });
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', klaar); else klaar();
})();
