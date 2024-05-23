import React from 'react';
import D3Component from './D3Component';

function App() {
    const data1 = [

        {
            name: 'A',
            level: 0,
            children: ['AB1', 'AB2'],
            partner: 'B'
        },
        {
            name: 'C',
            level: 0,
            children: ['CD1', 'CD2', 'CD3'],
            partner: 'D'
        },
        {name: 'AB1', level: 1, partner: 'CD1', children: ['AB1CD1', 'AB1CD2', 'AB1CD3']},
        {name: 'AB2', level: 1, partner: 'E'},
        {name: 'CD1', level: 1},
        {name: 'CD2', level: 1, partner: 'F'},
        {name: 'CD3', level: 1},
        {name: 'AB1CD1', level: 2, partner: 'M', children: ['AB1CD1M1', 'AB1CD1M2']},
        {name: 'AB1CD2', level: 2},
        {name: 'AB1CD3', level: 2},
        {name: 'AB1CD1M1', level: 3, partner: 'N', children: ['AB1CD1M1N1', 'AB1CD1M1N2', 'AB1CD1M1N3', 'AB1CD1M1N4']},
        {name: 'AB1CD1M1', level: 3},
        {name: 'AB1CD1M1N1', level: 4},
        {name: 'AB1CD1M1N2', level: 4},
        {name: 'AB1CD1M1N3', level: 4},
        {name: 'AB1CD1M1N4', level: 4},
    ];
    return <D3Component data={data1}/>;
}

export default App;