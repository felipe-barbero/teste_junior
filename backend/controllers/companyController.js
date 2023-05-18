const companyModel = require('../models/companyModel');
 
const create = async (req, res) => {
  try {
    await companyModel.create(req.body);
    res.status(201).json({ success: true, message: "Empresa cadastrada com sucesso"});
  } catch (error) {
    res.status(400).json(error);
  }
}

const getAll = async (req, res) => {
  try {
    const companies = await companyModel.getAll();
    res.status(200).json({ success: true, companies});
  } catch (error) {
    res.status(400).json(error);
  }
}

const edit = async (req, res) => {
  try {
    await companyModel.edit(req.body, req.params.id);
    res.status(200).json({ success: true, message: "Empresa editada com sucesso"});
  } catch (error) {
    res.status(400).json(error);
  }
}

const eliminate = async (req, res) => {
  try {
    await companyModel.eliminate(req.params.id);
    res.status(200).json({ success: true, message: "Empresa excluída com sucesso"});
  } catch (error) {
    res.status(400).json(error);
  }
}

module.exports = {
  create,
  getAll,
  edit,
  eliminate
}