const sequelize = require('../config/connection');
const { Project } = require('../models');
const fs = require('fs');

const projectData = require('./projectData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  for (const project of projectData) {
    console.log(project.img_location);
    await Project.create({
      ...project,
    });
  }

  process.exit(0);
};

seedDatabase();
