function countBs(str){
    return countChar(str,"B");
}
function countChar(str, char){
    let counter = 0;
    for(i=0;i<str.length;i++){
        if (str[i] === char)
            counter++;
    }
    return counter;    
}

console.log(countBs("kjdfsakladfsklJJBAkdkaklfadsklBLJKDKDFKLdkasdkldfk jadsjklasdklaef asd a fklasdflasjd flkjasdfabbb b b b jaklblajlkflkabbbklba b bB KAJFASDFB", "b"));

