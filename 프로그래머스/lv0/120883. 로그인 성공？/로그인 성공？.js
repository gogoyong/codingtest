function solution(id_pw, db) {
    let answer = ''
    for (i=0; i<db.length; i++) {
        if (id_pw[0] === db[i][0] && id_pw[1] === db[i][1]) {
            answer = 'login'
            break;
        } else if (id_pw[0] === db[i][0] && id_pw[1] !== db[i][1]) {
            answer = 'wrong pw'
            break;
        } else answer = 'fail'
    } return answer
}