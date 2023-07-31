// if there is a local storage item with the key leanContactFormSubmission, remove it
if (localStorage.getItem("leanContactFormSubmission")) {
  localStorage.removeItem("leanContactFormSubmission");
}

// Controlling the submit message modal
let isFormValid = false;

const form = document.getElementById("contact-form");

const submitBtn = form.querySelector("#send");

const contactName = form.querySelector("#name");

const company = form.querySelector("#company");

const email = form.querySelector("#mail");

const countrySelect = document.querySelector(".select__wrapper");

const countrySelectBtn = countrySelect.querySelector(".select__btn");

const selectChevron = countrySelect.querySelector(".uil-angle-down");

const countryOptions = countrySelect.querySelector(".select__options");

const searchInput = countrySelect.querySelector("input");

const phone = document.querySelector("#phone");

const accept = form.querySelector("#accept");

// Clear all inputs on page load
window.onload = () => {
  document.querySelectorAll("input").forEach((input) => (input.value = ""));
};

// List of all countries with their ISO, code, phone pattern and official languages (country names in pt)
const countries = [
  {
    country: "Afeganistão",
    ISO: "AF",
    code: "93",
    phonePattern: /^(\d{9})$/,
    language: "Pashto, Dari",
  },
  {
    country: "África do Sul",
    ISO: "ZA",
    code: "27",
    phonePattern: /^(\d{9})$/,
    language: "English, Afrikaans, Zulu, Xhosa, Sotho",
  },
  {
    country: "Albânia",
    ISO: "AL",
    code: "355",
    phonePattern: /^(\d{8})$/,
    language: "Albanian",
  },
  {
    country: "Alemanha",
    ISO: "DE",
    code: "49",
    phonePattern: /^(\d{10})$/,
    language: "German",
  },
  {
    country: "Andorra",
    ISO: "AD",
    code: "376",
    phonePattern: /^(\d{6})$/,
    language: "Catalan",
  },
  {
    country: "Angola",
    ISO: "AO",
    code: "244",
    phonePattern: /^(\d{9})$/,
    language: "Portuguese",
  },
  {
    country: "Anguilla",
    ISO: "AI",
    code: "1",
    phonePattern: /^(\d{10})$/,
    language: "English",
  },
  {
    country: "Antártida",
    ISO: "AQ",
    code: "672",
    phonePattern: /^(\d{3})$/,
    language: "English",
  },
  {
    country: "Antigua e Barbuda",
    ISO: "AG",
    code: "1",
    phonePattern: /^(\d{10})$/,
    language: "English",
  },
  {
    country: "Arábia Saudita",
    ISO: "SA",
    code: "966",
    phonePattern: /^(\d{9})$/,
    language: "Arabic",
  },
  {
    country: "Argélia",
    ISO: "DZ",
    code: "213",
    phonePattern: /^(\d{8})$/,
    language: "Arabic",
  },
  {
    country: "Argentina",
    ISO: "AR",
    code: "54",
    phonePattern: /^(\d{10})$/,
    language: "Spanish",
  },
  {
    country: "Armenia",
    ISO: "AM",
    code: "374",
    phonePattern: /^(\d{8})$/,
    language: "Armenian",
  },
  {
    country: "Aruba",
    ISO: "AW",
    code: "297",
    phonePattern: /^(\d{6})$/,
    language: "Dutch, Papiamento",
  },
  {
    country: "Austrália",
    ISO: "AU",
    code: "61",
    phonePattern: /^(\d{9})$/,
    language: "English",
  },
  {
    country: "Áustria",
    ISO: "AT",
    code: "43",
    phonePattern: /^(\d{10})$/,
    language: "German",
  },
  {
    country: "Azerbaijão",
    ISO: "AZ",
    code: "994",
    phonePattern: /^(\d{9})$/,
    language: "Azerbaijani",
  },
  {
    country: "Bahamas",
    ISO: "BS",
    code: "1",
    phonePattern: /^(\d{10})$/,
    language: "English",
  },
  {
    country: "Bahrein",
    ISO: "BH",
    code: "973",
    phonePattern: /^(\d{8})$/,
    language: "Arabic",
  },
  {
    country: "Bangladesh",
    ISO: "BD",
    code: "880",
    phonePattern: /^(\d{9})$/,
    language: "Bengali",
  },
  {
    country: "Barbados",
    ISO: "BB",
    code: "1",
    phonePattern: /^(\d{10})$/,
    language: "English",
  },
  {
    country: "Bélgica",
    ISO: "BE",
    code: "32",
    phonePattern: /^(\d{9})$/,
    language: "Dutch, French, German",
  },
  {
    country: "Belize",
    ISO: "BZ",
    code: "501",
    phonePattern: /^(\d{7})$/,
    language: "English, Spanish",
  },
  {
    country: "Benin",
    ISO: "BJ",
    code: "229",
    phonePattern: /^(\d{8})$/,
    language: "French",
  },
  {
    country: "Bermudas",
    ISO: "BM",
    code: "1",
    phonePattern: /^(\d{10})$/,
    language: "English",
  },
  {
    country: "Bielorrússia",
    ISO: "BY",
    code: "375",
    phonePattern: /^(\d{9})$/,
    language: "Belarusian",
  },
  {
    country: "Bolívia",
    ISO: "BO",
    code: "591",
    phonePattern: /^(\d{7})$/,
    language: "Spanish, Aymara, Quechua",
  },
  {
    country: "Bósnia e Herzegovina",
    ISO: "BA",
    code: "387",
    phonePattern: /^(\d{8})$/,
    language: "Bosnian, Croatian, Serbian",
  },
  {
    country: "Botsuana",
    ISO: "BW",
    code: "267",
    phonePattern: /^(\d{7})$/,
    language: "English, Tswana",
  },
  {
    country: "Brasil",
    ISO: "BR",
    code: "55",
    phonePattern: /^(\d{10})$/,
    language: "Portuguese",
  },
  {
    country: "Brunei",
    ISO: "BN",
    code: "673",
    phonePattern: /^(\d{7})$/,
    language: "Malay",
  },
  {
    country: "Bulgária",
    ISO: "BG",
    code: "359",
    phonePattern: /^(\d{9})$/,
    language: "Bulgarian",
  },
  {
    country: "Burkina Faso",
    ISO: "BF",
    code: "226",
    phonePattern: /^(\d{8})$/,
    language: "French",
  },
  {
    country: "Burundi",
    ISO: "BI",
    code: "257",
    phonePattern: /^(\d{8})$/,
    language: "French, Kirundi",
  },
  {
    country: "Butão",
    ISO: "BT",
    code: "975",
    phonePattern: /^(\d{8})$/,
    language: "Dzongkha",
  },
  {
    country: "Cabo Verde",
    ISO: "CV",
    code: "238",
    phonePattern: /^(\d{7})$/,
    language: "Portuguese",
  },
  {
    country: "Camarões",
    ISO: "CM",
    code: "237",
    phonePattern: /^(\d{8})$/,
    language: "English, French",
  },
  {
    country: "Camboja",
    ISO: "KH",
    code: "855",
    phonePattern: /^(\d{8})$/,
    language: "Khmer",
  },
  {
    country: "Canadá",
    ISO: "CA",
    code: "1",
    phonePattern: /^(\d{10})$/,
    language: "English, French",
  },
  {
    country: "Catar",
    ISO: "QA",
    code: "974",
    phonePattern: /^(\d{8})$/,
    language: "Arabic",
  },
  {
    country: "Cazaquistão",
    ISO: "KZ",
    code: "7",
    phonePattern: /^(\d{10})$/,
    language: "Kazakh",
  },
  {
    country: "Chade",
    ISO: "TD",
    code: "235",
    phonePattern: /^(\d{8})$/,
    language: "French",
  },
  {
    country: "Chéquia",
    ISO: "CZ",
    code: "420",
    phonePattern: /^(\d{9})$/,
    language: "Czech",
  },
  {
    country: "Chile",
    ISO: "CL",
    code: "56",
    phonePattern: /^(\d{9})$/,
    language: "Spanish",
  },
  {
    country: "China",
    ISO: "CN",
    code: "86",
    phonePattern: /^(\d{10})$/,
    language: "Chinese",
  },
  {
    country: "Chipre",
    ISO: "CY",
    code: "357",
    phonePattern: /^(\d{8})$/,
    language: "Greek, Turkish",
  },
  {
    country: "Colômbia",
    ISO: "CO",
    code: "57",
    phonePattern: /^(\d{10})$/,
    language: "Spanish",
  },
  {
    country: "Comores",
    ISO: "KM",
    code: "269",
    phonePattern: /^(\d{7})$/,
    language: "Arabic, Comorian, French",
  },
  {
    country: "Congo",
    ISO: "CG",
    code: "242",
    phonePattern: /^(\d{8})$/,
    language: "French",
  },
  {
    country: "República Democrática do Congo",
    ISO: "CD",
    code: "243",
    phonePattern: /^(\d{9})$/,
    language: "French, Lingala, Swahili",
  },
  {
    country: "Coreia do Norte",
    ISO: "KP",
    code: "850",
    phonePattern: /^(\d{8})$/,
    language: "Korean",
  },
  {
    country: "Coreia do Sul",
    ISO: "KR",
    code: "82",
    phonePattern: /^(\d{9})$/,
    language: "Korean",
  },
  {
    country: "Costa do Marfim",
    ISO: "CI",
    code: "225",
    phonePattern: /^(\d{8})$/,
    language: "French",
  },
  {
    country: "Costa Rica",
    ISO: "CR",
    code: "506",
    phonePattern: /^(\d{8})$/,
    language: "Spanish",
  },
  {
    country: "Croácia",
    ISO: "HR",
    code: "385",
    phonePattern: /^(\d{9})$/,
    language: "Croatian",
  },
  {
    country: "Cuba",
    ISO: "CU",
    code: "53",
    phonePattern: /^(\d{8})$/,
    language: "Spanish",
  },
  {
    country: "Dinamarca",
    ISO: "DK",
    code: "45",
    phonePattern: /^(\d{8})$/,
    language: "Danish",
  },
  {
    country: "Djibouti",
    ISO: "DJ",
    code: "253",
    phonePattern: /^(\d{8})$/,
    language: "Arabic, French",
  },
  {
    country: "Dominica",
    ISO: "DM",
    code: "1",
    phonePattern: /^(\d{10})$/,
    language: "English",
  },
  {
    country: "Egito",
    ISO: "EG",
    code: "20",
    phonePattern: /^(\d{10})$/,
    language: "Arabic",
  },
  {
    country: "El Salvador",
    ISO: "SV",
    code: "503",
    phonePattern: /^(\d{8})$/,
    language: "Spanish",
  },
  {
    country: "Emirados Árabes Unidos",
    ISO: "AE",
    code: "971",
    phonePattern: /^(\d{8})$/,
    language: "Arabic",
  },
  {
    country: "Equador",
    ISO: "EC",
    code: "593",
    phonePattern: /^(\d{8})$/,
    language: "Spanish",
  },
  {
    country: "Eritreia",
    ISO: "ER",
    code: "291",
    phonePattern: /^(\d{7})$/,
    language: "Arabic, English, Tigrinya",
  },
  {
    country: "Eslováquia",
    ISO: "SK",
    code: "421",
    phonePattern: /^(\d{9})$/,
    language: "Slovak",
  },
  {
    country: "Eslovénia",
    ISO: "SI",
    code: "386",
    phonePattern: /^(\d{8})$/,
    language: "Slovenian",
  },
  {
    country: "Espanha",
    ISO: "ES",
    code: "34",
    phonePattern: /^(\d{9})$/,
    language: "Spanish",
  },
  {
    country: "Estados Unidos",
    ISO: "US",
    code: "1",
    phonePattern: /^(\d{10})$/,
    language: "English",
  },
  {
    country: "Estonia",
    ISO: "EE",
    code: "372",
    phonePattern: /^(\d{8})$/,
    language: "Estonian",
  },
  {
    country: "Etiópia",
    ISO: "ET",
    code: "251",
    phonePattern: /^(\d{9})$/,
    language: "Amharic, English, Oromo",
  },
  {
    country: "Fiji",
    ISO: "FJ",
    code: "679",
    phonePattern: /^(\d{7})$/,
    language: "English, Fijian, Hindi, Urdu",
  },
  {
    country: "Filipinas",
    ISO: "PH",
    code: "63",
    phonePattern: /^(\d{10})$/,
    language: "English, Filipino, Spanish",
  },
  {
    country: "Finlândia",
    ISO: "FI",
    code: "358",
    phonePattern: /^(\d{9})$/,
    language: "Finnish, Swedish",
  },
  {
    country: "França",
    ISO: "FR",
    code: "33",
    phonePattern: /^(\d{9})$/,
    language: "French",
  },
  {
    country: "Gabão",
    ISO: "GA",
    code: "241",
    phonePattern: /^(\d{8})$/,
    language: "French",
  },
  {
    country: "Gâmbia",
    ISO: "GM",
    code: "220",
    phonePattern: /^(\d{8})$/,
    language: "English",
  },
  {
    country: "Gana",
    ISO: "GH",
    code: "233",
    phonePattern: /^(\d{9})$/,
    language: "English, Akan, Ewe, Ga, Hausa, Twi",
  },
  {
    country: "Geórgia",
    ISO: "GE",
    code: "995",
    phonePattern: /^(\d{9})$/,
    language: "Georgian",
  },
  {
    country: "Gibraltar",
    ISO: "GI",
    code: "350",
    phonePattern: /^(\d{8})$/,
    language: "English",
  },
  {
    country: "Granada",
    ISO: "GD",
    code: "1",
    phonePattern: /^(\d{10})$/,
    language: "English",
  },
  {
    country: "Grécia",
    ISO: "GR",
    code: "30",
    phonePattern: /^(\d{10})$/,
    language: "Greek",
  },
  {
    country: "Gronelândia",
    ISO: "GL",
    code: "299",
    phonePattern: /^(\d{6})$/,
    language: "Greenlandic",
  },
  {
    country: "Guadalupe",
    ISO: "GP",
    code: "590",
    phonePattern: /^(\d{9})$/,
    language: "French",
  },
  {
    country: "Guam",
    ISO: "GU",
    code: "1",
    phonePattern: /^(\d{10})$/,
    language: "English, Chamorro",
  },
  {
    country: "Guatemala",
    ISO: "GT",
    code: "502",
    phonePattern: /^(\d{8})$/,
    language: "Spanish",
  },
  {
    country: "Guernsey",
    ISO: "GG",
    code: "44",
    phonePattern: /^(\d{9})$/,
    language: "English",
  },
  {
    country: "Guiana",
    ISO: "GY",
    code: "592",
    phonePattern: /^(\d{8})$/,
    language: "English",
  },
  {
    country: "Guiana Francesa",
    ISO: "GF",
    code: "594",
    phonePattern: /^(\d{8})$/,
    language: "French",
  },
  {
    country: "Guiné",
    ISO: "GN",
    code: "224",
    phonePattern: /^(\d{8})$/,
    language: "French",
  },
  {
    country: "Guiné Equatorial",
    ISO: "GQ",
    code: "240",
    phonePattern: /^(\d{8})$/,
    language: "Spanish, French",
  },
  {
    country: "Guiné-Bissau",
    ISO: "GW",
    code: "245",
    phonePattern: /^(\d{8})$/,
    language: "Portuguese",
  },
  {
    country: "Haiti",
    ISO: "HT",
    code: "509",
    phonePattern: /^(\d{8})$/,
    language: "French, Haitian Creole",
  },
  {
    country: "Holanda",
    ISO: "NL",
    code: "31",
    phonePattern: /^(\d{9})$/,
    language: "Dutch",
  },
  {
    country: "Honduras",
    ISO: "HN",
    code: "504",
    phonePattern: /^(\d{8})$/,
    language: "Spanish",
  },
  {
    country: "Hong Kong",
    ISO: "HK",
    code: "852",
    phonePattern: /^(\d{8})$/,
    language: "Cantonese, English, Mandarin",
  },
  {
    country: "Hungria",
    ISO: "HU",
    code: "36",
    phonePattern: /^(\d{9})$/,
    language: "Hungarian",
  },
  {
    country: "Iémene",
    ISO: "YE",
    code: "967",
    phonePattern: /^(\d{8})$/,
    language: "Arabic",
  },
  {
    country: "Ilha Bouvet",
    ISO: "BV",
    code: "47",
    phonePattern: /^(\d{8})$/,
    language: "Norwegian",
  },
  {
    country: "Ilha de Man",
    ISO: "IM",
    code: "44",
    phonePattern: /^(\d{9})$/,
    language: "English",
  },
  {
    country: "Ilhas Cayman",
    ISO: "KY",
    code: "1",
    phonePattern: /^(\d{10})$/,
    language: "English",
  },
  {
    country: "Ilhas Cocos",
    ISO: "CC",
    code: "61",
    phonePattern: /^(\d{9})$/,
    language: "English",
  },
  {
    country: "Ilhas Cook",
    ISO: "CK",
    code: "682",
    phonePattern: /^(\d{6})$/,
    language: "English",
  },
  {
    country: "Ilhas Faroe",
    ISO: "FO",
    code: "298",
    phonePattern: /^(\d{6})$/,
    language: "Faroese",
  },
  {
    country: "Ilhas Heard e McDonald",
    ISO: "HM",
    code: "672",
    phonePattern: /^(\d{6})$/,
    language: "English",
  },
  {
    country: "Ilhas Malvinas",
    ISO: "FK",
    code: "500",
    phonePattern: /^(\d{6})$/,
    language: "English",
  },
  {
    country: "Ilhas Marianas do Norte",
    ISO: "MP",
    code: "1",
    phonePattern: /^(\d{10})$/,
    language: "English, Chamorro",
  },
  {
    country: "Ilhas Marshall",
    ISO: "MH",
    code: "692",
    phonePattern: /^(\d{7})$/,
    language: "English, Marshallese",
  },
  {
    country: "Ilhas Menores Distantes dos Estados Unidos",
    ISO: "UM",
    code: "1",
    phonePattern: /^(\d{10})$/,
    language: "English",
  },
  {
    country: "Ilhas Salomão",
    ISO: "SB",
    code: "677",
    phonePattern: /^(\d{7})$/,
    language: "English",
  },
  {
    country: "Ilhas Virgens Americanas",
    ISO: "VI",
    code: "1",
    phonePattern: /^(\d{10})$/,
    language: "English",
  },
  {
    country: "Ilhas Virgens Britânicas",
    ISO: "VG",
    code: "1",
    phonePattern: /^(\d{10})$/,
    language: "English",
  },
  {
    country: "Ilhas Wallis e Futuna",
    ISO: "WF",
    code: "681",
    phonePattern: /^(\d{6})$/,
    language: "French",
  },
  {
    country: "Índia",
    ISO: "IN",
    code: "91",
    phonePattern: /^(\d{10})$/,
    language: "Hindi, English",
  },
  {
    country: "Indonésia",
    ISO: "ID",
    code: "62",
    phonePattern: /^(\d{9})$/,
    language: "Indonesian",
  },
  {
    country: "Irão",
    ISO: "IR",
    code: "98",
    phonePattern: /^(\d{10})$/,
    language: "Persian",
  },
  {
    country: "Iraque",
    ISO: "IQ",
    code: "964",
    phonePattern: /^(\d{10})$/,
    language: "Arabic",
  },
  {
    country: "Irlanda",
    ISO: "IE",
    code: "353",
    phonePattern: /^(\d{9})$/,
    language: "Irish, English",
  },
  {
    country: "Islândia",
    ISO: "IS",
    code: "354",
    phonePattern: /^(\d{9})$/,
    language: "Icelandic",
  },
  {
    country: "Israel",
    ISO: "IL",
    code: "972",
    phonePattern: /^(\d{9})$/,
    language: "Hebrew",
  },
  {
    country: "Itália",
    ISO: "IT",
    code: "39",
    phonePattern: /^(\d{9})$/,
    language: "Italian",
  },
  {
    country: "Jamaica",
    ISO: "JM",
    code: "1",
    phonePattern: /^(\d{10})$/,
    language: "English",
  },
  {
    country: "Japão",
    ISO: "JP",
    code: "81",
    phonePattern: /^(\d{10})$/,
    language: "Japanese",
  },
  {
    country: "Jersey",
    ISO: "JE",
    code: "44",
    phonePattern: /^(\d{9})$/,
    language: "English",
  },
  {
    country: "Jordânia",
    ISO: "JO",
    code: "962",
    phonePattern: /^(\d{9})$/,
    language: "Arabic",
  },
  {
    country: "Kiribati",
    ISO: "KI",
    code: "686",
    phonePattern: /^(\d{6})$/,
    language: "English",
  },
  {
    country: "Kuwait",
    ISO: "KW",
    code: "965",
    phonePattern: /^(\d{8})$/,
    language: "Arabic",
  },
  {
    country: "Laos",
    ISO: "LA",
    code: "856",
    phonePattern: /^(\d{9})$/,
    language: "Lao",
  },
  {
    country: "Lesoto",
    ISO: "LS",
    code: "266",
    phonePattern: /^(\d{7})$/,
    language: "Sesotho",
  },
  {
    country: "Letónia",
    ISO: "LV",
    code: "371",
    phonePattern: /^(\d{8})$/,
    language: "Latvian",
  },
  {
    country: "Líbano",
    ISO: "LB",
    code: "961",
    phonePattern: /^(\d{8})$/,
    language: "Arabic",
  },
  {
    country: "Libéria",
    ISO: "LR",
    code: "231",
    phonePattern: /^(\d{8})$/,
    language: "English",
  },
  {
    country: "Líbia",
    ISO: "LY",
    code: "218",
    phonePattern: /^(\d{9})$/,
    language: "Arabic",
  },
  {
    country: "Liechtenstein",
    ISO: "LI",
    code: "423",
    phonePattern: /^(\d{7})$/,
    language: "German",
  },
  {
    country: "Lituânia",
    ISO: "LT",
    code: "370",
    phonePattern: /^(\d{8})$/,
    language: "Lithuanian",
  },
  {
    country: "Luxemburgo",
    ISO: "LU",
    code: "352",
    phonePattern: /^(\d{8})$/,
    language: "Luxembourgish, French, German",
  },
  {
    country: "Macau",
    ISO: "MO",
    code: "853",
    phonePattern: /^(\d{8})$/,
    language: "Chinese, Portuguese",
  },
  {
    country: "Macedonia",
    ISO: "MK",
    code: "389",
    phonePattern: /^(\d{8})$/,
    language: "Macedonian",
  },
  {
    country: "Madagascar",
    ISO: "MG",
    code: "261",
    phonePattern: /^(\d{9})$/,
    language: "Malagasy",
  },
  {
    country: "Malásia",
    ISO: "MY",
    code: "60",
    phonePattern: /^(\d{9})$/,
    language: "Malay",
  },
  {
    country: "Malawi",
    ISO: "MW",
    code: "265",
    phonePattern: /^(\d{8})$/,
    language: "Chichewa",
  },
  {
    country: "Maldivas",
    ISO: "MV",
    code: "960",
    phonePattern: /^(\d{7})$/,
    language: "Dhivehi",
  },
  {
    country: "Mali",
    ISO: "ML",
    code: "223",
    phonePattern: /^(\d{8})$/,
    language: "French",
  },
  {
    country: "Malta",
    ISO: "MT",
    code: "356",
    phonePattern: /^(\d{8})$/,
    language: "Maltese",
  },
  {
    country: "Marrocos",
    ISO: "MA",
    code: "212",
    phonePattern: /^(\d{9})$/,
    language: "Arabic",
  },
  {
    country: "Martinica",
    ISO: "MQ",
    code: "596",
    phonePattern: /^(\d{8})$/,
    language: "French",
  },
  {
    country: "Maurício",
    ISO: "MU",
    code: "230",
    phonePattern: /^(\d{8})$/,
    language: "English, French, Mauritian Creole",
  },
  {
    country: "Mauritânia",
    ISO: "MR",
    code: "222",
    phonePattern: /^(\d{8})$/,
    language: "Arabic",
  },
  {
    country: "Mayotte",
    ISO: "YT",
    code: "262",
    phonePattern: /^(\d{9})$/,
    language: "French",
  },
  {
    country: "México",
    ISO: "MX",
    code: "52",
    phonePattern: /^(\d{10})$/,
    language: "Spanish",
  },
  {
    country: "Mianmar",
    ISO: "MM",
    code: "95",
    phonePattern: /^(\d{9})$/,
    language: "Burmese",
  },
  {
    country: "Micronesia",
    ISO: "FM",
    code: "691",
    phonePattern: /^(\d{7})$/,
    language: "English",
  },
  {
    country: "Moçambique",
    ISO: "MZ",
    code: "258",
    phonePattern: /^(\d{9})$/,
    language: "Portuguese",
  },
  {
    country: "Moldávia",
    ISO: "MD",
    code: "373",
    phonePattern: /^(\d{8})$/,
    language: "Moldovan",
  },
  {
    country: "Monaco",
    ISO: "MC",
    code: "377",
    phonePattern: /^(\d{8})$/,
    language: "French",
  },
  {
    country: "Mongólia",
    ISO: "MN",
    code: "976",
    phonePattern: /^(\d{8})$/,
    language: "Mongolian",
  },
  {
    country: "Montenegro",
    ISO: "ME",
    code: "382",
    phonePattern: /^(\d{8})$/,
    language: "Montenegrin",
  },
  {
    country: "Montserrat",
    ISO: "MS",
    code: "1",
    phonePattern: /^(\d{10})$/,
    language: "English",
  },
  {
    country: "Namíbia",
    ISO: "NA",
    code: "264",
    phonePattern: /^(\d{9})$/,
    language: "English, Afrikaans",
  },
  {
    country: "Nauru",
    ISO: "NR",
    code: "674",
    phonePattern: /^(\d{6})$/,
    language: "English, Nauruan",
  },
  {
    country: "Nepal",
    ISO: "NP",
    code: "977",
    phonePattern: /^(\d{9})$/,
    language: "Nepali",
  },
  {
    country: "Nicarágua",
    ISO: "NI",
    code: "505",
    phonePattern: /^(\d{8})$/,
    language: "Spanish",
  },
  {
    country: "Níger",
    ISO: "NE",
    code: "227",
    phonePattern: /^(\d{8})$/,
    language: "French",
  },
  {
    country: "Nigéria",
    ISO: "NG",
    code: "234",
    phonePattern: /^(\d{10})$/,
    language: "English",
  },
  {
    country: "Niue",
    ISO: "NU",
    code: "683",
    phonePattern: /^(\d{4})$/,
    language: "English",
  },
  {
    country: "Noruega",
    ISO: "NO",
    code: "47",
    phonePattern: /^(\d{8})$/,
    language: "Norwegian",
  },
  {
    country: "Nova Caledonia",
    ISO: "NC",
    code: "687",
    phonePattern: /^(\d{6})$/,
    language: "French",
  },
  {
    country: "Nova Zelândia",
    ISO: "NZ",
    code: "64",
    phonePattern: /^(\d{9})$/,
    language: "English",
  },
  {
    country: "Omã",
    ISO: "OM",
    code: "968",
    phonePattern: /^(\d{8})$/,
    language: "Arabic",
  },
  {
    country: "Países Baixos",
    ISO: "NL",
    code: "31",
    phonePattern: /^(\d{9})$/,
    language: "Dutch",
  },
  {
    country: "Palau",
    ISO: "PW",
    code: "680",
    phonePattern: /^(\d{7})$/,
    language: "English",
  },
  {
    country: "Palestina",
    ISO: "PS",
    code: "970",
    phonePattern: /^(\d{9})$/,
    language: "Arabic",
  },
  {
    country: "Panamá",
    ISO: "PA",
    code: "507",
    phonePattern: /^(\d{8})$/,
    language: "Spanish",
  },
  {
    country: "Papua-Nova Guiné",
    ISO: "PG",
    code: "675",
    phonePattern: /^(\d{9})$/,
    language: "English, Tok Pisin",
  },
  {
    country: "Paquistão",
    ISO: "PK",
    code: "92",
    phonePattern: /^(\d{10})$/,
    language: "Urdu",
  },
  {
    country: "Paraguai",
    ISO: "PY",
    code: "595",
    phonePattern: /^(\d{9})$/,
    language: "Spanish, Guarani",
  },
  {
    country: "Peru",
    ISO: "PE",
    code: "51",
    phonePattern: /^(\d{9})$/,
    language: "Spanish",
  },
  {
    country: "Polinésia Francesa",
    ISO: "PF",
    code: "689",
    phonePattern: /^(\d{6})$/,
    language: "French",
  },
  {
    country: "Polónia",
    ISO: "PL",
    code: "48",
    phonePattern: /^(\d{9})$/,
    language: "Polish",
  },
  {
    country: "Porto Rico",
    ISO: "PR",
    code: "1",
    phonePattern: /^(\d{10})$/,
    language: "Spanish",
  },
  {
    country: "Portugal",
    ISO: "PT",
    code: "351",
    phonePattern: /^(\d{9})$/,
    language: "Portuguese",
  },
  {
    country: "Quénia",
    ISO: "KE",
    code: "254",
    phonePattern: /^(\d{9})$/,
    language: "English, Swahili",
  },
  {
    country: "Quirguistão",
    ISO: "KG",
    code: "996",
    phonePattern: /^(\d{9})$/,
    language: "Kyrgyz",
  },
  {
    country: "Quiribati",
    ISO: "KI",
    code: "686",
    phonePattern: /^(\d{6})$/,
    language: "English",
  },
  {
    country: "Reino Unido",
    ISO: "GB",
    code: "44",
    phonePattern: /^(\d{10})$/,
    language: "English",
  },
  {
    country: "República Centro-Africana",
    ISO: "CF",
    code: "236",
    phonePattern: /^(\d{8})$/,
    language: "French, Sango",
  },
  {
    country: "República Checa",
    ISO: "CZ",
    code: "420",
    phonePattern: /^(\d{9})$/,
    language: "Czech",
  },
  {
    country: "República Democrática do Congo",
    ISO: "CD",
    code: "243",
    phonePattern: /^(\d{9})$/,
    language: "French, Lingala",
  },
  {
    country: "República Dominicana",
    ISO: "DO",
    code: "1",
    phonePattern: /^(\d{10})$/,
    language: "Spanish",
  },
  {
    country: "Roménia",
    ISO: "RO",
    code: "40",
    phonePattern: /^(\d{9})$/,
    language: "Romanian",
  },
  {
    country: "Ruanda",
    ISO: "RW",
    code: "250",
    phonePattern: /^(\d{9})$/,
    language: "English, Kinyarwanda",
  },
  {
    country: "Rússia",
    ISO: "RU",
    code: "7",
    phonePattern: /^(\d{10})$/,
    language: "Russian",
  },
  {
    country: "Saara Ocidental",
    ISO: "EH",
    code: "212",
    phonePattern: /^(\d{8})$/,
    language: "Arabic, Spanish",
  },
  {
    country: "Saint Martin",
    ISO: "MF",
    code: "590",
    phonePattern: /^(\d{9})$/,
    language: "French",
  },
  {
    country: "Saint Pierre e Miquelon",
    ISO: "PM",
    code: "508",
    phonePattern: /^(\d{6})$/,
    language: "French",
  },
  {
    country: "Samoa Americana",
    ISO: "AS",
    code: "1",
    phonePattern: /^(\d{10})$/,
    language: "English",
  },
  {
    country: "Samoa Ocidental",
    ISO: "WS",
    code: "685",
    phonePattern: /^(\d{6})$/,
    language: "English, Samoan",
  },
  {
    country: "San Marino",
    ISO: "SM",
    code: "378",
    phonePattern: /^(\d{8})$/,
    language: "Italian",
  },
  {
    country: "Santa Helena",
    ISO: "SH",
    code: "290",
    phonePattern: /^(\d{6})$/,
    language: "English",
  },
  {
    country: "Santa Lúcia",
    ISO: "LC",
    code: "1",
    phonePattern: /^(\d{10})$/,
    language: "English",
  },
  {
    country: "São Bartolomeu",
    ISO: "BL",
    code: "590",
    phonePattern: /^(\d{9})$/,
    language: "French",
  },
  {
    country: "São Cristóvão e Névis",
    ISO: "KN",
    code: "1",
    phonePattern: /^(\d{10})$/,
    language: "English",
  },
  {
    country: "São Tomé e Príncipe",
    ISO: "ST",
    code: "239",
    phonePattern: /^(\d{8})$/,
    language: "Portuguese",
  },
  {
    country: "São Vicente e Granadinas",
    ISO: "VC",
    code: "1",
    phonePattern: /^(\d{10})$/,
    language: "English",
  },
  {
    country: "Senegal",
    ISO: "SN",
    code: "221",
    phonePattern: /^(\d{9})$/,
    language: "French",
  },
  {
    country: "Serra Leoa",
    ISO: "SL",
    code: "232",
    phonePattern: /^(\d{8})$/,
    language: "English",
  },
  {
    country: "Sérvia",
    ISO: "RS",
    code: "381",
    phonePattern: /^(\d{9})$/,
    language: "Serbian",
  },
  {
    country: "Seychelles",
    ISO: "SC",
    code: "248",
    phonePattern: /^(\d{8})$/,
    language: "English, French, Seychellois Creole",
  },
  {
    country: "Singapura",
    ISO: "SG",
    code: "65",
    phonePattern: /^(\d{8})$/,
    language: "English, Malay, Mandarin, Tamil",
  },
  {
    country: "Síria",
    ISO: "SY",
    code: "963",
    phonePattern: /^(\d{9})$/,
    language: "Arabic",
  },
  {
    country: "Somália",
    ISO: "SO",
    code: "252",
    phonePattern: /^(\d{9})$/,
    language: "Somali",
  },
  {
    country: "Sri Lanka",
    ISO: "LK",
    code: "94",
    phonePattern: /^(\d{9})$/,
    language: "Sinhalese, Tamil",
  },
  {
    country: "Suazilândia",
    ISO: "SZ",
    code: "268",
    phonePattern: /^(\d{8})$/,
    language: "English, Swati",
  },
  {
    country: "Sudão",
    ISO: "SD",
    code: "249",
    phonePattern: /^(\d{9})$/,
    language: "Arabic",
  },
  {
    country: "Sudão do Sul",
    ISO: "SS",
    code: "211",
    phonePattern: /^(\d{9})$/,
    language: "English",
  },
  {
    country: "Suécia",
    ISO: "SE",
    code: "46",
    phonePattern: /^(\d{9})$/,
    language: "Swedish",
  },
  {
    country: "Suíça",
    ISO: "CH",
    code: "41",
    phonePattern: /^(\d{9})$/,
    language: "French, German, Italian, Romansh",
  },
  {
    country: "Suriname",
    ISO: "SR",
    code: "597",
    phonePattern: /^(\d{8})$/,
    language: "Dutch, English, Sranan Tongo",
  },
  {
    country: "Svalbard e Jan Mayen",
    ISO: "SJ",
    code: "47",
    phonePattern: /^(\d{8})$/,
    language: "Norwegian",
  },
  {
    country: "Tailândia",
    ISO: "TH",
    code: "66",
    phonePattern: /^(\d{9})$/,
    language: "Thai",
  },
  {
    country: "Taiwan",
    ISO: "TW",
    code: "886",
    phonePattern: /^(\d{9})$/,
    language: "Chinese",
  },
  {
    country: "Tajiquistão",
    ISO: "TJ",
    code: "992",
    phonePattern: /^(\d{9})$/,
    language: "Tajik",
  },
  {
    country: "Tanzânia",
    ISO: "TZ",
    code: "255",
    phonePattern: /^(\d{9})$/,
    language: "English, Swahili",
  },
  {
    country: "Território Britânico do Oceano Índico",
    ISO: "IO",
    code: "246",
    phonePattern: /^(\d{6})$/,
    language: "English",
  },
  {
    country: "Territórios Austrais Franceses",
    ISO: "TF",
    code: "262",
    phonePattern: /^(\d{9})$/,
    language: "French",
  },
  {
    country: "Territórios do Sul da França",
    ISO: "TF",
    code: "262",
    phonePattern: /^(\d{9})$/,
    language: "French",
  },
  {
    country: "Timor-Leste",
    ISO: "TL",
    code: "670",
    phonePattern: /^(\d{8})$/,
    language: "Portuguese",
  },
  {
    country: "Togo",
    ISO: "TG",
    code: "228",
    phonePattern: /^(\d{8})$/,
    language: "French",
  },
  {
    country: "Tokelau",
    ISO: "TK",
    code: "690",
    phonePattern: /^(\d{4})$/,
    language: "English",
  },
  {
    country: "Tonga",
    ISO: "TO",
    code: "676",
    phonePattern: /^(\d{6})$/,
    language: "English, Tongan",
  },
  {
    country: "Toquelau",
    ISO: "TK",
    code: "690",
    phonePattern: /^(\d{4})$/,
    language: "English",
  },
  {
    country: "Trinidad e Tobago",
    ISO: "TT",
    code: "1",
    phonePattern: /^(\d{10})$/,
    language: "English",
  },
  {
    country: "Tunísia",
    ISO: "TN",
    code: "216",
    phonePattern: /^(\d{8})$/,
    language: "Arabic",
  },
  {
    country: "Turcas e Caicos",
    ISO: "TC",
    code: "1",
    phonePattern: /^(\d{10})$/,
    language: "English",
  },
  {
    country: "Turcomenistão",
    ISO: "TM",
    code: "993",
    phonePattern: /^(\d{8})$/,
    language: "Turkmen",
  },
  {
    country: "Turquia",
    ISO: "TR",
    code: "90",
    phonePattern: /^(\d{10})$/,
    language: "Turkish",
  },
  {
    country: "Tuvalu",
    ISO: "TV",
    code: "688",
    phonePattern: /^(\d{4})$/,
    language: "English, Tuvaluan",
  },
  {
    country: "Ucrânia",
    ISO: "UA",
    code: "380",
    phonePattern: /^(\d{9})$/,
    language: "Ukrainian",
  },
  {
    country: "Uganda",
    ISO: "UG",
    code: "256",
    phonePattern: /^(\d{9})$/,
    language: "English, Swahili",
  },
  {
    country: "Uruguai",
    ISO: "UY",
    code: "598",
    phonePattern: /^(\d{8})$/,
    language: "Spanish",
  },
  {
    country: "Usbequistão",
    ISO: "UZ",
    code: "998",
    phonePattern: /^(\d{9})$/,
    language: "Uzbek",
  },
  {
    country: "Vanuatu",
    ISO: "VU",
    code: "678",
    phonePattern: /^(\d{6})$/,
    language: "Bislama, English, French",
  },
  {
    country: "Vaticano",
    ISO: "VA",
    code: "379",
    phonePattern: /^(\d{6})$/,
    language: "Italian",
  },
  {
    country: "Venezuela",
    ISO: "VE",
    code: "58",
    phonePattern: /^(\d{10})$/,
    language: "Spanish",
  },
  {
    country: "Vietnam",
    ISO: "VN",
    code: "84",
    phonePattern: /^(\d{9})$/,
    language: "Vietnamese",
  },
  {
    country: "Wallis e Futuna",
    ISO: "WF",
    code: "681",
    phonePattern: /^(\d{6})$/,
    language: "French, Wallisian",
  },
  {
    country: "Zâmbia",
    ISO: "ZM",
    code: "260",
    phonePattern: /^(\d{9})$/,
    language: "English",
  },
  {
    country: "Zimbabwe",
    ISO: "ZW",
    code: "263",
    phonePattern: /^(\d{9})$/,
    language: "English, Shona, Ndebele",
  },
];

