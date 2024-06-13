import axios from "axios";

class MyAssets {
  static get toolbox() {
    return {
      title: "My Assets",
      icon: `
  <svg xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2" clip-rule="evenodd" viewBox="0 0 1069 1069" id="disk"><rect width="1066.67" height="1066.67" x="1.397" y=".143" fill="none"></rect><path fill-opacity=".5" d="M815.981,616.81c-0,-30.39 -12.072,-59.534 -33.561,-81.023c-21.488,-21.489 -50.633,-33.561 -81.023,-33.561c-92.064,0 -239.445,0 -331.51,0c-30.389,0 -59.534,12.072 -81.022,33.561c-21.489,21.489 -33.561,50.633 -33.561,81.023c0,121.596 0,333.333 0,333.333c0,17.259 13.991,31.25 31.25,31.25l498.177,-0c17.259,-0 31.25,-13.991 31.25,-31.25l-0,-333.333Zm-62.5,-0l-0,302.083c-0,-0 -435.677,-0 -435.677,-0c0,0 0,-302.083 0,-302.083c0,-13.814 5.487,-27.061 15.255,-36.829c9.767,-9.767 23.015,-15.255 36.828,-15.255c92.065,0 239.446,0 331.51,0c13.814,0 27.061,5.488 36.829,15.255c9.767,9.768 15.255,23.015 15.255,36.829Zm-281.25,239.583l125,-0c17.247,-0 31.25,-14.003 31.25,-31.25c-0,-17.248 -14.003,-31.25 -31.25,-31.25l-125,-0c-17.248,-0 -31.25,14.002 -31.25,31.25c-0,17.247 14.002,31.25 31.25,31.25Zm-218.75,-536.197c18.253,0 33.073,-14.82 33.073,-33.073c0,-18.254 -14.82,-33.074 -33.073,-33.074c-18.254,0 -33.074,14.82 -33.074,33.074c0,18.253 14.82,33.073 33.074,33.073Z"></path><path d="M631.455,85.559c-0,0 -346.725,0 -346.725,0c-109.306,0.001 -197.916,88.611 -197.916,197.917c0,145.235 0,354.766 0,500c0,52.491 20.852,102.832 57.969,139.948c37.116,37.117 87.457,57.969 139.948,57.969c145.234,-0 354.765,-0 500,-0l1.28,-0.004c108.716,-0.688 196.636,-89.032 196.636,-197.912l0,-343.853c0,-51.855 -20.351,-101.639 -56.676,-138.644c-43.964,-44.788 -108.913,-110.954 -153.276,-156.147c-23.193,-23.628 -51.699,-40.827 -82.748,-50.432l-0.269,-0.084l-0.458,-0.139l-0.168,-0.052l-0.143,-0.043l-0.4,-0.122l-0.276,-0.082l-0.063,-0.019l-0.233,-0.069l-0.6,-0.179l-0.694,-0.202l-0.24,-0.07l-0.031,-0.008l-0.209,-0.061l-0.422,-0.12l-0.224,-0.064l-0.176,-0.05l-0.355,-0.101l-0.258,-0.072l-0.098,-0.027l-0.323,-0.089l-0.499,-0.139l-0.533,-0.144l-0.423,-0.115l-0.044,-0.012l-0.181,-0.049l-0.39,-0.103l-0.275,-0.074l-0.202,-0.052l-0.316,-0.084l-0.245,-0.063l-0.129,-0.034l-0.386,-0.099l-0.425,-0.109l-0.326,-0.082l-0.651,-0.164l-0.053,-0.013l-0.158,-0.04l-0.361,-0.088l-0.324,-0.08l-0.218,-0.053l-0.286,-0.07l-0.234,-0.055l-0.158,-0.039l-0.429,-0.101l-0.371,-0.088l-0.094,-0.022c-0.321,-0.075 -0.642,-0.149 -0.963,-0.223l-0.136,-0.032l-0.336,-0.075c0,-0 -0.369,-0.084 -0.369,-0.084l-0.23,-0.051l-0.261,-0.059l-0.225,-0.049l-0.185,-0.041l-0.457,-0.099l-0.33,-0.072l-0.092,-0.02c-0.33,-0.071 -0.659,-0.14 -0.989,-0.209l-0.119,-0.026l-0.312,-0.064l-0.412,-0.085l-0.238,-0.048l-0.239,-0.05l-0.219,-0.043l-0.21,-0.043l-0.473,-0.093l-0.301,-0.06l-0.091,-0.018c-0.337,-0.065 -0.674,-0.13 -1.011,-0.195l-0.103,-0.019l-0.291,-0.054l-0.453,-0.086l-0.242,-0.044l-0.221,-0.041l-0.214,-0.039l-0.233,-0.042l-0.482,-0.086l-0.28,-0.05l-0.09,-0.016c-0.343,-0.061 -0.687,-0.12 -1.031,-0.179l-0.089,-0.015l-0.27,-0.045l-0.494,-0.084l-0.242,-0.039l-0.206,-0.035l-0.211,-0.034l-0.254,-0.041l-0.486,-0.078l-0.263,-0.042l-0.092,-0.014c-0.348,-0.055 -0.697,-0.109 -1.047,-0.162l-0.076,-0.011l-0.249,-0.037l-0.534,-0.08l-0.241,-0.035l-0.193,-0.028l-0.209,-0.03l-0.275,-0.04l-0.484,-0.067l-0.25,-0.036l-0.094,-0.013c-0.355,-0.049 -0.708,-0.096 -1.062,-0.143l-0.064,-0.009l-0.229,-0.029l-0.574,-0.075l-0.238,-0.03l-0.181,-0.023l-0.207,-0.026l-0.295,-0.037l-0.481,-0.058l-0.244,-0.03l-0.093,-0.011c-0.357,-0.042 -0.715,-0.084 -1.074,-0.124l-0.053,-0.007l-0.207,-0.022l-0.616,-0.069l-0.232,-0.025l-0.171,-0.018l-0.207,-0.022l-0.314,-0.033l-0.474,-0.049l-0.232,-0.024l-0.1,-0.009c-0.363,-0.037 -0.724,-0.072 -1.086,-0.106l-0.043,-0.004l-0.182,-0.017l-0.66,-0.061l-0.227,-0.02l-0.161,-0.014l-0.206,-0.018l-0.333,-0.029l-0.466,-0.038l-0.226,-0.02l-0.104,-0.008c-0.366,-0.03 -0.73,-0.058 -1.095,-0.086l-0.034,-0.002l-0.155,-0.011l-0.706,-0.052l-0.22,-0.015l-0.152,-0.011l-0.206,-0.014l-0.352,-0.024l-0.456,-0.029l-0.221,-0.015l-0.108,-0.006c-0.367,-0.023 -0.735,-0.045 -1.103,-0.066l-0.025,-0.001l-0.124,-0.007l-0.757,-0.041l-0.212,-0.011l-0.144,-0.007l-0.206,-0.01l-0.37,-0.018l-0.446,-0.02l-0.216,-0.011l-0.113,-0.004c-0.371,-0.017 -0.741,-0.032 -1.11,-0.046l-0.016,-0l-0.089,-0.003l-0.811,-0.029l-0.204,-0.006l-0.136,-0.005l-0.207,-0.006c-0,0 -0.388,-0.012 -0.388,-0.012l-0.434,-0.011l-0.213,-0.006l-0.117,-0.003c-0.372,-0.009 -0.744,-0.017 -1.117,-0.024l-0.927,-0.016l-0.194,-0.002l-0.13,-0.002l-0.208,-0.002l-0.405,-0.005l-0.42,-0.003l-0.211,-0.002l-0.123,0l-0.183,-0.001l-0.938,-0.003Zm-273.94,62.5l-72.786,0c-74.788,0.002 -135.415,60.629 -135.415,135.417c0,145.235 0,354.766 0,500c0,35.915 14.267,70.359 39.663,95.754c25.395,25.396 59.839,39.663 95.754,39.663c145.234,-0 354.765,-0 500,-0l0.875,-0.003c74.384,-0.47 134.54,-60.916 134.541,-135.411l0,-343.855c0,-35.48 -13.924,-69.542 -38.778,-94.862c-43.965,-44.788 -108.914,-110.953 -153.276,-156.147c-5.037,-5.131 -10.44,-9.819 -16.146,-14.036l-0,29.211c-0,63.282 -51.301,114.583 -114.583,114.583c-39.268,-0 -85.998,-0 -125.266,-0c-63.283,-0 -114.583,-51.301 -114.583,-114.583l-0,-55.731Zm62.499,0l211.44,0l1.02,0.005c0,-0 0.306,0.003 0.306,0.003l0.748,0.009l0.311,0.005l0.976,0.02l0.053,0.002l0.997,0.029l0.324,0.011l0.718,0.027c-0,-0 0.335,0.014 0.335,0.014l0.902,0.041l0.106,0.005l0.048,0.003l0.942,0.051l0.352,0.021l0.679,0.042l0.364,0.024l0.826,0.059l0.17,0.012l0.092,0.007l0.881,0.07l0.379,0.033l0.641,0.056l0.39,0.035l0.762,0.074l0.223,0.021l0.124,0.013l0.834,0.087l0.397,0.044l0.615,0.069l0.406,0.048l0.72,0.087l0.257,0.032l0.137,0.017l0.81,0.105l0.142,0.02c0.006,0.24 0.006,54.529 0.006,54.529c-0.001,28.766 -23.319,52.084 -52.083,52.084c-39.268,-0 -85.998,-0 -125.266,-0c-28.764,-0 -52.082,-23.318 -52.083,-52.082l-0.001,-55.732Z"></path></svg>
        `,
    };
  }

