<imageChoices>

  <h3>{ description }</h3>
  <ul>
    <li each={image, index in images}>
      <label>
        <a href="#" onclick = {  updateImageChoices }>
          <img src={ image.filePath } >
        </a>
      </label>
    </li>
  </ul>

  <div>
    <img src={ finalImage } >
  </div>

  <!-- <script> tag is optional -->
  <script>
    description = opts.description
    imagesSelected = []
    selectionSummary = ""

    this.mixin(SharedMixin)

    this.on('before-mount', () => {
      images = this.filterImages(opts.initialImageSet)
    })

//    this.on('mount', function() {
//
//    })

    this.on('update', function(i) {
      if (Object.keys(images).length === 0 && images.constructor === Object) {
        this.finalImage = 'images\\end.gif'
      }
    })

    updateImageChoices(e) {
      let img = e.item.image
      imagesSelected.push(img.imageId)

      if (img.nextImageSet) {
          images = this.filterImages(img.nextImageSet)
      } else {
          images = {}
          description = ''
          this.observable.trigger('listSummary', ` SUMMARY : You fancy a ${this.summarise(imagesSelected).join(', ')}! `)
      }
    }

    filterImages(imgSet) {
      return opts.images.filter(
        i => (imgSet.indexOf(i.imageId) >= 0)
      )
    }

    summarise(selected) {
      return selected.reduce((summary, value) => {
          let imgKeywords = opts.images.find((img) => (img.imageId == value)).keywords
          let randomKeyword = imgKeywords[Math.floor(Math.random() * imgKeywords.length)]
          return summary.concat(randomKeyword)
      }, []);
    }

  </script>

</imageChoices>
