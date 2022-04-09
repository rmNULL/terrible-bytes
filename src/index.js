// we stick strictly to SI and IEC units
// however in the case of kilobyte we make an exception and
// treat both k and K as kilobyte. however a warning is consoled
// if K is provided as it is not an S.I unit.

const flavour_patterns = [
  /^\d+(?:\.\d+)?\s*(?:[kKMGTPEZY]?B?)$/,
  /^\d+(?:\.\d+)?\s*(?:(?:[KMGTPEZY]i)?B?)$/,
];
const prefixes = 'BKMGTPEZY';

function as_bytes(raw_string) {
  const string = raw_string.trim();
  const match_idx = flavour_patterns.findIndex(pat => pat.test(string));
  if (match_idx === -1) {
    throw new TypeError('unrecognized string passed as input.');
  }
  const unit_match = `${string}B`.match(`[k${prefixes}]i?`);
  const unit = unit_match[0];
  if (unit === 'K')
    console.warn("Please refrain from using 'K' to mean kilo. 'k' is the symbol for kilo according to S.I unit.");
  const power = prefixes.indexOf(unit[0].toUpperCase());
  const multiplier = ((1000 + (match_idx * 24)) ** power);
  const value = string.slice(0, unit_match.index);
  return value * multiplier;
}

function b(vs, rf, rs) {
  if (vs.length > 3)
    throw new TypeError("Overwhelmed: you have included more variables than we can handle. :'(");

  const resolved_str = [vs[0], rf, vs[1], rs, vs[2]].filter(v => v)
                                                    .map(s => String(s).trim())
                                                    .join('');

  return as_bytes(resolved_str);
}


export {
  b
}
