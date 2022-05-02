function getAdmins(map) {
  let admins = [];
  for ([key, value] of map) {
    if (value === "Admin") {
      admins.push(key);
    }
  }
  return admins;
}

const usuarios = new Map();

usuarios.set("Rianzinho", "Admin");
usuarios.set("Speddy", "Admin");
usuarios.set("Jarome", "User");
usuarios.set("Jay", "Admin");

console.log(getAdmins(usuarios));
