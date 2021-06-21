import { Avengers } from '../interfaces/Iavengers';


const AvengersMembers: Avengers[] = [
{
name: 'Thor',
alias: 'Thor Odinson',
age: 41,
currentMember: true,
memberSince: new Date('3/27/1999'),
powers: ['God']
},
{
name: 'SpiderMan',
alias: 'Peter Parker',
age: 16,
currentMember: true,
memberSince: new Date('3/27/1999'),
powers: ['Spider Powers']
},
{
name: 'Black Panther',
alias: 'Tchalla',
age: 27,
currentMember: true,
memberSince: new Date('3/27/1999'),
powers: ['Black Panther Power']
},
{
name: 'Captain America',
alias: 'Steve Rodgers',
age: 70,
currentMember: false,
memberSince: new Date('3/27/1999'),
powers: ['Super Serume']
},
{
name: 'Quick Silver',
alias: 'Pietro Maximoff',
age: 29,
currentMember: false,
memberSince: new Date('3/27/1999'),
powers: ['Speed']
},
{
name: 'Scarlet Witch',
alias: 'Wanda Maximoff',
age: 29,
currentMember: true,
memberSince: new Date('3/27/1999'),
powers: ['Energy Manuplation']
},
{
name: 'The Hulk',
alias: 'Bruce Banner',
age: 35,
currentMember: true,
memberSince: new Date('3/27/1999'),
powers: ['Strength']
},
{
name: 'Ant Man',
alias: 'Henry Pym',
age: 32,
currentMember: true,
memberSince: new Date('3/27/1999'),
powers: ['Enlargment', 'Shrinking']
}
];

export {AvengersMembers};