const getCountriesByLanguage = (language, list) => {
  return list.filter((country) =>
    country.language.toLowerCase().includes(language.toLowerCase())
  );
};

const getCountry = (country, list) => {
  return list.find((c) => c.country.toLowerCase() === country.toLowerCase());
};

const getCountryCode = (country, list) => {
  return getCountry(country, list).code;
};

const getCountryPattern = (country, list) => {
  return getCountry(country, list).phonePattern;
};

const getCountries = (list) => {
  return list.map((country) => country.country);
};

function clearErrors() {
  const inputs = document.querySelectorAll("input");
  inputs.forEach((input) => {
    input.nextElementSibling.style.display = "none";
  });
}

const portugueseSpokenCountries = getCountriesByLanguage(
  "portuguese",
  countries
);

function updateName(selectedLi) {
  // let code = getCountryCode(selectedLi.innerText, portugueseSpokenCountries)
  let code = getCountryCode(selectedLi.innerText, countries);
  let selectBtnText = countrySelectBtn.querySelector("button");
  selectBtnText.innerText = `${selectedLi.innerText} (+${code})`;
  countrySelect.classList.remove("active");
  // pattern = getCountryPattern(selectedLi.innerText, portugueseSpokenCountries)
  pattern = getCountryPattern(selectedLi.innerText, countries);
}

