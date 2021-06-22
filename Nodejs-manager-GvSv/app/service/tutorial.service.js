import db from '../models';
const { Op } = db.Sequelize;

export function companies(query, order, offset, limit, tutorials) {
    const { search } = query;
    let where = {};
    if (search && search.length) {
        where = {
            name: {
                [Op.like]: `%${search}%`
            }
        };
    }
    return db.tutorials.findAndCountAll({
        order,
        where,
        offset,
        limit
    });
}