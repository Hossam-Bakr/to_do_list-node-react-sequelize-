const { sequelize } = require('../db');
const { DataTypes } = require('sequelize');

const Task = sequelize.define('Task', {
    content: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: true,
            max: 150,
        }
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: true,
    },
    is_complete: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
        validate: {
            isValidBoolean(value) {
                if (value !== true && value !== false) {
                    throw new Error('is_complete must be either true or false');
                }
            }
        }
    }
});

module.exports = Task;