// function addCountries() {
// 	portugueseSpokenCountries.forEach((country) => {
// 		let li = `<button type="button" title="${country.country}" onclick="updateName(this)" class="no-button no-button--large">${country.country}</button>`
//     countryOptions.innerHTML += li
// 	})
// }
// addCountries()
function addCountries() {
  countries.forEach((country) => {
    let li = `<button type="button" title="${country.country}" onclick="updateName(this)" class="no-button no-button--large">${country.country}</button>`;
    countryOptions.innerHTML += li;
  });
}
addCountries();

searchInput.addEventListener("keyup", () => {
  let arr = [];
  let searchValue = searchInput.value;
  arr = getCountries(countries)
    .filter((data) => {
      return data.toLowerCase().startsWith(searchValue.toLowerCase());
    })
    .map(
      (data) =>
        `<button type="button" title="${data}" onclick="updateName(this)" class="no-button no-button--large">${data}</button>`
    )
    .join("");
  countryOptions.innerHTML = arr ? arr : "<p>País não encontrado!</p>";
  // arr = getCountries(portugueseSpokenCountries).filter(data => {
  // 	return data.toLowerCase().startsWith(searchValue.toLowerCase())
  // }).map(data => `<button type="button" title="${data}" onclick="updateName(this)" class="no-button no-button--large">${data}</button>`).join('')
  // countryOptions.innerHTML = arr ? arr : '<p>País não encontrado!</p>'
});

