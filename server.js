"use strict";
const express = require("express");
const app = require("express")();
const cors = require("cors");
const fs = require("file-system");
const bodyParser = require("body-parser");
const uuid = require("uuidv4");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

function getDbData() {
  const tasks = fs.readFileSync("./tasks.json");
  return JSON.parse(tasks);
}

let baseUrl = "http://localhost";

/**
 * GET /tasks
 *
 * Return the list of tasks with status code 200.
 */
app.get(`/tasks`, (req, res) => {
  const lists = getDbData();
  return res.status(200).json({ lists });
});

/**
 * PUT /task/update/
 */
app.put("/task/update", (req, res) => {
  const { data, listName } = req.body;
  const todoListData = getDbData();
  const cardArr = todoListData[listName].cards;

  todoListData[listName].cards = cardArr.map(card => {
    if (card.id === data.id) {
      return data;
    }
    return card;
  });
  const todDdata = JSON.stringify(todoListData);
  fs.writeFileSync("./tasks.json", todDdata);
  return res.status(201).json({
    message: "Resource created"
  });
});

/**
 * POST /task/create/
 */
app.post("/task/create", (req, res) => {
  const { listName, data } = req.body;
  const id = uuid();

  const task = {
    id,
    ...data
  };
  const todoListData = getDbData();

  todoListData[listName].cards.push(task);

  const dbData = JSON.stringify(todoListData);
  fs.writeFileSync("./tasks.json", dbData);

  return res.status(201).json({
    data: { ...task },
    message: "Resource created"
  });
});

/**
 * DELETE /task/delete/:id
 */
app.delete("/task/delete/:listName/:cardId", (req, res) => {
  const { listName, cardId } = req.params;
  const todoListData = getDbData();

  todoListData[listName].cards = todoListData[listName].cards.filter(
    card => card.id !== cardId
  );

  const dbData = JSON.stringify(todoListData);

  fs.writeFileSync("./tasks.json", dbData);
  return res.status(200).json({
    message: "Updated successfully"
  });
});

/**
 * POST task/updateLists
 */
app.post("/task/updateLists", (req, res) => {
  const { lists } = req.body;
  const data = JSON.stringify(lists);

  fs.writeFileSync("./tasks.json", data);

  return res.status(201).json({
    message: "Resource created"
  });
});

// Production mode settngs for Heroku
if (process.env.NODE_ENV === "production") {
  baseUrl = "https://travix-faran-todo.herokuapp.com";
  app.use(express.static("client/build"));
}
const PORT = process.env.PORT || 9001;
app.listen(PORT, () => {
  process.stdout.write(`the server is available on ${baseUrl}:${PORT}/\n`);
});