  constructor({ data, api, config }) {
    this.data = data;
    this.api = api;
    this.config = config || {};
  }

  render() {
    this.wrapper = document.createElement("div");
    this.wrapper.style.margin = "5px 0";
    this.wrapper.style.padding = "5px";
    this.wrapper.style.display = "flex";
    this.wrapper.style.flexDirection = "column";
    this.wrapper.style.alignItems = "center";

    const btnContainer = document.createElement("div");
    btnContainer.classList.add("customAssets-btnContainer");
    this.wrapper.appendChild(btnContainer);

    const itemsContainer = document.createElement("div");
    itemsContainer.classList.add("customAssets-itemsContainer");
    btnContainer.appendChild(itemsContainer);

    if (this.data) {
      if (this.data.images && this.data.images.length > 0) {
        this.wrapper.innerHTML = this._render_img(this.data.images[0].src);
      } else if (this.data.videos && this.data.videos.length > 0) {
        this.wrapper.innerHTML = this._render_video(this.data.videos[0].src);
      } else if (this.data.docs && this.data.docs.length > 0) {
        this.wrapper.innerHTML = this._render_doc(
          this.data.docs[0].title,
          this.data.docs[0].src
        );
      } else if (this.data.notes && this.data.notes.length > 0) {
        this.wrapper.innerHTML = this._render_note(
          this.data.notes[0].title,
          this.data.notes[0].src
        );
      }
    }

    for (let i = 0; i < this.config.endpoints.length; i++) {
      const { text, url } = this.config.endpoints[i];
      const btn = this._createButton(itemsContainer, text, url);
      btnContainer.appendChild(btn);
    }

    return this.wrapper;
  }