countrySelectBtn.addEventListener("click", () => {
  countrySelect.classList.toggle("active");
});

let pattern = "";
function validateInput() {
  if (contactName.value.trim() === "") {
    contactName.nextElementSibling.style.display = "block";
    contactName.focus();
    return false;
  } else {
    contactName.nextElementSibling.style.display = "none";
  }

  if (!company.value) {
    company.nextElementSibling.style.display = "block";
    company.focus();
    return false;
  } else {
    company.nextElementSibling.style.display = "none";
  }

  if (
    !email.value ||
    !email.value.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)
  ) {
    email.nextElementSibling.style.display = "block";
    email.focus();
    return false;
  } else {
    email.nextElementSibling.style.display = "none";
  }

  if (countrySelectBtn.innerHTML.includes("Selecione o seu país *")) {
    countrySelectBtn.nextElementSibling.style.display = "block";
    searchInput.focus();
    return false;
  } else {
    countrySelectBtn.nextElementSibling.style.display = "none";
  }

  if (!phone.value || !phone.value.match(pattern)) {
    phone.nextElementSibling.style.display = "block";
    phone.focus();
    return false;
  } else {
    phone.nextElementSibling.style.display = "none";
  }

  if (accept.checked === false) {
    document.querySelector("#check__error").style.display = "block";
    return false;
  } else {
    document.querySelector("#check__error").style.display = "none";
  }

  return true;
}

