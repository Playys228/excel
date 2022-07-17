import { ExcelComponent } from "../../core/ExcelComponent";
import { createTable } from "./table.template";
import { resizingRealization } from "./table.sizing";
import { shouldResize } from "./table.functions";

export class Table extends ExcelComponent {
  static className = 'excel__table'

  constructor($root) {
    super($root, {
      listeners: ['click', 'mousedown', 'mousemove', 'mouseup']})
    this.resizing = false
    this.resizingElement
  }

  toHTML() {
    return createTable(20)
  }

  onClick(event) {

  }

  onMousedown(e) {
    console.log('onMousedown')
    if (shouldResize) {
      resizingRealization(this.$root, e)
    }
  }

  onMousemove() {

    // mihe realization

    //   if (this.resizing && (e.target.dataset.resize == 'col'
    //    || e.target.className == 'column')) {
    //     console.log(e.target)
    //     this.x = e.pageX - this.startedX + 120 + 'px'
    //     console.log(this.x)
    //     this.resizingElement.style.width = this.x
    //     console.log(this.resizingElement.width)
    //   }

  //   if (this.resizing && e.target.dataset.resize === 'row' ||
  //   e.target.className == 'row') {
  //     this.x = e.pageY - this.startedY + 25 + 'px'
  //     console.log(this.x)
  //     this.resizingElement.style.height = this.x
  //     console.log(this.resizingElement.height)
  //   }
  }

  onMouseup() {

    // mine realization

    // console.log('mouseup')
    // this.resizing = false
  }
}
