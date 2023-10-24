const changeTableWidth = (tableWidth) => {
  const table = document.getElementById("table");
  table.style.width = tableWidth;
};

const changeBorderAndSpacingWidth = (width) => {
  const table = document.getElementById("table");
  table.border = width;
  table.cellspacing = width;
};

const changeBackgroundColor = (color) => {
  const tdArray = document.getElementsByTagName("td");

  for (let i = 0; i < tdArray.length; i++) {
    const td = tdArray[i];
    td.style.backgroundColor = color;
  }
};

const reset = () => {
    changeTableWidth('200px');
    changeBorderAndSpacingWidth('1');
    changeBackgroundColor('yellow');
}