// submitBtn.addEventListener('click', () => {
// 	isFormValid = validateInput()
// })

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  isFormValid = validateInput();

  const payload = new FormData(form);
  let code = countrySelectBtn.querySelector("button").innerHTML.split(" ")[1];

  const data = {
    name: payload.get("name"),
    email: payload.get("mail"),
    company: payload.get("company"),
    phone: `${code} ${payload.get("phone")}`,
    message: 'Nova lead da landing page "Suporte Primavera"',
  };

  const headers = new Headers();
  headers.append("Content-Type", "application/json");

  const options = {
    method: "POST",
    headers,
    body: JSON.stringify(data),
    redirect: "follow",
  };
  const whurl =
    "https://prod-191.westeurope.logic.azure.com:443/workflows/32a246f61a4045f9ac1f15eefe876380/triggers/manual/paths/invoke?api-version=2016-06-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=CcBODS2R_e9UAPUfKUWRPen1sEBMw3EH4Lqe6Y4fCuY";

  try {
    if (isFormValid) {
      if (accept.checked === false) {
        document.querySelector("#check__error").style.display = "block";
        accept.focus();
        return false;
      } else {
        document.querySelector("#check__error").style.display = "none";
      }

      const response = await fetch(whurl, options);

      if (response.status === 202) {
        /* Set local storage to leanContactFormSubmission to success, 
        this will tel the submit page to display a success message. If,
        wen the submit page loads, there is no success information in 
        localStorage, it will display an error message.*/
        localStorage.setItem("leanContactFormSubmission", "success");
      }
      // redirect to success page
      window.location.href = "submit.html";
    }
  } catch (error) {
    // set local storage to leanContactFormSubmission to error and pass the error message
    localStorage.setItem(
      "leanContactFormSubmission",
      JSON.stringify({ error: error.message })
    );
    // redirect to success page
    window.location.href = "submit.html";
  }
});

