class CustomTable {
  static get toolbox() {
    return {
      title: "Table",
      icon: `
      <svg height="1792" viewBox="0 0 1792 1792" width="1792" xmlns="http://www.w3.org/2000/svg">
            <path d="M576 1376v-192q0-14-9-23t-23-9h-320q-14 0-23 9t-9 23v192q0 14 9 23t23 9h320q14 0 23-9t9-23zm0-384v-192q0-14-9-23t-23-9h-320q-14 0-23 9t-9 23v192q0 14 9 23t23 9h320q14 0 23-9t9-23zm512 384v-192q0-14-9-23t-23-9h-320q-14 0-23 9t-9 23v192q0 14 9 23t23 9h320q14 0 23-9t9-23zm-512-768v-192q0-14-9-23t-23-9h-320q-14 0-23 9t-9 23v192q0 14 9 23t23 9h320q14 0 23-9t9-23zm512 384v-192q0-14-9-23t-23-9h-320q-14 0-23 9t-9 23v192q0 14 9 23t23 9h320q14 0 23-9t9-23zm512 384v-192q0-14-9-23t-23-9h-320q-14 0-23 9t-9 23v192q0 14 9 23t23 9h320q14 0 23-9t9-23zm-512-768v-192q0-14-9-23t-23-9h-320q-14 0-23 9t-9 23v192q0 14 9 23t23 9h320q14 0 23-9t9-23zm512 384v-192q0-14-9-23t-23-9h-320q-14 0-23 9t-9 23v192q0 14 9 23t23 9h320q14 0 23-9t9-23zm0-384v-192q0-14-9-23t-23-9h-320q-14 0-23 9t-9 23v192q0 14 9 23t23 9h320q14 0 23-9t9-23zm128-320v1088q0 66-47 113t-113 47h-1344q-66 0-113-47t-47-113v-1088q0-66 47-113t113-47h1344q66 0 113 47t47 113z"/>
      </svg>
            `,
    };
  }

  constructor({ data, config, api }) {
    this.data = data.content
      ? data
      : {
          content: Array(7)
            .fill()
            .map(() => Array(3).fill({ text: "", color: "#ffffff" })),
        };
    this.api = api;
    this.config = config || {};
  }