  _render_img(src) {
    return `<img class="customAssets-img" src="${src}" >`;
  }

  _render_video(src) {
    return `<video class="customAssets-video" src="${src}" controls=true muted></video>`;
  }

  _render_note(name, src) {
    return `
<div class="customAssets-note">
  <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 16 16" id="note">
  <path style="text-indent:0;text-align:start;line-height:normal;text-transform:none;block-progression:tb" d="m9.004.984-.018.018H1.004v15H12v-3.998h-1v2.998H2.004v-13H8.02l-.005 3H12v-1h-.01zm4.178 5.053.785.785-.524.524-.79-.78zM3 7.004v1h6v-1zm8.951.277.783.772-3.627 3.627-.785-.787zM3 9.004v1h4v-1zm0 2v1h3v-1zm4.758.74.498.496-.746.25zM3 13.004v1h2.006v-1z" color="#000" font-family="sans-serif" font-weight="400" overflow="visible"></path>
  </svg>
  <a target="_blank" href="${src}">${name}</a>
</div>
`;
  }

  _render_doc(name, src) {
    return `
<div class="customAssets-doc">
  <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" id="pdf"><g display="none">
    <rect width="48" height="48" fill="#fff" color="#000" overflow="visible" style="isolation:auto;mix-blend-mode:normal"></rect>
    <rect style="isolation:auto;mix-blend-mode:normal" width="48" height="48" x="-46.987" fill="#fff" color="#000" overflow="visible"></rect>
    <rect width="48" height="48" x="-102.987" fill="#fff" color="#000" overflow="visible" style="isolation:auto;mix-blend-mode:normal"></rect>
    <rect style="isolation:auto;mix-blend-mode:normal" width="48" height="48" y="57.592" fill="#fff" color="#000" overflow="visible"></rect>
    <rect width="48" height="48" x="-46.987" y="57.592" fill="#fff" color="#000" overflow="visible" style="isolation:auto;mix-blend-mode:normal"></rect>
    <rect style="isolation:auto;mix-blend-mode:normal" width="48" height="48" x="-102.987" y="57.592" fill="#fff" color="#000" overflow="visible"></rect>
    <rect width="48" height="48" y="117.592" fill="#fff" color="#000" overflow="visible" style="isolation:auto;mix-blend-mode:normal"></rect><rect style="isolation:auto;mix-blend-mode:normal" width="48" height="48" x="-46.987" y="117.592" fill="#fff" color="#000" overflow="visible"></rect><rect width="48" height="48" x="-102.987" y="117.592" fill="#fff" color="#000" overflow="visible" style="isolation:auto;mix-blend-mode:normal"></rect><rect style="isolation:auto;mix-blend-mode:normal" width="48" height="48" y="173.592" fill="#fff" color="#000" overflow="visible"></rect><rect width="48" height="48" x="-46.987" y="173.592" fill="#fff" color="#000" overflow="visible" style="isolation:auto;mix-blend-mode:normal"></rect><rect style="isolation:auto;mix-blend-mode:normal" width="48" height="48" x="-102.987" y="173.592" fill="#fff" color="#000" overflow="visible"></rect><rect width="48" height="48" y="231.592" fill="#fff" color="#000" overflow="visible" style="isolation:auto;mix-blend-mode:normal"></rect><rect style="isolation:auto;mix-blend-mode:normal" width="48" height="48" x="-46.987" y="231.592" fill="#fff" color="#000" overflow="visible"></rect><rect width="48" height="48" x="-102.987" y="231.592" fill="#fff" color="#000" overflow="visible" style="isolation:auto;mix-blend-mode:normal"></rect></g><g transform="translate(-123 -1260.362)"><path fill="#242730" style="line-height:normal;text-indent:0;text-align:start;text-decoration-line:none;text-decoration-style:solid;text-decoration-color:#000;text-transform:none;block-progression:tb;isolation:auto;mix-blend-mode:normal" d="m 149,1262.3622 c -0.554,0 -1,0.446 -1,1 l 0,1 c 0,0.554 0.446,1 1,1 l 10.0039,0 0.016,6.4844 c 0,0.8253 0.6708,1.4938 1.4961,1.4961 l 6.4844,0.017 0,28.502 c 0,0.8569 -0.6431,1.5 -1.5,1.5 l -23,0 c -0.857,0 -1.5,-0.6431 -1.5,-1.5 l 0,-1.5 c 0,-0.554 -0.446,-1 -1,-1 l -1,0 c -0.554,0 -1,0.446 -1,1 l 0,1.5 c 0,2.4671 2.0329,4.5 4.5,4.5 l 23,0 c 2.467,0 4.5,-2.0329 4.5,-4.5 l 0,-30.4863 c -1e-4,-0.3978 -0.1582,-0.7793 -0.4395,-1.0606 l -7.5137,-7.5136 c -0.2812,-0.2814 -0.6627,-0.4394 -1.0605,-0.4395 z m -11,21 c 0,0.554 0.446,1 1,1 l 1,0 c 0.554,0 1,-0.446 1,-1 l 0,-10 c 0,-0.554 -0.446,-1 -1,-1 l -1,0 c -0.554,0 -1,0.446 -1,1 z" color="#000" font-family="sans-serif" font-weight="400" overflow="visible"></path><path fill="#11c111" style="line-height:normal;text-indent:0;text-align:start;text-decoration-line:none;text-decoration-style:solid;text-decoration-color:#000;text-transform:none;block-progression:tb;isolation:auto;mix-blend-mode:normal" d="m 142.5,258 c -2.467,0 -4.5,2.0329 -4.5,4.5 l 0,2.5 c 0,0.554 0.446,1 1,1 l 1,0 c 0.554,0 1,-0.446 1,-1 l 0,-2.5 c 0,-0.8569 0.6431,-1.5 1.5,-1.5 l 2.5,0 c 0.554,0 1,-0.446 1,-1 l 0,-1 c 0,-0.554 -0.446,-1 -1,-1 l -2.5,0 z M 127,282 c -1.10801,0 -2,0.892 -2,2 l 0,7 c 0,1.108 0.89199,2 2,2 l 25,0 c 1.10801,0 2,-0.892 2,-2 l 0,-7 c 0,-1.108 -0.89199,-2 -2,-2 l -25,0 z m 4.96484,2.74023 1.92969,0 c 1.53734,0 2.31055,0.60182 2.31055,1.72852 0,1.1936 -0.77321,1.82422 -2.31055,1.82422 l -0.79297,0 0,0.95312 0.46875,0 c 0.38195,0 0.57227,0.12396 0.57227,0.50586 0,0.382 -0.19032,0.51563 -0.57227,0.51563 l -1.60547,0 c -0.38195,0 -0.57226,-0.13363 -0.57226,-0.51563 0,-0.3246 0.18098,-0.50586 0.49609,-0.50586 l 0.0762,0 0,-3.47461 -0.0664,0 c -0.32466,0 -0.50586,-0.18142 -0.50586,-0.51562 0,-0.3724 0.19031,-0.51563 0.57226,-0.51563 z m 5.54493,0 0.87695,0 0.27734,0 c 0.88803,0 1.62435,0.02 2.19727,0.36329 0.73525,0.4488 1.16406,1.28888 1.16406,2.39648 0,1.1554 -0.48762,2.04312 -1.31836,2.48242 -0.48699,0.2674 -1.08832,0.28516 -1.79492,0.28516 l -0.52539,0 -0.87695,0 c -0.3915,0 -0.5918,-0.12413 -0.5918,-0.51563 0,-0.3342 0.18141,-0.50586 0.51562,-0.50586 l 0.0762,0 0,-3.47461 -0.0762,0 c -0.33421,0 -0.51562,-0.18142 -0.51562,-0.51562 0,-0.382 0.19075,-0.51563 0.5918,-0.51563 z m 5.79101,0 3.82031,0 c 0.39148,0 0.48633,0.095 0.48633,0.42969 l 0,1.04102 c 0,0.4011 -0.13346,0.59179 -0.50586,0.59179 -0.38195,0 -0.49609,-0.20029 -0.49609,-0.59179 l 0,-0.48828 -2.16797,0 0,1.19336 0.81055,0 0,-0.0566 c 0,-0.3533 0.1634,-0.5254 0.47851,-0.5254 0.3533,0 0.47656,0.19249 0.47656,0.58399 l 0,0.96289 c 0,0.3915 -0.12326,0.58398 -0.47656,0.58398 -0.31511,0 -0.47851,-0.16384 -0.47851,-0.49804 l 0,-0.0859 -0.81055,0 0,1.36523 0.25781,0 c 0.38194,0 0.57227,0.12396 0.57227,0.50586 0,0.382 -0.19033,0.51563 -0.57227,0.51563 l -1.39453,0 c -0.38195,0 -0.57226,-0.13363 -0.57226,-0.51563 0,-0.3246 0.18099,-0.50586 0.49609,-0.50586 l 0.0762,0 0,-3.47461 -0.0664,0 c -0.32466,0 -0.50586,-0.18142 -0.50586,-0.51562 0,-0.3724 0.19031,-0.51563 0.57226,-0.51563 z m -4.3125,1.00196 c -0.0859,0 -0.17989,-4.4e-4 -0.27539,0.01 l 0,3.48438 c 0.0955,0.01 0.18168,0.01 0.26758,0.01 1.16494,0 1.70898,-0.55276 1.70898,-1.75586 0,-1.1745 -0.55532,-1.74804 -1.70117,-1.74804 z m -5.88672,0.0664 0,1.4336 0.65821,0 c 0.73525,0 1.10937,-0.25867 1.10937,-0.72657 0,-0.4679 -0.37412,-0.70703 -1.10937,-0.70703 l -0.65821,0 z" color="#000" font-family="sans-serif" font-weight="400" overflow="visible" transform="translate(0 1004.362)"></path></g>
      </svg>
    <a target="_blank" href="${src}">${name}</a>
      </div>`;
  }

