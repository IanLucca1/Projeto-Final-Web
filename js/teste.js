let ascending = true;

document.getElementById("quantidadeHeader").addEventListener("click", () => {
  const table = document.getElementById("tableProductos");
  const rows = Array.from(table.querySelectorAll("tr")).slice(1);

  rows.sort((a, b) => {
    const getQtd = (row) =>
      parseInt(row.children[2].textContent.replace("Qtn: ", ""));
    const qtdA = getQtd(a);
    const qtdB = getQtd(b);

    return ascending ? qtdA - qtdB : qtdB - qtdA;
  });

  // Reinsere as linhas ordenadas na tabela
  rows.forEach((row) => table.appendChild(row));

  ascending = !ascending;

  // Atualiza o texto do cabeçalho
  document.getElementById("quantidadeHeader").innerHTML = `Quantidade ${
    ascending ? "&#x25B2;" : "&#x25BC;"
  }`;
});
