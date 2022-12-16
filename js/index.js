function ld() {
  var a = document.querySelector("#scroller");
  if (X) {
      X.stop();
      X = null;
      for (var b = [], c = 0; c < a.children.length; c++)
          b.push(a.children[c]);
      b.sort(function(a, b) {
          return parseInt(a.dataset.order) == parseInt(b.dataset.order) ? 0 : parseInt(a.dataset.order) > parseInt(b.dataset.order) ? 1 : -1
      });
      for (c = 0; c < b.length; ++c)
          a.appendChild(b[c]);
      X = new TimelineMax({
          delay: 2.5,
          repeat: -1,
          repeatDelay: 1
      });
      X.play()
  }
} 

function md() {
  var a = X
    , b = document.querySelector("#scroller")
    , c = b.firstElementChild.clientHeight;
  a.set(b, {
      y: 0
  });
  a.to(b, .4, {
      y: -(c + c / 50),
      ease: Sine.easeOut
  });
  a.to(b, .1, {
      y: -(c - c / 50),
      ease: Sine.easeOut
  });
  a.to(b, .1, {
      y: -c,
      ease: Sine.easeOut
  });
  a.to(b, .4, {
      y: -c,
      ease: Sine.easeOut
  });
  a.call(nd, [b]);
  a.set(b, {
      y: 0
  });
  a.to(b, .4, {
      y: -(c + c / 50),
      ease: Sine.easeOut
  });
  a.to(b, .1, {
      y: -(c - c / 50),
      ease: Sine.easeOut
  });
  a.to(b, .1, {
      y: -c,
      ease: Sine.easeOut
  });
  a.to(b, .4, {
      y: -c,
      ease: Sine.easeOut
  });
  a.call(nd, [b]);
  a.set(b, {
      y: 0
  });
  a.to(b, .4, {
      y: -(c + c / 50),
      ease: Sine.easeOut
  });
  a.to(b, .1, {
      y: -(c - c / 50),
      ease: Sine.easeOut
  });
  a.to(b, .1, {
      y: -c,
      ease: Sine.easeOut
  });
  a.to(b, .4, {
      y: -c,
      ease: Sine.easeOut
  });
  a.call(nd, [b]);
  a.set(b, {
      y: 0
  });
  a.to(b, .4, {
      y: -(c + c / 50),
      ease: Sine.easeOut
  });
  a.to(b, .1, {
      y: -(c - c / 50),
      ease: Sine.easeOut
  });
  a.to(b, .1, {
      y: -c,
      ease: Sine.easeOut
  });
  a.to(b, .4, {
      y: -c,
      ease: Sine.easeOut
  });
  a.call(nd, [b]);
  a.set(b, {
      y: 0
  })
}
function kd() {
  document.querySelector("#scroller") && window.TimelineMax && (window.addEventListener("resize", function(a, b, c) {
      var d;
      return function() {
          var e = this
            , f = arguments
            , g = c && !d;
          clearTimeout(d);
          d = setTimeout(function() {
              d = null;
              c || a.apply(e, f)
          }, b);
          g && a.apply(e, f);
      }
  }(ld, 400)),
  X = new TimelineMax({
      delay: 1,
      repeat: -1,
      repeatDelay: 0
  }),
  md())
}
function nd(a) {
  a.appendChild(a.firstElementChild)
}



window.onload = function start() {
kd();
}