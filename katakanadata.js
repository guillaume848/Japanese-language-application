const katakanaData = [
  {
    id: "a_k",
    title: "a",
    image: require('../images/katakana/a-k.png'),
    options: ["ya","n","a"],
    imageoptions: [require('../images/katakana/a-k.png'),require('../images/katakana/chi-k.png')]
  },
  {
    id: "chi_k",
    title: "chi",
    image: require('../images/katakana/chi-k.png'),
    options: ["ki","chi","mo"],
    imageoptions: [require('../images/katakana/chi-k.png'),require('../images/katakana/ro-k.png')]
  },
  {
    id: "e_k",
    title: "e",
    image: require('../images/katakana/e-k.png'),
    options: ["re","yu","e"],
    imageoptions: [require('../images/katakana/e-k.png'),require('../images/katakana/a-k.png')]
  },
  {
    id: "fu_k",
    title: "fu",
    image: require('../images/katakana/fu-k.png'),
    options: ["nu","wa","fu"],
    imageoptions: [require('../images/katakana/fu-k.png'),require('../images/katakana/ra-k.png')]
  },
  {
    id: "ha_k",
    title: "ha",
    image: require('../images/katakana/ha-k.png'),
    options: ["ni","ha","i"],
    imageoptions: [require('../images/katakana/ha-k.png'),require('../images/katakana/he-k.png')]
  },
  // {
  //   id: "he_k",
  //   title: "he",
  //   image: require('../images/katakana/he-k.png'),
  //   options: ["he","ke","so"],
  // },
  // {
  //   id: "hi_k",
  //   title: "hi",
  //   image: require('../images/katakana/hi-k.png'),
  //   options: ["to","na","hi"],
  // },
  // {
  //   id: "ho_k",
  //   title: "ho",
  //   image: require('../images/katakana/ho-k.png'),
  //   options: ["o","sa","ho"],
  // },
  // {
  //   id: "i_k",
  //   title: "i",
  //   image: require('../images/katakana/i-k.png'),
  //   options: ["i","e","te"],
  // },
  // {
  //   id: "ka_k",
  //   title: "ka",
  //   image: require('../images/katakana/ka-k.png'),
  //   options: ["ka","ko","yo"],
  // },
  // {
  //   id: "ke_k",
  //   title: "ke",
  //   image: require('../images/katakana/ke-k.png'),
  //   options: ["ku","ke","su"],
  // },
  // {
  //   id: "ki_k",
  //   title: "ki",
  //   image: require('../images/katakana/ki-k.png'),
  //   options: ["ki","se","mi"],
  // },
  // {
  //   id: "ko_k",
  //   title: "ko",
  //   image: require('../images/katakana/ko-k.png'),
  //   options: ["ro","wo","ko"],
  // },
  // {
  //   id: "ku_k",
  //   title: "ku",
  //   image: require('../images/katakana/ku-k.png'),
  //   options: ["u","ta","ku"],
  // },
  // {
  //   id: "ma_k",
  //   title: "ma",
  //   image: require('../images/katakana/ma-k.png'),
  //   options: ["sa","a","ma"],
  // },
  // {
  //   id: "me_k",
  //   title: "me",
  //   image: require('../images/katakana/me-k.png'),
  //   options: ["me","ne","no"],
  // },
  // {
  //   id: "mi_k",
  //   title: "mi",
  //   image: require('../images/katakana/mi-k.png'),
  //   options: ["ni","mi","chi"],
  // },
  // {
  //   id: "mo_k",
  //   title: "mo",
  //   image: require('../images/katakana/mo-k.png'),
  //   options: ["mi","mo","ho"],
  // },
  // {
  //   id: "mu_k",
  //   title: "mu",
  //   image: require('../images/katakana/mu-k.png'),
  //   options: ["mu","ya","fu"],
  // },
  // {
  //   id: "na_k",
  //   title: "na",
  //   image: require('../images/katakana/na-k.png'),
  //   options: ["no","te","na"],
  // },
  // {
  //   id: "ne_k",
  //   title: "ne",
  //   image: require('../images/katakana/ne-k.png'),
  //   options: ["ne","o","he"],
  // },

  // {
  //   id: "ni_k",
  //   title: "ni",
  //   image: require('../images/katakana/ni-k.png'),
  //   options: ["ni","n","ri"],
  // },
  // {
  //   id: "no_k",
  //   title: "no",
  //   image: require('../images/katakana/no-k.png'),
  //   options: ["me","no","ha"],
  // },
  // {
  //   id: "nu_k",
  //   title: "nu",
  //   image: require('../images/katakana/nu-k.png'),
  //   options: ["me","nu","ta"],
  // },

  // {
  //   id: "o_k",
  //   title: "o",
  //   image: require('../images/katakana/o-k.png'),
  //   options: ["ne","ka","o"],
  // },
  // {
  //   id: "ra_k",
  //   title: "ra",
  //   image: require('../images/katakana/ra-k.png'),
  //   options: ["ra","re","te"],
  // },
  // {
  //   id: "re_k",
  //   title: "re",
  //   image: require('../images/katakana/re-k.png'),
  //   options: ["mu","he","re"],
  // },
  // {
  //   id: "ri_k",
  //   title: "ri",
  //   image: require('../images/katakana/ri-k.png'),
  //   options: ["ri","ha","ru"],
  // },
  // {
  //   id: "ro_k",
  //   title: "ro",
  //   image: require('../images/katakana/ro-k.png'),
  //   options: ["ma","ro","ho"],
  // },
  // {
  //   id: "ru_k",
  //   title: "ru",
  //   image: require('../images/katakana/ru-k.png'),
  //   options: ["ku","ru","u"],
  // },
  // {
  //   id: "sa_k",
  //   title: "sa", //dit was origineel "sra" ma ik heb het verandert want ik denk dat dat ni de bedoeling was
  //   image: require('../images/katakana/sa-k.png'),
  //   options: ["sa","se","ke"],
  // },
  // {
  //   id: "se_k",
  //   title: "se",
  //   image: require('../images/katakana/se-k.png'),
  //   options: ["a","ra","se"],
  // },
  // {
  //   id: "shi_k",
  //   title: "shi",
  //   image: require('../images/katakana/shi-k.png'),
  //   options: ["n","shi","tsu"],
  // },
  // {
  //   id: "so_k",
  //   title: "so",
  //   image: require('../images/katakana/so-k.png'),
  //   options: ["n","so","no"],
  // },
  // {
  //   id: "su_k",
  //   title: "su",
  //   image: require('../images/katakana/su-k.png'),
  //   options: ["su","wa","yu"],
  // },
  // {
  //   id: "ta_k",
  //   title: "ta",
  //   image: require('../images/katakana/ta-k.png'),
  //   options: ["su","wo","ta"],
  // },
  // {
  //   id: "te_k",
  //   title: "te",
  //   image: require('../images/katakana/te-k.png'),
  //   options: ["ra","te","hi"],
  // },
  // {
  //   id: "to_k",
  //   title: "to",
  //   image: require('../images/katakana/to-k.png'),
  //   options: ["i","ru","to"],
  // },
  // {
  //   id: "tsu_k",
  //   title: "tsu",
  //   image: require('../images/katakana/tsu-k.png'),
  //   options: ["tsu","so","shi"],
  // },
  // {
  //   id: "u_k",
  //   title: "u",
  //   image: require('../images/katakana/u-k.png'),
  //   options: ["u","i","e"],
  // },
  // {
  //   id: "wa_k",
  //   title: "wa",
  //   image: require('../images/katakana/wa-k.png'),
  //   options: ["wo","fu","wa"],
  // },
  // {
  //   id: "wo_k",
  //   title: "wo",
  //   image: require('../images/katakana/wo-k.png'),
  //   options: ["wo","ki","ko"],
  // },
  // {
  //   id: "ya_k",
  //   title: "ya",
  //   image: require('../images/katakana/ya-k.png'),
  //   options: ["ma","ya","a"],
  // },
  // {
  //   id: "yo_k",
  //   title: "yo",
  //   image: require('../images/katakana/yo-k.png'),
  //   options: ["ho","yo","hi"],
  // },
  // {
  //   id: "yu_k",
  //   title: "yu",
  //   image: require('../images/katakana/yu-k.png'),
  //   options: ["yu","yo","e"],
  // },
  // {          //kana n weer
  //   id: "n_k",
  //   title: "n",
  //   image: require('../images/katakana/n-k.png'),
  //   options: ["so","shi","n"],
  // },
];

export default katakanaData;
