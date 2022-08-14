import { $ } from "../../core/DOM";

export function resizingRealization($root, event) {
  const $resizer = $(event.target)
  const type = $resizer.data.resize
  console.log($resizer)
  if (type) {
    const $parent = $resizer.closest('[data-type="resizable"]')
    const index = $parent.data.indexcol
    if (type === 'col') {
      // const $parent = $resizer.$el.parentNode -- bad
      // const $parent = $resizer.closest.$el.closest('.column') -- better
      const $colls = $($root
          .findAll(`[data-indexcol="${index}"]`))
      const coords = $parent.getCoords()


      document.onmousemove = (e) => {
        $resizer.css({
          opacity: 1,
          zIndex: 1000,
          bottom: '-5000px',
        })
        const delta = e.pageX - coords.right
        $resizer.css({right: -delta + 'px'})
        document.onmouseup = () => {
          const value = coords.width + delta +'px'
          for (const $coll of $colls.$el) {
            $($coll).css({width: value})
          }
          $resizer.css({
            right: 0,
            opacity: 0,
            // height: 0,
          })
          document.onmouseup = null
          document.onmousemove = null
        }
      }
    } else {
      $resizer.css({
        opacity: 1,
        zIndex: 1000,
        right: '-5000px',
      })
      const coords = $parent.getCoords()
      document.onmousemove = (e) => {
        const delta = e.pageY - coords.bottom
        $resizer.css({bottom: -delta + 'px'})
        document.onmouseup = () => {
          const value = coords.height + delta +'px'
          $parent.css({height: value})
          $resizer.css({
            bottom: 0,
            right: 0,
            opacity: 0,

          })
          document.onmousemove = null
          document.onmouseup = null
        }
      }
    }
  }
}