  _createImage(src) {
    const item = document.createElement("img");
    item.classList.add("customAssets-item");
    item.src = src;
    item.addEventListener("click", () => {
      this.wrapper.innerHTML = this._render_img(src);
    });
    return item;
  }

  _createVideo(src) {
    const item = document.createElement("video");
    item.classList.add("customAssets-item");
    item.src = src;
    item.addEventListener("click", () => {
      this.wrapper.innerHTML = this._render_video(src);
    });
    return item;
  }

  _createDoc(name, src) {
    const item = document.createElement("div");
    item.classList.add("customAssets-item");
    item.innerText = name;
    item.addEventListener("click", () => {
      this.wrapper.innerHTML = this._render_doc(name, src);
    });
    return item;
  }

  _createNote(name, src) {
    const item = document.createElement("div");
    item.classList.add("customAssets-item");
    item.innerText = name;
    item.addEventListener("click", () => {
      this.wrapper.innerHTML = this._render_note(name, src);
    });
    return item;
  }

  _createButton(cnt, text, url) {
    const button = document.createElement("button");
    button.classList.add("customAssets-buttons");
    button.innerText = text;
    button.addEventListener("click", async () => {
      // loading effect
      cnt.innerHTML = `
<svg version="1.1" id="loader-1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
  width="40px" height="40px" viewBox="0 0 40 40" enable-background="new 0 0 40 40" xml:space="preserve">
  <path opacity="0.2" fill="#000" d="M20.201,5.169c-8.254,0-14.946,6.692-14.946,14.946c0,8.255,6.692,14.946,14.946,14.946
    s14.946-6.691,14.946-14.946C35.146,11.861,28.455,5.169,20.201,5.169z M20.201,31.749c-6.425,0-11.634-5.208-11.634-11.634
    c0-6.425,5.209-11.634,11.634-11.634c6.425,0,11.633,5.209,11.633,11.634C31.834,26.541,26.626,31.749,20.201,31.749z"/>
  <path fill="#000" d="M26.013,10.047l1.654-2.866c-2.198-1.272-4.743-2.012-7.466-2.012h0v3.312h0
    C22.32,8.481,24.301,9.057,26.013,10.047z">
    <animateTransform attributeType="xml"
      attributeName="transform"
      type="rotate"
      from="0 20 20"
      to="360 20 20"
      dur="0.5s"
      repeatCount="indefinite"/>
  </path>
</svg>
      `;
      // getting the data
      const data = await this._getData(url);
      // clear the container
      cnt.innerHTML = "";
      // append the data
      if (data && data.success) {
        console.log(data);
        if (text === "images") {
          data.images.forEach((img) => {
            const src = img.filePath;
            const imgEle = this._createImage(src);
            cnt.appendChild(imgEle);
          });
        } else if (text === "videos") {
          data.videos.forEach((video) => {
            const src = video.filePath;
            const videoEle = this._createVideo(src);
            cnt.appendChild(videoEle);
          });
        } else if (text === "docs") {
          data.documents.forEach((doc) => {
            const { filePath, fileName } = doc;
            const docEle = this._createDoc(fileName, filePath);
            cnt.appendChild(docEle);
          });
        } else if (text === "notes") {
          data.notes.forEach((doc) => {
            const { filePath, fileName } = doc;
            const docEle = this._createNote(fileName, filePath);
            cnt.appendChild(docEle);
          });
        }
      } else {
        cnt.innerHTML = "Error occurred.";
      }
    });
    return button;
  }

