import Header from './header.jsx';
import { MainArea } from './game-area.jsx';
import { useEffect, useRef, useState } from 'react';
function App() {
  const countries = {
    AF: 'Afeganistão',
    ZA: 'África do Sul',
    AL: 'Albânia',
    DE: 'Alemanha',
    AD: 'Andorra',
    AO: 'Angola',
    AI: 'Anguilla',
    AQ: 'Antártida',
    AG: 'Antígua e Barbuda',
    SA: 'Arábia Saudita',
    DZ: 'Argélia',
    AR: 'Argentina',
    AM: 'Armênia',
    AW: 'Aruba',
    AU: 'Austrália',
    AT: 'Áustria',
    AZ: 'Azerbaijão',
    BS: 'Bahamas',
    BH: 'Bahrein',
    BD: 'Bangladesh',
    BB: 'Barbados',
    BY: 'Belarus',
    BE: 'Bélgica',
    BZ: 'Belize',
    BJ: 'Benin',
    BM: 'Bermudas',
    BO: 'Bolívia',
    BA: 'Bósnia-Herzegóvina',
    BW: 'Botsuana',
    BR: 'Brasil',
    BN: 'Brunei',
    BG: 'Bulgária',
    BF: 'Burkina Fasso',
    BI: 'Burundi',
    BT: 'Butão',
    CV: 'Cabo Verde',
    CM: 'Camarões',
    KH: 'Camboja',
    CA: 'Canadá',
    KZ: 'Cazaquistão',
    TD: 'Chade',
    CL: 'Chile',
    CN: 'China',
    CY: 'Chipre',
    SG: 'Cingapura',
    CO: 'Colômbia',
    CG: 'Congo',
    KP: 'Coréia do Norte',
    KR: 'Coréia do Sul',
    CI: 'Costa do Marfim',
    CR: 'Costa Rica',
    HR: 'Croácia',
    CU: 'Cuba',
    DK: 'Dinamarca',
    DJ: 'Djibuti',
    DM: 'Dominica',
    EG: 'Egito',
    SV: 'El Salvador',
    AE: 'Emirados Árabes Unidos',
    EC: 'Equador',
    ER: 'Eritréia',
    SK: 'Eslováquia',
    SI: 'Eslovênia',
    ES: 'Espanha',
    US: 'Estados Unidos',
    EE: 'Estônia',
    ET: 'Etiópia',
    FJ: 'Fiji',
    PH: 'Filipinas',
    FI: 'Finlândia',
    FR: 'França',
    GA: 'Gabão',
    GM: 'Gâmbia',
    GH: 'Gana',
    GE: 'Geórgia',
    GI: 'Gibraltar',
    GB: 'Reino Unido',
    GD: 'Granada',
    GR: 'Grécia',
    GL: 'Groelândia',
    GP: 'Guadalupe',
    GU: 'Guam',
    GT: 'Guatemala',
    GN: 'Guiné',
    GQ: 'Guiné Equatorial',
    GW: 'Guiné-Bissau',
    HT: 'Haiti',
    NL: 'Holanda',
    HN: 'Honduras',
    HK: 'Hong Kong',
    HU: 'Hungria',
    YE: 'Iêmen',
    IN: 'índia',
    ID: 'Indonésia',
    IR: 'Irã',
    IQ: 'Iraque',
    IE: 'Irlanda',
    IS: 'Islândia',
    IL: 'Israel',
    IT: 'Itália',
    JM: 'Jamaica',
    JP: 'Japão',
    JE: 'Jersey',
    JO: 'Jordânia',
    KE: 'Kênia',
    KI: 'Kiribati',
    KW: 'Kuait',
    LA: 'Laos',
    LV: 'Látvia',
    LS: 'Lesoto',
    LB: 'Líbano',
    LR: 'Libéria',
    LY: 'Líbia',
    LI: 'Liechtenstein',
    LT: 'Lituânia',
    LU: 'Luxemburgo',
    MO: 'Macau',
    MK: 'Macedônia',
    MG: 'Madagascar',
    MY: 'Malásia',
    MW: 'Malaui',
    MV: 'Maldivas',
    ML: 'Mali',
    MT: 'Malta',
    MA: 'Marrocos',
    MQ: 'Martinica',
    MU: 'Maurício',
    MR: 'Mauritânia',
    MX: 'México',
    FM: 'Micronésia',
    MZ: 'Moçambique',
    MD: 'Moldova',
    MC: 'Mônaco',
    MN: 'Mongólia',
    ME: 'Montenegro',
    MS: 'Montserrat',
    MM: 'Myanma',
    NA: 'Namíbia',
    NR: 'Nauru',
    NP: 'Nepal',
    NI: 'Nicarágua',
    NE: 'Níger',
    NG: 'Nigéria',
    NU: 'Niue',
    NO: 'Noruega',
    NC: 'Nova Caledônia',
    NZ: 'Nova Zelândia',
    OM: 'Omã',
    PW: 'Palau',
    PA: 'Panamá',
    PG: 'Papua-Nova Guiné',
    PK: 'Paquistão',
    PY: 'Paraguai',
    PE: 'Peru',
    PL: 'Polônia',
    PR: 'Porto Rico',
    PT: 'Portugal',
    QA: 'Qatar',
    KG: 'Quirguistão',
    CF: 'República Centro-Africana',
    CD: 'República Democrática do Congo',
    DO: 'República Dominicana',
    CZ: 'República Tcheca',
    RO: 'Romênia',
    RW: 'Ruanda',
    RU: 'Rússia',
    EH: 'Saara Ocidental',
    SH: 'Santa Helena',
    LC: 'Santa Lúcia',
    MF: 'São Martim',
    ST: 'São Tomé e Príncipe',
    SN: 'Senegal',
    SL: 'Serra Leoa',
    RS: 'Sérvia',
    SY: 'Síria',
    SO: 'Somália',
    LK: 'Sri Lanka',
    SZ: 'Suazilândia',
    SD: 'Sudão',
    SE: 'Suécia',
    CH: 'Suíça',
    SR: 'Suriname',
    TJ: 'Tadjiquistão',
    TH: 'Tailândia',
    TW: 'Taiwan',
    TZ: 'Tanzânia',
    TG: 'Togo',
    TO: 'Tonga',
    TT: 'Trinidad e Tobago',
    TN: 'Tunísia',
    TM: 'Turcomenistão',
    TR: 'Turquia',
    TV: 'Tuvalu',
    UA: 'Ucrânia',
    UG: 'Uganda',
    UY: 'Uruguai',
    UZ: 'Uzbequistão',
    VU: 'Vanuatu',
    VA: 'Vaticano',
    VE: 'Venezuela',
    VN: 'Vietnã',
    ZM: 'Zâmbia',
    ZW: 'Zimbábue',
  };
  const [input, setInput] = useState('');
  const getRandomCountry = function (obj) {
    const keys = Object.keys(obj);
    const random = (keys.length * Math.random()) << 0;
    return [obj[keys[random]], keys[random]];
  };
  const rightAnswer = useRef(false);

  const [activeCountry, setActiveCountry] = useState(
    getRandomCountry(countries)
  );
  const [roundEnding, setRoundEnding] = useState(false);
  const [counter, setCounter] = useState(1050);

  useEffect(() => {
    if (counter > -1 && (!rightAnswer.current || roundEnding)) {
      setTimeout(() => setCounter((cur) => cur - 1), 10);
    } else {
      setCounter(!roundEnding ? 520 : 1050);
      if (roundEnding) rightAnswer.current = false;
      if (roundEnding) setAnswers([]);
      setRoundEnding((cur) => !cur);
    }
  }, [counter, roundEnding, rightAnswer]);

  const [players, setPlayers] = useState([
    {
      name: 'Du',
      points: 0,
    },
  ]);
  const activePlayer = 'Du';

  const normalizeText = function (text) {
    return text
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '');
  };
  const [ponts, setPoints] = useState(0);
  const [answers, setAnswers] = useState([]);
  const handleInput = function (e) {
    setInput(e.target.value);
  };
  const [messageId, setMessageId] = useState(0);
  const handleSubmit = function (e) {
    e.preventDefault();
    if (!input) return;
    if (roundEnding) return;
    if (rightAnswer.current) return;
    if (normalizeText(input) === normalizeText(activeCountry[0])) {
      setPlayers((array) => {
        const active = array.findIndex((obj) => obj.name === activePlayer);
        const activeObj = Object.assign({}, array[active]);
        activeObj.points++;
        const newArray = [...array];
        newArray[active] = activeObj;
        setPlayers(newArray);
      });
      rightAnswer.current = true;
    } else {
      setMessageId((cur) => cur + 1);
      setAnswers([
        ...answers,
        { player: activePlayer, message: input, id: messageId },
      ]);
    }
    setInput('');
  };

  return (
    <div className='h-screen flex flex-col overflow-hidden'>
      <Header />

      <MainArea
        players={players}
        country={activeCountry}
        answers={answers}
        counter={counter}
        roundEnding={roundEnding}
        rightAnswer={rightAnswer}
        handleSubmit={handleSubmit}
        input={input}
        handleInput={handleInput}
      />
    </div>
  );
}

export default App;
