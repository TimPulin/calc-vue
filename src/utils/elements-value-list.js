//список стоимости элементов
const elementsValueList = {
  //ОДИНАРНЫЕ прыжки
  '1t': 0.4,
  '1s': 0.4,
  '1lo': 0.5,
  '1f': 0.5,
  '1lz': 0.6,
  '1f!': 0.5,
  '1lz!': 0.6,
  '1fe': 0.4,
  '1lze': 0.48,
  '1eu': 0.5,

  // одинарные прыжки с q
  '1tq': 0.4,
  '1sq': 0.4,
  '1loq': 0.5,
  '1fq': 0.5,
  '1lzq': 0.6,
  '1fq!': 0.5,
  '1lzq!': 0.6,
  '1fqe': 0.4,
  '1lzqe': 0.48,
  '1euq': 0.5,

  // одинарные прыжки с <
  '1eu<': 0.5,
  '1t<': 0.32,
  '1s<': 0.32,
  '1lo<': 0.4,
  '1f<': 0.4,
  '1lz<': 0.48,
  '1f<!': 0.4,
  '1lz<!': 0.48,
  '1f<e': 0.3,
  '1lz<e': 0.36,

  // одинарные прыжки с <<
  '1eu<<': 0,
  '1t<<': 0,
  '1s<<': 0,
  '1lo<<': 0,
  '1f<<': 0,
  '1lz<<': 0,
  '1f<<!': 0,
  '1lz<<!': 0,
  '1f<<e': 0,
  '1lz<<e': 0,

  // ДВОЙНЫЕ прыжки
  '1a': 1.1,
  '2t': 1.3,
  '2s': 1.3,
  '2lo': 1.7,
  '2f': 1.8,
  '2lz': 2.1,
  '2f!': 1.8,
  '2lz!': 2.1,
  '2fe': 1.44,
  '2lze': 1.68,

  // двойные прыжки с q
  '1aq': 1.1,
  '2tq': 1.3,
  '2sq': 1.3,
  '2loq': 1.7,
  '2fq': 1.8,
  '2lzq': 2.1,
  '2fq!': 1.8,
  '2lzq!': 2.1,
  '2fqe': 1.44,
  '2lzqe': 1.68,

  // двойные прыжки <
  '1a<': 0.88,
  '2t<': 1.04,
  '2s<': 1.04,
  '2lo<': 1.36,
  '2f<': 1.44,
  '2lz<': 1.68,
  '2f<!': 1.44,
  '2lz<!': 1.68,
  '2f<e': 1.08,
  '2lz<e': 1.26,

  // двойные прыжки с <<
  '1a<<': 0,
  '2t<<': 0.4,
  '2s<<': 0.4,
  '2lo<<': 0.5,
  '2f<<': 0.5,
  '2lz<<': 0.6,
  '2f<<!': 0.5,
  '2lz<<!': 0.6,
  '2f<<e': 0.4,
  '2lz<<e': 0.48,

  // ТРОЙНЫЕ прыжки
  '2a': 3.3,
  '3t': 4.2,
  '3s': 4.3,
  '3lo': 4.9,
  '3f': 5.3,
  '3lz': 5.9,
  '3f!': 5.3,
  '3lz!': 5.9,
  '3fe': 4.24,
  '3lze': 4.72,

  // тройные прыжки с q
  '2aq': 3.3,
  '3tq': 4.2,
  '3sq': 4.3,
  '3loq': 4.9,
  '3fq': 5.3,
  '3lzq': 5.9,

  '3fq!': 5.3,
  '3lzq!': 5.9,
  '3fqe': 4.24,
  '3lzqe': 4.72,

  // тройные прыжки с <
  '2a<': 2.64,
  '3t<': 3.36,
  '3s<': 3.44,
  '3lo<': 3.92,
  '3f<': 4.24,
  '3lz<': 4.72,

  '3f<!': 4.24,
  '3lz<!': 4.72,
  '3f<e': 3.18,
  '3lz<e': 3.54,

  // тройные прыжки с <<
  '2a<<': 1.1,
  '3t<<': 1.3,
  '3s<<': 1.3,
  '3lo<<': 1.7,
  '3f<<': 1.8,
  '3lz<<': 2.1,

  '3f<<!': 1.8,
  '3lz<<!': 2.1,
  '3f<<e': 1.44,
  '3lz<<e': 1.68,

  // ЧЕТВЕРНЫЕ прыжки
  '3a': 8,
  '4t': 9.5,
  '4s': 9.7,
  '4lo': 10.5,
  '4f': 11,
  '4lz': 11.5,

  '4f!': 11,
  '4lz!': 11.5,
  '4fe': 8.8,
  '4lze': 9.2,
  '4a': 12.5,

  // четверные прыжки с q
  '3aq': 8,
  '4tq': 9.5,
  '4sq': 9.7,
  '4loq': 10.5,
  '4fq': 11,
  '4lzq': 11.5,

  '4fq!': 11,
  '4lzq!': 11.5,
  '4fqe': 8.8,
  '4lzqe': 9.2,

  '4aq': 12.5,

  // четверные прыжки с <
  '3a<': 6.4,
  '4t<': 7.6,
  '4s<': 7.76,
  '4lo<': 8.4,
  '4f<': 8.8,
  '4lz<': 9.2,

  '4f<!': 8.8,
  '4lz<!': 9.2,
  '4f<e': 6.6,
  '4lz<e': 6.9,
  '4a<': 10,

  // четверные прыжки с <<
  '3a<<': 3.3,
  '4t<<': 4.2,
  '4s<<': 4.3,
  '4lo<<': 4.9,
  '4f<<': 5.3,
  '4lz<<': 5.9,

  '4f<<!': 5.3,
  '4lz<<!': 5.9,
  '4f<<e': 4.24,
  '4lz<<e': 4.72,
  '4a<<': 8,

  //ВРАЩЕНИЯ В ОДНОЙ ПОЗИЦИИ БЕЗ СМЕНЫ НОГИ
  //стоя
  uspb: 1,
  usp1: 1.2,
  usp2: 1.5,
  usp3: 1.9,
  usp4: 2.4,
  //в заклоне
  lspb: 1.2,
  lsp1: 1.5,
  lsp2: 1.9,
  lsp3: 2.4,
  lsp4: 2.7,
  //в либеле
  cspb: 1.1,
  csp1: 1.4,
  csp2: 1.8,
  csp3: 2.3,
  csp4: 2.6,
  // в волчке
  sspb: 1.1,
  ssp1: 1.3,
  ssp2: 1.6,
  ssp3: 2.1,
  ssp4: 2.5,

  //ПРЫЖКИ ВО ВРАЩЕНИЯ
  //прыжок в стоя
  fuspb: 1.5,
  fusp1: 1.7,
  fusp2: 2,
  fusp3: 2.4,
  fusp4: 2.9,
  //прыжок в заклон
  flspb: 1.7,
  flsp1: 2,
  flsp2: 2.4,
  flsp3: 2.9,
  flsp4: 3.2,
  //прыжок в либелу
  fcspb: 1.6,
  fcsp1: 1.9,
  fcsp2: 2.3,
  fcsp3: 2.8,
  fcsp4: 3.2,
  //прыжок в волчок
  fsspb: 1.7,
  fssp1: 2,
  fssp2: 2.3,
  fssp3: 2.6,
  fssp4: 3,

  //ВРАЩЕНИЯ СО СМЕНОЙ НОГИ
  //стоя со сменой ноги
  cuspb: 1.5,
  cusp1: 1.7,
  cusp2: 2,
  cusp3: 2.4,
  cusp4: 2.9,
  //заходом прыжком стоя со сменой ноги
  fcuspb: 1.5,
  fcusp1: 1.7,
  fcusp2: 2,
  fcusp3: 2.4,
  fcusp4: 2.9,
  //заклон со сменой ноги
  clspb: 1.7,
  clsp1: 2,
  clsp2: 2.4,
  clsp3: 2.9,
  clsp4: 3.2,
  //заходом прыжком заклон со сменой ноги
  fclspb: 1.7,
  fclsp1: 2,
  fclsp2: 2.4,
  fclsp3: 2.9,
  fclsp4: 3.2,
  //либела со сменой ноги
  ccspb: 1.7,
  ccsp1: 2,
  ccsp2: 2.3,
  ccsp3: 2.8,
  ccsp4: 3.2,
  //заходом прыжком либела со сменой ноги
  fccspb: 1.7,
  fccsp1: 2,
  fccsp2: 2.3,
  fccsp3: 2.8,
  fccsp4: 3.2,
  //волчок со сменой ноги
  csspb: 1.6,
  cssp1: 1.9,
  cssp2: 2.3,
  cssp3: 2.6,
  cssp4: 3,
  //заходом прыжком волчок со сменой ноги
  fcsspb: 1.6,
  fcssp1: 1.9,
  fcssp2: 2.3,
  fcssp3: 2.6,
  fcssp4: 3,

  //КОМБИНАЦИИ ВРАЩЕНИЙ БЕЗ СМЕНЫ НОГИ
  cospb: 1.5,
  cosp1: 1.7,
  cosp2: 2,
  cosp3: 2.5,
  cosp4: 3,
  //заходом прыжком комбинации вращений без смены ноги
  fcospb: 1.5,
  fcosp1: 1.7,
  fcosp2: 2,
  fcosp3: 2.5,
  fcosp4: 3,

  //КОМБИНАЦИИ ВРАЩЕНИЙ СО СМЕНОЙ НОГИ
  ccospb: 1.7,
  ccosp1: 2,
  ccosp2: 2.5,
  ccosp3: 3,
  ccosp4: 3.5,
  //заходом прыжком комбинации вращений со сменой ноги
  fccospb: 1.7,
  fccosp1: 2,
  fccosp2: 2.5,
  fccosp3: 3,
  fccosp4: 3.5,

  //ДОРОЖКИ ШАГОВ
  stsqb: 1.5,
  stsq1: 1.8,
  stsq2: 2.6,
  stsq3: 3.3,
  stsq4: 3.9,
  chsq1: 3,

  //ВРАЩЕНИЯ С V
  //ПРЫЖКИ ВО ВРАЩЕНИЯ С V
  //прыжок в стоя
  fuspbv: 1.13,
  fusp1v: 1.28,
  fusp2v: 1.5,
  fusp3v: 1.8,
  fusp4v: 2.18,
  //прыжок в заклон
  flspbv: 1.28,
  flsp1v: 1.5,
  flsp2v: 1.8,
  flspv3: 2.18,
  flsp4v: 2.4,
  //прыжок в либелу
  fcspbv: 1.2,
  fcsp1v: 1.43,
  fcsp2v: 1.73,
  fcsp3v: 2.1,
  fcsp4v: 2.4,
  //прыжок в волчок
  fsspbv: 1.28,
  fssp1v: 1.5,
  fssp2v: 1.73,
  fssp3v: 1.95,
  fssp4v: 2.25,

  //ВРАЩЕНИЯ СО СМЕНОЙ НОГИ С V
  //стоя со сменой ноги
  cuspbv: 1.13,
  cusp1v: 1.28,
  cusp2v: 1.5,
  cusp3v: 1.8,
  cusp4v: 2.18,
  //заходом прыжком стоя со сменой ноги
  fcuspbv: 1.13,
  fcusp1v: 1.28,
  fcusp2v: 1.5,
  fcusp3v: 1.8,
  fcusp4v: 2.18,
  //заклон со сменой ноги
  clspbv: 1.28,
  clsp1v: 1.5,
  clsp2v: 1.8,
  clsp3v: 2.18,
  clsp4v: 2.4,
  //заходом прыжком заклон со сменой ноги
  fclspbv: 1.28,
  fclsp1v: 1.5,
  fclsp2v: 1.8,
  fclsp3v: 2.18,
  fclsp4v: 2.4,
  //либела со сменой ноги
  ccspbv: 1.28,
  ccsp1v: 1.5,
  ccsp2v: 1.73,
  ccsp3v: 2.1,
  ccsp4v: 2.4,
  //заходом прыжком либела со сменой ноги
  fccspbv: 1.28,
  fccsp1v: 1.5,
  fccsp2v: 1.73,
  fccsp3v: 2.1,
  fccsp4v: 2.4,
  //волчок со сменой ноги
  csspbv: 1.2,
  cssp1v: 1.43,
  cssp2v: 1.73,
  cssp3v: 1.95,
  cssp4v: 2.25,
  //заходом прыжком волчок со сменой ноги
  fcsspbv: 1.2,
  fcssp1v: 1.43,
  fcssp2v: 1.73,
  fcssp3v: 1.95,
  fcssp4v: 2.25,

  //КОМБИНАЦИИ ВРАЩЕНИЙ БЕЗ СМЕНЫ НОГИ С V
  cospbv: 1.13,
  cosp1v: 1.28,
  cosp2v: 1.5,
  cosp3v: 1.88,
  cosp4v: 2.25,
  //заходом прыжком комбинация вращений без смены ноги
  fcospbv: 1.13,
  fcosp1v: 1.28,
  fcosp2v: 1.5,
  fcosp3v: 1.88,
  fcosp4v: 2.25,

  //КОМБИНАЦИИ ВРАЩЕНИЙ СО СМЕНОЙ НОГИ С V
  ccospbv: 1.28,
  ccosp1v: 1.5,
  ccosp2v: 1.88,
  ccosp3v: 2.25,
  ccosp4v: 2.63,
  //заходом прыжком комбинации вращений со сменой ноги
  fccospbv: 1.28,
  fccosp1v: 1.5,
  fccosp2v: 1.88,
  fccosp3v: 2.25,
  fccosp4v: 2.63,

  //ПАРНЫЕ ЭЛЕМЕНТЫ
  //ПОДДЕРЖКИ
  '1lib': 1.4,
  '1li1': 1.0,
  '1li2': 1.7,
  '1li3': 1.9,
  '1li4': 2.1,
  '2lib': 1.5,
  '2li1': 1.9,
  '2li2': 2.3,
  '2li3': 2.7,
  '2li4': 3.1,
  '3lib': 3.5,
  '3li1': 3.9,
  '3li2': 4.3,
  '3li3': 4.7,
  '3li4': 5.1,
  '4lib': 3.5,
  '4li1': 3.9,
  '4li2': 4.3,
  '4li3': 4.7,
  '4li4': 5.1,
  '5slib': 4.6,
  '5sli1': 5.0,
  '5sli2': 5.4,
  '5sli3': 5.8,
  '5sli4': 6.2,
  '5tlib': 4.6,
  '5tli1': 5.0,
  '5tli2': 5.4,
  '5tli3': 5.8,
  '5tli4': 6.2,
  '5blib': 5.0,
  '5bli1': 5.4,
  '5bli2': 5.8,
  '5bli3': 6.2,
  '5bli4': 6.5,
  '5alib': 5.4,
  '5ali1': 5.8,
  '5ali2': 6.2,
  '5ali3': 6.6,
  '5ali4': 7.0,
  '5rlib': 5.4,
  '5rli1': 5.8,
  '5rli2': 6.2,
  '5rli3': 6.6,
  '5rli4': 7.0,

  //ПОДКРУТКИ
  '1twb': 0.9,
  '1tw1': 1.1,
  '1tw2': 1.3,
  '1tw3': 1.5,
  '1tw4': 1.7,
  '1twb<<': 0.0,
  '1tw1<<': 0.0,
  '1tw2<<': 0.0,
  '1tw3<<': 0.0,
  '1tw4<<': 0.0,
  '2twb': 2.6,
  '2tw1': 2.8,
  '2tw2': 3.0,
  '2tw3': 3.2,
  '2tw4': 3.4,
  '2twb<<': 0.9,
  '2tw1<<': 1.1,
  '2tw2<<': 1.3,
  '2tw3<<': 1.5,
  '2tw4<<': 1.7,
  '3twb': 4.8,
  '3tw1': 5.1,
  '3tw2': 5.4,
  '3tw3': 5.7,
  '3tw4': 6.0,
  '3twb<<': 2.6,
  '3tw1<<': 2.8,
  '3tw2<<': 3.0,
  '3tw3<<': 3.2,
  '3tw4<<': 3.4,
  '4twb': 6.4,
  '4tw1': 6.8,
  '4tw2': 7.2,
  '4tw3': 7.6,
  '4tw4': 8.0,
  '4twb<<': 4.8,
  '4tw1<<': 5.1,
  '4tw2<<': 5.4,
  '4tw3<<': 5.7,
  '4tw4<<': 6.0,

  //ВЫБРОСЫ
  '1tth': 1.1,
  '1sth': 1.1,
  '1loth': 1.4,
  '1fth': 1.4,
  '1lzth': 1.4,

  '1tthq': 1.1,
  '1sthq': 1.1,
  '1lothq': 1.4,
  '1fthq': 1.4,
  '1lzthq': 1.4,

  '1tth<': 0.83,
  '1sth<': 0.83,
  '1loth<': 1.05,
  '1fth<': 1.05,
  '1lzth<': 1.05,

  '1ath': 2.2,
  '2tth': 2.5,
  '2sth': 2.5,
  '2loth': 2.8,
  '2fth': 3.0,
  '2lzth': 3.0,

  '1athq': 2.2,
  '2tthq': 2.5,
  '2sthq': 2.5,
  '2lothq': 2.8,
  '2fthq': 3.0,
  '2lzthq': 3.0,

  '1ath<': 1.65,
  '2tth<': 1.88,
  '2sth<': 1.88,
  '2loth<': 2.1,
  '2fth<': 2.25,
  '2lzth<': 2.25,

  '1ath<<': 0,
  '2tth<<': 1.1,
  '2sth<<': 1.1,
  '2loth<<': 1.4,
  '2fth<<': 1.4,
  '2lzth<<': 1.4,

  '2ath': 4.0,
  '3tth': 4.4,
  '3sth': 4.4,
  '3loth': 5.0,
  '3fth': 5.3,
  '3lzth': 5.3,

  '2athq': 4.0,
  '3tthq': 4.4,
  '3sthq': 4.4,
  '3lothq': 5.0,
  '3fthq': 5.3,
  '3lzthq': 5.3,

  '2ath<': 3.0,
  '3tth<': 3.3,
  '3sth<': 3.3,
  '3loth<': 3.75,
  '3fth<': 3.98,
  '3lzth<': 3.98,

  '2ath<<': 2.2,
  '3tth<<': 2.5,
  '3sth<<': 2.5,
  '3loth<<': 2.8,
  '3fth<<': 3.0,
  '3lzth<<': 3.0,

  '3ath': 6.0,
  '4tth': 6.5,
  '4sth': 6.5,
  '4loth': 7.0,
  '4fth': 7.5,
  '4lzth': 7.5,

  '3athq': 6.0,
  '4tthq': 6.5,
  '4sthq': 6.5,
  '4lothq': 7.0,
  '4fthq': 7.5,
  '4lzthq': 7.5,

  '3ath<': 4.5,
  '4tth<': 4.88,
  '4sth<': 4.88,
  '4loth<': 5.25,
  '4fth<': 5.63,
  '4lzth<': 5.63,

  '3ath<<': 4.0,
  '4tth<<': 4.4,
  '4sth<<': 4.4,
  '4loth<<': 5.0,
  '4fth<<': 5.3,
  '4lzth<<': 5.3,

  //ТОДЕСЫ
  bidsb: 2.8,
  bids1: 3.1,
  bids2: 3.4,
  bids3: 3.7,
  bids4: 4.0,

  fidsb: 2.6,
  fids1: 2.9,
  fids2: 3.2,
  fids3: 3.5,
  fids4: 3.8,

  bodsb: 3.2,
  bods1: 3.6,
  bods2: 4.0,
  bods3: 4.4,
  bods4: 4.8,

  fodsb: 3.5,
  fods1: 3.9,
  fods2: 4.3,
  fods3: 4.7,
  fods4: 5.1,

  pif1: 2.2,

  //ПАРНЫЕ ВРАЩЕНИЯ
  pspb: 1.7,
  psp1: 2.0,
  psp2: 2.5,
  psp3: 3.0,
  psp4: 3.5,

  pcospb: 2.5,
  pcosp1: 3.0,
  pcosp2: 3.5,
  pcosp3: 4.0,
  pcosp4: 4.5,

  pcospbv: 1.88,
  pcosp1v: 2.25,
  pcosp2v: 2.63,
  pcosp3v: 3.0,
  pcosp4v: 3.38,
};

const goeValueList = {
  q: -2,
  '<': -2,
  '<<': -4,
  '!': -2,
  e: -4,
};

export { elementsValueList, goeValueList };
