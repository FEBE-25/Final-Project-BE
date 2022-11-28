const { pesanLesValidation } = require("../config/validation");
const PesanLes = require("../models/pesanLes");

module.exports = {
  getAllPesanLes: async (req, res) => {
    try {
      const pesanLes = await PesanLes.find().populate({path:'teacherId', select: ['nama']}).populate({path:'userId', select: ['name']});;

      res.json({
        message: "succes get data",
        data: pesanLes,
      });
    } catch (error) {
      console.log(error);
    }
  },

  getPesanLesByID: async (req, res) => {
    const pesanLes = await PesanLes.findById(req.params.id)
      .then((pesanLesFound) => {
        if (!pesanLesFound) {
          return res.status(404).end();
        }
        return res.status(200).json(pesanLesFound);
      })
      .catch((err) => next(err));
  },

  addPesanLes: (req, res) => {
    const { error } = pesanLesValidation(req.body);
    if (error)
      return res.status(400).json({
        status: res.statusCode,
        message: error.details[0].message,
      });

    const data = req.body;
    const pesanLes = new PesanLes(data);
    try {
      pesanLes.save();

      res.json({
        message: "pesanan dibuat!!!",
      });
    } catch (error) {
      res.status(400).json({
        status: res.statusCode,
        message: "Gagal Membuat Pesanan ",
      });
    }
  },

  deletePesanLesByID: async (req, res) => {
    const pesanLes = await PesanLes.findByIdAndDelete(req.params.id)
      .then((doc) => {
        if (!doc) {
          return res.status(404).end();
        }
        return res.status(200).json({
          doc,
          message : "Pesanan telah dihapus "
          
        });
      })
      .catch((err) => next(err));
  },

  updatePesanLesByID: async (req, res) => {
    var conditions = { _id: req.params.id };

    const pesanLes = await PesanLes.updateOne(conditions, req.body)
      .then((doc) => {
        if (!doc) {
          return res.status(404).end();
        }
        return res.status(200).json({
          doc,
          message: "pesanan telah diedit",
        });
      })
      .catch((err) => next(err));
  },
  deleteAllPesanLes: async (req, res) => {},
};