// Controlling the Privacy Policy dialog
const dialog = document.getElementById("dialog");
const openDialog = document.getElementById("open__dialog");
const closeDialog = document.getElementById("close__dialog");

openDialog.addEventListener("click", () => {
  document.body.style.overflow = "hidden";
  dialog.show();
});

closeDialog.addEventListener("click", () => {
  document.body.style.overflowY = "auto";
  dialog.close();
});

// Controlling the Carousel
var carousel = document.querySelector(".carousel");
var carouselContent = document.querySelector(".carousel-content");
var slides = document.querySelectorAll(".slide");
var arrayOfSlides = Array.prototype.slice.call(slides);
var carouselDisplaying;
var screenSize;
setScreenSize();
var lengthOfSlide;

window.addEventListener("load", () => {
  let testimonialCards = document.querySelectorAll(".testimonials__card");
  let testimonialCarsArray = Array.prototype.slice.call(testimonialCards);
  let testimonialCard = testimonialCarsArray[0];
  let testimonialCardHeight = testimonialCard.offsetHeight;
  let carouselContentHeight = carouselContent.offsetHeight;
  // set the carousel content height to the height of the testimonial card
  carouselContent.style.height = testimonialCardHeight + "px";
  console.log(carouselContentHeight);
});

function addClone() {
  var lastSlide = carouselContent.lastElementChild.cloneNode(true);
  lastSlide.style.left = -lengthOfSlide + "px";
  carouselContent.insertBefore(lastSlide, carouselContent.firstChild);
}
// addClone();

