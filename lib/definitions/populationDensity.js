var metric, imperial;

metric = {
    'pop/km2': {
        name: {
            singular: 'Population per square kilometer'
        }
        , to_anchor: 1
    }
};

imperial = {
    'pop/mi2': {
        name: {
            singular: 'Population per square mile'
        }
        , to_anchor: 1
    }
};

module.exports = {
    metric: metric,
    imperial: imperial,
    _anchors: {
        metric: {
            unit: 'pop/km2',
            ratio: 1 / 2.58999
        },
        imperial: {
            unit: 'pop/mi2',
            ratio: 2.58999
        }
    }
};
