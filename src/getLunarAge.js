function getLunarAge(yyyy, mm, dd) {
    const date = new Date()
    const today = date.getFullYear();
    let lunarAge = 0;

    if(typeof yyyy === 'number' && typeof mm === 'number' && typeof dd === 'number'){

        if(yyyy.toString().length !== 4) throw new Error('Invalid input, please enter correct year.');
        if(mm.toString().length > 2 || mm > 12 || mm < 1) throw new Error('Invalid input, please enter correct month.');
        if(dd.toString().length > 2) throw new Error('Invalid input, please enter correct day.');
        
        if(mm === 12 && dd === 31){
            lunarAge = 1;
        }

        lunarAge += (today - yyyy) + 1; 
    } else {
        throw new Error('Invalid input, please enter correct numbers.');
    }

return `Your lunar age is ${lunarAge} years old 🌖`;

}
module.exports = { getLunarAge }