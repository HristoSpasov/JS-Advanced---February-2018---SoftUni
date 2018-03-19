function solve() {
    class Post {
        constructor(title, content) {
            this.title = title;
            this.content = content;
        }

        toString() {
            return `Post: ${this.title}\nContent: ${this.content}`;
        }
    }

    class SocialMediaPost extends Post {
        constructor(title, content, likes, dislikes) {
            super(title, content);
            this.likes = likes;
            this.dislikes = dislikes;
            this._comments = [];
        }

        addComment(comment) {
            this._comments.push(comment);
        }

        toString() {
            let result = super.toString() + '\n';
            result += `Rating: ${this.likes - this.dislikes}`;

            if (this._comments.length > 0) {
                result += `\nComments:`;

                this._comments.forEach(e => {
                    result += `\n * ${e}`;
                });
            }

            return result;
        }
    }

    class BlogPost extends Post {
        constructor(title, content, views) {
            super(title, content);
            this._views = views;
        }

        view() {
            this._views++;
            return this;
        }

        toString() {
            let result = super.toString() + '\n';
            result += `Views: ${this._views}`;

            return result;
        }
    }

    return {
        Post,
        SocialMediaPost,
        BlogPost
    }
}