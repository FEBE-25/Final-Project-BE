const { pengajarValidation } = require("../config/validation");
const Pengajar = require("../models/pengajar");

module.exports = {
  getAllPengajar: async (req, res) => {
    try {
      const pengajar = await Pengajar.find();

      res.json({
        message: "success get data",
        data: pengajar,
      });
    } catch (error) {
      console.log(error);
    }
  },

  getPengajarByID: async (req, res) => {
    const pengajar = await Pengajar.findById(req.params.id)
      .then((pengajarFound) => {
        if (!pengajarFound) {
          return res.status(404).end();
        }
        return res.status(200).json(pengajarFound);
      })
      .catch((error) => next(err));
  },

  addPengajar: (req, res) => {
    const { error } = pengajarValidation(req.body);
    if (error)
      return res.status(400).json({
        status: res.statusCode,
        message: error.details[0].message,
      });

    const data = req.body;
    const pengajar = new Pengajar(data);

    try {
      pengajar.save();

      res.json({
        message: "penajar berhasil ditambah!",
      });
    } catch (error) {
      res.status(400).json({
        status: res.statusCode,
        message: "gagal menambah pengajar",
      });
    }
  },

  deletePengajarByID: async (req, res) => {
    const pengajar = await Pengajar.findByIdAndDelete(req.params.id)
      .then((doc) => {
        if (!doc) {
          return res.status(404).end();
        }
        return res.status(200).json(doc);
      })
      .catch((err) => next(err));
  },

  updatePengajarByID: async (req, res) => {
    var conditions = { _id: req.params.id };

    const pengajar = await Pengajar.updateOne(conditions, req.body)
      .then((doc) => {
        if (!doc) {
          return res.status(404).end();
        }

        return res.status(200).json({
          doc,
          message: "pengajar berhasil di-update!",
        });
      })
      .catch((err) => next(err));
  },
  deleteAllPengajar: async (req, res) => {
    //   const allPengajar = await Pengajar.find()
    //   const pengajar = await Pengajar.findByIdAndDelete(req.params.id)
    //     .then((doc) => {
    //       if (!doc) {
    //         return res.status(404).end();
    //       }
    //       return res.status(200).json(doc);
    //     })
    //     .catch((err) => next(err));
  },
};
