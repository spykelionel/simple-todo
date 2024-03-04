let item = document.getElementById("item");
let button = document.getElementById("add");
let ul = document.getElementById("mylist");

const addItem = (e) => {
  let li = document.createElement("li");
  let deleteButton = document.createElement("button");
  let editButton = document.createElement("button");
  let saveButton = document.createElement("button");
  let div = document.createElement("div");
  let input = document.createElement("input");

  deleteButton.setAttribute("id", "delete-me");
  deleteButton.classList.add("button");
  editButton.setAttribute("id", "edit-me");
  editButton.classList.add("button");
  saveButton.setAttribute("id", "save-me");
  saveButton.classList.add("button");
  div.classList.add("some-item");

  input.setAttribute("placeholder", "Enter new item");
  deleteButton.textContent = "delete";
  editButton.textContent = "edit";
  saveButton.textContent = "Save";
  li.textContent = item.value;
  item.value = "";

  const saveMe = (e) => {
    li.textContent = input.value;
    div.removeChild(input);
    div.removeChild(saveButton);

    div.appendChild(editButton);
    div.appendChild(deleteButton);
    li.appendChild(div);
  };

  const editMe = (e) => {
    const textNodes = Array.from(li.childNodes).filter(
      (node) => node.nodeType === Node.TEXT_NODE
    );
    const prevText = textNodes.map((node) => node.textContent.trim()).join("");

    item.value = "";
    input.value = prevText;
    input.focus();
    input.select();
    div.appendChild(input);
    div.appendChild(saveButton).addEventListener("click", saveMe);
  };
  const deleteMe = (e) => {
    ul.removeChild(li);
  };

  div.appendChild(editButton).addEventListener("click", editMe);
  div.appendChild(deleteButton).addEventListener("click", deleteMe);
  li.appendChild(div);
  ul.appendChild(li).appendChild(div);

  editButton.addEventListener("click", editMe);

  div.style.display = "inline";
};

button.addEventListener("click", addItem);

function load() {
  item.focus();
}
