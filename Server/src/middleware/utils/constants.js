export const REGEX= {
    ALPHA_NUMERIC: /^[d]*[a-z][a-z\d]*$/i,
    SPECIAL_CHARACTERS: /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/,
    ALPHA_NUMERIC_SPECIAL_CHARACTER:
      /^(?!.*\s{2,})[a-zA-Z0-9\s,!"#$%&'()*+,\-./:;<=>?@[\]^_`{|}~]+$/,
    REGEX_ORGANIZATION_NAME: /^(?! )[a-zA-Z\d]+( [a-zA-Z\d]+)*(?<! )$/i,
    ALL_NUMERICS: /^[0-9]*$/,
    MIN_MAX_LENGTH: /^.{1,32}$/,
    FULL_NAME: /^[A-Za-z\s]*$/,
    SPACES: /^(?!.* {2}).*$/,
    NUMERICS: /\d/,
    UPPERCASE_LETTER: /[A-Z]/,
    EMAIL:
      /^(?!.*\.\.)(?!.*\.@)[a-zA-Z0-9]+(?:[.][a-zA-Z0-9]+)*@(?!.*\.\.)[a-zA-Z0-9]+(?:[.][a-zA-Z0-9]+)*[.][a-zA-Z]{2,}$/,
    URLS: /(http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/,
    SEARCH: /^[a-zA-z0-9]*(\.)?[a-zA-z0-9]*(@)?[a-zA-Z0-9]*(\.)?[a-zA-Z0-9]*$/,
  }
