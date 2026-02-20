(function(){
  const bar = document.getElementById('progressBar');
  function onScroll(){
    const doc = document.documentElement;
    const scrollTop = doc.scrollTop || document.body.scrollTop;
    const scrollHeight = doc.scrollHeight - doc.clientHeight;
    const pct = scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0;
    if(bar) bar.style.width = pct.toFixed(2) + '%';
  }
  document.addEventListener('scroll', onScroll, {passive:true});
  onScroll();
})();