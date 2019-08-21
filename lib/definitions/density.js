var metric;

metric = {
    'kg/m3': {
        name: {
            singular: 'Kilogram per cubic meter'
            , plural: 'Kilograms per cubic meter'
        }
        , to_anchor: 1
    },
    'g/cm3': {
        name: {
            singular: 'Gram per cubic centimeter'
            , plural: 'Grams per cubic centimeter'
        }
        , to_anchor: 1000
    }
};

module.exports = {
    metric: metric,
    _anchors: {
        metric: {
            unit: 'kg/m3'
        }
    }
};
