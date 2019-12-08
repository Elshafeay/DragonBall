 var width = window.innerWidth;
      var height = window.innerHeight;

      var stage = new Konva.Stage({
        container: 'container',
        width: width,
        height: height
      });

      var layer = new Konva.Layer();
      stage.add(layer);

      var canvas = document.createElement('canvas');
      // use external library to parse and draw gif animation
      function onDrawFrame(ctx, frame) {
        // update canvas size
        canvas.width = frame.width;
        canvas.height = frame.height;
        // update canvas that we are using for Konva.Image
        ctx.drawImage(frame.buffer, 0, 0);
        // redraw the layer
        layer.draw();
      }

      gifler('/assets/yoda.gif').frames(canvas, onDrawFrame);

      // draw resulted canvas into the stage as Konva.Image
      var image = new Konva.Image({
        image: canvas
      });
      layer.add(image);