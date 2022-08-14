import { ExcelComponent } from "../../core/ExcelComponent";
import { createTable } from "./table.template";
import { resizingRealization } from "./table.sizing";
import { isCell, shouldResize } from "./table.functions";
import { TableSelection } from "./TableSelection";
import { $ } from "../../core/DOM";
import { matrix } from "./table.functions";
import { nextSelector } from "./table.functions";

export class Table extends ExcelComponent {
  static className = 'excel__table'

  constructor($root) {
    super($root, {
      listeners: ['mousedown', 'keydown']})
  }


  toHTML() {
    return createTable(20)
  }

  prepare() {
    this.selection = new TableSelection()
  }

  init() {
    super.init()
    const $cell = $(this.$root.find('[data-id="0:0"]'))
    this.selection.select($cell)
  }

  // onClick(e) {
  //
  // }

  onMousedown(e) {
    console.log('onMousedown')
    if (isCell($(e.target))) {
      const $target =$(e.target)
      if (e.shiftKey) {
        const $cells = matrix($target, this.selection.current)
            .map((id) => this.$root.find(`[data-id="${id}"]`))
        this.selection.selectGroup($cells)
      } else this.selection.select($target)
      if (shouldResize) {
        resizingRealization(this.$root, e)
      }
    }
  }

  onKeydown(event) {
    const keys = [
      'Enter',
      'Tab',
      'ArrowLeft',
      'ArrowRight',
      'ArrowDown',
      'ArrowUp']

    const {key} = event

    if (keys.includes(key) && !event.shiftKey) {
      event.preventDefault()
      const id = this.selection.current.id(true)
      const $next = $(this.$root.find(nextSelector(key, id)))
      this.selection.select($next)
    }
  }


  // if (e.shiftKey) {
  //   this.selection.selectGroup($(e.target), () => {
  //     document.onmouseup = (event) => {
  //       console.log(event.target)
  //       return $(event.target)
  //     }
  //   } )
  //   console.log('я ')


  //   onMousemove() {

  //     // mihe realization

  //     //   if (this.resizing && (e.target.dataset.resize == 'col'
  //     //    || e.target.className == 'column')) {
  //     //     console.log(e.target)
  //     //     this.x = e.pageX - this.startedX + 120 + 'px'
  //     //     console.log(this.x)
  //     //     this.resizingElement.style.width = this.x
  //     //     console.log(this.resizingElement.width)
  //     //   }

  //   //   if (this.resizing && e.target.dataset.resize === 'row' ||
  //   //   e.target.className == 'row') {
  //   //     this.x = e.pageY - this.startedY + 25 + 'px'
  //   //     console.log(this.x)
  //   //     this.resizingElement.style.height = this.x
  //   //     console.log(this.resizingElement.height)
  //   //   }
  //   }

  //   onMouseup() {

  //     // mine realization

  //     // console.log('mouseup')
  //     // this.resizing = false
  //   }
}