  render() {
    const wrapper = document.createElement("div");
    wrapper.style.width = "100%";
    wrapper.style.overflow = "hidden";
    wrapper.style.margin = "5px 0";
    wrapper.style.padding = "15px";
    wrapper.style.position = "relative";

    // Buttons container's
    const topBtnContainer = document.createElement("div");
    topBtnContainer.classList.add(
      "customTable-btn-containers",
      "customTable-btn-containers--top"
    );

    const bottomBtnContainer = document.createElement("div");
    bottomBtnContainer.classList.add(
      "customTable-btn-containers",
      "customTable-btn-containers--bottom"
    );

    const midContainer = document.createElement("div");
    midContainer.classList.add("customTable-btn-containers");
    midContainer.style.display = "flex";
    midContainer.style.overflowX = "auto";

    const leftBtnContainer = document.createElement("div");
    leftBtnContainer.classList.add(
      "customTable-btn-containers",
      "customTable-btn-containers--left"
    );
    leftBtnContainer.style.flexDirection = "column";

    const rightBtnContainer = document.createElement("div");
    rightBtnContainer.classList.add(
      "customTable-btn-containers",
      "customTable-btn-containers--right"
    );
    rightBtnContainer.style.flexDirection = "column";

    // Row buttons
    const addButtonRowStart = document.createElement("button");
    addButtonRowStart.classList.add("customTable-buttons");
    addButtonRowStart.textContent = "+";
    addButtonRowStart.title = "Add ROW above";
    addButtonRowStart.addEventListener("click", () => this.addRow(0));
    topBtnContainer.appendChild(addButtonRowStart);

    const removeButtonRowStart = document.createElement("button");
    removeButtonRowStart.classList.add("customTable-buttons");
    removeButtonRowStart.textContent = "-";
    removeButtonRowStart.title = "Remove ROW above";
    removeButtonRowStart.addEventListener("click", () => this.deleteRow(0));
    topBtnContainer.appendChild(removeButtonRowStart);

    const addButtonRowEnd = document.createElement("button");
    addButtonRowEnd.classList.add("customTable-buttons");
    addButtonRowEnd.textContent = "+";
    addButtonRowEnd.title = "Add ROW end";
    addButtonRowEnd.addEventListener("click", () => this.addRow(-1));
    bottomBtnContainer.appendChild(addButtonRowEnd);

    const removeButtonRowEnd = document.createElement("button");
    removeButtonRowEnd.classList.add("customTable-buttons");
    removeButtonRowEnd.textContent = "-";
    removeButtonRowEnd.title = "Remove ROW end";
    removeButtonRowEnd.addEventListener("click", () => this.deleteRow(-1));
    bottomBtnContainer.appendChild(removeButtonRowEnd);

    // Column buttons
    const addButtonColStart = document.createElement("button");
    addButtonColStart.classList.add("customTable-buttons");
    addButtonColStart.textContent = "+";
    addButtonColStart.title = "Add COLUMN left";
    addButtonColStart.addEventListener("click", () => this.addColumn(0));
    leftBtnContainer.appendChild(addButtonColStart);

    const removeButtonColStart = document.createElement("button");
    removeButtonColStart.classList.add("customTable-buttons");
    removeButtonColStart.textContent = "-";
    removeButtonColStart.title = "Remove COLUMN left";
    removeButtonColStart.addEventListener("click", () => this.deleteColumn(0));
    leftBtnContainer.appendChild(removeButtonColStart);

    const addButtonColEnd = document.createElement("button");
    addButtonColEnd.classList.add("customTable-buttons");
    addButtonColEnd.textContent = "+";
    addButtonColEnd.title = "Add COLUMN right";
    addButtonColEnd.addEventListener("click", () => this.addColumn(-1));
    rightBtnContainer.appendChild(addButtonColEnd);

    const removeButtonColEnd = document.createElement("button");
    removeButtonColEnd.classList.add("customTable-buttons");
    removeButtonColEnd.textContent = "-";
    removeButtonColEnd.title = "Remove COLUMN right";
    removeButtonColEnd.addEventListener("click", () => this.deleteColumn(-1));
    rightBtnContainer.appendChild(removeButtonColEnd);

    const showButtonsContainers = () => {
      topBtnContainer.style.display = "flex";
      leftBtnContainer.style.display = "flex";
      rightBtnContainer.style.display = "flex";
      bottomBtnContainer.style.display = "flex";
    };

    const hideButtonsContainers = () => {
      topBtnContainer.style.display = "none";
      leftBtnContainer.style.display = "none";
      rightBtnContainer.style.display = "none";
      bottomBtnContainer.style.display = "none";
    };

    wrapper.addEventListener("mouseenter", showButtonsContainers);
    wrapper.addEventListener("mouseleave", hideButtonsContainers);

    // Table
    this.table = document.createElement("table");
    this.table.classList.add("customTable");

    midContainer.appendChild(leftBtnContainer);
    midContainer.appendChild(this.table);
    midContainer.appendChild(rightBtnContainer);

    this.data.content.forEach((row, i) => {
      const tr = document.createElement("tr");
      tr.style.border = "1px solid #ccc";
      tr.style.padding = "5px";

      row.forEach((cellData, j) => {
        const td = document.createElement("td");
        // td.classList.add("customTable-cells");
        td.style.backgroundColor = cellData.color;
        td.spellcheck = "false";
        // td.contentEditable = true;
        td.innerHTML = cellData.text;
        const input = document.createElement("input");
        input.placeholder = "......";
        td.appendChild(input);
        td.addEventListener("click", () => {
          this.showContainer(td);
        });
        tr.appendChild(td);
      });
      this.table.appendChild(tr);
    });

    wrapper.appendChild(topBtnContainer);
    wrapper.appendChild(midContainer);
    wrapper.appendChild(bottomBtnContainer);
    return wrapper;
  }

  save(blockContent) {
    const rows = blockContent.querySelectorAll("tr");
    const content = [];

    rows.forEach((row) => {
      const cells = row.querySelectorAll("td");
      const rowData = [];
      cells.forEach((cell) => {
        rowData.push({
          text: cell.innerHTML,
          color: cell.style.backgroundColor,
        });
      });
      content.push(rowData);
    });

    return {
      rows: rows.length,
      cols: rows[0] ? rows[0].querySelectorAll("td").length : 0,
      content,
    };
  }

