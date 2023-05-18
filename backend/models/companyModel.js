const db = require('./connection');

const create = async (data) => {
  try {
    const newCompany = {
      "company_name": data.name,
      "company_street": data.address.street,
      "company_street_number": data.address.street_number,
      "company_neighborhood": data.address.neighborhood,
      "company_city": data.address.city,
      "company_state": data.address.state,
      "createdAt": Date.now(),
      "updatedAt": Date.now()
    }
    await db.create(newCompany);
  } catch (error) {
    throw error;
  }
}

const getAll = async () => {
  try {
    const companies = [];
    const results = await db.findAll();
    results.forEach((value, i) => {
      const company = {
        "id": value.dataValues.company_id,
        "name": value.dataValues.company_name,
        "address": {
          "street": value.dataValues.company_street,  
          "street_number": value.dataValues.company_street_number,  
          "neighborhood": value.dataValues.company_neighborhood,  
          "city": value.dataValues.company_city,  
          "state": value.dataValues.company_state  
        }
      }
      companies.push(company);
    });
    return companies;
  } catch (error) {
    throw error;
  }
}

const edit = async (data, id) => {
  try {
    const editCompany = {
      "company_name": data.name,
      "company_street": (data.address && data.address.street) ? data.address.street : undefined,
      "company_street_number": (data.address && data.address.street_number) ? data.address.street_number : undefined,
      "company_neighborhood": (data.address && data.address.neighborhood) ? data.address.neighborhood : undefined, 
      "company_city": (data.address && data.address.city) ? data.address.city : undefined,
      "company_state": (data.address && data.address.state) ? data.address.state : undefined,
      "updatedAt": Date.now()
    }
    await db.update(editCompany, { where: { company_id: id }});
  } catch (error) {
    throw error;
  }
}

const eliminate = async (id) => {
  try {
    await db.destroy({ where: { company_id: id }});
  } catch (error) {
    throw error;
  }
}

module.exports = {
  create,
  getAll,
  edit,
  eliminate
}
