function ordinal(number: number): string {
  const ordinalRules = new Intl.PluralRules("en", {
    type: "ordinal",
  });
  const suffixes = {
    zero: "th",
    one: "st",
    two: "nd",
    few: "rd",
    many: "th",
    other: "th",
  };
  const suffix = suffixes[ordinalRules.select(number)];
  return `${number}${suffix}`;
}

export default ordinal;