  addRow(index) {
    const newRow = document.createElement("tr");
    if (
      !this.table.rows[0] ||
      !this.table.rows[0].cells ||
      !this.table.rows[0].cells.length
    ) {
      const newCell = document.createElement("td");
      // newCell.classList.add("customTable-cells");
      newCell.spellcheck = "false";
      // newCell.contentEditable = true;
      const input = document.createElement("input");
      input.placeholder = "......";
      newCell.appendChild(input);
      newCell.addEventListener("click", () => this.showContainer(newCell));
      newRow.appendChild(newCell);
      this.table.appendChild(newRow);
    } else {
      for (let i = 0; i < this.table.rows[0].cells.length; i++) {
        const newCell = document.createElement("td");
        // newCell.classList.add("customTable-cells");
        newCell.spellcheck = "false";
        // newCell.contentEditable = true;
        const input = document.createElement("input");
        input.placeholder = "......";
        newCell.appendChild(input);
        newCell.addEventListener("click", () => this.showContainer(newCell));
        newRow.appendChild(newCell);
      }
      if (index !== undefined && index >= 0 && index < this.table.rows.length) {
        this.table.insertBefore(newRow, this.table.rows[index]);
      } else {
        this.table.appendChild(newRow);
      }
    }
  }

  addColumn(index) {
    if (!this.table.rows || !this.table.rows.length) {
      const newCell = document.createElement("td");
      // newCell.classList.add("customTable-cells");
      // newCell.contentEditable = true;
      newCell.spellcheck = "false";
      const input = document.createElement("input");
      input.placeholder = "......";
      newCell.appendChild(input);
      newCell.addEventListener("click", () => this.showContainer(newCell));
      this.table.rows[0].appendChild(newCell);
    } else {
      for (let i = 0; i < this.table.rows.length; i++) {
        const newCell = document.createElement("td");
        // newCell.classList.add("customTable-cells");
        newCell.spellcheck = "false";
        // newCell.contentEditable = true;
        const input = document.createElement("input");
        input.placeholder = "......";
        newCell.appendChild(input);
        newCell.addEventListener("click", () => this.showContainer(newCell));
        if (
          index !== undefined &&
          index >= 0 &&
          index < this.table.rows[i].cells.length
        ) {
          this.table.rows[i].insertBefore(
            newCell,
            this.table.rows[i].cells[index]
          );
        } else {
          this.table.rows[i].appendChild(newCell);
        }
      }
    }
  }

  deleteRow(index) {
    if (index >= 0 && index < this.table.rows.length) {
      this.table.deleteRow(index);
    } else if (index === -1 && this.table.rows.length - 1 >= 0) {
      this.table.deleteRow(this.table.rows.length - 1);
    }
  }

  deleteColumn(index) {
    if (
      index === -1 &&
      this.table.rows[0] !== undefined &&
      this.table.rows[0].cells !== undefined &&
      this.table.rows[0].cells.length - 1 >= 0
    ) {
      index = this.table.rows[0].cells.length - 1;
    }
    for (let i = 0; i < this.table.rows.length; i++) {
      if (index >= 0 && index < this.table.rows[i].cells.length) {
        this.table.rows[i].deleteCell(index);
      }
    }
  }

