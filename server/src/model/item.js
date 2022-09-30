const mongo = require("mongoose");

const itemSchema = mongo.Schema({
  value1: {
    type: String,
    required: true,
  },
  value2: {
    type: String,
    required: true,
  },
  value3: {
    type: String,
    required: true,
  },
  value4: {
    type: String,
    required: true,
  },
});

mongo.model("Item", itemSchema);
