import { range } from "../../core/utils"

export function shouldResize(event) {
  return event.target.dataset.resize
}

export function isCell($el) {
  if ($el.data.type === 'cell') {
    return true
  }
}

export function matrix($target, $current) {
  const target = $target.id(true)
  const current = $current.id(true)
  const cols = range(current.col, target.col)
  const rows = range(current.col, target.col)
  return cols.reduce((acc, col) => {
    rows.forEach((row) => {
      acc.push(`${row}:${col}`)
    })
    return acc
  }, [])
}

export function nextSelector(key, {col, row}) {
  switch (key) {
    case 'Enter':
    case 'ArrowDown':
      row++
      break
    case 'Tab':
    case 'ArrowRight':
      col++
      break
    case 'ArrowLeft':
      col--
      break
    case 'ArrowUp':
      row--
      break
  }
  return `[data-id="${row}:${col}"]`
}
