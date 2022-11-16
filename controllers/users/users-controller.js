import people from "./users.js";
let users = people;

const UserController = (app) => {
  app.get("/api/users", findUsers);
};

const findUsers = (req, res) => {
  const type = req.query.type;
  if (type) {
    const usersOfType = users.filter((u) => u.type === type);
    res.json(usersOfType);
    return;
  }
  res.json(users);
};

export default UserController;
