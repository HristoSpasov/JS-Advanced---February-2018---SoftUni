function solve(action){
    let current = this;
    let obj = (function() {
        function upvote(){
            current.upvotes++;
        }

        function downvote() {
            current.downvotes++;
        }

        function score() {
            let totalVotes = current.upvotes + current.downvotes;
            let isObfuscated = totalVotes > 50;

            let rating;

            if (current.upvotes / totalVotes * 100 > 66 && totalVotes >= 10){
                rating = 'hot';
            } else if ((current.upvotes - current.downvotes >= 0 && totalVotes >= 10) && (current.upvotes > 100 || current.downvotes > 100)){
                rating = 'controversial';
            } else if ((current.upvotes - current.downvotes < 0 && totalVotes >= 10)){
                rating = 'unpopular';
            } else {
                rating = 'new';
            }

            if (isObfuscated){
                let obfNumber = Math.ceil(Math.max(current.upvotes, current.downvotes) * 25 / 100);
                return [current.upvotes + obfNumber, current.downvotes + obfNumber, current.upvotes - current.downvotes, rating];
            } else {
                return [current.upvotes, current.downvotes, current.upvotes - current.downvotes, rating];
            }

        }

        return {upvote, downvote, score};
    })();

    return obj[action]();
}

let post = {
    id: '3',
    author: 'emil',
    content: 'wazaaaaa',
    upvotes: 100,
    downvotes: 100
};

solve.call(post, 'upvote');
solve.call(post, 'downvote');
console.log(solve.call(post, 'score'));