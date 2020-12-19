'use strict';

module.exports = {
    up: async(queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('Usuarios', [{
            nombre: 'carlos',
            email: 'prueba@gmail.com',
            password: '$2y$08$XK/9K0nn7.t4vNIDkToEOOC1Y1xlevB98w0VE16v83.fSGiVdSDU.',
            rol: 'Administrador',
            createdAt: new Date(),
            updatedAt: new Date()
        }]);
    },

    down: async(queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('Usuarios', null, {});

    }
};