function removeClone() {
  var firstSlide = carouselContent.firstElementChild;
  firstSlide.parentNode.removeChild(firstSlide);
}

function moveSlidesRight() {
  var slides = document.querySelectorAll(".slide");
  var slidesArray = Array.prototype.slice.call(slides);
  var width = 0;

  slidesArray.forEach(function (el, i) {
    el.style.left = width + "px";
    width += lengthOfSlide;
  });
  addClone();
}
moveSlidesRight();

function moveSlidesLeft() {
  var slides = document.querySelectorAll(".slide");
  var slidesArray = Array.prototype.slice.call(slides);
  slidesArray = slidesArray.reverse();
  var maxWidth = (slidesArray.length - 1) * lengthOfSlide;

  slidesArray.forEach(function (el, i) {
    maxWidth -= lengthOfSlide;
    el.style.left = maxWidth + "px";
  });
}

window.addEventListener("resize", setScreenSize);

function setScreenSize() {
  // if (window.innerWidth >= 500) {
  //   carouselDisplaying = 3;
  // } else if (window.innerWidth >= 300) {
  //   carouselDisplaying = 2;
  // } else {
  //   carouselDisplaying = 1;
  // }
  carouselDisplaying = 1;
  getScreenSize();
}

function getScreenSize() {
  var slides = document.querySelectorAll(".slide");
  var slidesArray = Array.prototype.slice.call(slides);
  lengthOfSlide = carousel.offsetWidth / carouselDisplaying;
  var initialWidth = -lengthOfSlide;
  slidesArray.forEach(function (el) {
    el.style.width = lengthOfSlide + "px";
    el.style.left = initialWidth + "px";
    initialWidth += lengthOfSlide;
  });
}