  async _getData(url) {
    const authData = localStorage.getItem("auth");
    if (!authData) return;
    const { user, token } = JSON.parse(authData);
    if (!user || !token) return;

    const assetData = localStorage.getItem("asset");
    if (!assetData) return;
    const asset = JSON.parse(assetData);

    try {
      const res = await axios.get(url, {
        params: { userId: user._id, assetId: asset._id },
      });
      return res.data;
    } catch (err) {
      console.error(err);
      return null;
    }
  }

  save(blockContent) {
    const assetsData = {
      images: [],
      videos: [],
      docs: [],
      notes: [],
    };

    // Extracting image URLs
    const images = blockContent.querySelectorAll(".customAssets-img");
    images.forEach((image) => {
      assetsData.images.push({ src: image.src });
    });

    // Extracting video URLs
    const videos = blockContent.querySelectorAll(".customAssets-video");
    videos.forEach((video) => {
      assetsData.videos.push({ src: video.src });
    });

    // Extracting document titles
    const docs = blockContent.querySelectorAll(".customAssets-doc");
    docs.forEach((doc) => {
      const aTag = doc.querySelector("a");
      assetsData.docs.push({ title: doc.innerText, src: aTag.href });
    });

    // Extracting note titles
    const notes = blockContent.querySelectorAll(".customAssets-note");
    notes.forEach((note) => {
      const aTag = note.querySelector("a");
      assetsData.notes.push({ title: note.innerText, src: aTag.href });
    });

    // Return the saved data or handle it as needed
    return assetsData;
  }

  static get sanitize() {
    return {
      urls: {},
    };
  }
}

export default MyAssets;
