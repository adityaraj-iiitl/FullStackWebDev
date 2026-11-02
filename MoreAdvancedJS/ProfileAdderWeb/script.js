const form = document.querySelector("#profile-form");
const username = document.querySelector("#profile-name");
const bio = document.querySelector("#profile-bio");
const role = document.querySelector("#profile-role");
const url = document.querySelector("#profile-photo");
const cont = document.querySelector("#profile-list");
const profileCount = document.querySelector("#profile-count");

const obj={
  user: [],
  init: function () {
    form.addEventListener("submit", this.submitForm.bind(this));
  },
  submitForm: function (event) {
    event.preventDefault();
    this.addUser();
  },
  addUser: function () {
    this.user.push({
      username: username.value.trim(),
      bio: bio.value.trim(),
      role: role.value.trim(),
      photo: url.value.trim(),
    });

    this.renderUi();
    form.reset();
  },
  renderUi: function () {
    cont.replaceChildren();
    profileCount.textContent = `${this.user.length} ${
      this.user.length === 1 ? "profile" : "profiles"
    }`;
    profileCount.classList.remove("hidden");

    this.user.forEach(function (user) {
      const card = document.createElement("article");
      card.className =
        "overflow-hidden rounded-2xl border border-slate-200 bg-white p-5 shadow-sm";

      const header = document.createElement("div");
      header.className = "flex items-center gap-4";

      const avatar = document.createElement("div");
      avatar.className =
        "grid h-14 w-14 shrink-0 place-items-center overflow-hidden rounded-full bg-emerald-100 font-bold text-emerald-800";

      if (user.photo) {
        const image = document.createElement("img");
        image.src = user.photo;
        image.alt = `${user.username}'s profile photo`;
        image.className = "h-full w-full object-cover";
        avatar.append(image);
      } else {
        avatar.textContent = user.username.charAt(0).toUpperCase();
      }

      const details = document.createElement("div");
      details.className = "min-w-0";

      const name = document.createElement("h3");
      name.className = "truncate font-display text-lg font-bold text-slate-900";
      name.textContent = user.username;

      const userRole = document.createElement("p");
      userRole.className = "mt-1 text-sm font-medium text-emerald-700";
      userRole.textContent = user.role;

      details.append(name, userRole);
      header.append(avatar, details);

      const userBio = document.createElement("p");
      userBio.className = "mt-4 text-sm leading-6 text-slate-600";
      userBio.textContent = user.bio;

      card.append(header, userBio);
      cont.append(card);
    });
  },
};

obj.init();