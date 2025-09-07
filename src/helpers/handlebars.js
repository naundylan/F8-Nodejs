const Handlebars = require('handlebars');

module.exports = {
    sum: (a, b) => a + b,
    sortable: (field, sort) => {
        const icons = {
            default: 'fa-solid fa-sort',
            asc: 'fa-solid fa-sort-up',
            desc: 'fa-solid fa-sort-down',
        }
        const types = {
            default: 'desc',
            asc: 'desc',
            desc: 'asc',
        }

        const type = types[sort.type]
        const icon = icons[sort.type]

        const href = Handlebars.escapeExpression(`?_sort&column=${field}&type=${type}`);

        const result = `<a href="${href}"><span class="${icon}">d</span></a>`;
        return new Handlebars.SafeString(result);
    }
}