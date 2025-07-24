module.exports = app => {
  const tasks = require("../controllers/task.controller.js");
  
  var router = require("express").Router();
  
  router.post("/", tasks.create);
  
  router.get("/", tasks.findAll);
  
  router.get("/:taskId", tasks.findOne);
  
  router.put("/:taskId", tasks.update);
  
  router.delete("/:taskId", tasks.delete);
  
  app.use('/api/tasks', router);
};