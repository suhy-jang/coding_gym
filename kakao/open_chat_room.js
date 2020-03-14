// https://programmers.co.kr/learn/courses/30/lessons/42888?language=javascript

function solution(record) {
    const answer = [];
    const map = {};
    record.forEach((msg, i) => {
        const [q, uid, name] = msg.split(' ');
        if (q === "Enter" || q === "Change") {
            map[uid] = name;
        }
    });
    record.forEach((msg) => {
        const [q, uid, name] = msg.split(' ');
        if (q === "Enter") {
            answer.push(`${map[uid]}님이 들어왔습니다.`);
        } else if (q === "Leave") {
            answer.push(`${map[uid]}님이 나갔습니다.`);
        }
    })
    return answer;
}
