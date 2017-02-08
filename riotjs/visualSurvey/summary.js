<summary>

  <style>
    :scope { display: none }
  </style>

  <div>{ summaryDesc }</div>

  <script>

    summaryDesc = opts.summaryDesc

    this.mixin(SharedMixin)

    this.observable.on('listSummary', (desc) => {
      summaryDesc = desc

      this.update()
      $(this.root).show().fadeOut(500).fadeIn(500)  
    })

  </script>

</summary>
