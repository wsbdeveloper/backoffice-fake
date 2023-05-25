// Lista de Regex separados com as partes:
export const regex = {
    telefone: /\(?(?<part1>\d{2})\)?(?<part2>\d{4,5})\-?(?<part3>\d{4})/,
    email: /(?<part1>\w{2,})\@(?<part2>\w{1,})\.(?<part3>[a-zA-Z]{3})(\.(?<part4>[a-zA-Z]{2}))?/,
    cep: /(?<part1>\d{5})\-?(?<part2>\d{3})/,
    date: /(?<part1>\d{2})\/?(?<part2>\d{2})\/?(?<part3>\d{4})/,
    rg: /(?<part1>\d{2})\.?(?<part2>\d{3})\.?(?<part3>\d{3})\-?(?<part5>\d{1})/,
    cpf: /(?<part1>\d{3})\.?(?<part2>\d{3})\.?(?<part3>\d{3})\-?(?<part4>\d{2})/,
    cnpj: /(?<part1>\d{2})\.?(?<part2>\d{3})\.?(?<part3>\d{3})\/?(?<part4>\d{4})\-?(?<part5>\d{2})/,
    mmaa: /(?<part1>\d{2}(\/)?)(?<part2>\d{2})/,
    cardNumber: /(?<part1>\d{4})(?<part2>\s)?(?<part3>\d{4})(?<part4>\s)?(?<part5>\d{4})(?<part6>\s)?(?<part7>\d{4})/,
    cnpj: /(?<part1>\d{2}).?(?<part2>\d{3}).?(?<part3>\d{3})\/?(?<part4>\d{4})-?(?<part5>\d{2})/
}

export const maskPhone = (item) => {
    return item.replace(/\D/g, '').replace(/(\d{2})(\d)/, '($1) $2').replace(/(\d{5})(\d{4})/, '$1-$2').replace(/(-\d{4})\d+?$/, '$1');
};

export const maskCep = (item) => {
    const regClearCaracter = /[a-zA-Z]{1,}/g;
    return item.replace(regClearCaracter,"").replace(regex.cep, "$1-$2");
}
export const maskName = (item) => {
    const regClearNumber = /[0-9]{1,}/g;
    return item.replace(regClearNumber, "");
}

export const maskDate = (item) => {
    const regClearCaracter = /[a-zA-Z]{1,}/g;
    return item.replace(regClearCaracter, "").replace(regex.date, "$1/$2/$3");
}

export const maskRg = (item) => {
    const regClearCaracter = /[a-zA-Z]{1,}/g;
    return item.replace(regClearCaracter, "").replace(regex.rg, "$1.$2.$3-$4");
}

export const maskCpf = (item) => {
    const regClearCaracter = /[a-zA-Z]{1,}/g;
    return item.replace(regClearCaracter, "").replace(regex.cpf, "$1.$2.$3-$4");
}

export const maskCardCVV = (item) => {
    const regClearCaracter = /[a-zA-Z]{1,}/g;
    return item.replace(regClearCaracter, "");
}

export const maskCardMMAA = (item) => {
    const regClearCaracter = /[a-zA-Z]{1,}/g;
    return item.replace(regClearCaracter, "").replace(regex.mmaa, "$1/$3");
}

export const maskCardNumber = (item) => {
    const regClearCaracter = /[a-zA-Z]{1,}/g;
    return item.replace(regClearCaracter, "").replace(regex.cardNumber, "$1 $3 $5 $7");
}

export const maskCNPJ = (item) => {
    const regClearCaracter = /[a-zA-Z]{1,}/g;
    return item.replace(regClearCaracter, "").replace(regex.cnpj, "$1.$2.$3/$4-$5");
}