class CustomVideoTool {
  static get toolbox() {
    return {
      title: "Video",
      icon: `
  <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" width="256" height="256" viewBox="0 0 256 256" xml:space="preserve">
      <defs></defs>
      <g style="stroke: none; stroke-width: 0; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: none; fill-rule: nonzero; opacity: 1;" transform="translate(1.4065934065934016 1.4065934065934016) scale(2.81 2.81)" >
          <path d="M 88 12.43 H 2 c -1.104 0 -2 0.896 -2 2 V 75.57 c 0 1.104 0.896 2 2 2 h 86 c 1.104 0 2 -0.896 2 -2 V 14.43 C 90 13.325 89.104 12.43 88 12.43 z M 12.763 43 H 4 v -6.75 h 8.763 V 43 z M 12.763 47 v 6.75 H 4 V 47 H 12.763 z M 12.763 32.25 H 4 V 25.5 h 8.763 V 32.25 z M 4 57.75 h 8.763 v 6.75 H 4 V 57.75 z M 16.763 16.43 h 56.475 V 73.57 H 16.763 V 16.43 z M 77.237 47 H 86 v 6.75 h -8.763 V 47 z M 77.237 43 v -6.75 H 86 V 43 H 77.237 z M 77.237 32.25 V 25.5 H 86 v 6.75 H 77.237 z M 77.237 57.75 H 86 v 6.75 h -8.763 V 57.75 z M 86 21.5 h -8.763 v -5.07 H 86 V 21.5 z M 12.763 16.43 v 5.07 H 4 v -5.07 H 12.763 z M 4 68.5 h 8.763 v 5.07 H 4 V 68.5 z M 77.237 73.57 V 68.5 H 86 v 5.07 H 77.237 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,0,0); fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" />
          <path d="M 34.25 59.004 c -0.35 0 -0.7 -0.092 -1.012 -0.275 c -0.612 -0.359 -0.988 -1.016 -0.988 -1.725 V 32.996 c 0 -0.709 0.376 -1.366 0.988 -1.725 c 0.611 -0.36 1.367 -0.368 1.987 -0.021 l 21.5 12.004 c 0.633 0.353 1.025 1.021 1.025 1.746 s -0.393 1.393 -1.025 1.746 l -21.5 12.004 C 34.922 58.919 34.586 59.004 34.25 59.004 z M 36.25 36.403 v 17.193 L 51.647 45 L 36.25 36.403 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,0,0); fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" />
      </g>
  </svg>
      `,
    };
  }

  constructor({ data, config, api }) {
    this.data = data.urls ? data : { urls: [] };
    this.api = api;
    this.config = config || {};
  }

  render() {
    const wrapper = document.createElement("div");
    wrapper.style.maxWidth = "100%";
    wrapper.style.padding = "13px";
    wrapper.style.borderRadius = "3px";
    wrapper.style.margin = "5px 0";

    const input = document.createElement("input");
    input.classList.add("customVideo-input");
    input.type = "file";
    input.accept = "video/*";
    input.size = "60";
    input.multiple = true;
    input.addEventListener("change", async (event) => {
      const files = event.target.files;
      for (let i = 0; i < files.length; i++) {
        const file = files[i];
        if (file) {
          const url = await this.uploadFile(file);
          if (url) {
            this.data.urls.push(url);
            this._createVideoElement(wrapper, url);
          }
        }
      }
      input.value = "";
    });

    wrapper.appendChild(input);

    const showInput = () => {
      input.style.display = "block";
    };
    const hideInput = () => {
      if (this.data.urls.length !== 0) {
        input.style.display = "none";
      }
    };

    wrapper.addEventListener("mouseenter", showInput);
    wrapper.addEventListener("mouseleave", hideInput);

    if (this.data && this.data.urls && this.data.urls.length > 0) {
      this.data.urls.forEach((url) => {
        this._createVideoElement(wrapper, url);
      });
    }

    return wrapper;
  }

  async uploadFile(file) {
    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await fetch(this.config.uploadUrl, {
        method: "POST",
        body: formData,
      });
      const data = await response.json();
      if (data.success && data.file && data.file.url) {
        return data.file.url;
      } else {
        console.error("File upload failed:", data);
        return null;
      }
    } catch (error) {
      console.error("File upload error:", error);
      return null;
    }
  }

  _createVideoElement(wrapper, url) {
    const videoWrapper = document.createElement("div");
    videoWrapper.style.marginBottom = "10px";

    const video = document.createElement("video");
    video.src = url;
    video.controls = true;
    video.style.maxWidth = "100%";
    video.style.borderRadius = "8px";

    videoWrapper.appendChild(video);
    wrapper.appendChild(videoWrapper);
  }

  save(blockContent) {
    const videoElements = blockContent.querySelectorAll("video");
    const urls = [];
    videoElements.forEach((video) => {
      if (video.src) {
        urls.push(video.src);
      }
    });
    return {
      urls: urls,
    };
  }

  static get sanitize() {
    return {
      urls: {},
    };
  }
}

export default CustomVideoTool;
