function searchPandals() {
  const input = document
    .getElementById("searchInput")
    .value
    .toLocaleLowerCase("bn")
    .trim();

  const filtered = pandals.filter(item => {
    const searchableText = [
      item.name,
      item.zone,
      item.zoneFull,
      item.railway,
      item.metro,
      item.famous,
      item.desc
    ].filter(Boolean).join(" ").toLocaleLowerCase("bn");

    return searchableText.includes(input);
  });

  displayPandals(filtered);
}

document
  .getElementById("searchInput")
  .addEventListener("input", searchPandals);