var rightNav = document.querySelector(".nav-right");
rightNav.addEventListener("click", moveLeft);

var moving = true;
function moveRight() {
  if (moving) {
    moving = false;
    var lastSlide = carouselContent.lastElementChild;
    lastSlide.parentNode.removeChild(lastSlide);
    carouselContent.insertBefore(lastSlide, carouselContent.firstChild);
    removeClone();
    var firstSlide = carouselContent.firstElementChild;
    firstSlide.addEventListener("transitionend", activateAgain);
    moveSlidesRight();
  }
}

function activateAgain() {
  var firstSlide = carouselContent.firstElementChild;
  moving = true;
  firstSlide.removeEventListener("transitionend", activateAgain);
}

var leftNav = document.querySelector(".nav-left");
leftNav.addEventListener("click", moveRight);

// var moveLeftAgain = true;

function moveLeft() {
  if (moving) {
    moving = false;
    removeClone();
    var firstSlide = carouselContent.firstElementChild;
    firstSlide.addEventListener("transitionend", replaceToEnd);
    moveSlidesLeft();
  }
}

function replaceToEnd() {
  var firstSlide = carouselContent.firstElementChild;
  firstSlide.parentNode.removeChild(firstSlide);
  carouselContent.appendChild(firstSlide);
  firstSlide.style.left = (arrayOfSlides.length - 1) * lengthOfSlide + "px";
  addClone();
  moving = true;
  firstSlide.removeEventListener("transitionend", replaceToEnd);
}

carouselContent.addEventListener("mousedown", seeMovement);

var initialX;
var initialPos;
function seeMovement(e) {
  initialX = e.clientX;
  getInitialPos();
  carouselContent.addEventListener("mousemove", slightMove);
  document.addEventListener("mouseup", moveBasedOnMouse);
}

function slightMove(e) {
  if (moving) {
    var movingX = e.clientX;
    var difference = initialX - movingX;
    if (Math.abs(difference) < lengthOfSlide / 4) {
      slightMoveSlides(difference);
    }
  }
}

function getInitialPos() {
  var slides = document.querySelectorAll(".slide");
  var slidesArray = Array.prototype.slice.call(slides);
  initialPos = [];
  slidesArray.forEach(function (el) {
    var left = Math.floor(parseInt(el.style.left.slice(0, -2)));
    initialPos.push(left);
  });
}

function slightMoveSlides(newX) {
  var slides = document.querySelectorAll(".slide");
  var slidesArray = Array.prototype.slice.call(slides);
  slidesArray.forEach(function (el, i) {
    var oldLeft = initialPos[i];
    el.style.left = oldLeft + newX + "px";
  });
}

function moveBasedOnMouse(e) {
  var finalX = e.clientX;
  if (initialX - finalX > 0) {
    moveRight();
  } else if (initialX - finalX < 0) {
    moveLeft();
  }
  document.removeEventListener("mouseup", moveBasedOnMouse);
  carouselContent.removeEventListener("mousemove", slightMove);
}
