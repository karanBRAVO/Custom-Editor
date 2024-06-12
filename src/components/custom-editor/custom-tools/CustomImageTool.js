import axios from "axios";

class CustomImage {
  static get toolbox() {
    return {
      title: "Image",
      icon: `
  <svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512" id="images">
    <path d="M457.6 140.2l-82.5-4-4.8-53.8c-1-11.3-11.1-19.2-22.9-18.3l-296 24.3c-11.8 1-20.3 10.5-19.4 21.7l21.2 235.8c1 11.3 11.2 19.2 22.9 18.3l15-1.2-2.4 45.8c-.6 12.6 9.2 22.8 22.4 23.5L441.3 448c13.2.6 24.1-8.6 24.8-21.2L480 163.5c.6-12.5-9.3-22.7-22.4-23.3zm-355 5.3l-7.1 134.8L78.1 305l-16-178v-.5-.5c.5-5 4.3-9 9.5-9.4l261-21.4c5.2-.4 9.7 3 10.5 7.9 0 .2.3.2.3.4 0 .1.3.2.3.4l2.7 30.8-219-10.5c-13.2-.4-24.2 8.8-24.8 21.3zm334.1 236.9L390 327.1l-27.5-32.7c-2.4-2.9-6.3-5.3-10.6-5.5-4.3-.2-7.5 1.5-11.1 4.1l-16.4 11.9c-3.5 2.1-6.2 3.5-9.9 3.3-3.6-.2-6.8-1.6-9.1-3.8-.8-.8-2.3-2.2-3.5-3.4l-42.8-48.9c-3.1-3.9-8.2-6.4-13.8-6.7-5.7-.3-11.2 2.1-14.8 5.6L129.4 359.8l-6.8 7.4.3-6.8 6.8-128.9 3.3-62.9v-.5-.5c1.4-5.4 6.2-9.3 11.9-9l204.2 9.8 28.7 1.4 58.3 2.8c5.8.3 10.3 4.7 10.4 10.2 0 .2.3.3.3.5s.3.3.3.5l-10.4 198.6z">
    </path>
    <path d="M373.2 262.3c19.4 0 35.2-15.8 35.2-35.2s-15.7-35.2-35.2-35.2c-19.4 0-35.2 15.7-35.2 35.2s15.7 35.2 35.2 35.2z">
    </path>
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
    input.classList.add("customImage-input");
    input.type = "file";
    input.accept = "image/*";
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
            this._createImageElement(wrapper, url);
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
        this._createImageElement(wrapper, url);
      });
    }

    return wrapper;
  }

  async uploadFile(file) {
    const authData = localStorage.getItem("auth");
    if (!authData) return;
    const { user, token } = JSON.parse(authData);
    if (!user || !token) return;

    const assetData = localStorage.getItem("asset");
    if (!assetData) return;
    const asset = JSON.parse(assetData);

    // data to be sent
    const formData = new FormData();
    formData.append("image", file);
    formData.append("assetId", asset._id);

    try {
      const response = await axios.post(this.config.uploadUrl, formData, {
        params: { userId: user._id },
      });
      if (
        response.data.success &&
        response.data.file &&
        response.data.file.url
      ) {
        return response.data.file.url;
      } else {
        console.error("File upload failed:", response.data.error);
        return null;
      }
    } catch (error) {
      console.error("File upload error:", error);
      return null;
    }
  }

  _createImageElement(wrapper, url) {
    const imageWrapper = document.createElement("div");
    imageWrapper.classList.add("customImage-imageWrapper");

    const image = document.createElement("img");
    image.src = url;
    image.alt = "Image";

    imageWrapper.appendChild(image);
    wrapper.appendChild(imageWrapper);
  }

  save(blockContent) {
    const imageElements = blockContent.querySelectorAll("img");
    const urls = [];
    imageElements.forEach((image) => {
      if (image.src) {
        urls.push(image.src);
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

export default CustomImage;