  showContainer(cell) {
    // calculating index of cell
    for (let i = 0; i < this.table.rows.length; i++) {
      for (let j = 0; j < this.table.rows[i].cells.length; j++) {
        if (cell === this.table.rows[i].cells[j]) {
          this.r_index = i;
          this.c_index = j;
          this.cell = this.table.rows[i].cells[j];
          break;
        }
      }
    }

    let container = document.getElementById("customTable-container-tools");
    let colorPicker = document.getElementById(
      "customTable-container-tools-colorPickerInput"
    );

    if (!container) {
      container = document.createElement("div");
      container.id = "customTable-container-tools";
      container.classList.add("customTable-container-tools");

      colorPicker = document.createElement("input");
      colorPicker.id = "customTable-container-tools-colorPickerInput";
      colorPicker.title = "Choose a color (Background)";
      colorPicker.classList.add("customTable-container-tools-colorPickerInput");
      colorPicker.type = "color";

      // insert column left
      let btn_leftAdd = document.createElement("button");
      btn_leftAdd.classList.add("customTable-container-tools-Btns");
      btn_leftAdd.innerText = "←A";

      // remove column left
      let btn_leftRemove = document.createElement("button");
      btn_leftRemove.classList.add("customTable-container-tools-Btns");
      btn_leftRemove.innerText = "←R";

      // insert column right button
      let btn_rightAdd = document.createElement("button");
      btn_rightAdd.classList.add("customTable-container-tools-Btns");
      btn_rightAdd.innerText = "→A";

      // remove column right button
      let btn_rightRemove = document.createElement("button");
      btn_rightRemove.classList.add("customTable-container-tools-Btns");
      btn_rightRemove.innerText = "→R";

      // insert row top button
      let btn_topAdd = document.createElement("button");
      btn_topAdd.classList.add("customTable-container-tools-Btns");
      btn_topAdd.innerText = "↑A";

      // delete row above
      let btn_topRemove = document.createElement("button");
      btn_topRemove.classList.add("customTable-container-tools-Btns");
      btn_topRemove.innerText = "↑R";

      // insert row down button
      let btn_bottomAdd = document.createElement("button");
      btn_bottomAdd.classList.add("customTable-container-tools-Btns");
      btn_bottomAdd.innerText = "↓A";

      // delete row down
      let btn_bottomRemove = document.createElement("button");
      btn_bottomRemove.classList.add("customTable-container-tools-Btns");
      btn_bottomRemove.innerText = "↓R";

      btn_leftAdd.addEventListener("click", () => {
        this.addColumn(this.c_index);
      });
      btn_leftRemove.addEventListener("click", () => {
        this.deleteColumn(this.c_index);
      });
      btn_rightAdd.addEventListener("click", () => {
        this.addColumn(this.c_index + 1);
      });
      btn_rightRemove.addEventListener("click", () => {
        this.deleteColumn(this.c_index + 1);
      });
      btn_topAdd.addEventListener("click", () => {
        this.addRow(this.r_index);
      });
      btn_topRemove.addEventListener("click", () => {
        this.deleteRow(this.r_index);
      });
      btn_bottomAdd.addEventListener("click", () => {
        this.addRow(this.r_index + 1);
      });
      btn_bottomRemove.addEventListener("click", () => {
        this.deleteRow(this.r_index + 1);
      });

      const btns = [
        [btn_topAdd, btn_topRemove],
        [btn_bottomAdd, btn_bottomRemove],
        [btn_leftAdd, btn_leftRemove],
        [btn_rightAdd, btn_rightRemove],
      ];

      container.appendChild(colorPicker);
      for (let i = 0; i < btns.length; i++) {
        let btnContainer = document.createElement("div");
        btnContainer.style.display = "flex";
        btnContainer.style.flexDirection = "column";
        btnContainer.style.alignItems = "center";
        btnContainer.style.gap = "2px";
        btnContainer.appendChild(btns[i][0]);
        btnContainer.appendChild(btns[i][1]);
        container.appendChild(btnContainer);
      }
      document.body.appendChild(container);
    }

    const updatePos = () => {
      container.style.left = `${this.cell.getBoundingClientRect().left}px`;
      container.style.top = `${
        this.cell.getBoundingClientRect().top - this.cell.offsetHeight - 20
      }px`;
    };

    updatePos();

    window.addEventListener("resize", () => {
      updatePos();
    });

    colorPicker.value = this.rgbToHex(this.cell.style.backgroundColor);

    const updateColor = () => {
      this.cell.style.backgroundColor = colorPicker.value;
    };
    colorPicker.addEventListener("input", () => updateColor());

    const hideContainer = () => {
      container.style.display = "none";
    };
    const showContainer = () => {
      container.style.display = "flex";
    };

    document.body.addEventListener("click", (event) => {
      const isClickInsideTable =
        container.contains(event.target) || this.table.contains(event.target);
      if (!isClickInsideTable) {
        hideContainer();
      } else {
        showContainer();
      }
    });
  }

  rgbToHex(rgb) {
    if (!rgb) return "#ffffff";
    const match = rgb.match(/\d+/g);
    if (!match) return "#ffffff";
    const result = match.map(Number);
    return `#${((1 << 24) + (result[0] << 16) + (result[1] << 8) + result[2])
      .toString(16)
      .slice(1)}`;
  }
}

export default CustomTable;
