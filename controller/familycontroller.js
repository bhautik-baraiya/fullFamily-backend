const family = require("../model/family");

exports.AddFamily = async (req, res) => {
  try {
    const { name, age, contact, relation } = req.body;
    if ((!name || !age || !contact || !relation)) {
      res.json({
        message: "Value is required",
      });

    } else {
      const familyData = await family.create(req.body);
      res.json({
        message: "User created successfully",
        data: familyData,
      });
    }
  } catch (err) {
    res.json({
      message: err,
    });
  }
};

exports.getFamily = async (req, res) => {
  try {
    var getLstfamily = await family.find();
    res.json({
      message: "user get successful",
      data: getLstfamily,
    });
  } catch (err) {
    res.json({
      message: err,
    });
  }
};

exports.delFamily = async (req, res) => {
  try {
    const delUser = await family.findByIdAndDelete(req.params.id);
    console.log(delUser);
  } catch (error) {
    console.log(error);
  }
};

exports.editFamily = async (req, res) => {
  try {
    console.log(req.body)
    const ediUser = await family.findByIdAndUpdate(req.params.id, req.body, { new: true });
    console.log(ediUser);
    res.json({
      message: 'Family updated'
    })

  } catch (error) {
    console.log(error);
  }
};