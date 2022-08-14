const CODES = {
  A: 65,
  Z: 90,
}

function toCell(_, index) {
  return `
  <div class="cell" data-indexCol="${index}" contenteditable>
    
  </div>`
}

function toColumn(col, index) {
  return `
  <div class="column" data-type="resizable" data-indexcol="${index}">
    ${col}
    <div class="col-resize" data-resize="col"></div>
  </div>
  `
}

function createRow(numbering='', content='') {
  const resize = numbering ? `<div class="row-resize"
  data-resize="row"></div>`:''
  return `<div class ="row">
            <div class ="row-info" data-type="resizable"
             data-indexRow = "${numbering}">${numbering}
              ${resize}
            </div>
            <div class ="row-data">${content}</div>
          </div>
          `
}

function toChar(_, index) {
  return String.fromCharCode(CODES.A + index)
}

export function createTable(rowsCount = 15) {
  const colsCount = CODES.Z - CODES.A + 1
  const rows = []
  const cols = new Array(colsCount)
      .fill('')
      .map(toChar)
      .map(toColumn)
      .join('')

  const cells = new Array(colsCount)
      .fill('')
      .map(toCell)
      .join('')

  // __________________________________________ my awful realization
  // const cols = []
  // for (let i = 0; i < colsCount+1; i++) {
  //   cols.push(createCol(String.fromCharCode(CODES.A + i)))
  // }
  // cols.join('')
  // __________________________________________ but still mine:)
  // but is it awful ?

  rows.push(createRow('', cols))

  for (let i = 0; i < rowsCount; i++) {
    rows.push(createRow(i+1, cells))
  }

  return rows.join('')
}
