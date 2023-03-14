const users =[{
    mobil:'Suzuki carry',
    bensin:'pertamax',
    pintu: 2
},{
    mobil: 'Tesla',
    bensin:'listrik',
    pintu: 2
},{
    mobil:'Toyota Rush',
    bensin:'pertalite',
    pintu: 4
}];

let a = parseInt(prompt("banyak pintu mobil", ""))
const usersPintu = users.filter((user) => user.pintu == a);
console.log(usersPintu);