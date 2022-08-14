import { $ } from "../../core/DOM"
export class TableSelection {
  constructor() {
    this.group = []
    this.current = null
  }

  select($el) {
    this.clear()
    this.group.push($el)
    $el.focus().addClass('selected')
    this.current = $el
  }

  selectGroup($group = []) {
    this.clear()
    $group.forEach((el) => {
      const $el = $(el)
      $el.addClass('selected')
      this.group.push($el)
    })
    console.log(this.group)
  }
  //   const $c1Parms = [$c1.data.indexrow, $c1.data.indexcol]
  //   const $c2Parms = [$c2.data.indexrow, $c2.data.indexcol]
  //   for (let i = $c1Parms[0]; i<$c2Parms[0]; i++) {
  //     for (let n= $c1Parms[1]; n<$c2Parms[1]; n++ ) {
  //       this.group.push($(document.querySelector(`[data-id="${i}:${n}"]`)))
  //     }
  //   }
  //   this.group.forEach(($c) => {
  //     console.log('$c = ' + $c)
  //     $c.addClass('selected')
  //   });
  // }

  clear() {
    this.group.forEach(($c) => {
      $c.removeClass('selected')
    })
    this.group = []
  }
}
