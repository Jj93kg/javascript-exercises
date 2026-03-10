const removeFromArray = function(array, ...args) {
    let result = array;
    for (let i = 0; i < args.length; i++) 
        {
            number_index = result.indexOf(args[i]);
            while (number_index !== -1)
                {
                    result.splice(number_index, 1);
                    number_index = result.indexOf(args[i]);
                }
        }
    return result;
};

// Do not edit below this line
module.exports = removeFromArray;
