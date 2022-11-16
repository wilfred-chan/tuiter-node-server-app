import people from "./users.js";
let users = people;

const UserController = (app) => {
  app.get("/api/users", findUsers);
};

const findUsers = (req, res) => {
  res.json(users);
};

export default UserController;
