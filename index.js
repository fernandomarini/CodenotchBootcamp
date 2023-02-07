function suma(op1,op2,op3=0){
    result = op1 + op2 + op3;
    return result
};

function resta(op1,op2=0){
    result = op1 - op2;
    return result
};

function producto(op1,op2=0){
    result = op1 * op2;
    return result
};

function division(op1,op2=0){
    result = op1 / op2;
    return result
};

function cuadradoNum ( n ){
    result = n * n;
    return result
};



module.exports = {suma,resta,producto,division,cuadradoNum}