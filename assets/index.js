const anko_set = [
  'https://1.bp.blogspot.com/-KxRjbJRgMG8/XfMOEmy7gVI/AAAAAAABWuI/c2IBJrYUXekAcckDhQwe_tH1wdHg2wTRACNcBGAsYHQ/s400/sweets_anko_pack.png',
  'https://1.bp.blogspot.com/-SGRnX1Ljdxs/XfMOFAMZiQI/AAAAAAABWuQ/NQ7ehEUzDp4LigdYfe2wi3iyju87IEJaQCNcBGAsYHQ/s400/sweets_anko_pack_tsubu.png',
  'https://1.bp.blogspot.com/-uvpdC_166e0/XfMOEmwTXEI/AAAAAAABWuM/TpWJMoM7MLwDn5YDs43QL50uq1acU9qIwCNcBGAsYHQ/s400/sweets_anko_pack_koshi.png',
];

const init = () => {
  // ランダムあんこ画像
  const id = Math.floor(Math.random() * anko_set.length);
  document.querySelector('.anko').setAttribute('style', `background-image: url(${anko_set[id]}`);

  // 文字点滅
  const blink = document.querySelector('.blink');
  let flag = true;
  setInterval(() => {
    flag = !flag;
    blink.setAttribute('style', `opacity: ${flag ? 1 : 0}`);
  }, 1000);
}

onload = init
