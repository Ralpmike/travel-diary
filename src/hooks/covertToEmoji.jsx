export default function convertToEmoji(countryCode) {
  const codePoints = countryCode.toUpperCase();
  console.log("codePoints", codePoints);

  //   .split("")
  //   .map((char) => {
  //     const codePoint = 127397 + char.charCodeAt(0);
  //     console.log(`${char}: ${char.charCodeAt(0)} -> ${codePoint}`);
  //     return codePoint;
  //   });
  // console.log("codePoints", codePoints);
  // return String.fromCodePoint(...codePoints);
  return codePoints;
}
